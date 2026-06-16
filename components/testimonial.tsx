"use client";

import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { getTranslations } from "@/lib/translations";

export function Testimonial() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section className="mb-24">
      <h2 className="mb-8 text-3xl font-bold tracking-tight">
        {t.testimonial.title}
      </h2>
      <Card className="relative p-8 md:p-10">
        <Quote
          className="absolute right-8 top-8 h-10 w-10 text-primary/15"
          aria-hidden="true"
        />
        <blockquote className="text-xl leading-relaxed text-foreground md:text-2xl">
          “{t.testimonial.quote}”
        </blockquote>
        <figcaption className="mt-6 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-base font-semibold text-accent-foreground">
            RQ
          </div>
          <div>
            <p className="font-semibold">{t.testimonial.author}</p>
            <p className="text-sm text-muted-foreground">
              {t.testimonial.role}
            </p>
          </div>
        </figcaption>
      </Card>
    </section>
  );
}
