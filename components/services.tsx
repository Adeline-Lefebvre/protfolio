"use client";

import { Card } from "@/components/ui/card";
import { Sparkles, Layout, Wrench, Check } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { getTranslations } from "@/lib/translations";

export function Services() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  const offers = [
    { icon: Sparkles, data: t.services.ai, featured: true },
    { icon: Layout, data: t.services.cms, featured: false },
    { icon: Wrench, data: t.services.maintenance, featured: false },
  ];

  return (
    <section id="services" className="mb-24 scroll-mt-20">
      <h2 className="mb-2 text-3xl font-bold tracking-tight">
        {t.services.title}
      </h2>
      <p className="mb-8 text-lg text-muted-foreground">
        {t.services.subtitle}
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {offers.map(({ icon: Icon, data, featured }) => (
          <Card
            key={data.title}
            className={`flex flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 ${
              featured ? "border-primary/40 ring-1 ring-primary/20" : ""
            }`}
          >
            <div
              className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${
                featured
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-accent"
              }`}
            >
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">{data.title}</h3>
            <p className="mb-5 text-muted-foreground leading-relaxed">
              {data.description}
            </p>
            <ul className="mt-auto space-y-2">
              {data.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
}
