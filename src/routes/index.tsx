import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { CoreConcept } from "@/components/CoreConcept";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Voyara — Boutique Travel, Reimagined" },
      { name: "description", content: "Curated last-minute escapes and self-planned journeys. Premium boutique travel for considered travellers." },
      { property: "og:title", content: "Voyara — Boutique Travel, Reimagined" },
      { property: "og:description", content: "Curated last-minute escapes and self-planned journeys." },
    ],
  }),
});

function Index() {
  return (
    <main>
      <Hero />
      <CoreConcept />
      <Footer />
    </main>
  );
}
