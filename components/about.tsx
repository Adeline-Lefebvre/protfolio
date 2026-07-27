"use client";

import { Card } from "@/components/ui/card";
import { Sun } from "lucide-react";
import { Eyebrow } from "@/components/eyebrow";
import { useLanguage } from "@/lib/language-context";
import { getTranslations } from "@/lib/translations";

export function About() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section id="about" className="mb-24 scroll-mt-20">
      <Eyebrow>{t.about.eyebrow}</Eyebrow>
      <h2 className="mb-8 text-3xl tracking-tight md:text-4xl">
        {t.about.title}
      </h2>
      <Card className="p-8">
        <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
          <div dangerouslySetInnerHTML={{ __html: t.about.paragraph1 }} />
          <div dangerouslySetInnerHTML={{ __html: t.about.paragraph2 }} />
          <div dangerouslySetInnerHTML={{ __html: t.about.paragraph3 }} />
          <div dangerouslySetInnerHTML={{ __html: t.about.paragraph4 }} />
        </div>
        <div className="mt-8 flex items-start gap-3 border-t border-border pt-6">
          <Sun
            className="mt-1 h-5 w-5 shrink-0 text-amber"
            aria-hidden="true"
          />
          <p className="text-lg italic leading-relaxed text-muted-foreground">
            {t.about.personal}
          </p>
        </div>
      </Card>
    </section>
  );
}
