import { Link } from "@tanstack/react-router";
import { ArrowRight, Blocks, CheckCircle2, CloudCog, Code2, ExternalLink, Smartphone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";

export const services = [
  { icon: Smartphone, title: "Mobile Development", text: "Native iOS and Android or a single cross-platform codebase—built for speed, reliability, and real-world use.", tags: ["Swift", "Kotlin", "React Native", "Flutter"] },
  { icon: Code2, title: "Software & Web Platforms", text: "Custom web applications, SaaS products, and APIs with clean architecture designed to scale.", tags: ["React", "Node.js", "Python", "TypeScript", "PostgreSQL"] },
  { icon: CloudCog, title: "DevOps, QA Automation & Cloud", text: "Delivery pipelines, automated testing, containers, infrastructure, and observability that keep releases predictable.", tags: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "GitHub Actions"] },
];

export const principles = [
  ["Senior hands only", "Every engineer brings at least five years of hard-won delivery experience."],
  ["One point of contact in Zurich", "You talk to Yana. She owns the brief, the team, and the outcome."],
  ["You see progress weekly", "A working product every sprint—not status slides or vague percentages."],
  ["Architecture before code", "We establish the right foundation at kickoff, before velocity creates debt."],
  ["Swiss delivery standards", "Deadlines are dates. Budgets are agreements. Quality is non-negotiable."],
  ["We stay until it ships", "Support, iteration, stability—we remain accountable beyond the final handoff."],
];

export const tech = ["React Native", "Flutter", "Swift", "Kotlin", "React", "Next.js", "Node.js", "Python", "TypeScript", "PostgreSQL", "Docker", "Kubernetes", "Terraform", "AWS", "GCP", "GitHub Actions", "Playwright", "OpenAI"];

export function Hero() {
  return <section className="hero-grid relative flex min-h-screen items-end overflow-hidden border-b border-border pb-20 pt-36 md:pb-24"><div className="hero-image absolute inset-0" /><div className="site-container relative z-10 w-full"><div className="status-pill"><span className="size-1.5 rounded-full bg-success shadow-[0_0_0_4px_color-mix(in_oklab,var(--success)_18%,transparent)]" />Zurich, Switzerland — accepting new projects</div><h1 className="mt-8 max-w-5xl text-6xl font-semibold leading-[0.94] md:text-8xl lg:text-[7.5rem]">We ship products.<br /><span className="text-muted-foreground">Not decks.</span></h1><p className="mt-8 max-w-2xl text-lg leading-8 text-secondary-foreground md:text-xl">Senior developers. Swiss oversight. Mobile apps, software platforms, DevOps and QA automation — delivered on time, every time.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button asChild size="lg" className="h-12 px-6"><Link to="/start-a-project">Start a project <ArrowRight /></Link></Button><Button asChild size="lg" variant="outline" className="h-12 px-6"><Link to="/what-we-build">See our work</Link></Button></div><div className="mt-20 grid gap-px border border-border bg-border sm:grid-cols-3">{[["13+","Years delivery experience"],["5+ yr","Senior dev average"],["Zurich","Based accountability"]].map(([value,label]) => <div key={label} className="bg-background/90 p-5 backdrop-blur"><p className="text-2xl font-semibold">{value}</p><p className="mt-1 text-xs text-muted-foreground">{label}</p></div>)}</div></div></section>;
}

export function Manifesto() {
  const items = ["Strategy without execution is just a presentation.", "Speed without quality is technical debt with a deadline.", "We bring both. Senior team. Swiss standards. Global pace."];
  return <section className="section border-b border-border"><div className="site-container"><p className="eyebrow">02 — Manifesto</p><div className="mt-14">{items.map((item, index) => <div key={item} className="grid gap-4 border-t border-border py-8 md:grid-cols-[100px_1fr] md:py-10"><span className="text-sm text-primary">0{index + 1}</span><h2 className="max-w-5xl text-3xl font-medium leading-tight md:text-5xl">{item}</h2></div>)}</div><div className="mt-14 grid gap-8 border-l-2 border-primary pl-6 md:grid-cols-2 md:pl-10"><h3 className="text-2xl font-semibold">Boutique quality.<br />Offshore speed.</h3><p className="max-w-2xl text-base leading-8 text-muted-foreground">Most agencies choose one: boutique quality OR offshore speed. We built the model that gives you both — a Zurich-based Project Director who owns your outcome, backed by a senior development team that ships. No juniors. No handoffs. No surprises.</p></div></div></section>;
}

export function Services({ detailed = false }: { detailed?: boolean }) {
  return <section className="section border-b border-border"><div className="site-container"><SectionHeading eyebrow="03 — What we build" title="Three things we do exceptionally well." text={detailed ? "Focused disciplines, staffed by senior engineers who understand the entire product lifecycle." : undefined} /><div className="mt-14 grid gap-px border border-border bg-border lg:grid-cols-3">{services.map((service, index) => { const Icon=service.icon; return <article key={service.title} className="group bg-card p-7 transition-colors duration-300 hover:bg-accent md:p-9"><div className="flex items-center justify-between"><Icon className="size-7 text-primary" strokeWidth={1.5}/><span className="text-xs text-muted-foreground">0{index + 1}</span></div><h3 className="mt-16 text-2xl font-semibold">{service.title}</h3><p className="mt-4 min-h-24 text-sm leading-7 text-muted-foreground">{service.text}</p><div className="mt-8 flex flex-wrap gap-2">{service.tags.map(tag => <span className="tech-tag" key={tag}>{tag}</span>)}</div></article>})}</div></div></section>;
}

export function Principles() {
  return <section className="section border-b border-border"><div className="site-container"><SectionHeading eyebrow="04 — How we work" title="How we actually work." text="Principles we don’t compromise on." /><div className="mt-14 grid border-l border-t border-border md:grid-cols-2">{principles.map(([title,text], index) => <article key={title} className="border-b border-r border-border p-7 md:p-9"><span className="text-xs text-primary">0{index+1}</span><h3 className="mt-8 text-xl font-semibold">{title}</h3><p className="mt-3 max-w-lg text-sm leading-7 text-muted-foreground">{text}</p></article>)}</div></div></section>;
}

export function ZurichAdvantage() {
 return <section className="section border-b border-border"><div className="site-container"><p className="eyebrow">05 — The Zurich advantage</p><div className="relative mt-14 grid gap-px bg-border lg:grid-cols-2"><article className="bg-card p-8 md:p-12"><p className="text-xs text-primary">LOCAL DIRECTION</p><h2 className="mt-5 text-3xl font-semibold">Why having someone in Zurich matters.</h2><Benefit text="Your working day, your business context, your language."/><Benefit text="One accountable owner close enough to meet."/><Benefit text="Swiss quality standards applied to every decision."/></article><article className="bg-card p-8 md:p-12"><p className="text-xs text-primary">GLOBAL ENGINEERING</p><h2 className="mt-5 text-3xl font-semibold">Why our development team is offshore.</h2><Benefit text="Senior craft drawn from the best global talent."/><Benefit text="A stable, focused team built around your product."/><Benefit text="Enterprise quality without Zurich overhead."/></article><div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 border border-primary bg-background px-4 py-2 text-xs font-semibold text-primary lg:block">BEST OF BOTH WORLDS</div></div></div></section>;
}

function Benefit({text}:{text:string}) { return <p className="mt-6 flex items-start gap-3 text-sm leading-6 text-muted-foreground"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary"/>{text}</p> }

export function Founder() {
 return <section className="section border-b border-border"><div className="site-container grid gap-14 lg:grid-cols-[0.8fr_1.2fr]"><div className="founder-mark relative flex min-h-96 items-end overflow-hidden border border-border bg-card p-8"><Blocks className="absolute -right-12 -top-12 size-72 text-primary opacity-20" strokeWidth={0.5}/><div className="relative"><span className="text-7xl font-semibold text-primary">YM</span><p className="mt-5 text-sm text-muted-foreground">Zurich, Switzerland</p></div></div><div className="flex flex-col justify-center"><p className="eyebrow">06 — Founder</p><h2 className="mt-6 text-4xl font-semibold md:text-6xl">Yana Maletska</h2><p className="mt-3 text-sm text-primary">Founder & Project Director · Zurich</p><p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">12+ years delivering complex technology programmes at Meta (Oculus VR), Atlassian, and Pilatus Aircraft — managing distributed teams across three continents, launching AI products, and reporting to C-suite.</p><div className="mt-10 flex flex-wrap gap-7 border-y border-border py-6 text-lg font-semibold text-secondary-foreground"><span>Meta</span><span>Atlassian</span><span>Pilatus Aircraft</span></div><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-medium hover:text-primary">LinkedIn <ExternalLink className="size-4"/></a></div></div></section>;
}

export function TechStack() { return <section className="section border-b border-border"><div className="site-container"><SectionHeading eyebrow="07 — Technology" title="Modern tools. Proven foundations."/><div className="mt-12 grid grid-cols-2 border-l border-t border-border sm:grid-cols-3 lg:grid-cols-6">{tech.map(item => <div className="grid min-h-20 place-items-center border-b border-r border-border bg-card px-3 text-center text-xs font-medium text-muted-foreground transition-colors hover:text-foreground" key={item}>{item}</div>)}</div></div></section> }

export function ContactSection() { return <section className="section"><div className="site-container"><div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]"><div><p className="eyebrow">08 — Start a project</p><h2 className="mt-6 text-4xl font-semibold md:text-6xl">Bring us the hard problem.</h2><p className="mt-6 text-base leading-7 text-muted-foreground">Zurich, Switzerland<br/>Response within 24 hours<br/>Your information stays private.</p></div><ContactForm/></div></div></section> }

export function SectionHeading({eyebrow,title,text}:{eyebrow:string;title:string;text?:string}) { return <div className="grid gap-6 md:grid-cols-2 md:items-end"><div><p className="eyebrow">{eyebrow}</p><h2 className="mt-6 max-w-2xl text-4xl font-semibold leading-tight md:text-6xl">{title}</h2></div>{text && <p className="max-w-lg text-base leading-7 text-muted-foreground md:justify-self-end">{text}</p>}</div> }
