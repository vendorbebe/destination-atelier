import { Compass, Sparkles, ArrowUpRight } from "lucide-react";
import diyImg from "@/assets/diy.jpg";
import curatedImg from "@/assets/curated.jpg";

export function CoreConcept() {
  return (
    <section className="bg-ivory px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Two Ways to Travel
          </span>
          <h2 className="mt-4 font-display text-4xl font-light leading-tight text-navy md:text-5xl">
            Choose your <em className="text-gold">rhythm</em>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Whether you craft every detail or trust a curator's hand, we meet you on your terms.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <ConceptCard
            id="diy"
            image={diyImg}
            badge="Independent"
            icon={<Compass className="h-5 w-5" />}
            title="Create Your Own Journey"
            subtitle="Zrób to sam"
            description="Complete autonomy. Build your itinerary, choose your stays, pace your days — with our quiet tools at your side."
            cta="Plan Now"
          />
          <ConceptCard
            id="curated"
            image={curatedImg}
            badge="Hand-picked"
            icon={<Sparkles className="h-5 w-5" />}
            title="Curated Last Minute Escapes"
            subtitle="Wybierz gotowe"
            description="Premium getaways selected by our travel editors. Ready to book, ready to depart — nothing left to compromise."
            cta="Explore Deals"
          />
        </div>
      </div>
    </section>
  );
}

function ConceptCard({
  id, image, badge, icon, title, subtitle, description, cta,
}: {
  id: string; image: string; badge: string; icon: React.ReactNode;
  title: string; subtitle: string; description: string; cta: string;
}) {
  return (
    <article
      id={id}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
    >
      <div className="relative h-72 overflow-hidden md:h-80">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
        <div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          {badge}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-8 md:p-10">
        <div className="flex items-center gap-3 text-gold">
          {icon}
          <span className="font-display text-sm italic tracking-wide">{subtitle}</span>
        </div>
        <h3 className="mt-4 font-display text-3xl font-light leading-tight text-navy md:text-4xl">
          {title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
          {description}
        </p>

        <button className="group/btn mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-gold hover:text-gold-foreground">
          <span>{cta}</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </button>
      </div>
    </article>
  );
}
