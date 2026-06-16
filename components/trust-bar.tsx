"use client";

import { useLanguage } from "@/lib/language-context";
import { getTranslations } from "@/lib/translations";

// Logos rendus en silhouette monochrome (CSS mask) pour une teinte uniforme,
// quelle que soit la couleur d'origine. Hauteur reglee par logo pour un
// equilibre optique (les logos larges sont plus fins, les compacts plus hauts).
const logos = [
  { name: "LIME Search", src: "/logo-lime.png", ratio: 8.78, h: 18 },
  { name: "Desert Leaves", src: "/logo-desertleaves.png", ratio: 2.0, h: 48 },
  { name: "Code Create", src: "/logo-codecreate.png", ratio: 1.88, h: 40 },
  { name: "Club Fifty Five", src: "/logo-clubfiftyfive.svg", ratio: 0.86, h: 46 },
];

export function TrustBar() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section className="mb-24">
      <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
        {t.trust.label}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
        {logos.map((logo) => (
          <span
            key={logo.name}
            role="img"
            aria-label={logo.name}
            className="block bg-muted-foreground/60 transition-colors duration-200 hover:bg-foreground"
            style={{
              height: logo.h,
              width: logo.ratio * logo.h,
              maskImage: `url(${logo.src})`,
              WebkitMaskImage: `url(${logo.src})`,
              maskSize: "contain",
              WebkitMaskSize: "contain",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
              maskPosition: "center",
              WebkitMaskPosition: "center",
            }}
          />
        ))}
        <span className="text-lg font-semibold tracking-tight text-muted-foreground/70 transition-colors duration-200 hover:text-foreground">
          SDS&nbsp;Lingo
        </span>
      </div>
    </section>
  );
}
