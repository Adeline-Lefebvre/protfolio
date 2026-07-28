"use client";

import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { Eyebrow } from "@/components/eyebrow";
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
    <section id="testimonials" className="scroll-mt-24">
      <div className="mx-[calc(50%-50vw)] bg-secondary/50 py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
        <Eyebrow>{t.testimonial.eyebrow}</Eyebrow>
        <h2 className="mb-8 text-3xl tracking-tight md:text-4xl">
          {t.testimonial.title}
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {t.testimonial.items.map((item) => (
            <Card key={item.author} className="relative flex flex-col p-8">
              <Quote
                className="absolute right-6 top-6 h-10 w-10 text-amber/50"
                aria-hidden="true"
              />
              <figure className="flex flex-1 flex-col">
                <blockquote className="flex-1 pr-10 text-lg leading-relaxed text-foreground">
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
              </figure>
            </Card>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
