import { useEffect } from "react";
import { Hero } from "@/components/Hero";
import { CoreConcept } from "@/components/CoreConcept";
import { OffersGrid } from "@/components/OffersGrid";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import { localeToLang, type Locale } from "@/i18n/seo";

export function HomePage({ locale }: { locale: Locale }) {
  const { setLang } = useLanguage();

  useEffect(() => {
    setLang(localeToLang(locale));
  }, [locale, setLang]);

  return (
    <main>
      <Hero />
      <CoreConcept />
      <OffersGrid />
      <Footer />
    </main>
  );
}
