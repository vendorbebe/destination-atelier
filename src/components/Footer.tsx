export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 py-12 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="font-display text-xl font-semibold text-navy">
          Voyara<span className="text-gold">.</span>
        </div>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          © {new Date().getFullYear()} — Crafted for the curious.
        </p>
      </div>
    </footer>
  );
}
