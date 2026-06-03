import type { Lang } from "./translations";

export const SITE_URL = "https://vendoratravel.eu";

// Lower-case URL locales (EN is the default, served at the root with no prefix)
export const LOCALES = ["en", "de", "fr", "nl", "pl", "es", "it", "pt"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

/** Map a URL locale (lower-case) to the in-app translation key (upper-case). */
export function localeToLang(locale: Locale): Lang {
  return locale.toUpperCase() as Lang;
}

/** Absolute URL for a given locale (EN has no prefix). */
export function localeUrl(locale: Locale, path = ""): string {
  return locale === DEFAULT_LOCALE
    ? `${SITE_URL}${path}`
    : `${SITE_URL}/${locale}${path}`;
}

type LocaleSeo = { title: string; description: string; keywords: string };

export const SEO: Record<Locale, LocaleSeo> = {
  en: {
    title: "Vendora Travel – The World at Your Fingertips",
    description:
      "Discover curated travel experiences and personalized trips worldwide with Vendora Travel.",
    keywords:
      "travel, vacation, trips, destinations, curated travel, luxury travel, book flights, hotels",
  },
  de: {
    title: "Vendora Travel – Die Welt auf Knopfdruck",
    description:
      "Entdecken Sie kuratierte Reiseerlebnisse und maßgeschneiderte Reisen weltweit mit Vendora Travel.",
    keywords:
      "Reisen, Urlaub, Reiseziele, Luxusreisen, Flüge buchen, Hotels, Reisepakete, Europa",
  },
  fr: {
    title: "Vendora Travel – Le Monde à Portée de Main",
    description:
      "Découvrez des expériences de voyage personnalisées dans le monde entier avec Vendora Travel.",
    keywords:
      "voyage, vacances, destinations, voyages de luxe, réserver vols, hôtels, forfaits voyage, Afrique",
  },
  nl: {
    title: "Vendora Travel – De Wereld aan Uw Vingertoppen",
    description:
      "Ontdek gepersonaliseerde reiservaringen wereldwijd met Vendora Travel.",
    keywords:
      "reizen, vakantie, bestemmingen, luxe reizen, vluchten boeken, hotels, reispakketten, België",
  },
  pl: {
    title: "Vendora Travel – Świat na Wyciągnięcie Ręki",
    description:
      "Odkryj spersonalizowane doświadczenia podróżnicze na całym świecie z Vendora Travel.",
    keywords:
      "podróże, wakacje, destynacje, luksusowe podróże, rezerwacja lotów, hotele, pakiety podróżne",
  },
  es: {
    title: "Vendora Travel – El Mundo a Tu Alcance",
    description:
      "Descubre experiencias de viaje personalizadas en todo el mundo con Vendora Travel.",
    keywords:
      "viajes, vacaciones, destinos, viajes de lujo, reservar vuelos, hoteles, paquetes de viaje",
  },
  it: {
    title: "Vendora Travel – Il Mondo a Portata di Mano",
    description:
      "Scopri esperienze di viaggio personalizzate in tutto il mondo con Vendora Travel.",
    keywords:
      "viaggi, vacanze, destinazioni, viaggi di lusso, prenotare voli, hotel, pacchetti viaggio",
  },
  pt: {
    title: "Vendora Travel – O Mundo na Ponta dos Seus Dedos",
    description:
      "Descubra experiências de viagem personalizadas em todo o mundo com a Vendora Travel.",
    keywords:
      "viagens, férias, destinos, viagens de luxo, reservar voos, hotéis, pacotes de viagem",
  },
};

const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  de: "de_DE",
  fr: "fr_FR",
  nl: "nl_NL",
  pl: "pl_PL",
  es: "es_ES",
  it: "it_IT",
  pt: "pt_PT",
};

/**
 * Build a TanStack Start `head()` payload (meta + links + scripts) with full
 * per-locale SEO: title, description, keywords, Open Graph, Twitter,
 * canonical, hreflang alternates and TravelAgency JSON-LD.
 */
export function buildLocaleHead(
  locale: Locale,
  path = "",
  overrides: { title?: string; description?: string } = {},
) {
  const cfg = SEO[locale];
  const title = overrides.title ?? cfg.title;
  const description = overrides.description ?? cfg.description;
  const canonical = localeUrl(locale, path);
  const ogImage = `${SITE_URL}/og-image.jpg`;

  const hreflangLinks = LOCALES.map((l) => ({
    rel: "alternate",
    hrefLang: l,
    href: localeUrl(l, path),
  }));

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: cfg.keywords },
      { name: "author", content: "Vendora Travel" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: canonical },
      { property: "og:site_name", content: "Vendora Travel" },
      { property: "og:locale", content: OG_LOCALE[locale] },
      { property: "og:type", content: "website" },
      { property: "og:image", content: ogImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Vendora Travel" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ],
    links: [
      { rel: "canonical", href: canonical },
      ...hreflangLinks,
      { rel: "alternate", hrefLang: "x-default", href: localeUrl("en", path) },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: "Vendora Travel",
          url: SITE_URL,
          logo: `${SITE_URL}/logo.png`,
          description:
            "Curated travel experiences and personalized trips worldwide.",
          sameAs: [
            "https://tradivo.be",
            "https://vendoratravels.com",
            "https://travido.fr",
          ],
        }),
      },
    ],
  };
}
