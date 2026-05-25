import { Globe, Menu, X, ChevronDown, User } from "lucide-react";
import { useState } from "react";

const LANGS = [
  { code: "EN", label: "English" },
  { code: "PL", label: "Polski" },
  { code: "NL", label: "Nederlands" },
];

export function Navbar() {
  const [lang, setLang] = useState("EN");
  const [langOpen, setLangOpen] = useState(false);
  const [mobile, setMobile] = useState(false);

  return (
    <header className="w-full border-b border-border/40 bg-background">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <a href="/" className="font-display text-2xl font-semibold tracking-tight text-navy">
          Voyara<span className="text-gold">.</span>
        </a>

        {/* Main nav */}
        <div className="hidden items-center gap-10 md:flex">
          <a href="#diy" className="text-sm font-medium text-foreground/80 transition-colors hover:text-navy">Plan</a>
          <a href="#curated" className="text-sm font-medium text-foreground/80 transition-colors hover:text-navy">Escapes</a>
          <a href="#destinations" className="text-sm font-medium text-foreground/80 transition-colors hover:text-navy">Destinations</a>
          <a href="#journal" className="text-sm font-medium text-foreground/80 transition-colors hover:text-navy">Journal</a>
        </div>

        {/* Right: account + language inline */}
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 sm:flex">
            <button
              id="account-button"
              type="button"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 transition-colors hover:border-gold/40 hover:bg-secondary"
              aria-label="Moje konto"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-navy text-primary-foreground">
                <User className="h-3.5 w-3.5" />
              </span>
              <span className="text-sm font-medium text-navy">Moje konto</span>
            </button>

            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium text-navy transition-colors hover:border-gold/40 hover:bg-secondary"
              >
                <Globe className="h-4 w-4" />
                <span>{lang}</span>
                <ChevronDown className="h-3.5 w-3.5 opacity-70" />
              </button>
              {langOpen && (
                <div className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-xl border border-border bg-card shadow-lg">
                  {LANGS.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setLangOpen(false); }}
                      className={`flex w-full items-center justify-between px-4 py-2.5 text-sm transition-colors hover:bg-secondary ${lang === l.code ? "text-gold font-medium" : "text-foreground"}`}
                    >
                      <span>{l.label}</span>
                      <span className="text-xs tracking-widest text-muted-foreground">{l.code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button
            onClick={() => setMobile(!mobile)}
            className="rounded-full border border-border p-2 text-navy md:hidden"
            aria-label="Menu"
          >
            {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobile && (
        <div className="mx-4 mb-3 rounded-xl border border-border bg-card p-4 shadow-lg md:hidden">
          <div className="flex flex-col gap-3">
            <a href="#diy" className="text-sm font-medium text-foreground/90">Plan</a>
            <a href="#curated" className="text-sm font-medium text-foreground/90">Escapes</a>
            <a href="#destinations" className="text-sm font-medium text-foreground/90">Destinations</a>
            <a href="#journal" className="text-sm font-medium text-foreground/90">Journal</a>
            <hr className="border-border" />
            <button id="account-button-mobile" className="flex items-center gap-2 text-sm font-medium text-navy">
              <User className="h-4 w-4" /> Moje konto
            </button>
            <button className="flex items-center gap-2 text-xs text-muted-foreground">
              <Globe className="h-3.5 w-3.5" /> {lang}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
