export type Lang = "EN" | "PL" | "NL" | "FR" | "DE" | "ES" | "IT" | "PT";

export const LANGS: Lang[] = ["EN", "PL", "NL", "FR", "DE", "ES", "IT", "PT"];

export type Translation = {
  nav: {
    ecosystem: string;
    energido: string;
    zexo: string;
    faq: string;
    contact: string;
    login: string;
    menu: string;
  };
  hero: {
    badge: string;
    titleA: string;
    titleB: string;
    subtitle: string;
  };
  search: {
    destination: string;
    destinationPlaceholder: string;
    dates: string;
    datesPlaceholder: string;
    guests: string;
    guestsPlaceholder: string;
    button: string;
  };
  concept: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    diy: {
      badge: string;
      accent: string;
      title: string;
      description: string;
      cta: string;
    };
    curated: {
      badge: string;
      accent: string;
      title: string;
      description: string;
      cta: string;
    };
  };
  offers: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    seeAll: string;
    price: string;
    book: string;
    items: {
      caribbean: { location: string; title: string; description: string };
      alps: { location: string; title: string; description: string };
      italy: { location: string; title: string; description: string };
    };
  };
  footer: {
    tagline: string;
  };
};

export const translations: Record<Lang, Translation> = {
  EN: {
    nav: { ecosystem: "VENDORA ECOSYSTEM", energido: "ENERGIDO", zexo: "ZEXO", faq: "FAQ", contact: "CONTACT", login: "Login", menu: "Menu" },
    hero: { badge: "Vendora Travel", titleA: "The world at", titleB: "your fingertips", subtitle: "Let's travel together." },
    search: { destination: "Destination", destinationPlaceholder: "Where to?", dates: "Check-in — Check-out", datesPlaceholder: "Add dates", guests: "Guests", guestsPlaceholder: "Add guests", button: "Search" },
    concept: {
      eyebrow: "Two ways to travel", titleA: "Plan your own, or", titleB: "let us curate",
      diy: { badge: "Independent", accent: "Do it yourself", title: "Create your own journey", description: "Complete autonomy. Build your itinerary, choose your stays, and pace your days with our tools at your side.", cta: "Plan Now" },
      curated: { badge: "Hand-picked", accent: "Ready to go", title: "Curated last-minute escapes", description: "Premium getaways selected by our travel editors. Ready to book, ready to depart — nothing left to compromise.", cta: "Explore Deals" },
    },
    offers: {
      eyebrow: "Holiday offers", titleA: "Curated trips", titleB: "this season", seeAll: "See all", price: "Price", book: "Book on Booking.com",
      items: {
        caribbean: { location: "Caribbean", title: "Turquoise waters of Saint Lucia", description: "Seven nights in a boutique resort with a private beach and breakfast included." },
        alps: { location: "Swiss Alps", title: "Alpine chalet in Zermatt", description: "Five days in a wooden chalet with Matterhorn views and a private spa." },
        italy: { location: "Tuscany, Italy", title: "Vineyards & villas in Val d'Orcia", description: "A week in a stone villa among cypresses, with tastings at local wineries." },
      },
    },
    footer: { tagline: "Crafted for the curious." },
  },
  PL: {
    nav: { ecosystem: "EKOSYSTEM VENDORA", energido: "ENERGIDO", zexo: "ZEXO", faq: "FAQ", contact: "KONTAKT", login: "Zaloguj się", menu: "Menu" },
    hero: { badge: "Vendora Travel", titleA: "Świat na", titleB: "wyciągnięcie ręki", subtitle: "Podróżujmy razem." },
    search: { destination: "Cel podróży", destinationPlaceholder: "Dokąd?", dates: "Przyjazd — Wyjazd", datesPlaceholder: "Dodaj daty", guests: "Goście", guestsPlaceholder: "Dodaj gości", button: "Szukaj" },
    concept: {
      eyebrow: "Dwa sposoby podróżowania", titleA: "Zaplanuj sam, albo", titleB: "pozwól nam wybrać",
      diy: { badge: "Niezależnie", accent: "Zrób to sam", title: "Stwórz własną podróż", description: "Pełna swoboda. Zbuduj plan, wybierz noclegi i ustal własne tempo dnia z naszymi narzędziami.", cta: "Zaplanuj teraz" },
      curated: { badge: "Wyselekcjonowane", accent: "Gotowe do wyjazdu", title: "Wyselekcjonowane oferty last minute", description: "Ekskluzywne wyjazdy wybrane przez naszych redaktorów. Gotowe do rezerwacji i wylotu — bez kompromisów.", cta: "Zobacz oferty" },
    },
    offers: {
      eyebrow: "Oferty wakacyjne", titleA: "Wybrane podróże", titleB: "w tym sezonie", seeAll: "Zobacz wszystkie", price: "Cena", book: "Rezerwuj na Booking.com",
      items: {
        caribbean: { location: "Karaiby", title: "Turkusowe wody Saint Lucia", description: "Siedem nocy w butikowym kurorcie z prywatną plażą i śniadaniem w cenie." },
        alps: { location: "Alpy Szwajcarskie", title: "Alpejski domek w Zermatt", description: "Pięć dni w drewnianym domku z widokiem na Matterhorn i prywatnym spa." },
        italy: { location: "Toskania, Włochy", title: "Winnice i wille w Val d'Orcia", description: "Tydzień w kamiennej willi wśród cyprysów, z degustacjami w lokalnych winnicach." },
      },
    },
    footer: { tagline: "Stworzone dla ciekawych świata." },
  },
  NL: {
    nav: { ecosystem: "VENDORA ECOSYSTEEM", energido: "ENERGIDO", zexo: "ZEXO", faq: "FAQ", contact: "CONTACT", login: "Inloggen", menu: "Menu" },
    hero: { badge: "Vendora Travel", titleA: "De wereld binnen", titleB: "handbereik", subtitle: "Laten we samen reizen." },
    search: { destination: "Bestemming", destinationPlaceholder: "Waarheen?", dates: "Check-in — Check-out", datesPlaceholder: "Datums toevoegen", guests: "Gasten", guestsPlaceholder: "Gasten toevoegen", button: "Zoeken" },
    concept: {
      eyebrow: "Twee manieren van reizen", titleA: "Plan zelf, of", titleB: "laat ons kiezen",
      diy: { badge: "Onafhankelijk", accent: "Doe het zelf", title: "Maak je eigen reis", description: "Volledige vrijheid. Stel je route samen, kies je verblijven en bepaal je eigen tempo met onze tools.", cta: "Plan nu" },
      curated: { badge: "Geselecteerd", accent: "Klaar om te gaan", title: "Geselecteerde last-minute trips", description: "Premium reizen gekozen door onze redactie. Klaar om te boeken en te vertrekken — geen compromissen.", cta: "Bekijk aanbiedingen" },
    },
    offers: {
      eyebrow: "Vakantieaanbiedingen", titleA: "Geselecteerde reizen", titleB: "dit seizoen", seeAll: "Alles bekijken", price: "Prijs", book: "Boek op Booking.com",
      items: {
        caribbean: { location: "Caraïben", title: "Turquoise wateren van Saint Lucia", description: "Zeven nachten in een boutique resort met privéstrand en ontbijt inbegrepen." },
        alps: { location: "Zwitserse Alpen", title: "Alpenchalet in Zermatt", description: "Vijf dagen in een houten chalet met uitzicht op de Matterhorn en privé-spa." },
        italy: { location: "Toscane, Italië", title: "Wijngaarden & villa's in Val d'Orcia", description: "Een week in een stenen villa tussen cipressen, met proeverijen bij lokale wijnhuizen." },
      },
    },
    footer: { tagline: "Gemaakt voor de nieuwsgierige reiziger." },
  },
  FR: {
    nav: { ecosystem: "ÉCOSYSTÈME VENDORA", energido: "ENERGIDO", zexo: "ZEXO", faq: "FAQ", contact: "CONTACT", login: "Connexion", menu: "Menu" },
    hero: { badge: "Vendora Travel", titleA: "Le monde au", titleB: "bout des doigts", subtitle: "Voyageons ensemble." },
    search: { destination: "Destination", destinationPlaceholder: "Où aller ?", dates: "Arrivée — Départ", datesPlaceholder: "Ajouter des dates", guests: "Voyageurs", guestsPlaceholder: "Ajouter des voyageurs", button: "Rechercher" },
    concept: {
      eyebrow: "Deux façons de voyager", titleA: "Planifiez vous-même, ou", titleB: "laissez-nous choisir",
      diy: { badge: "Indépendant", accent: "Faites-le vous-même", title: "Créez votre propre voyage", description: "Liberté totale. Composez votre itinéraire, choisissez vos hébergements et rythmez vos journées avec nos outils.", cta: "Planifier" },
      curated: { badge: "Sélectionné", accent: "Prêt à partir", title: "Escapades last-minute sélectionnées", description: "Des séjours premium choisis par nos éditeurs. Prêts à réserver, prêts à partir — sans compromis.", cta: "Voir les offres" },
    },
    offers: {
      eyebrow: "Offres de vacances", titleA: "Voyages sélectionnés", titleB: "cette saison", seeAll: "Tout voir", price: "Prix", book: "Réserver sur Booking.com",
      items: {
        caribbean: { location: "Caraïbes", title: "Eaux turquoise de Sainte-Lucie", description: "Sept nuits dans un resort boutique avec plage privée et petit-déjeuner inclus." },
        alps: { location: "Alpes suisses", title: "Chalet alpin à Zermatt", description: "Cinq jours dans un chalet en bois avec vue sur le Cervin et spa privé." },
        italy: { location: "Toscane, Italie", title: "Vignobles & villas du Val d'Orcia", description: "Une semaine dans une villa en pierre parmi les cyprès, avec dégustations chez les vignerons locaux." },
      },
    },
    footer: { tagline: "Conçu pour les curieux." },
  },
  DE: {
    nav: { ecosystem: "VENDORA ÖKOSYSTEM", energido: "ENERGIDO", zexo: "ZEXO", faq: "FAQ", contact: "KONTAKT", login: "Anmelden", menu: "Menü" },
    hero: { badge: "Vendora Travel", titleA: "Die Welt in", titleB: "deiner Hand", subtitle: "Reisen wir gemeinsam." },
    search: { destination: "Reiseziel", destinationPlaceholder: "Wohin?", dates: "Anreise — Abreise", datesPlaceholder: "Daten hinzufügen", guests: "Gäste", guestsPlaceholder: "Gäste hinzufügen", button: "Suchen" },
    concept: {
      eyebrow: "Zwei Arten zu reisen", titleA: "Selbst planen, oder", titleB: "lass uns wählen",
      diy: { badge: "Unabhängig", accent: "Mach es selbst", title: "Gestalte deine eigene Reise", description: "Volle Freiheit. Stelle deine Route zusammen, wähle deine Unterkünfte und bestimme dein Tempo mit unseren Tools.", cta: "Jetzt planen" },
      curated: { badge: "Handverlesen", accent: "Sofort startklar", title: "Ausgewählte Last-Minute-Reisen", description: "Premium-Reisen, ausgewählt von unseren Reiseredakteuren. Bereit zum Buchen und Abreisen — ohne Kompromisse.", cta: "Angebote ansehen" },
    },
    offers: {
      eyebrow: "Urlaubsangebote", titleA: "Ausgewählte Reisen", titleB: "in dieser Saison", seeAll: "Alle ansehen", price: "Preis", book: "Auf Booking.com buchen",
      items: {
        caribbean: { location: "Karibik", title: "Türkises Wasser von St. Lucia", description: "Sieben Nächte in einem Boutique-Resort mit Privatstrand und Frühstück inklusive." },
        alps: { location: "Schweizer Alpen", title: "Alpenchalet in Zermatt", description: "Fünf Tage in einem Holzchalet mit Matterhornblick und privatem Spa." },
        italy: { location: "Toskana, Italien", title: "Weingüter & Villen im Val d'Orcia", description: "Eine Woche in einer Steinvilla zwischen Zypressen, mit Verkostungen bei lokalen Weingütern." },
      },
    },
    footer: { tagline: "Gemacht für Neugierige." },
  },
  ES: {
    nav: { ecosystem: "ECOSISTEMA VENDORA", energido: "ENERGIDO", zexo: "ZEXO", faq: "FAQ", contact: "CONTACTO", login: "Iniciar sesión", menu: "Menú" },
    hero: { badge: "Vendora Travel", titleA: "El mundo al", titleB: "alcance de tu mano", subtitle: "Viajemos juntos." },
    search: { destination: "Destino", destinationPlaceholder: "¿A dónde?", dates: "Entrada — Salida", datesPlaceholder: "Añadir fechas", guests: "Huéspedes", guestsPlaceholder: "Añadir huéspedes", button: "Buscar" },
    concept: {
      eyebrow: "Dos formas de viajar", titleA: "Planifica tú mismo, o", titleB: "deja que elijamos",
      diy: { badge: "Independiente", accent: "Hazlo tú mismo", title: "Crea tu propio viaje", description: "Total autonomía. Diseña tu itinerario, elige tus alojamientos y marca tu ritmo con nuestras herramientas.", cta: "Planificar" },
      curated: { badge: "Seleccionado", accent: "Listo para salir", title: "Escapadas de última hora seleccionadas", description: "Viajes premium elegidos por nuestros editores. Listos para reservar y partir — sin concesiones.", cta: "Ver ofertas" },
    },
    offers: {
      eyebrow: "Ofertas de vacaciones", titleA: "Viajes seleccionados", titleB: "esta temporada", seeAll: "Ver todo", price: "Precio", book: "Reservar en Booking.com",
      items: {
        caribbean: { location: "Caribe", title: "Aguas turquesas de Santa Lucía", description: "Siete noches en un resort boutique con playa privada y desayuno incluido." },
        alps: { location: "Alpes suizos", title: "Chalet alpino en Zermatt", description: "Cinco días en un chalet de madera con vistas al Matterhorn y spa privado." },
        italy: { location: "Toscana, Italia", title: "Viñedos y villas en Val d'Orcia", description: "Una semana en una villa de piedra entre cipreses, con catas en bodegas locales." },
      },
    },
    footer: { tagline: "Creado para los curiosos." },
  },
  IT: {
    nav: { ecosystem: "ECOSISTEMA VENDORA", energido: "ENERGIDO", zexo: "ZEXO", faq: "FAQ", contact: "CONTATTI", login: "Accedi", menu: "Menu" },
    hero: { badge: "Vendora Travel", titleA: "Il mondo a", titleB: "portata di mano", subtitle: "Viaggiamo insieme." },
    search: { destination: "Destinazione", destinationPlaceholder: "Dove?", dates: "Check-in — Check-out", datesPlaceholder: "Aggiungi date", guests: "Ospiti", guestsPlaceholder: "Aggiungi ospiti", button: "Cerca" },
    concept: {
      eyebrow: "Due modi di viaggiare", titleA: "Pianifica tu, oppure", titleB: "lascia scegliere a noi",
      diy: { badge: "Indipendente", accent: "Fai da te", title: "Crea il tuo viaggio", description: "Piena autonomia. Costruisci il tuo itinerario, scegli i soggiorni e decidi il ritmo con i nostri strumenti.", cta: "Pianifica ora" },
      curated: { badge: "Selezionato", accent: "Pronto a partire", title: "Fughe last-minute selezionate", description: "Viaggi premium scelti dai nostri editor. Pronti da prenotare e partire — senza compromessi.", cta: "Scopri le offerte" },
    },
    offers: {
      eyebrow: "Offerte vacanze", titleA: "Viaggi selezionati", titleB: "questa stagione", seeAll: "Vedi tutto", price: "Prezzo", book: "Prenota su Booking.com",
      items: {
        caribbean: { location: "Caraibi", title: "Acque turchesi di Santa Lucia", description: "Sette notti in un boutique resort con spiaggia privata e colazione inclusa." },
        alps: { location: "Alpi svizzere", title: "Chalet alpino a Zermatt", description: "Cinque giorni in uno chalet di legno con vista sul Cervino e spa privata." },
        italy: { location: "Toscana, Italia", title: "Vigneti e ville in Val d'Orcia", description: "Una settimana in una villa in pietra tra i cipressi, con degustazioni nelle cantine locali." },
      },
    },
    footer: { tagline: "Creato per i curiosi." },
  },
  PT: {
    nav: { ecosystem: "ECOSSISTEMA VENDORA", energido: "ENERGIDO", zexo: "ZEXO", faq: "FAQ", contact: "CONTACTO", login: "Entrar", menu: "Menu" },
    hero: { badge: "Vendora Travel", titleA: "O mundo na", titleB: "palma da mão", subtitle: "Vamos viajar juntos." },
    search: { destination: "Destino", destinationPlaceholder: "Para onde?", dates: "Check-in — Check-out", datesPlaceholder: "Adicionar datas", guests: "Hóspedes", guestsPlaceholder: "Adicionar hóspedes", button: "Pesquisar" },
    concept: {
      eyebrow: "Duas formas de viajar", titleA: "Planeie você mesmo, ou", titleB: "deixe-nos escolher",
      diy: { badge: "Independente", accent: "Faça você mesmo", title: "Crie a sua própria viagem", description: "Total autonomia. Monte o seu itinerário, escolha as estadias e defina o seu ritmo com as nossas ferramentas.", cta: "Planear agora" },
      curated: { badge: "Selecionado", accent: "Pronto a partir", title: "Escapadas de última hora selecionadas", description: "Viagens premium escolhidas pelos nossos editores. Prontas a reservar e a partir — sem compromissos.", cta: "Ver ofertas" },
    },
    offers: {
      eyebrow: "Ofertas de férias", titleA: "Viagens selecionadas", titleB: "esta época", seeAll: "Ver tudo", price: "Preço", book: "Reservar no Booking.com",
      items: {
        caribbean: { location: "Caraíbas", title: "Águas turquesa de Santa Lúcia", description: "Sete noites num resort boutique com praia privada e pequeno-almoço incluído." },
        alps: { location: "Alpes suíços", title: "Chalé alpino em Zermatt", description: "Cinco dias num chalé de madeira com vista para o Matterhorn e spa privado." },
        italy: { location: "Toscana, Itália", title: "Vinhas e vilas em Val d'Orcia", description: "Uma semana numa vila de pedra entre ciprestes, com provas em vinícolas locais." },
      },
    },
    footer: { tagline: "Criado para os curiosos." },
  },
};
