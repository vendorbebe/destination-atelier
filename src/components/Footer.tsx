export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-4 py-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <div className="font-display text-lg font-semibold text-navy">
          Voyara<span className="text-gold">.</span>
        </div>
        <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
          © {new Date().getFullYear()} — Crafted for the curious.
        </p>
      </div>
    </footer>
  );
}
