export function Footer() {
  return (
    <footer className="w-full bg-navy px-4 py-10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:flex-row">
        <div className="font-sans text-base font-bold uppercase tracking-wider text-white">
          TRAVIDO <span className="text-teal">—</span> part of VENDORA Ecosystem
        </div>
        <p className="text-[11px] uppercase tracking-[0.2em] text-white/60">
          © {new Date().getFullYear()} — Crafted for the curious.
        </p>
      </div>
    </footer>
  );
}
