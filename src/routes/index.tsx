import { createFileRoute } from "@tanstack/react-router";
import { ContactSection, Founder, Hero, Manifesto, Principles, Services, TechStack, ZurichAdvantage } from "@/components/page-sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Novalith Solutions — Software Development Zurich" },
      { name: "description", content: "Senior software development from Zurich: mobile apps, web platforms, DevOps and QA automation with Swiss accountability." },
      { property: "og:title", content: "Novalith Solutions — We ship products. Not decks." },
      { property: "og:description", content: "Senior developers. Swiss oversight. Software delivered on time, every time." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return (
    <>
      <Hero />
      <Manifesto />
      <Services />
      <Principles />
      <ZurichAdvantage />
      <Founder />
      <TechStack />
      <ContactSection />
    </>
  );
}
