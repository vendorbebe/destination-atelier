import { ArrowRight, MapPin } from "lucide-react";
import caribbean from "@/assets/caribbean.jpg";
import alps from "@/assets/alps.jpg";
import italy from "@/assets/italy.jpg";

type Offer = {
  id: string;
  image: string;
  location: string;
  title: string;
  description: string;
  price: string;
};

const OFFERS: Offer[] = [
  {
    id: "caribbean",
    image: caribbean,
    location: "Karaiby",
    title: "Turkusowe wody Saint Lucia",
    description: "Siedem nocy w butikowym resorcie z prywatną plażą i śniadaniem w cenie.",
    price: "od 4 890 zł",
  },
  {
    id: "alps",
    image: alps,
    location: "Alpy Szwajcarskie",
    title: "Alpejski chalet w Zermatt",
    description: "Pięć dni w drewnianym chalecie z widokiem na Matterhorn i prywatnym spa.",
    price: "od 3 450 zł",
  },
  {
    id: "italy",
    image: italy,
    location: "Toskania, Włochy",
    title: "Winnice i wille w Val d'Orcia",
    description: "Tydzień w kamiennej willi pośród cyprysów, z degustacjami u lokalnych winiarzy.",
    price: "od 2 990 zł",
  },
];

export function OffersGrid() {
  return (
    <section id="destinations" className="w-full bg-background px-4 py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <span className="mb-2 inline-block text-[11px] font-semibold uppercase tracking-[0.15em] text-gold">
              Oferty wakacyjne
            </span>
            <h2 className="font-display text-3xl font-light text-navy sm:text-4xl">
              Wybrane podróże tego sezonu
            </h2>
          </div>
          <a href="#" className="hidden text-sm font-medium text-navy underline-offset-4 hover:underline sm:inline">
            Zobacz wszystkie
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {OFFERS.map((o) => (
            <OfferCard key={o.id} offer={o} />
          ))}
        </div>
      </div>
    </section>
  );
}

function OfferCard({ offer }: { offer: Offer }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={offer.image}
          alt={offer.title}
          loading="lazy"
          width={1024}
          height={1024}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-navy backdrop-blur-sm">
          <MapPin className="h-3 w-3 text-gold" />
          {offer.location}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-medium leading-tight text-navy">{offer.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{offer.description}</p>

        <div className="mt-5 flex items-end justify-between border-t border-border pt-4">
          <div>
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Cena</div>
            <div className="font-display text-lg font-medium text-navy">{offer.price}</div>
          </div>
          <button className="inline-flex items-center gap-1.5 rounded-full bg-navy px-4 py-2 text-xs font-medium text-primary-foreground transition-all hover:bg-navy/90">
            View Details
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </article>
  );
}
