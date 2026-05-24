import { Compass, Sparkles, ArrowRight } from "lucide-react";

export function CoreConcept() {
  return (
    <section className="w-full bg-background px-4 pb-8 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-4 sm:grid-cols-2">
          <ConceptCard
            id="diy"
            icon={<Compass className="h-6 w-6" />}
            badge="Independent"
            title="Create Your Own Journey"
            subtitle="Zrób to sam"
            description="Complete autonomy. Build your itinerary, choose your stays, and pace your days with our tools at your side."
            cta="Plan Now"
            variant="navy"
          />
          <ConceptCard
            id="curated"
            icon={<Sparkles className="h-6 w-6" />}
            badge="Hand-picked"
            title="Curated Last Minute Escapes"
            subtitle="Wybierz gotowe"
            description="Premium getaways selected by our travel editors. Ready to book, ready to depart — nothing left to compromise."
            cta="Explore Deals"
            variant="gold"
          />
        </div>
      </div>
    </section>
  );
}

function ConceptCard({
  id,
  icon,
  badge,
  title,
  subtitle,
  description,
  cta,
  variant,
}: {
  id: string;
  icon: React.ReactNode;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  variant: "navy" | "gold";
}) {
  const isNavy = variant === "navy";

  return (
    <article
      id={id}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)] sm:p-8 ${
        isNavy ? "hover:border-navy/20" : "hover:border-gold/30"
      }`}
    >
      <div className="mb-4 flex items-center gap-3">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${
            isNavy ? "bg-navy/10 text-navy" : "bg-gold/10 text-gold"
          }`}
        >
          {icon}
        </div>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            {badge}
          </span>
        </div>
      </div>

      <div className={`text-xs font-medium uppercase tracking-wider ${isNavy ? "text-navy/70" : "text-gold"}`}>
        {subtitle}
      </div>
      <h3 className="mt-1 font-display text-2xl font-light leading-tight text-navy sm:text-3xl">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>

      <button
        className={`mt-5 inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
          isNavy
            ? "bg-navy text-primary-foreground hover:bg-navy/90"
            : "bg-gold text-gold-foreground hover:bg-gold/90"
        }`}
      >
        <span>{cta}</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>
    </article>
  );
}
