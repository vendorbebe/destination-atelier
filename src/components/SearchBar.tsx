import { MapPin, CalendarDays, Users, Search } from "lucide-react";

export function SearchBar() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="mx-auto mt-10 w-full max-w-5xl overflow-hidden rounded-2xl border border-white/20 bg-white/95 p-2 shadow-2xl backdrop-blur-xl"
    >
      <div className="flex flex-col gap-1 md:flex-row md:items-stretch">
        <Field icon={<MapPin className="h-4 w-4" />} label="Destination" placeholder="Where to?" />
        <div className="hidden w-px bg-border md:block" />
        <Field icon={<CalendarDays className="h-4 w-4" />} label="Check-in — Check-out" placeholder="Add dates" />
        <div className="hidden w-px bg-border md:block" />
        <Field icon={<Users className="h-4 w-4" />} label="Guests" placeholder="Add guests" />
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-2 rounded-xl bg-teal px-8 py-4 text-sm font-bold uppercase tracking-wider text-teal-foreground shadow-lg shadow-teal/30 transition-all hover:brightness-110 md:rounded-xl"
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
    <label className="group flex flex-1 cursor-text items-center gap-3 rounded-xl px-4 py-3 transition-colors hover:bg-secondary/50">
      <span className="text-teal-deep">{icon}</span>
      <span className="flex flex-1 flex-col">
        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-navy">{label}</span>
        <input
          type="text"
          placeholder={placeholder}
          className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
        />
      </span>
    </label>
  );
}
