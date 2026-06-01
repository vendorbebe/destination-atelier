import { Menu, X, LogIn, Plane } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useLanguage } from "@/i18n/LanguageContext";
import { LANGS, type Lang } from "@/i18n/translations";
import { DEFAULT_LOCALE } from "@/i18n/seo";

export function Navbar() {
  const [mobile, setMobile] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const navigate = useNavigate();

  const switchLanguage = (l: Lang) => {
    setLang(l);
    const locale = l.toLowerCase();
    if (locale === DEFAULT_LOCALE) {
      navigate({ to: "/" });
    } else {
      navigate({ to: "/$locale", params: { locale } });
    }
  };

  const NAV = [
    { label: t.nav.ecosystem, sub: "vendora.be", href: "#ecosystem" },
    { label: t.nav.energido, sub: "energido.be", href: "#energido" },
    { label: t.nav.zexo, sub: "zexo.be", href: "#zexo" },
    { label: t.nav.faq, sub: "", href: "#faq" },
    { label: t.nav.contact, sub: "", href: "#contact" },
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-30 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-5 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex shrink-0 items-center gap-2 text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal text-teal-foreground">
            <Plane className="h-5 w-5 -rotate-45" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-semibold tracking-wide text-teal">VENDORA</span>
            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/85">Travel</span>
          </span>
        </a>

        {/* Main nav (center) */}
        <div className="hidden flex-1 items-center justify-center gap-7 xl:flex">
          {NAV.map((n) => (
            <a key={n.label} href={n.href} className="group flex flex-col items-center text-center">
              <span className="text-[12px] font-semibold tracking-[0.12em] text-white transition-colors group-hover:text-teal">
                {n.label}
              </span>
              {n.sub && (
                <span className="text-[10px] font-medium text-white/60 group-hover:text-white/85">{n.sub}</span>
              )}
            </a>
          ))}
        </div>

        {/* Right: login + language */}
        <div className="flex shrink-0 items-center gap-3">
          <button
            id="login-button"
            type="button"
            className="hidden h-9 items-center gap-2 whitespace-nowrap rounded-full bg-teal px-4 text-sm font-semibold uppercase tracking-wider text-teal-foreground shadow-lg shadow-teal/30 transition-all hover:brightness-110 sm:inline-flex"
          >
            <LogIn className="h-4 w-4" />
            <span>{t.nav.login}</span>
          </button>

          <div className="hidden items-center gap-0.5 rounded-full border border-white/25 bg-white/10 px-1.5 py-1 backdrop-blur-md lg:flex">
            {LANGS.map((l, i) => (
              <button
                key={l}
                onClick={() => switchLanguage(l)}
                className={`relative px-1.5 text-[11px] font-semibold tracking-wider transition-colors ${
                  lang === l ? "text-teal" : "text-white/80 hover:text-white"
                }`}
              >
                {l}
                {i < LANGS.length - 1 && (
                  <span className="pointer-events-none absolute -right-0.5 top-1/2 -translate-y-1/2 text-white/30">|</span>
                )}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobile(!mobile)}
            className="rounded-full border border-white/30 bg-white/10 p-2 text-white backdrop-blur-md xl:hidden"
            aria-label={t.nav.menu}
          >
            {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobile && (
        <div className="mx-4 mb-3 rounded-2xl border border-white/15 bg-navy/95 p-5 text-white shadow-2xl backdrop-blur-xl xl:hidden">
          <div className="flex flex-col gap-3">
            {NAV.map((n) => (
              <a key={n.label} href={n.href} className="flex flex-col">
                <span className="text-sm font-semibold tracking-wider">{n.label}</span>
                {n.sub && <span className="text-[11px] text-white/60">{n.sub}</span>}
              </a>
            ))}
            <hr className="border-white/15" />
            <button id="login-button-mobile" className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-teal text-sm font-semibold uppercase tracking-wider text-teal-foreground">
              <LogIn className="h-4 w-4" /> {t.nav.login}
            </button>
            <div className="flex flex-wrap gap-2">
              {LANGS.map((l) => (
                <button
                  key={l}
                  onClick={() => switchLanguage(l)}
                  className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold tracking-wider ${
                    lang === l ? "border-teal text-teal" : "border-white/20 text-white/80"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
