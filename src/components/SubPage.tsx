import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import { localeToLang, type Locale } from "@/i18n/seo";
import { PAGES, type PageKey } from "@/i18n/pages";

export function SubPage({ pageKey, locale }: { pageKey: PageKey; locale: Locale }) {
  const { setLang } = useLanguage();

  useEffect(() => {
    setLang(localeToLang(locale));
  }, [locale, setLang]);

  const copy = PAGES[localeToLang(locale)][pageKey];

  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />

      {/* Hero band */}
      <section className="relative flex flex-col justify-center bg-navy px-4 pb-16 pt-36 lg:px-8 lg:pt-44">
        <div className="mx-auto w-full max-w-4xl text-center">
          <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            {copy.title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/80 sm:text-lg">{copy.lead}</p>
        </div>
      </section>

      {/* Body */}
      <section className="flex-1 px-4 py-16 lg:px-8">
        <div className="mx-auto grid w-full max-w-5xl gap-12 lg:grid-cols-[1.4fr_1fr]">
          <p className="text-lg leading-relaxed text-foreground/90">{copy.body}</p>

          <ul className="flex flex-col gap-4">
            {copy.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-sm font-medium text-card-foreground shadow-sm"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-teal" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
}
