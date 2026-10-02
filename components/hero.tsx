"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { getTranslations } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import { Download, ArrowRight } from "lucide-react";

export function Hero() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    // overflow-hidden indispensable : l'aplat deborde volontairement de sa
    // cellule (jusqu'au bord droit de l'ecran, et au-dela en hauteur). Sans
    // coupe, il elargirait le viewport de mise en page sur mobile et la barre
    // fixe ancree a droite sortirait de l'ecran.
    <section className="relative isolate mb-12 overflow-hidden md:mb-20">
      <Container className="pb-12 pt-20 md:pb-24 md:pt-28">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-14 lg:gap-20">
          <div className="order-2 w-full min-w-0 space-y-6 md:order-1 md:w-auto">
            <div className="space-y-2">
              <div className="mb-4 flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-bright opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-bright" />
                </span>
                <span className="text-sm font-medium text-accent">
                  {t.hero.availableBadge}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{t.hero.greeting}</p>
              <h1 className="text-balance">
                <span className="block text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  {t.hero.name}
                </span>
                <span className="mt-3 block font-sans text-xl font-medium leading-snug text-muted-foreground sm:text-2xl md:mt-4 md:text-3xl">
                  {t.hero.title}
                </span>
              </h1>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {t.hero.description}
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button asChild size="lg">
                <a href="#contact">
                  {t.hero.ctaPrimary}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#projects">{t.hero.ctaProjects}</a>
              </Button>
            </div>
            <a
              href="/CV.pdf"
              download
              className="-mx-2 inline-flex min-h-11 items-center gap-1.5 rounded-md px-2 text-sm font-medium text-muted-foreground transition-colors active:bg-secondary hover:text-foreground"
            >
              <Download className="h-4 w-4" />
              {t.hero.downloadCV}
            </a>
          </div>

          <div className="relative order-1 shrink-0 md:order-2">
            {/* Aplat sable, bords nets. Sur mobile : une bande pleine largeur
                en haut de page, que la photo vient chevaucher. A partir de md :
                un panneau ancre a gauche de la photo, qui file jusqu'au bord
                droit de l'ecran et sur toute la hauteur du hero. Ancre sur la
                photo plutot que sur l'ecran, il garde le meme rapport avec
                elle a toutes les largeurs. */}
            <div
              aria-hidden="true"
              className="absolute -left-[100vw] -right-[100vw] -top-160 bottom-10 -z-10 bg-secondary md:-bottom-160 md:-left-10 md:right-auto md:w-screen lg:-left-14"
            />
            <div className="relative h-40 w-32 overflow-hidden rounded-2xl shadow-[0_24px_48px_-24px_rgba(42,42,40,0.45)] md:h-80 md:w-64 lg:h-104 lg:w-80">
              <Image
                src="/profile-photo.jpg"
                alt="Adeline Lefebvre, Fullstack Software Engineer"
                fill
                sizes="(min-width: 1024px) 320px, (min-width: 768px) 256px, 128px"
                className="object-cover object-[42%_30%]"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
