"use client";

import Image from "next/image";
import {
  Zap,
  KeyRound,
  Leaf,
  Check,
  ArrowRight,
  ArrowUpRight,
  Mail,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { LanguageSelector } from "@/components/language-selector";
import { AnimatedSection } from "@/components/animated-section";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/lib/language-context";
import { getLocalContent } from "@/lib/local-content";

const EMAIL = "mailto:adeline.lefe@gmail.com";
const CALENDLY = "https://calendly.com/adeline-lefebvre/15min";

const PROMISE_ICONS = [Zap, KeyRound, Leaf] as const;

export function LocalPage() {
  const { language } = useLanguage();
  const t = getLocalContent(language);
  const homeHref = `/${language}`;

  const promises = [t.promises.fast, t.promises.yours, t.promises.noFees];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12 lg:px-16">
          <div className="flex items-center gap-8">
            <a
              href="#top"
              className="shrink-0 whitespace-nowrap text-lg font-semibold tracking-tight"
            >
              Adeline Lefebvre
            </a>
            <div className="hidden items-center gap-1 lg:flex">
              <a
                href="#pricing"
                className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {t.nav.pricing}
              </a>
              <a
                href="#work"
                className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {t.nav.work}
              </a>
              <a
                href={homeHref}
                className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {t.nav.home}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <LanguageSelector />
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <a href="#contact">{t.nav.cta}</a>
            </Button>
          </div>
        </div>
      </nav>

      <main
        id="top"
        role="main"
        className="mx-auto max-w-6xl px-6 py-8 md:px-12 lg:px-16"
      >
        {/* Hero */}
        <section className="mb-24 pt-8 md:pt-12">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              {t.hero.title}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              {t.hero.subtitle}
            </p>
            <div className="pt-2">
              <Button asChild size="lg">
                <a href="#contact">
                  {t.hero.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Pour qui */}
        <AnimatedSection>
          <section className="mb-24 scroll-mt-20">
            <h2 className="mb-8 text-3xl font-bold tracking-tight">
              {t.forWho.title}
            </h2>
            <Card className="p-6 md:p-8">
              <ul className="space-y-4">
                {t.forWho.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      className="mt-1 h-5 w-5 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span className="text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </section>
        </AnimatedSection>

        {/* Ce qui change avec moi */}
        <AnimatedSection>
          <section className="mb-24 scroll-mt-20">
            <h2 className="mb-8 text-3xl font-bold tracking-tight">
              {t.promises.title}
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {promises.map((promise, i) => {
                const Icon = PROMISE_ICONS[i];
                return (
                  <Card
                    key={promise.title}
                    className="flex flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">
                      {promise.title}
                    </h3>
                    <p className="leading-relaxed text-muted-foreground">
                      {promise.text}
                    </p>
                  </Card>
                );
              })}
            </div>
          </section>
        </AnimatedSection>

        {/* Ce que comprend votre site */}
        <AnimatedSection>
          <section className="mb-24 scroll-mt-20">
            <h2 className="mb-8 text-3xl font-bold tracking-tight">
              {t.includes.title}
            </h2>
            <Card className="p-6 md:p-8">
              <ul className="grid gap-4 sm:grid-cols-2">
                {t.includes.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <p className="mt-4 text-sm text-muted-foreground">
              {t.includes.businessNote}
            </p>
          </section>
        </AnimatedSection>

        {/* Tarifs */}
        <AnimatedSection>
          <section id="pricing" className="mb-24 scroll-mt-20">
            <h2 className="mb-8 text-3xl font-bold tracking-tight">
              {t.pricing.title}
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {/* Essentiel */}
              <Card className="flex flex-col p-6">
                <h3 className="text-xl font-semibold">
                  {t.pricing.essential.name}
                </h3>
                <p className="mt-2 text-3xl font-bold tracking-tight">
                  {t.pricing.essential.price}
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {t.pricing.essential.text}
                </p>
              </Card>

              {/* Le site (mis en avant) */}
              <Card className="flex flex-col border-primary/40 p-6 ring-1 ring-primary/20">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">
                    {t.pricing.site.name}
                  </h3>
                  <Badge>{t.pricing.site.badge}</Badge>
                </div>
                <p className="mt-2 text-3xl font-bold tracking-tight">
                  {t.pricing.site.price}
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {t.pricing.site.text}
                </p>
              </Card>

              {/* Modules */}
              <Card className="flex flex-col p-6">
                <h3 className="text-xl font-semibold">
                  {t.pricing.modulesTitle}
                </h3>
                <ul className="mt-4 space-y-3">
                  {t.pricing.modules.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              {t.pricing.solidarity}
            </p>

            {/* Forfait Sérénité */}
            <Card className="mt-8 bg-secondary/40 p-6 md:p-8">
              <h3 className="text-xl font-semibold">
                {t.pricing.serenity.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {t.pricing.serenity.intro}
              </p>
              <ul className="mt-4 space-y-2">
                {t.pricing.serenity.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {t.pricing.serenity.outro}
              </p>
              <p className="mt-3 text-sm text-muted-foreground/80">
                {t.pricing.serenity.fineprint}
              </p>
            </Card>
          </section>
        </AnimatedSection>

        {/* Comment ça se passe */}
        <AnimatedSection>
          <section className="mb-24 scroll-mt-20">
            <h2 className="mb-8 text-3xl font-bold tracking-tight">
              {t.process.title}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {t.process.steps.map((step, i) => (
                <Card key={step.title} className="flex gap-4 p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-lg font-semibold text-accent">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold">{step.title}</h3>
                    <p className="leading-relaxed text-muted-foreground">
                      {step.text}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Réalisations */}
        <AnimatedSection>
          <section id="work" className="mb-24 scroll-mt-20">
            <h2 className="mb-8 text-3xl font-bold tracking-tight">
              {t.work.title}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {t.work.items.map((item) => (
                <Card
                  key={item.name}
                  className="flex flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
                >
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="mt-1 text-sm text-accent">{item.meta}</p>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    {item.cta}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Card>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Qui je suis */}
        <AnimatedSection>
          <section className="mb-24 scroll-mt-20">
            <h2 className="mb-8 text-3xl font-bold tracking-tight">
              {t.about.title}
            </h2>
            <div className="flex flex-col gap-8 md:flex-row md:items-start">
              <div className="relative h-40 w-40 shrink-0 self-center md:h-48 md:w-48 md:self-start">
                <div className="absolute -inset-0.5 rounded-full bg-linear-to-br from-primary/40 via-primary/20 to-accent/30 blur-[2px]" />
                <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-primary/20">
                  <Image
                    src="/profile-photo.jpg"
                    alt="Adeline Lefebvre"
                    fill
                    sizes="(min-width: 768px) 192px, 160px"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                {t.about.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 24)}
                    className="text-lg leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
                <a
                  href={homeHref}
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  {t.about.link}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* FAQ */}
        <AnimatedSection>
          <section className="mb-24 scroll-mt-20">
            <h2 className="mb-8 text-3xl font-bold tracking-tight">
              {t.faq.title}
            </h2>
            <Card className="px-6 py-2 md:px-8">
              <Accordion type="single" collapsible>
                {t.faq.items.map((item) => (
                  <AccordionItem key={item.q} value={item.q}>
                    <AccordionTrigger className="text-base font-medium">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </section>
        </AnimatedSection>

        {/* Contact / CTA final */}
        <AnimatedSection>
          <section id="contact" className="mb-24 scroll-mt-20">
            <h2 className="mb-8 text-3xl font-bold tracking-tight">
              {t.cta.title}
            </h2>
            <Card className="p-6 md:p-8">
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {t.cta.text}
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  {t.cta.hesitant}
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Button asChild>
                    <a href={EMAIL}>
                      <Mail className="mr-2 h-4 w-4" />
                      {t.cta.email}
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
                      <Phone className="mr-2 h-4 w-4" />
                      {t.cta.call}
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </section>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  );
}
