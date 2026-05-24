import heroImg from "@/assets/hero.jpg";
import { Navbar } from "./Navbar";
import { SearchBar } from "./SearchBar";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Tropical coastline at golden hour"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/30 to-navy/70" />

      <Navbar />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-32 pb-20 text-center lg:px-10">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/90 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          Boutique Travel, Reimagined
        </span>
        <h1 className="font-display text-5xl font-light leading-[1.05] text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          Travel that feels<br />
          <span className="italic text-gold-soft">unmistakably yours.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base text-white/80 md:text-lg">
          Curated escapes and self-planned journeys — designed with quiet confidence,
          for travellers who value the difference.
        </p>

        <SearchBar />
      </div>
    </section>
  );
}
