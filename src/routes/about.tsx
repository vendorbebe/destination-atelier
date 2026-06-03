import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/SubPage";
import { buildLocaleHead } from "@/i18n/seo";
import { PAGES, PAGE_SLUGS } from "@/i18n/pages";

const PAGE = "about" as const;

export const Route = createFileRoute("/about")({
  head: () => {
    const c = PAGES.EN[PAGE];
    return buildLocaleHead("en", `/${PAGE_SLUGS[PAGE]}`, {
      title: `${c.title} – Vendora Travel`,
      description: c.lead,
    });
  },
  component: () => <SubPage pageKey={PAGE} locale="en" />,
});
