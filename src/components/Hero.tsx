import { Navbar } from "./Navbar";
import { ServiceBar } from "./ServiceBar";
import { SearchBar } from "./SearchBar";

export function Hero() {
  return (
    <section className="relative w-full bg-background">
      <Navbar />
      <ServiceBar />

      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-10 text-center sm:py-14 lg:px-8">
        <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
          Boutique Travel, Reimagined
        </span>
        <h1 className="font-display text-4xl font-light leading-[1.1] text-navy sm:text-5xl lg:text-6xl">
          Travel that feels <em className="text-gold">unmistakably yours.</em>
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground sm:text-base">
          Curated escapes and self-planned journeys — designed with quiet confidence.
        </p>

        <SearchBar />
      </div>
    </section>
  );
}
