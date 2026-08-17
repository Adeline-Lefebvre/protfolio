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
  MapPin,
  Building2,
  Sparkles,
  PiggyBank,
  Palette,
  Smartphone,
  SquarePen,
  Newspaper,
  Search,
  Globe,
  ShieldCheck,
  LifeBuoy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Footer } from "@/components/footer";
import { Testimonial } from "@/components/testimonial";
import { LocalNav } from "@/components/nav/site-nav";
import { Reveal } from "@/components/local/reveal";
import { TopoField, HandUnderline } from "@/components/local/topo";
import { Eyebrow } from "@/components/eyebrow";
import { ContactForm } from "@/components/contact-form";
import { useLanguage } from "@/lib/language-context";
import { getLocalContent } from "@/lib/local-content";

const EMAIL = "mailto:adeline.lefe@gmail.com";
const CALENDLY = "https://calendly.com/adeline-lefebvre/15min";

const PROMISE_ICONS = [Zap, KeyRound, Leaf] as const;
const FORWHO_ICONS = [Building2, Sparkles, PiggyBank, KeyRound] as const;
const INCLUDES_ICONS = [
  Palette,
  Smartphone,
  SquarePen,
  Newspaper,
  Search,
] as const;
const SERENITY_ICONS = [Globe, ShieldCheck, LifeBuoy] as const;
const CHIP_COLORS = [
  "bg-primary",
  "bg-accent",
  "bg-coral",
  "bg-[#cf7f22]",
  "bg-accent-bright",
] as const;
// Sur la bande verte, on n'utilise que des teintes chaudes qui ressortent.
const WARM_CHIPS = ["bg-primary", "bg-coral", "bg-[#cf7f22]"] as const;

const CARD =
  "rounded-2xl border border-border/70 bg-card shadow-[0_1px_2px_rgba(42,42,40,0.04),0_18px_36px_-24px_rgba(47,74,60,0.16)]";
const CARD_HOVER =
  "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(42,42,40,0.05),0_26px_50px_-24px_rgba(47,74,60,0.26)]";
const LINK_FOCUS =
  "rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

export function LocalPage() {
  const { language } = useLanguage();
  const t = getLocalContent(language);
  const homeHref = `/${language}`;
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

  const promises = [t.promises.fast, t.promises.yours, t.promises.noFees];

  return (
    <div className="min-h-dvh">
      <LocalNav />

      <main id="main" tabIndex={-1} className="outline-none">
        {/* Hero */}
        <section className="relative overflow-hidden pt-24 pb-16 md:pt-36 md:pb-36">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -left-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl" />
            <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
            <TopoField className="absolute -right-28 -top-16 h-[40rem] w-[40rem] text-accent/[0.07]" />
          </div>
          <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
            <div className="max-w-3xl">
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
                <Leaf className="h-4 w-4" />
                {t.hero.eyebrow}
              </p>
              {/* leading explicite : la taille en clamp ne vient pas avec une
                  hauteur de ligne, et l'ancrage du soulignement en depend. */}
              <h1 className="text-balance text-[clamp(1.75rem,6vw+0.5rem,2.25rem)] leading-[1.2] tracking-tight sm:text-[3rem] md:text-[3.75rem]">
                {t.hero.titlePre}
                <span className="relative inline-block">
                  <em className="font-normal italic">{t.hero.titleEm}</em>
                  {/* Ancre en em sous la ligne de base, et non a une distance
                      fixe sous la boite de ligne : le trait reste a la meme
                      distance optique du texte a toutes les tailles, et surtout
                      il ne sort jamais de sa propre ligne. En anglais et en
                      espagnol le mot souligne est suivi d'un autre mot, donc il
                      retombait sur les hampes de la ligne d'en dessous des que
                      le titre passait a plusieurs lignes. */}
                  <HandUnderline className="draw-underline absolute left-0 top-[0.95em] h-[0.22em] w-full text-amber" />
                </span>
                {t.hero.titlePost}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70 md:text-xl">
                {t.hero.subtitle}
              </p>
              <div className="mt-6 flex flex-wrap gap-3 md:mt-8">
                <Button asChild size="lg">
                  <a href="#contact">
                    {t.hero.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#work">{t.hero.ctaSecondary}</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pour qui */}
        <section
          id="forwho"
          className="scroll-mt-24 bg-secondary/50 py-20 md:py-28"
        >
          <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
            <Reveal>
              <Eyebrow>{t.eyebrows.forWho}</Eyebrow>
              <h2 className="mb-8 text-3xl tracking-tight md:text-4xl">
                {t.forWho.title}
              </h2>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {t.forWho.items.map((item, i) => {
                const Icon = FORWHO_ICONS[i];
                return (
                  <Reveal key={item} delay={i * 70} className="h-full">
                    <div
                      className={`${CARD} ${CARD_HOVER} flex h-full items-center gap-4 p-5`}
                    >
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white ${CHIP_COLORS[i % CHIP_COLORS.length]}`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="min-w-0 text-lg leading-relaxed">
                        {item}
                      </span>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Ce qui change avec moi (bande vert sapin) */}
        <section
          id="promises"
          className="relative scroll-mt-24 overflow-hidden bg-linear-to-br from-accent-deep via-accent to-accent-bright py-20 text-background md:py-28"
        >
          <TopoField className="pointer-events-none absolute -left-24 top-0 h-[42rem] w-[42rem] text-background/[0.05]" />
          <TopoField className="pointer-events-none absolute -right-32 bottom-0 h-[38rem] w-[38rem] text-background/[0.04]" />
          <div className="relative mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
            <Reveal>
              <Eyebrow tone="amber">{t.eyebrows.promises}</Eyebrow>
              <h2 className="mb-10 text-3xl tracking-tight text-background md:text-4xl">
                {t.promises.title}
              </h2>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-3">
              {promises.map((promise, i) => {
                const Icon = PROMISE_ICONS[i];
                return (
                  <Reveal key={promise.title} delay={i * 90}>
                    <div className="h-full rounded-2xl border border-background/15 bg-background/[0.06] p-6">
                      <div
                        className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl text-white ${WARM_CHIPS[i % WARM_CHIPS.length]}`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mb-2 text-xl font-semibold">
                        {promise.title}
                      </h3>
                      <p className="leading-relaxed text-background/75">
                        {promise.text}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Ce que comprend votre site */}
        <section id="includes" className="scroll-mt-24 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
            <Reveal>
              <Eyebrow>{t.eyebrows.includes}</Eyebrow>
              <h2 className="mb-8 text-3xl tracking-tight md:text-4xl">
                {t.includes.title}
              </h2>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {t.includes.items.map((item, i) => {
                const Icon = INCLUDES_ICONS[i];
                return (
                  <Reveal key={item} delay={i * 70} className="h-full">
                    <div
                      className={`${CARD} ${CARD_HOVER} flex h-full items-center gap-4 p-5`}
                    >
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white ${CHIP_COLORS[i % CHIP_COLORS.length]}`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="min-w-0 leading-relaxed">{item}</span>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tarifs */}
        <section id="pricing" className="scroll-mt-24 bg-secondary/50 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
            <Reveal>
              <Eyebrow>{t.eyebrows.pricing}</Eyebrow>
              <h2 className="mb-10 text-3xl tracking-tight md:text-4xl">
                {t.pricing.title}
              </h2>
            </Reveal>
            <div className="grid items-stretch gap-6 md:grid-cols-3">
              {/* Essentiel */}
              <Reveal className="h-full">
                <div className={`${CARD} ${CARD_HOVER} flex h-full flex-col p-6`}>
                  <h3 className="text-xl font-semibold">
                    {t.pricing.essential.name}
                  </h3>
                  <p className="mt-3 font-display text-4xl font-bold tabular-nums md:text-5xl">
                    {t.pricing.essential.price}
                  </p>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {t.pricing.essential.text}
                  </p>
                </div>
              </Reveal>

              {/* Le site (mis en avant) */}
              <Reveal delay={90} className="h-full">
                <div
                  className={`${CARD} relative flex h-full flex-col p-6 ring-2 ring-accent/40`}
                >
                  <span className="absolute -top-3 left-6 rounded-full bg-amber px-3 py-1 text-xs font-semibold text-amber-foreground">
                    {t.pricing.site.badge}
                  </span>
                  <h3 className="text-xl font-semibold">{t.pricing.site.name}</h3>
                  <p className="mt-3 font-display text-4xl font-bold tabular-nums md:text-5xl">
                    {t.pricing.site.price}
                  </p>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {t.pricing.site.text}
                  </p>
                </div>
              </Reveal>

              {/* Modules */}
              <Reveal delay={180} className="h-full">
                <div className={`${CARD} ${CARD_HOVER} flex h-full flex-col p-6`}>
                  <h3 className="text-xl font-semibold">
                    {t.pricing.modulesTitle}
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {t.pricing.modules.map((item) => (
                      <li
                        key={item}
                        className="flex min-w-0 items-start gap-2 text-sm"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            <div className="mt-6 flex justify-center">
              <a
                href="#contact"
                className="flex min-h-11 items-center rounded-full bg-accent/10 px-4 text-center text-sm text-accent transition-colors active:bg-accent/25 hover:bg-accent/20"
              >
                {t.pricing.solidarity}
              </a>
            </div>

            {/* Forfait Sérénité */}
            <Reveal>
              <div className={`${CARD} mt-8 p-6 md:p-8`}>
                <div className="h-1 w-12 rounded-full bg-accent" />
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-semibold">
                    {t.pricing.serenity.title}
                  </h3>
                  <span className="rounded-full bg-secondary px-3 py-0.5 text-xs font-medium text-muted-foreground">
                    {t.pricing.serenity.optional}
                  </span>
                </div>
                <p className="mt-3 max-w-prose leading-relaxed text-muted-foreground">
                  {t.pricing.serenity.intro}
                </p>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {t.pricing.serenity.items.map((item, i) => {
                    const Icon = SERENITY_ICONS[i];
                    return (
                      <div key={item} className="rounded-xl bg-secondary/40 p-4">
                        <div
                          className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg text-white ${CHIP_COLORS[i % CHIP_COLORS.length]}`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {item}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <p className="mt-4 max-w-prose leading-relaxed text-muted-foreground">
                  {t.pricing.serenity.outro}
                </p>
                <p className="mt-3 text-sm text-muted-foreground/90">
                  {t.pricing.serenity.fineprint}
                </p>
              </div>
            </Reveal>

            <div className="mt-12 flex justify-center">
              <Button asChild size="lg">
                <a href="#contact">{t.nav.cta}</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Comment ça se passe */}
        <section id="process" className="scroll-mt-24 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
            <Reveal>
              <Eyebrow>{t.eyebrows.process}</Eyebrow>
              <h2 className="mb-10 text-3xl tracking-tight md:text-4xl">
                {t.process.title}
              </h2>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2">
              {t.process.steps.map((step, i) => (
                <Reveal key={step.title} delay={i * 80} className="h-full">
                  <div className={`${CARD} flex h-full gap-5 p-6`}>
                    <span className="font-display text-4xl font-semibold leading-none text-primary">
                      {i + 1}
                    </span>
                    <div className="min-w-0">
                      <h3 className="mb-1 text-lg font-semibold">
                        {step.title}
                      </h3>
                      <p className="leading-relaxed text-muted-foreground">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Réalisations (bande sable) */}
        <section id="work" className="scroll-mt-24 bg-secondary/50 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
            <Reveal>
              <Eyebrow>{t.eyebrows.work}</Eyebrow>
              <h2 className="mb-10 text-3xl tracking-tight md:text-4xl">
                {t.work.title}
              </h2>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2">
              {t.work.items.map((item, i) => (
                <Reveal key={item.name} delay={i * 90} className="h-full">
                  <div
                    className={`${CARD} ${CARD_HOVER} group flex h-full flex-col p-6`}
                  >
                    <div className="mb-5 overflow-hidden rounded-xl border border-border/60">
                      <div className="flex items-center gap-1.5 border-b border-border/50 bg-background/80 px-3 py-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-primary/40" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber/50" />
                        <span className="h-2.5 w-2.5 rounded-full bg-accent/40" />
                      </div>
                      {item.image ? (
                        <div className="relative h-44 w-full">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="(min-width: 768px) 40rem, 100vw"
                            className="object-cover object-top"
                          />
                        </div>
                      ) : (
                        <div className="flex h-44 items-center justify-center bg-linear-to-br from-accent/12 to-primary/10 px-4">
                          <span className="text-center font-display text-2xl font-semibold text-accent/70">
                            {item.name}
                          </span>
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="mt-1 text-sm font-medium text-accent">
                      {item.meta}
                    </p>
                    <p className="mt-4 leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`-mx-2 mt-3 inline-flex min-h-11 items-center gap-1 rounded-md px-2 text-sm font-medium text-primary transition-colors active:bg-secondary hover:text-primary/80 ${LINK_FOCUS}`}
                    >
                      {item.cta}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Qui je suis */}
        <section id="about" className="scroll-mt-24 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
            <Reveal>
              <Eyebrow>{t.eyebrows.about}</Eyebrow>
              <h2 className="mb-10 text-3xl tracking-tight md:text-4xl">
                {t.about.title}
              </h2>
              <div className="flex flex-col gap-8 md:flex-row md:items-start">
                <div className="relative h-40 w-40 shrink-0 self-center md:h-48 md:w-48 md:self-start">
                  <div className="absolute -inset-1 rounded-[42%_58%_54%_46%] bg-linear-to-br from-accent/40 via-primary/20 to-amber/30 blur-[2px]" />
                  <div className="relative h-full w-full overflow-hidden rounded-[42%_58%_54%_46%] border-2 border-background">
                    <Image
                      src="/profile-photo.jpg"
                      alt="Adeline Lefebvre"
                      fill
                      sizes="(min-width: 768px) 192px, 160px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="min-w-0 space-y-4">
                  {t.about.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 24)}
                      className="max-w-prose text-lg leading-relaxed text-foreground/75"
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                  ))}
                  <a
                    href={homeHref}
                    className={`-mx-2 inline-flex min-h-11 items-center gap-1 rounded-md px-2 text-sm font-medium text-primary transition-colors active:bg-secondary hover:text-primary/80 ${LINK_FOCUS}`}
                  >
                    {t.about.link}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-24 bg-secondary/50 py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-6 md:px-12 lg:px-16">
            <Reveal>
              <Eyebrow>{t.eyebrows.faq}</Eyebrow>
              <h2 className="mb-8 text-3xl tracking-tight md:text-4xl">
                {t.faq.title}
              </h2>
              <div className={`${CARD} px-6 py-2 md:px-8`}>
                <Accordion type="single" collapsible>
                  {t.faq.items.map((item) => (
                    <AccordionItem key={item.q} value={item.q}>
                      <AccordionTrigger className="text-base font-medium hover:text-primary hover:no-underline">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Recommandations (meme section que la home) */}
        <Testimonial />

        {/* Contact / CTA final (bande vert sapin de clôture) */}
        <section
          id="contact"
          className="relative scroll-mt-24 overflow-hidden bg-linear-to-br from-accent-deep via-accent to-accent-bright py-20 text-background md:py-28"
        >
          <TopoField className="pointer-events-none absolute -right-28 -top-12 h-[42rem] w-[42rem] text-background/[0.05]" />
          <div className="relative mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
            <Reveal>
              <Eyebrow tone="amber">{t.eyebrows.contact}</Eyebrow>
              <h2 className="mb-6 text-3xl tracking-tight text-background md:text-4xl">
                {t.cta.title}
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-background/90">
                {t.cta.text}
              </p>
              <p className="mt-3 max-w-2xl leading-relaxed text-background/90">
                {t.cta.hesitant}
              </p>
              {accessKey && (
                <div className="mt-8 max-w-2xl rounded-2xl bg-background p-6 text-foreground">
                  <ContactForm
                    accessKey={accessKey}
                    labels={t.cta.form}
                    subject="Nouveau message depuis la page /local"
                  />
                </div>
              )}
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-background/30 bg-transparent text-background hover:bg-background hover:text-accent"
                >
                  <a href={EMAIL} target="_blank" rel="noopener noreferrer">
                    <Mail className="mr-2 h-4 w-4" />
                    {t.cta.email}
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-background/30 bg-transparent text-background hover:bg-background hover:text-accent"
                >
                  <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 h-4 w-4" />
                    {t.cta.call}
                  </a>
                </Button>
              </div>
              <p className="mt-8 flex items-center gap-2 text-sm text-background/85">
                <MapPin className="h-4 w-4" />
                {t.cta.location}
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
