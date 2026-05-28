import { Navbar } from "./Navbar";
import { SearchBar } from "./SearchBar";
import heroImg from "@/assets/hero-mediterranean.jpg";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image */}
      <img
        src={heroImg}
        alt="Mediterranean coastal city at golden hour"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/30 to-navy/70" />

      <Navbar />

      <div className="relative mx-auto flex min-h-[680px] max-w-7xl flex-col items-center justify-center px-4 pb-16 pt-40 text-center sm:min-h-[760px] sm:pt-44 lg:px-8">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
          Vendora Travel
        </span>
        <h1 className="font-sans text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-7xl">
          The world at <br className="sm:hidden" />
          <span className="text-teal">your fingertips</span>
        </h1>
        <p className="mt-5 text-lg font-medium text-white/90 sm:text-xl">
          Let's travel together.
        </p>

        <SearchBar />
      </div>
    </section>
  );
}
