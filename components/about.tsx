"use client";

import { Card } from "@/components/ui/card";
import { useLanguage } from "@/lib/language-context";
import { getTranslations } from "@/lib/translations";

export function About() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section id="about" className="mb-24 scroll-mt-20">
      <h2 className="mb-8 text-3xl font-bold tracking-tight">
        {t.about.title}
      </h2>
      <Card className="p-8">
        <div className="space-y-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          <div dangerouslySetInnerHTML={{ __html: t.about.paragraph1 }} />
          <div dangerouslySetInnerHTML={{ __html: t.about.paragraph2 }} />
          <div dangerouslySetInnerHTML={{ __html: t.about.paragraph3 }} />
        </div>
      </Card>
    </section>
  );
}
