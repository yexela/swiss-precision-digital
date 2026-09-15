import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Services, TechStack } from "@/components/page-sections";

export const Route = createFileRoute("/what-we-build")({
  head: () => ({ meta: [{ title: "Software Development Services — Novalith" }, { name: "description", content: "Senior mobile, web platform, DevOps, cloud and QA automation engineering from Novalith Solutions." }, { property: "og:title", content: "What We Build — Novalith Solutions" }, { property: "og:description", content: "Mobile products, software platforms, DevOps and QA automation built by senior engineers." }, { property: "og:type", content: "website" }, { property: "og:url", content: "/what-we-build" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: "/what-we-build" }] }),
  component: Page,
});
function Page() { return <><section className="section pt-36 md:pt-44"><div className="site-container"><p className="eyebrow">Capabilities</p><h1 className="mt-7 max-w-5xl text-5xl font-semibold leading-tight md:text-8xl">Software engineering for products that have to work.</h1><p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">We are not a consulting firm. We build, test, deploy, and improve production software with one senior, accountable team.</p></div></section><Services detailed /><TechStack/><section className="section"><div className="site-container text-center"><h2 className="text-4xl font-semibold md:text-6xl">Have a difficult build?</h2><Button asChild size="lg" className="mt-8"><Link to="/start-a-project">Talk to Yana <ArrowRight/></Link></Button></div></section></> }
