"use client";

import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { getTranslations } from "@/lib/translations";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Testimonial() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section className="mb-24">
      <h2 className="mb-8 text-3xl font-bold tracking-tight">
        {t.testimonial.title}
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {t.testimonial.items.map((item) => (
          <Card key={item.author} className="relative flex flex-col p-8">
            <Quote
              className="absolute right-6 top-6 h-8 w-8 text-primary/15"
              aria-hidden="true"
            />
            <blockquote className="flex-1 text-lg leading-relaxed text-foreground">
              “{item.quote}”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-base font-semibold text-accent-foreground">
                {initials(item.author)}
              </div>
              <div>
                <p className="font-semibold">{item.author}</p>
                <p className="text-sm text-muted-foreground">{item.role}</p>
              </div>
            </figcaption>
          </Card>
        ))}
      </div>
    </section>
  );
}
