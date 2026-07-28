"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { getTranslations } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import { TopoField } from "@/components/local/topo";

export function Hero() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section className="relative mb-24 pt-8 md:pt-12">
      <div className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2">
        <div className="absolute -left-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <TopoField className="absolute -right-28 -top-16 h-[40rem] w-[40rem] text-accent/[0.07]" />
      </div>
      <div className="flex flex-col-reverse gap-8 md:flex-row md:items-center md:justify-between">
        <div className="w-full min-w-0 space-y-6 md:w-auto">
          <div className="space-y-2">
            <div className="mb-4 flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              <span className="text-sm font-medium text-green-700">
                {t.hero.availableBadge}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{t.hero.greeting}</p>
            <h1 className="text-balance">
              <span className="block text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                {t.hero.name}
              </span>
              <span className="mt-4 block font-sans text-2xl font-medium text-muted-foreground md:text-3xl">
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
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Download className="h-4 w-4" />
            {t.hero.downloadCV}
          </a>
        </div>
        <div className="relative h-40 w-40 shrink-0 self-center md:h-56 md:w-56 md:self-auto">
          <div className="absolute -inset-0.5 rounded-full bg-linear-to-br from-primary/40 via-primary/20 to-accent/30 blur-[2px]" />
          <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-primary/20">
            <Image
              src="/profile-photo.jpg"
              alt="Adeline Lefebvre, Fullstack Software Engineer"
              fill
              sizes="(min-width: 768px) 224px, 160px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
