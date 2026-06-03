import type { Lang } from "./translations";

export type PageKey = "destinations" | "packages" | "about" | "contact";

export interface PageCopy {
  navLabel: string;
  title: string;
  lead: string;
  body: string;
  highlights: string[];
}

/** URL slugs are kept identical across locales for clean, predictable routing. */
export const PAGE_SLUGS: Record<PageKey, string> = {
  destinations: "destinations",
  packages: "packages",
  about: "about",
  contact: "contact",
};

export const PAGE_ORDER: PageKey[] = ["destinations", "packages", "about", "contact"];

export const PAGES: Record<Lang, Record<PageKey, PageCopy>> = {
  EN: {
    destinations: {
      navLabel: "Destinations",
      title: "Destinations worth the journey",
      lead: "From turquoise coastlines to alpine peaks, explore the places our travel editors love most.",
      body: "Every destination in our collection is chosen for its character, its season and the experiences only locals know. Browse by mood — sun, snow, city or wilderness — and start dreaming.",
      highlights: ["Hand-picked regions across four continents", "Best seasons and insider tips", "Trusted local partners on the ground"],
    },
    packages: {
      navLabel: "Packages",
      title: "Curated travel packages",
      lead: "Ready-to-book escapes with flights, stays and experiences bundled into one effortless trip.",
      body: "Skip the planning. Our packages combine premium accommodation, curated activities and flexible dates so you can simply pack and go — every detail already taken care of.",
      highlights: ["Flights, hotels and experiences in one price", "Flexible dates and free cancellation options", "24/7 support throughout your trip"],
    },
    about: {
      navLabel: "About",
      title: "About Vendora Travel",
      lead: "We craft personalised journeys for the curious — part of the Vendora ecosystem.",
      body: "Vendora Travel blends technology with human expertise. Our editors and local partners design trips that feel personal, sustainable and genuinely memorable, wherever you go.",
      highlights: ["Founded on a love of meaningful travel", "Local expertise in every destination", "A transparent, traveller-first approach"],
    },
    contact: {
      navLabel: "Contact",
      title: "Get in touch",
      lead: "Questions, ideas or a custom trip in mind? Our team is here to help.",
      body: "Reach out and a travel specialist will get back to you within one business day. We love a good challenge — the more unusual the request, the better.",
      highlights: ["Email: hello@vendoratravel.eu", "Response within 24 hours", "Tailor-made trips on request"],
    },
  },
  PL: {
    destinations: {
      navLabel: "Kierunki",
      title: "Kierunki warte podróży",
      lead: "Od turkusowych wybrzeży po alpejskie szczyty — odkryj miejsca, które kochają nasi redaktorzy.",
      body: "Każdy kierunek w naszej kolekcji wybieramy ze względu na charakter, sezon i doświadczenia znane tylko miejscowym. Przeglądaj według nastroju — słońce, śnieg, miasto czy dzika natura — i zacznij marzyć.",
      highlights: ["Starannie wybrane regiony na czterech kontynentach", "Najlepsze sezony i wskazówki insiderów", "Zaufani lokalni partnerzy na miejscu"],
    },
    packages: {
      navLabel: "Pakiety",
      title: "Wyselekcjonowane pakiety podróży",
      lead: "Gotowe do rezerwacji wyjazdy z lotami, noclegami i atrakcjami w jednej wygodnej ofercie.",
      body: "Pomiń planowanie. Nasze pakiety łączą ekskluzywne noclegi, wybrane atrakcje i elastyczne terminy — wystarczy się spakować i ruszyć w drogę.",
      highlights: ["Loty, hotele i atrakcje w jednej cenie", "Elastyczne terminy i opcje darmowej anulacji", "Wsparcie 24/7 podczas całej podróży"],
    },
    about: {
      navLabel: "O nas",
      title: "O Vendora Travel",
      lead: "Tworzymy spersonalizowane podróże dla ciekawych świata — część ekosystemu Vendora.",
      body: "Vendora Travel łączy technologię z wiedzą ludzi. Nasi redaktorzy i lokalni partnerzy projektują podróże, które są osobiste, zrównoważone i naprawdę niezapomniane.",
      highlights: ["Powstaliśmy z miłości do wartościowych podróży", "Lokalna wiedza w każdym kierunku", "Przejrzyste podejście stawiające podróżnika na pierwszym miejscu"],
    },
    contact: {
      navLabel: "Kontakt",
      title: "Skontaktuj się z nami",
      lead: "Masz pytania, pomysły lub plan podróży na miarę? Nasz zespół jest do dyspozycji.",
      body: "Napisz do nas, a specjalista ds. podróży odpowie w ciągu jednego dnia roboczego. Uwielbiamy wyzwania — im bardziej nietypowa prośba, tym lepiej.",
      highlights: ["E-mail: hello@vendoratravel.eu", "Odpowiedź w ciągu 24 godzin", "Podróże szyte na miarę na życzenie"],
    },
  },
  NL: {
    destinations: {
      navLabel: "Bestemmingen",
      title: "Bestemmingen die de reis waard zijn",
      lead: "Van turquoise kusten tot alpentoppen — ontdek de plekken die onze redactie het mooist vindt.",
      body: "Elke bestemming in onze collectie kiezen we om haar karakter, seizoen en ervaringen die alleen locals kennen. Blader op sfeer — zon, sneeuw, stad of wildernis — en begin te dromen.",
      highlights: ["Zorgvuldig gekozen regio's op vier continenten", "Beste seizoenen en insidertips", "Betrouwbare lokale partners ter plaatse"],
    },
    packages: {
      navLabel: "Pakketten",
      title: "Geselecteerde reispakketten",
      lead: "Direct boekbare reizen met vluchten, verblijven en ervaringen in één moeiteloze trip.",
      body: "Sla het plannen over. Onze pakketten combineren premium accommodatie, gekozen activiteiten en flexibele data — inpakken en vertrekken, alles is geregeld.",
      highlights: ["Vluchten, hotels en ervaringen in één prijs", "Flexibele data en gratis annuleringsopties", "24/7 ondersteuning tijdens je reis"],
    },
    about: {
      navLabel: "Over ons",
      title: "Over Vendora Travel",
      lead: "Wij maken persoonlijke reizen voor de nieuwsgierige reiziger — deel van het Vendora-ecosysteem.",
      body: "Vendora Travel combineert technologie met menselijke expertise. Onze redactie en lokale partners ontwerpen reizen die persoonlijk, duurzaam en echt onvergetelijk zijn.",
      highlights: ["Ontstaan uit liefde voor betekenisvol reizen", "Lokale expertise in elke bestemming", "Een transparante aanpak met de reiziger voorop"],
    },
    contact: {
      navLabel: "Contact",
      title: "Neem contact op",
      lead: "Vragen, ideeën of een reis op maat in gedachten? Ons team helpt je graag.",
      body: "Neem contact op en een reisspecialist reageert binnen één werkdag. Wij houden van een uitdaging — hoe ongewoner de vraag, hoe beter.",
      highlights: ["E-mail: hello@vendoratravel.eu", "Reactie binnen 24 uur", "Reizen op maat op aanvraag"],
    },
  },
  FR: {
    destinations: {
      navLabel: "Destinations",
      title: "Des destinations qui valent le voyage",
      lead: "Des côtes turquoise aux sommets alpins, explorez les lieux préférés de nos éditeurs voyage.",
      body: "Chaque destination de notre collection est choisie pour son caractère, sa saison et des expériences que seuls les locaux connaissent. Parcourez selon votre envie — soleil, neige, ville ou nature — et commencez à rêver.",
      highlights: ["Régions sélectionnées sur quatre continents", "Meilleures saisons et conseils d'initiés", "Partenaires locaux de confiance sur place"],
    },
    packages: {
      navLabel: "Forfaits",
      title: "Forfaits voyage sélectionnés",
      lead: "Des séjours prêts à réserver, vols, hébergements et expériences réunis en un voyage sans effort.",
      body: "Oubliez la planification. Nos forfaits réunissent hébergements premium, activités sélectionnées et dates flexibles — il ne reste qu'à faire vos valises.",
      highlights: ["Vols, hôtels et expériences en un seul prix", "Dates flexibles et options d'annulation gratuite", "Assistance 24/7 pendant tout le voyage"],
    },
    about: {
      navLabel: "À propos",
      title: "À propos de Vendora Travel",
      lead: "Nous concevons des voyages personnalisés pour les curieux — au sein de l'écosystème Vendora.",
      body: "Vendora Travel allie technologie et expertise humaine. Nos éditeurs et partenaires locaux créent des voyages personnels, durables et vraiment mémorables.",
      highlights: ["Né d'un amour du voyage qui a du sens", "Une expertise locale dans chaque destination", "Une approche transparente, le voyageur d'abord"],
    },
    contact: {
      navLabel: "Contact",
      title: "Contactez-nous",
      lead: "Des questions, des idées ou un voyage sur mesure en tête ? Notre équipe est là pour vous.",
      body: "Écrivez-nous et un spécialiste voyage vous répondra sous un jour ouvré. Nous adorons les défis — plus la demande est originale, mieux c'est.",
      highlights: ["E-mail : hello@vendoratravel.eu", "Réponse sous 24 heures", "Voyages sur mesure sur demande"],
    },
  },
  DE: {
    destinations: {
      navLabel: "Reiseziele",
      title: "Reiseziele, die die Reise wert sind",
      lead: "Von türkisen Küsten bis zu Alpengipfeln — entdecke die Lieblingsorte unserer Reiseredakteure.",
      body: "Jedes Ziel unserer Kollektion wählen wir nach Charakter, Saison und Erlebnissen, die nur Einheimische kennen. Stöbere nach Stimmung — Sonne, Schnee, Stadt oder Wildnis — und beginne zu träumen.",
      highlights: ["Handverlesene Regionen auf vier Kontinenten", "Beste Reisezeiten und Insider-Tipps", "Vertrauenswürdige lokale Partner vor Ort"],
    },
    packages: {
      navLabel: "Pakete",
      title: "Ausgewählte Reisepakete",
      lead: "Sofort buchbare Reisen mit Flügen, Unterkünften und Erlebnissen in einem mühelosen Trip.",
      body: "Spar dir die Planung. Unsere Pakete vereinen Premium-Unterkünfte, ausgewählte Aktivitäten und flexible Termine — einfach packen und los.",
      highlights: ["Flüge, Hotels und Erlebnisse in einem Preis", "Flexible Termine und kostenlose Stornooptionen", "24/7-Unterstützung während der ganzen Reise"],
    },
    about: {
      navLabel: "Über uns",
      title: "Über Vendora Travel",
      lead: "Wir gestalten persönliche Reisen für Neugierige — Teil des Vendora-Ökosystems.",
      body: "Vendora Travel verbindet Technologie mit menschlicher Expertise. Unsere Redakteure und lokalen Partner entwerfen Reisen, die persönlich, nachhaltig und wirklich unvergesslich sind.",
      highlights: ["Aus Liebe zu bedeutungsvollem Reisen entstanden", "Lokale Expertise in jedem Reiseziel", "Ein transparenter Ansatz, der den Reisenden in den Mittelpunkt stellt"],
    },
    contact: {
      navLabel: "Kontakt",
      title: "Kontakt aufnehmen",
      lead: "Fragen, Ideen oder eine maßgeschneiderte Reise im Kopf? Unser Team hilft gern.",
      body: "Melde dich, und ein Reisespezialist antwortet innerhalb eines Werktags. Wir lieben Herausforderungen — je ungewöhnlicher der Wunsch, desto besser.",
      highlights: ["E-Mail: hello@vendoratravel.eu", "Antwort innerhalb von 24 Stunden", "Maßgeschneiderte Reisen auf Anfrage"],
    },
  },
  ES: {
    destinations: {
      navLabel: "Destinos",
      title: "Destinos que valen el viaje",
      lead: "De costas turquesas a cumbres alpinas, explora los lugares favoritos de nuestros editores.",
      body: "Cada destino de nuestra colección se elige por su carácter, su temporada y las experiencias que solo conocen los locales. Explora por estado de ánimo — sol, nieve, ciudad o naturaleza — y empieza a soñar.",
      highlights: ["Regiones seleccionadas en cuatro continentes", "Mejores temporadas y consejos de expertos", "Socios locales de confianza sobre el terreno"],
    },
    packages: {
      navLabel: "Paquetes",
      title: "Paquetes de viaje seleccionados",
      lead: "Escapadas listas para reservar con vuelos, alojamientos y experiencias en un solo viaje.",
      body: "Olvídate de planificar. Nuestros paquetes combinan alojamiento premium, actividades seleccionadas y fechas flexibles — solo tienes que hacer la maleta.",
      highlights: ["Vuelos, hoteles y experiencias en un precio", "Fechas flexibles y opciones de cancelación gratis", "Soporte 24/7 durante todo el viaje"],
    },
    about: {
      navLabel: "Nosotros",
      title: "Sobre Vendora Travel",
      lead: "Creamos viajes personalizados para los curiosos — parte del ecosistema Vendora.",
      body: "Vendora Travel combina tecnología con experiencia humana. Nuestros editores y socios locales diseñan viajes personales, sostenibles y verdaderamente memorables.",
      highlights: ["Nacidos del amor por el viaje con sentido", "Experiencia local en cada destino", "Un enfoque transparente que prioriza al viajero"],
    },
    contact: {
      navLabel: "Contacto",
      title: "Ponte en contacto",
      lead: "¿Preguntas, ideas o un viaje a medida en mente? Nuestro equipo está aquí para ayudarte.",
      body: "Escríbenos y un especialista en viajes te responderá en un día laborable. Nos encantan los retos — cuanto más inusual sea la petición, mejor.",
      highlights: ["Correo: hello@vendoratravel.eu", "Respuesta en 24 horas", "Viajes a medida bajo petición"],
    },
  },
  IT: {
    destinations: {
      navLabel: "Destinazioni",
      title: "Destinazioni che valgono il viaggio",
      lead: "Dalle coste turchesi alle vette alpine, esplora i luoghi preferiti dai nostri editor di viaggio.",
      body: "Ogni destinazione della nostra collezione è scelta per il carattere, la stagione e le esperienze che solo i locali conoscono. Sfoglia per atmosfera — sole, neve, città o natura — e inizia a sognare.",
      highlights: ["Regioni selezionate in quattro continenti", "Migliori stagioni e consigli degli esperti", "Partner locali affidabili sul posto"],
    },
    packages: {
      navLabel: "Pacchetti",
      title: "Pacchetti viaggio selezionati",
      lead: "Fughe pronte da prenotare con voli, soggiorni ed esperienze in un unico viaggio senza pensieri.",
      body: "Salta la pianificazione. I nostri pacchetti uniscono soggiorni premium, attività selezionate e date flessibili — basta fare le valigie e partire.",
      highlights: ["Voli, hotel ed esperienze in un unico prezzo", "Date flessibili e opzioni di cancellazione gratuita", "Assistenza 24/7 per tutto il viaggio"],
    },
    about: {
      navLabel: "Chi siamo",
      title: "Chi è Vendora Travel",
      lead: "Creiamo viaggi personalizzati per i curiosi — parte dell'ecosistema Vendora.",
      body: "Vendora Travel unisce tecnologia ed esperienza umana. I nostri editor e partner locali progettano viaggi personali, sostenibili e davvero memorabili.",
      highlights: ["Nati dall'amore per il viaggio autentico", "Esperienza locale in ogni destinazione", "Un approccio trasparente, prima di tutto il viaggiatore"],
    },
    contact: {
      navLabel: "Contatti",
      title: "Contattaci",
      lead: "Domande, idee o un viaggio su misura in mente? Il nostro team è qui per aiutarti.",
      body: "Scrivici e uno specialista di viaggi ti risponderà entro un giorno lavorativo. Amiamo le sfide — più la richiesta è insolita, meglio è.",
      highlights: ["Email: hello@vendoratravel.eu", "Risposta entro 24 ore", "Viaggi su misura su richiesta"],
    },
  },
  PT: {
    destinations: {
      navLabel: "Destinos",
      title: "Destinos que valem a viagem",
      lead: "De costas turquesa a picos alpinos, explore os lugares preferidos dos nossos editores de viagem.",
      body: "Cada destino da nossa coleção é escolhido pelo carácter, pela estação e pelas experiências que só os locais conhecem. Navegue por ambiente — sol, neve, cidade ou natureza — e comece a sonhar.",
      highlights: ["Regiões selecionadas em quatro continentes", "Melhores estações e dicas de especialistas", "Parceiros locais de confiança no terreno"],
    },
    packages: {
      navLabel: "Pacotes",
      title: "Pacotes de viagem selecionados",
      lead: "Escapadas prontas a reservar com voos, estadias e experiências numa só viagem sem esforço.",
      body: "Esqueça o planeamento. Os nossos pacotes combinam alojamento premium, atividades selecionadas e datas flexíveis — é só fazer as malas e partir.",
      highlights: ["Voos, hotéis e experiências num só preço", "Datas flexíveis e opções de cancelamento grátis", "Apoio 24/7 durante toda a viagem"],
    },
    about: {
      navLabel: "Sobre",
      title: "Sobre a Vendora Travel",
      lead: "Criamos viagens personalizadas para os curiosos — parte do ecossistema Vendora.",
      body: "A Vendora Travel combina tecnologia com experiência humana. Os nossos editores e parceiros locais desenham viagens pessoais, sustentáveis e verdadeiramente memoráveis.",
      highlights: ["Nascida do amor por viagens com significado", "Experiência local em cada destino", "Uma abordagem transparente que coloca o viajante primeiro"],
    },
    contact: {
      navLabel: "Contacto",
      title: "Entre em contacto",
      lead: "Dúvidas, ideias ou uma viagem à medida em mente? A nossa equipa está aqui para ajudar.",
      body: "Fale connosco e um especialista de viagens responderá no prazo de um dia útil. Adoramos desafios — quanto mais invulgar o pedido, melhor.",
      highlights: ["Email: hello@vendoratravel.eu", "Resposta em 24 horas", "Viagens à medida a pedido"],
    },
  },
};
