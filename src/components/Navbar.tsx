import { Globe, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

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
    <header className="w-full border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <a href="/" className="font-display text-xl font-semibold tracking-tight text-navy">
          Voyara<span className="text-gold">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#diy" className="text-sm font-medium text-foreground/80 transition-colors hover:text-navy">Plan</a>
          <a href="#curated" className="text-sm font-medium text-foreground/80 transition-colors hover:text-navy">Escapes</a>
          <a href="#" className="text-sm font-medium text-foreground/80 transition-colors hover:text-navy">Destinations</a>
          <a href="#" className="text-sm font-medium text-foreground/80 transition-colors hover:text-navy">Journal</a>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <Globe className="h-4 w-4" />
              <span className="hidden sm:inline">{lang}</span>
              <ChevronDown className="h-3.5 w-3.5 opacity-70" />
            </button>
            {open && (
              <div className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-xl border border-border bg-card shadow-lg">
                {LANGS.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => { setLang(l.code); setOpen(false); }}
                    className={`flex w-full items-center justify-between px-4 py-3 text-sm transition-colors hover:bg-secondary ${lang === l.code ? "text-gold font-medium" : "text-foreground"}`}
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
            className="rounded-full border border-border p-2 text-navy md:hidden"
            aria-label="Menu"
          >
            {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobile && (
        <div className="mx-4 rounded-xl border border-border bg-card p-4 shadow-lg md:hidden">
          <div className="flex flex-col gap-3">
            <a href="#diy" className="text-sm font-medium text-foreground/90">Plan</a>
            <a href="#curated" className="text-sm font-medium text-foreground/90">Escapes</a>
            <a href="#" className="text-sm font-medium text-foreground/90">Destinations</a>
            <a href="#" className="text-sm font-medium text-foreground/90">Journal</a>
          </div>
        </div>
      )}
    </header>
  );
}
