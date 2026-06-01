import { createFileRoute } from "@tanstack/react-router";
import { LOCALES, DEFAULT_LOCALE, SITE_URL } from "@/i18n/seo";

const PAGES = ["", "/destinations", "/packages", "/about", "/contact"];
const PRIORITIES = [1.0, 0.9, 0.8, 0.6, 0.5];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const now = new Date().toISOString();

        const urls = LOCALES.flatMap((locale) =>
          PAGES.map((page, i) => {
            const loc =
              locale === DEFAULT_LOCALE
                ? `${SITE_URL}${page}`
                : `${SITE_URL}/${locale}${page}`;
            return [
              "  <url>",
              `    <loc>${loc}</loc>`,
              `    <lastmod>${now}</lastmod>`,
              `    <changefreq>${i === 0 ? "weekly" : "monthly"}</changefreq>`,
              `    <priority>${PRIORITIES[i].toFixed(1)}</priority>`,
              "  </url>",
            ].join("\n");
          }),
        );

        const xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
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
