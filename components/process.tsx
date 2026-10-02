"use client";

import { Eyebrow } from "@/components/eyebrow";
import { useLanguage } from "@/lib/language-context";
import { getTranslations } from "@/lib/translations";

// Deroule d'une collaboration, en trois etapes numerotees comme les projets.
export function Process() {
  const { language } = useLanguage();
  const t = getTranslations(language).process;

  return (
    <section className="mb-16 md:mb-24">
      <Eyebrow>{t.eyebrow}</Eyebrow>
      <h2 className="mb-8 text-3xl tracking-tight md:text-4xl">{t.title}</h2>
      <ol className="grid gap-8 md:grid-cols-3 md:gap-10">
        {t.steps.map((step, index) => (
          <li key={step.title} className="border-t-2 border-accent pt-5">
            <p
              aria-hidden="true"
              className="font-display mb-3 text-3xl leading-none text-primary"
            >
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
            <p className="leading-relaxed text-muted-foreground">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
