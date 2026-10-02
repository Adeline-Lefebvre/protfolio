"use client";

import { useLanguage } from "@/lib/language-context";
import { getTranslations } from "@/lib/translations";

// Logos rendus en silhouette monochrome (CSS mask) pour une teinte uniforme,
// quelle que soit la couleur d'origine. Hauteur reglee par logo pour un
// equilibre optique (les logos larges sont plus fins, les compacts plus hauts).
const logos = [
  { name: "LIME Search", src: "/logo-lime.png", ratio: 8.78, h: 18 },
  { name: "Desert Leaves", src: "/logo-desertleaves.png", ratio: 2.0, h: 56 },
  { name: "Velec Systems", src: "/logo-velec.png", ratio: 4.97, h: 30 },
  { name: "Rootyne", src: "/logo-rootyne.png", ratio: 3.57, h: 30 },
  { name: "Lemon", src: "/lemon_logo.png", ratio: 5.94, h: 22 },
  // Seule l'agence figure ici, pas ses clients finaux : ce sont ses clients a
  // elle, et les projets realises pour elle la creditent sur leur fiche.
  { name: "Code Create", src: "/logo-codecreate.png", ratio: 1.88, h: 40 },
];

export function TrustBar() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section className="mb-16 md:mb-24">
      <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
        {t.trust.label}
      </p>
      {/* Les tailles sont en dur par logo, donc une media query ne peut pas les
          atteindre : on passe par une variable, mise a 0.78 sous md. A taille
          pleine, LIME fait a lui seul 158px sur les 272 disponibles a 320px, et
          aucun logo ne pouvait l'accompagner : la barre s'etirait sur six rangs
          d'un seul logo. Reduire le gap seul n'y suffisait pas. */}
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-5 [--logo-scale:0.78] md:gap-x-10 md:gap-y-6 md:[--logo-scale:1]">
        {logos.map((logo) => (
          <span
            key={logo.name}
            role="img"
            aria-label={logo.name}
            className="block max-w-full bg-muted-foreground/60 transition-colors duration-200 hover:bg-foreground"
            style={{
              height: `calc(${logo.h}px * var(--logo-scale))`,
              width: `calc(${logo.ratio * logo.h}px * var(--logo-scale))`,
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
      </div>
    </section>
  );
}
