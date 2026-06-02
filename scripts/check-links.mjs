#!/usr/bin/env node
/**
 * Sitemap link-checker.
 *
 * Crawls every URL listed in /sitemap.xml (all locales), then follows and
 * checks every internal <a href> link found on each of those pages.
 * Flags any link that is broken (4xx/5xx, network error) or redirecting (3xx).
 *
 * Usage:
 *   node scripts/check-links.mjs [baseUrl]
 *   BASE_URL=https://vendoratravel.eu node scripts/check-links.mjs
 *
 * Exits with code 1 if any broken or redirecting links are found.
 */

const BASE_URL = (process.argv[2] || process.env.BASE_URL || "https://vendoratravel.eu").replace(/\/$/, "");
const TIMEOUT_MS = 15000;
const CONCURRENCY = 8;

const origin = new URL(BASE_URL).origin;

// Keep in sync with src/i18n/seo.ts (EN is the default, served at the root).
const LOCALES = ["en", "de", "fr", "nl", "pl", "es", "it", "pt"];
const DEFAULT_LOCALE = "en";

/** Derive the locale of a URL from its first path segment (root = default). */
function localeOf(url) {
  try {
    const seg = new URL(url).pathname.split("/").filter(Boolean)[0];
    return LOCALES.includes(seg) ? seg : DEFAULT_LOCALE;
  } catch {
    return DEFAULT_LOCALE;
  }
}

async function fetchWithTimeout(url, opts = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    return await fetch(url, { redirect: "manual", signal: controller.signal, ...opts });
  } finally {
    clearTimeout(timer);
  }
}

async function getSitemapUrls() {
  const res = await fetchWithTimeout(`${BASE_URL}/sitemap.xml`, { redirect: "follow" });
  if (!res.ok) throw new Error(`Could not fetch sitemap.xml (status ${res.status})`);
  const xml = await res.text();
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  return [...new Set(locs)];
}

function extractInternalLinks(html, pageUrl) {
  const hrefs = [...html.matchAll(/<a\b[^>]*\bhref=["']([^"'#]+)["']/gi)].map((m) => m[1]);
  const out = new Set();
  for (const href of hrefs) {
    if (href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("javascript:")) continue;
    try {
      const abs = new URL(href, pageUrl);
      if (abs.origin === origin) out.add(abs.href.split("#")[0]);
    } catch {
      /* ignore malformed hrefs */
    }
  }
  return [...out];
}


async function checkUrl(url) {
  try {
    const res = await fetchWithTimeout(url);
    const status = res.status;
    if (status >= 300 && status < 400) {
      return { url, status, type: "redirect", location: res.headers.get("location") || "" };
    }
    if (status >= 400) return { url, status, type: "broken" };
    return { url, status, type: "ok" };
  } catch (err) {
    return { url, status: 0, type: "broken", error: err.message };
  }
}

/**
 * Follow the full redirect chain and verify the destination's locale still
 * matches the requested locale (e.g. /de must not land on /en).
 */
async function checkLocaleConsistency(url) {
  const expected = localeOf(url);
  try {
    const res = await fetchWithTimeout(url, { redirect: "follow" });
    const finalUrl = res.url || url;
    const actual = localeOf(finalUrl);
    if (actual !== expected) {
      return { url, finalUrl, expected, actual, mismatch: true };
    }
    return { url, finalUrl, expected, actual, mismatch: false };
  } catch {
    return null; // unreachable URLs are already flagged as broken elsewhere
  }
}

async function mapLimit(items, limit, fn) {
  const results = [];
  let i = 0;
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (i < items.length) {
      const idx = i++;
      results[idx] = await fn(items[idx]);
    }
  });
  await Promise.all(workers);
  return results;
}

function generateReports(broken, redirects, localeMismatches, ok) {
  const timestamp = new Date().toISOString();
  const outDir = new URL("../reports/", import.meta.url).pathname;
  if (!existsSync(outDir)) {
    mkdirSync(outDir, { recursive: true });
  }

  // --- JSON report ---
  const jsonReport = {
    generatedAt: timestamp,
    baseUrl: BASE_URL,
    summary: {
      ok: ok.length,
      redirects: redirects.length,
      broken: broken.length,
      localeMismatches: localeMismatches.length,
    },
    broken: broken.map((r) => ({
      url: r.url,
      status: r.status || 0,
      error: r.error || null,
    })),
    redirects: redirects.map((r) => ({
      url: r.url,
      status: r.status,
      location: r.location,
    })),
    localeMismatches: localeMismatches.map((r) => ({
      url: r.url,
      finalUrl: r.finalUrl,
      expectedLocale: r.expected,
      actualLocale: r.actual,
    })),
  };
  const jsonPath = `${outDir}link-check-report-${timestamp.replace(/[:.]/g, "-")}.json`;
  writeFileSync(jsonPath, JSON.stringify(jsonReport, null, 2), "utf-8");

  // --- CSV report (single table with all issues) ---
  const csvLines = [
    "type,url,status,location_or_final_url,expected_locale,actual_locale,error",
  ];
  for (const r of broken) {
    csvLines.push(`broken,${csvEsc(r.url)},${r.status || 0},,,,"${csvEsc(r.error || "")}"`);
  }
  for (const r of redirects) {
    csvLines.push(`redirect,${csvEsc(r.url)},${r.status},${csvEsc(r.location)},,,`);
  }
  for (const r of localeMismatches) {
    csvLines.push(`locale_mismatch,${csvEsc(r.url)},,,${csvEsc(r.finalUrl)},${r.expected},${r.actual}`);
  }
  const csvPath = `${outDir}link-check-report-${timestamp.replace(/[:.]/g, "-")}.csv`;
  writeFileSync(csvPath, csvLines.join("\n") + "\n", "utf-8");

  return { jsonPath, csvPath };
}

function csvEsc(str) {
  if (!str) return "";
  const s = String(str).replace(/"/g, '""');
  return s.includes(",") || s.includes('"') || s.includes("\n") ? `"${s}"` : s;
}

async function main() {
  console.log(`🔎 Link-checker — base: ${BASE_URL}\n`);

  const sitemapUrls = await getSitemapUrls();
  console.log(`Found ${sitemapUrls.length} sitemap URLs (all locales).\n`);

  // 1. Check every sitemap URL and collect their HTML to crawl internal links.
  const toCheck = new Set(sitemapUrls);
  const pageResults = await mapLimit(sitemapUrls, CONCURRENCY, async (url) => {
    const result = await checkUrl(url);
    if (result.type === "ok") {
      try {
        const res = await fetchWithTimeout(url, { redirect: "follow" });
        const html = await res.text();
        for (const link of extractInternalLinks(html, url)) toCheck.add(link);
      } catch {
        /* page already flagged if unreachable */
      }
    }
    return result;
  });

  // 2. Check any additional internal links discovered while crawling.
  const extraLinks = [...toCheck].filter((u) => !sitemapUrls.includes(u));
  const linkResults = await mapLimit(extraLinks, CONCURRENCY, checkUrl);

  const all = [...pageResults, ...linkResults];
  const broken = all.filter((r) => r.type === "broken");
  const redirects = all.filter((r) => r.type === "redirect");
  const ok = all.filter((r) => r.type === "ok");

  // 3. Locale-consistency: follow redirects and verify the final URL keeps the
  //    requested locale (e.g. /de must not resolve to /en). Only locale-bearing
  //    URLs that are reachable are worth checking.
  const localeUrls = [...new Set([...sitemapUrls, ...extraLinks])].filter(
    (u) => !broken.some((b) => b.url === u),
  );
  const localeResults = (
    await mapLimit(localeUrls, CONCURRENCY, checkLocaleConsistency)
  ).filter(Boolean);
  const localeMismatches = localeResults.filter((r) => r.mismatch);

  console.log(`✅ OK:                ${ok.length}`);
  console.log(`↪️  Redirects:         ${redirects.length}`);
  console.log(`❌ Broken:            ${broken.length}`);
  console.log(`🌐 Locale mismatches: ${localeMismatches.length}\n`);

  if (redirects.length) {
    console.log("↪️  Redirecting links:");
    for (const r of redirects) console.log(`   ${r.status}  ${r.url}  →  ${r.location}`);
    console.log("");
  }
  if (broken.length) {
    console.log("❌ Broken links:");
    for (const r of broken) console.log(`   ${r.status || "ERR"}  ${r.url}${r.error ? `  (${r.error})` : ""}`);
    console.log("");
  }
  if (localeMismatches.length) {
    console.log("🌐 Locale mismatches after redirect:");
    for (const r of localeMismatches) {
      console.log(`   expected "${r.expected}" but got "${r.actual}"  ${r.url}  →  ${r.finalUrl}`);
    }
    console.log("");
  }

  // 4. Generate JSON + CSV reports
  const { jsonPath, csvPath } = generateReports(broken, redirects, localeMismatches, ok);
  console.log(`📄 JSON report saved to: ${jsonPath}`);
  console.log(`📄 CSV  report saved to: ${csvPath}\n`);

  if (broken.length || redirects.length || localeMismatches.length) {
    console.log("Done — issues found.");
    process.exit(1);
  }
  console.log("Done — all links healthy and locale-consistent. 🎉");
}


main().catch((err) => {
  console.error(`Fatal: ${err.message}`);
  process.exit(1);
});
