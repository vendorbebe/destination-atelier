import { createFileRoute, notFound } from "@tanstack/react-router";
import { HomePage } from "@/components/HomePage";
import { buildLocaleHead, isLocale, DEFAULT_LOCALE, type Locale } from "@/i18n/seo";

export const Route = createFileRoute("/$locale/")({
  // EN lives at "/", so a "/en" prefix is not a valid localized route.
  beforeLoad: ({ params }) => {
    if (!isLocale(params.locale) || params.locale === DEFAULT_LOCALE) {
      throw notFound();
    }
  },
  head: ({ params }) => {
    const locale = (isLocale(params.locale) ? params.locale : DEFAULT_LOCALE) as Locale;
    return buildLocaleHead(locale);
  },
  component: LocalizedIndex,
});

function LocalizedIndex() {
  const { locale } = Route.useParams();
  return <HomePage locale={locale as Locale} />;
}
