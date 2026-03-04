"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { getTranslations } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";

export function Hero() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section className="mb-24 pt-8 md:pt-12">
      <div className="flex flex-col-reverse items-start gap-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="mb-4 flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              <span className="text-sm font-medium text-green-600 dark:text-green-400">
                {t.hero.availableBadge}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{t.hero.greeting}</p>
            <h1 className="text-5xl font-bold tracking-tight text-balance md:text-6xl lg:text-7xl">
              {t.hero.name}
            </h1>
          </div>
          <h2 className="text-2xl font-medium text-muted-foreground text-balance md:text-3xl">
            {t.hero.title}
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {t.hero.description}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild size="lg">
              <a href="#contact">
                {t.hero.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/CV.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                {t.hero.downloadCV}
              </a>
            </Button>
          </div>
        </div>
        <div className="relative h-40 w-40 shrink-0 md:h-56 md:w-56">
          <div className="absolute -inset-0.5 rounded-full bg-linear-to-br from-primary/40 via-primary/20 to-accent/30 blur-[2px]" />
          <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-primary/20">
            <Image
              src="/profile-photo.jpg"
              alt="Adeline Lefebvre, Fullstack Software Engineer"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
