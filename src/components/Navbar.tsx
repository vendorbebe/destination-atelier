import { useState } from "react";
import { Globe, Menu, X, ChevronDown } from "lucide-react";

const LANGS = [
  { code: "EN", label: "English" },
  { code: "PL", label: "Polski" },
  { code: "NL", label: "Nederlands" },
];

export function Navbar() {
  const [lang, setLang] = useState("EN");
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="/" className="font-display text-2xl font-semibold tracking-tight text-white">
          Voyara<span className="text-gold">.</span>
        </a>

        <div className="hidden items-center gap-10 md:flex">
          <a href="#diy" className="text-sm font-medium text-white/85 transition-colors hover:text-gold">Plan</a>
          <a href="#curated" className="text-sm font-medium text-white/85 transition-colors hover:text-gold">Escapes</a>
          <a href="#" className="text-sm font-medium text-white/85 transition-colors hover:text-gold">Destinations</a>
          <a href="#" className="text-sm font-medium text-white/85 transition-colors hover:text-gold">Journal</a>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition-colors hover:border-gold/60 hover:bg-white/10"
            >
              <Globe className="h-4 w-4" />
              {lang}
              <ChevronDown className="h-3.5 w-3.5 opacity-70" />
            </button>
            {open && (
              <div className="absolute right-0 mt-2 w-44 overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-elegant)]">
                {LANGS.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => { setLang(l.code); setOpen(false); }}
                    className={`flex w-full items-center justify-between px-4 py-3 text-sm transition-colors hover:bg-secondary ${lang === l.code ? "text-gold" : "text-foreground"}`}
                  >
                    <span>{l.label}</span>
                    <span className="text-xs tracking-widest text-muted-foreground">{l.code}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => setMobile(!mobile)}
            className="rounded-full border border-white/25 p-2 text-white md:hidden"
            aria-label="Menu"
          >
            {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobile && (
        <div className="mx-6 rounded-2xl border border-white/15 bg-navy/95 p-6 backdrop-blur-lg md:hidden">
          <div className="flex flex-col gap-4">
            <a href="#diy" className="text-base text-white/90">Plan</a>
            <a href="#curated" className="text-base text-white/90">Escapes</a>
            <a href="#" className="text-base text-white/90">Destinations</a>
            <a href="#" className="text-base text-white/90">Journal</a>
          </div>
        </div>
      )}
    </header>
  );
}
