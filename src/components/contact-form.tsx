import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    toast.success("Project brief received", { description: "We’ll respond within 24 hours." });
  }

  if (sent) {
    return (
      <div className="flex min-h-[480px] flex-col items-start justify-center border border-border bg-card p-8 md:p-12">
        <span className="mb-8 grid size-12 place-items-center rounded-full bg-primary text-primary-foreground"><Check /></span>
        <p className="eyebrow">Message received</p>
        <h3 className="mt-4 max-w-md text-3xl font-semibold md:text-5xl">Thank you. We’ll be in touch within 24 hours.</h3>
        <Button className="mt-8" variant="outline" onClick={() => setSent(false)}>Send another inquiry</Button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="grid gap-6 border border-border bg-card p-6 md:grid-cols-2 md:p-10">
      <Field label="Name" htmlFor="name"><Input id="name" name="name" required autoComplete="name" placeholder="Your name" /></Field>
      <Field label="Email" htmlFor="email"><Input id="email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" /></Field>
      <Field label="Company" htmlFor="company"><Input id="company" name="company" autoComplete="organization" placeholder="Company name" /></Field>
      <div className="hidden md:block" />
      <div className="md:col-span-2">
        <Field label="What are you building?" htmlFor="project"><Textarea id="project" name="project" required className="min-h-36" placeholder="Tell us about the product, the users, and where you are today." /></Field>
      </div>
      <Field label="Budget range" htmlFor="budget">
        <Select name="budget" required><SelectTrigger id="budget"><SelectValue placeholder="Choose a range" /></SelectTrigger><SelectContent><SelectItem value="under-20">Under €20K</SelectItem><SelectItem value="20-50">€20K–50K</SelectItem><SelectItem value="50-100">€50K–100K</SelectItem><SelectItem value="100-plus">€100K+</SelectItem><SelectItem value="unsure">Not sure yet</SelectItem></SelectContent></Select>
      </Field>
      <Field label="Timeline" htmlFor="timeline">
        <Select name="timeline" required><SelectTrigger id="timeline"><SelectValue placeholder="Choose a timeline" /></SelectTrigger><SelectContent><SelectItem value="asap">ASAP</SelectItem><SelectItem value="1-3">1–3 months</SelectItem><SelectItem value="3-6">3–6 months</SelectItem><SelectItem value="exploring">Just exploring</SelectItem></SelectContent></Select>
      </Field>
      <div className="flex flex-col items-start justify-between gap-5 md:col-span-2 md:flex-row md:items-center">
        <p className="max-w-lg text-xs leading-5 text-muted-foreground">By sending this form, you agree that Novalith Solutions may use your details to respond to your inquiry.</p>
        <Button type="submit" size="lg" className="h-12 w-full px-6 md:w-auto">Send inquiry <ArrowRight /></Button>
      </div>
    </form>
  );
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return <div className="grid gap-2"><Label htmlFor={htmlFor} className="text-xs uppercase text-muted-foreground">{label}</Label>{children}</div>;
}
