#!/usr/bin/env node
/**
 * Automated SEO tag verification.
 *
 * Crawls every URL in /sitemap.xml and verifies the per-locale SEO contract:
 *   - <html lang="xx"> matches the URL locale (SSR locale fix)
 *   - exactly one <link rel="canonical"> pointing at the page itself
 *   - hreflang alternates for all locales + x-default
 *   - a <title> and <meta name="description">
 *   - TravelAgency JSON-LD structured data
 *
 * Usage:
 *   node scripts/check-seo.mjs [baseUrl]
 *   BASE_URL=https://vendoratravel.eu node scripts/check-seo.mjs
 *
 * Exits with code 1 if any page fails a check. Writes JSON report to reports/.
 */

import { existsSync, mkdirSync, writeFileSync } from "node:fs";

const BASE_URL = (process.argv[2] || process.env.BASE_URL || "https://vendoratravel.eu").replace(/\/$/, "");
const TIMEOUT_MS = 15000;
const CONCURRENCY = 6;

const LOCALES = ["en", "de", "fr", "nl", "pl", "es", "it", "pt"];
const DEFAULT_LOCALE = "en";

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
    return await fetch(url, { redirect: "follow", signal: controller.signal, ...opts });
  } finally {
    clearTimeout(timer);
  }
}

async function getSitemapUrls() {
  const res = await fetchWithTimeout(`${BASE_URL}/sitemap.xml`);
  if (!res.ok) throw new Error(`Could not fetch sitemap.xml (status ${res.status})`);
  const xml = await res.text();
  return [...new Set([...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim()))];
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

function auditHtml(url, html) {
  const expectedLocale = localeOf(url);
  const issues = [];

  // 1. <html lang>
  const langMatch = html.match(/<html[^>]*\blang=["']([^"']+)["']/i);
  const lang = langMatch ? langMatch[1].toLowerCase() : null;
  if (!lang) issues.push("missing <html lang>");
  else if (lang !== expectedLocale) issues.push(`html lang "${lang}" != expected "${expectedLocale}"`);

  // 2. canonical
  const canonicals = [...html.matchAll(/<link[^>]*rel=["']canonical["'][^>]*>/gi)];
  if (canonicals.length === 0) issues.push("missing canonical");
  else if (canonicals.length > 1) issues.push(`${canonicals.length} canonical tags (expected 1)`);
  else {
    const href = canonicals[0][0].match(/href=["']([^"']+)["']/i)?.[1];
    if (href && new URL(href).pathname !== new URL(url).pathname) {
      issues.push(`canonical "${href}" does not match page`);
    }
  }

  // 3. hreflang alternates
  const hreflangs = [...html.matchAll(/hreflang=["']([^"']+)["']/gi)].map((m) => m[1].toLowerCase());
  for (const l of LOCALES) {
    if (!hreflangs.includes(l)) issues.push(`missing hreflang "${l}"`);
  }
  if (!hreflangs.includes("x-default")) issues.push("missing hreflang x-default");

  // 4. title + description
  if (!/<title>[^<]+<\/title>/i.test(html)) issues.push("missing/empty <title>");
  if (!/<meta[^>]*name=["']description["'][^>]*content=["'][^"']+["']/i.test(html)) {
    issues.push("missing meta description");
  }

  // 5. TravelAgency JSON-LD
  if (!/application\/ld\+json/i.test(html) || !/"@type"\s*:\s*"TravelAgency"/i.test(html)) {
    issues.push("missing TravelAgency JSON-LD");
  }

  return { url, locale: expectedLocale, ok: issues.length === 0, issues };
}

async function audit(url) {
  try {
    const res = await fetchWithTimeout(url);
    if (!res.ok) return { url, locale: localeOf(url), ok: false, issues: [`HTTP ${res.status}`] };
    const html = await res.text();
    return auditHtml(url, html);
  } catch (err) {
    return { url, locale: localeOf(url), ok: false, issues: [`fetch error: ${err.message}`] };
  }
}

function writeReport(results) {
  const outDir = new URL("../reports/", import.meta.url).pathname;
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
  const ts = new Date().toISOString();
  const report = {
    generatedAt: ts,
    baseUrl: BASE_URL,
    summary: { total: results.length, passed: results.filter((r) => r.ok).length, failed: results.filter((r) => !r.ok).length },
    results,
  };
  const path = `${outDir}seo-tags-report-${ts.replace(/[:.]/g, "-")}.json`;
  writeFileSync(path, JSON.stringify(report, null, 2), "utf-8");
  return path;
}

async function main() {
  console.log(`🔎 SEO tag checker — base: ${BASE_URL}\n`);
  const urls = await getSitemapUrls();
  console.log(`Auditing ${urls.length} URLs...\n`);

  const results = await mapLimit(urls, CONCURRENCY, audit);
  const failed = results.filter((r) => !r.ok);

  for (const r of results) {
    if (r.ok) console.log(`✅ ${r.url}`);
    else console.log(`❌ ${r.url}\n   - ${r.issues.join("\n   - ")}`);
  }

  const path = writeReport(results);
  console.log(`\n📄 Report: ${path}`);
  console.log(`\nPassed ${results.length - failed.length}/${results.length}.`);

  if (failed.length) {
    console.log("Done — SEO issues found.");
    process.exit(1);
  }
  console.log("Done — all pages pass the SEO contract. 🎉");
}

main().catch((err) => {
  console.error(`Fatal: ${err.message}`);
  process.exit(1);
});
