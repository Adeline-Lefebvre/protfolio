"use client";

import { useLanguage } from "@/lib/language-context";
import { getTranslations } from "@/lib/translations";

const clients = [
  "LIME Search",
  "Code Create",
  "Desert Leaves",
  "SDS Lingo",
  "Club Fifty Five",
];

export function TrustBar() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section className="mb-24">
      <p className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
        {t.trust.label}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        {clients.map((client) => (
          <span
            key={client}
            className="text-lg font-semibold tracking-tight text-foreground/55 transition-colors hover:text-foreground"
          >
            {client}
          </span>
        ))}
      </div>
    </section>
  );
}
