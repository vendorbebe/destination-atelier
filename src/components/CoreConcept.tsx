import { Compass, Sparkles, ArrowRight } from "lucide-react";

export function CoreConcept() {
  return (
    <section className="w-full bg-background px-4 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-teal">
            Two ways to travel
          </span>
          <h2 className="font-sans text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-navy sm:text-5xl lg:text-6xl">
            Plan your own, or <span className="text-teal">let us curate</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <ConceptCard
            id="diy"
            icon={<Compass className="h-6 w-6" />}
            badge="Independent"
            title="Create your own journey"
            accent="Do it yourself"
            description="Complete autonomy. Build your itinerary, choose your stays, and pace your days with our tools at your side."
            cta="Plan Now"
            variant="navy"
          />
          <ConceptCard
            id="curated"
            icon={<Sparkles className="h-6 w-6" />}
            badge="Hand-picked"
            title="Curated last-minute escapes"
            accent="Ready to go"
            description="Premium getaways selected by our travel editors. Ready to book, ready to depart — nothing left to compromise."
            cta="Explore Deals"
            variant="teal"
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
  accent,
  description,
  cta,
  variant,
}: {
  id: string;
  icon: React.ReactNode;
  badge: string;
  title: string;
  accent: string;
  description: string;
  cta: string;
  variant: "navy" | "teal";
}) {
  const isNavy = variant === "navy";

  return (
    <article
      id={id}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)] sm:p-8 ${
        isNavy ? "hover:border-navy/30" : "hover:border-teal/40"
      }`}
    >
      <div className="mb-4 flex items-center gap-3">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${
            isNavy ? "bg-navy/10 text-navy" : "bg-teal/10 text-teal-deep"
          }`}
        >
          {icon}
        </div>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-teal" />
          <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            {badge}
          </span>
        </div>
      </div>

      <div className={`text-xs font-semibold uppercase tracking-wider ${isNavy ? "text-navy/70" : "text-teal-deep"}`}>
        {accent}
      </div>
      <h3 className="mt-1 font-sans text-2xl font-extrabold uppercase leading-tight tracking-tight text-navy sm:text-3xl">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>

      <button
        className={`mt-6 inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold uppercase tracking-wider transition-all ${
          isNavy
            ? "bg-navy text-primary-foreground hover:bg-navy/90"
            : "bg-teal text-teal-foreground hover:bg-teal-deep"
        }`}
      >
        <span>{cta}</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>
    </article>
  );
}
