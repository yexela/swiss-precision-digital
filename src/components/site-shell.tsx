import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/what-we-build" as const, label: "What we build" },
  { to: "/how-we-work" as const, label: "How we work" },
  { to: "/about" as const, label: "About" },
  { to: "/start-a-project" as const, label: "Start a project" },
];

export function SiteShell({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [light, setLight] = useState(false);
  const [cookie, setCookie] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("novalith-theme");
    const nextLight = saved === "light";
    setLight(nextLight);
    document.documentElement.classList.toggle("light", nextLight);
    document.documentElement.classList.toggle("dark", !nextLight);
    setCookie(window.localStorage.getItem("novalith-cookie") === null);
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toggleTheme() {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    document.documentElement.classList.toggle("dark", !next);
    window.localStorage.setItem("novalith-theme", next ? "light" : "dark");
  }

  function setCookieChoice(value: string) {
    window.localStorage.setItem("novalith-cookie", value);
    setCookie(false);
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className={cn("fixed inset-x-0 top-0 z-40 border-b border-transparent transition-all duration-300", scrolled && "border-border bg-background/85 backdrop-blur-xl")}>
        <div className="site-container grid h-18 grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
          <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Novalith Solutions home">
            <span className="grid size-7 shrink-0 place-items-center bg-primary text-xs font-bold text-primary-foreground">N</span>
            <span className="truncate text-sm font-semibold">Novalith Solutions</span>
          </Link>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {nav.slice(0, 3).map((item) => <Link key={item.to} to={item.to} className="nav-link" activeProps={{ className: "text-foreground" }}>{item.label}</Link>)}
            <Button asChild size="sm"><Link to="/start-a-project">Start a project <ArrowRight /></Link></Button>
            <Button onClick={toggleTheme} size="icon" variant="ghost" aria-label={light ? "Switch to dark mode" : "Switch to light mode"}>{light ? <Moon /> : <Sun />}</Button>
          </nav>
          <div className="flex items-center gap-1 lg:hidden">
            <Button onClick={toggleTheme} size="icon" variant="ghost" aria-label={light ? "Switch to dark mode" : "Switch to light mode"}>{light ? <Moon /> : <Sun />}</Button>
            <Button onClick={() => setMenuOpen(true)} size="icon" variant="ghost" aria-label="Open menu"><Menu /></Button>
          </div>
        </div>
      </header>

      {menuOpen && <div className="fixed inset-0 z-50 flex flex-col bg-background p-6 lg:hidden">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center"><span className="text-sm font-semibold">Novalith Solutions</span><Button size="icon" variant="ghost" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X /></Button></div>
        <nav className="mt-20 flex flex-col" aria-label="Mobile navigation">
          {nav.map((item, index) => <Link key={item.to} to={item.to} onClick={() => setMenuOpen(false)} className="border-b border-border py-5 text-3xl font-medium"><span className="mr-4 text-xs text-primary">0{index + 1}</span>{item.label}</Link>)}
        </nav>
        <p className="mt-auto text-sm text-muted-foreground">Zurich, Switzerland<br />Swiss direction. Global execution.</p>
      </div>}

      <main>{children}</main>
      <Footer />
      <BookingButton />
      {cookie && <div className="fixed bottom-4 left-4 z-40 max-w-md border border-border bg-card p-5 shadow-2xl">
        <p className="text-sm font-medium">Your privacy matters.</p><p className="mt-2 text-xs leading-5 text-muted-foreground">We use essential cookies to remember your preferences. No advertising trackers.</p>
        <div className="mt-4 flex gap-2"><Button size="sm" onClick={() => setCookieChoice("accepted")}>Accept</Button><Button size="sm" variant="outline" onClick={() => setCookieChoice("declined")}>Decline</Button></div>
      </div>}
      <Toaster position="top-right" />
    </div>
  );
}

function BookingButton() {
  return <Dialog><DialogTrigger asChild><Button className="fixed bottom-5 right-5 z-30 h-12 rounded-full px-5 shadow-xl">Book a free call <ArrowRight /></Button></DialogTrigger><DialogContent className="max-w-md"><DialogHeader><p className="eyebrow">30-minute introduction</p><DialogTitle className="mt-3 text-3xl">Let’s talk about what you’re building.</DialogTitle><DialogDescription className="pt-2 leading-6">Share a few details first. Yana will reply within 24 hours with the right next step.</DialogDescription></DialogHeader><Button asChild size="lg" className="mt-4"><Link to="/start-a-project">Start your project brief <ArrowRight /></Link></Button></DialogContent></Dialog>;
}

function Footer() {
  return <footer className="border-t border-border bg-card"><div className="site-container grid gap-10 py-12 md:grid-cols-[1fr_auto] md:items-end"><div><Link to="/" className="text-lg font-semibold">Novalith Solutions</Link><p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">Swiss-based direction. Senior global engineering. Software that ships.</p></div><div className="grid gap-2 text-sm text-muted-foreground md:text-right"><p>© 2026 Novalith Solutions</p><p>Swiss-registered · Zurich, Switzerland</p><div className="flex gap-4 md:justify-end"><Link to="/about" className="hover:text-foreground">About</Link><Link to="/start-a-project" className="hover:text-foreground">Contact</Link></div></div></div></footer>;
}
