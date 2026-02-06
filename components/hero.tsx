"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { getTranslations } from "@/lib/translations";

export function Hero() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section className="mb-24 pt-12 md:pt-20">
      <div className="flex flex-col-reverse items-start gap-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-6">
          <div className="space-y-2">
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
        </div>
        <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-full border-4 border-primary/20 bg-primary/20 md:h-56 md:w-56">
          <Image
            src="/profile-photo.jpg"
            alt="Adeline Lefebvre, Fullstack Software Engineer"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
