import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/HomePage";
import { buildLocaleHead } from "@/i18n/seo";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => buildLocaleHead("en"),
});

function Index() {
  return <HomePage locale="en" />;
}
