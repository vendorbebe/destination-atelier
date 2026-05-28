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
  bookingUrl: string;
};

const OFFERS: Offer[] = [
  {
    id: "caribbean",
    image: caribbean,
    location: "Caribbean",
    title: "Turquoise waters of Saint Lucia",
    description: "Seven nights in a boutique resort with a private beach and breakfast included.",
    price: "from €1,090",
    bookingUrl: "https://www.booking.com/searchresults.html?ss=Saint+Lucia",
  },
  {
    id: "alps",
    image: alps,
    location: "Swiss Alps",
    title: "Alpine chalet in Zermatt",
    description: "Five days in a wooden chalet with Matterhorn views and a private spa.",
    price: "from €770",
    bookingUrl: "https://www.booking.com/searchresults.html?ss=Zermatt",
  },
  {
    id: "italy",
    image: italy,
    location: "Tuscany, Italy",
    title: "Vineyards & villas in Val d'Orcia",
    description: "A week in a stone villa among cypresses, with tastings at local wineries.",
    price: "from €670",
    bookingUrl: "https://www.booking.com/searchresults.html?ss=Val+d%27Orcia",
  },
];

export function OffersGrid() {
  return (
    <section id="destinations" className="w-full bg-background px-4 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-teal">
              Holiday offers
            </span>
            <h2 className="font-sans text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-navy sm:text-5xl lg:text-6xl">
              Curated trips <span className="text-teal">this season</span>
            </h2>
          </div>
          <a href="#" className="hidden text-sm font-semibold uppercase tracking-wider text-navy underline-offset-4 hover:underline sm:inline">
            See all
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
    <a
      href={offer.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
    >
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
          <MapPin className="h-3 w-3 text-teal" />
          {offer.location}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-sans text-xl font-bold uppercase leading-tight tracking-tight text-navy">
          {offer.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{offer.description}</p>

        <div className="mt-5 flex items-end justify-between border-t border-border pt-4">
          <div>
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Price</div>
            <div className="font-sans text-lg font-bold text-navy">{offer.price}</div>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal px-4 py-2 text-xs font-semibold uppercase tracking-wider text-teal-foreground transition-all group-hover:bg-teal-deep">
            Book on Booking.com
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </a>
  );
}
