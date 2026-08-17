"use client";

import { SiteNavShell, type Section } from "@/components/nav/site-nav";
import { useLanguage } from "@/lib/language-context";
import { getTranslations } from "@/lib/translations";
import { getLocalContent } from "@/lib/local-content";

// Module a part, et non un simple export de site-nav : getLocalContent pese
// 10,9 Ko gzip pour les trois langues, et tant que LocalNav vivait dans le
// meme fichier que HomeNav, la home embarquait tout le contenu de /local sans
// jamais l'afficher.
export function LocalNav() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const c = getLocalContent(language);
  const sections: Section[] = [
    { id: "forwho", label: c.eyebrows.forWho },
    { id: "pricing", label: c.eyebrows.pricing },
    { id: "work", label: c.eyebrows.work },
    { id: "testimonials", label: t.testimonial.eyebrow },
    { id: "faq", label: c.eyebrows.faq },
    { id: "contact", label: c.eyebrows.contact },
  ];
  return (
    <SiteNavShell
      sections={sections}
      menuLabel={t.nav.menu}
      back={{ href: `/${language}`, label: t.nav.backToPortfolio }}
    />
  );
}
