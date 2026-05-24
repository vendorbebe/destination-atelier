import { MapPin, CalendarDays, Users, Search } from "lucide-react";

export function SearchBar() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-border bg-card p-2 shadow-[var(--shadow-soft)]"
    >
      <div className="flex flex-col gap-1 md:flex-row md:items-center">
        <Field icon={<MapPin className="h-4 w-4" />} label="Destination" placeholder="Where to?" />
        <div className="hidden h-8 w-px bg-border md:block" />
        <Field icon={<CalendarDays className="h-4 w-4" />} label="Dates" placeholder="Add dates" />
        <div className="hidden h-8 w-px bg-border md:block" />
        <Field icon={<Users className="h-4 w-4" />} label="Guests" placeholder="Add guests" />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 rounded-xl bg-navy px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-navy/90 md:rounded-full md:px-7"
        >
          <Search className="h-4 w-4 transition-transform group-hover:scale-110" />
          <span>Search</span>
        </button>
      </div>
    </form>
  );
}

function Field({ icon, label, placeholder }: { icon: React.ReactNode; label: string; placeholder: string }) {
  return (
    <label className="group flex flex-1 cursor-text items-center gap-3 rounded-xl px-4 py-2.5 transition-colors hover:bg-secondary/40 md:rounded-full">
      <span className="text-muted-foreground">{icon}</span>
      <span className="flex flex-col">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
        <input
          type="text"
          placeholder={placeholder}
          className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
        />
      </span>
    </label>
  );
}
