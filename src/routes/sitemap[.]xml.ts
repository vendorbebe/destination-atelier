import { createFileRoute } from "@tanstack/react-router";
import { LOCALES, DEFAULT_LOCALE, SITE_URL } from "@/i18n/seo";

// Only routes that actually exist in the app. Add sub-pages here as their
// route files are created so the sitemap never advertises broken links.
const PAGES = [""];
const PRIORITIES = [1.0];

function localeLoc(locale: string, page: string) {
  return locale === DEFAULT_LOCALE
    ? `${SITE_URL}${page}`
    : `${SITE_URL}/${locale}${page}`;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const now = new Date().toISOString();

        const urls = LOCALES.flatMap((locale) =>
          PAGES.map((page, i) => {
            const loc = localeLoc(locale, page);

            // Full hreflang alternates so Google understands the locale
            // cluster for every URL (strongest multilingual SEO signal).
            const alternates = [
              ...LOCALES.map(
                (l) =>
                  `    <xhtml:link rel="alternate" hreflang="${l}" href="${localeLoc(l, page)}" />`,
              ),
              `    <xhtml:link rel="alternate" hreflang="x-default" href="${localeLoc(DEFAULT_LOCALE, page)}" />`,
            ].join("\n");

            return [
              "  <url>",
              `    <loc>${loc}</loc>`,
              `    <lastmod>${now}</lastmod>`,
              `    <changefreq>${i === 0 ? "weekly" : "monthly"}</changefreq>`,
              `    <priority>${PRIORITIES[i].toFixed(1)}</priority>`,
              alternates,
              "  </url>",
            ].join("\n");
          }),
        );

        const xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
          ...urls,
          "</urlset>",
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
