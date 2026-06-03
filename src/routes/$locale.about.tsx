import { createFileRoute, notFound } from "@tanstack/react-router";
import { SubPage } from "@/components/SubPage";
import { buildLocaleHead, isLocale, DEFAULT_LOCALE, localeToLang, type Locale } from "@/i18n/seo";
import { PAGES, PAGE_SLUGS } from "@/i18n/pages";

const PAGE = "about" as const;

export const Route = createFileRoute("/$locale/about")({
  beforeLoad: ({ params }) => {
    if (!isLocale(params.locale) || params.locale === DEFAULT_LOCALE) throw notFound();
  },
  head: ({ params }) => {
    const locale = (isLocale(params.locale) ? params.locale : DEFAULT_LOCALE) as Locale;
    const c = PAGES[localeToLang(locale)][PAGE];
    return buildLocaleHead(locale, `/${PAGE_SLUGS[PAGE]}`, {
      title: `${c.title} – Vendora Travel`,
      description: c.lead,
    });
  },
  component: LocalizedPage,
});

function LocalizedPage() {
  const { locale } = Route.useParams();
  return <SubPage pageKey={PAGE} locale={locale as Locale} />;
}
