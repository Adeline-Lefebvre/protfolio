import type { Language } from "@/lib/translations";

const BASE = "https://adelinelefebvre.com";

const LOCALIZED: Record<
  Language,
  { jobTitle: string; description: string; lang: string }
> = {
  en: {
    jobTitle: "Freelance Fullstack Web Developer",
    description:
      "Adeline Lefebvre is a freelance fullstack web developer (French, English, Spanish), based in France and working remotely across Europe. Specialised in Next.js and React, AI integration (Claude, Mistral), and custom WordPress and Craft CMS sites.",
    lang: "English",
  },
  fr: {
    jobTitle: "Développeuse web fullstack freelance",
    description:
      "Adeline Lefebvre est développeuse web fullstack freelance (français, anglais, espagnol), basée en France et disponible en remote partout en Europe. Spécialisée Next.js et React, intégration d'IA (Claude, Mistral) et sites sur-mesure WordPress et Craft CMS.",
    lang: "French",
  },
  es: {
    jobTitle: "Desarrolladora web fullstack freelance",
    description:
      "Adeline Lefebvre es desarrolladora web fullstack freelance (francés, inglés, español), con base en Francia y disponible en remoto por toda Europa. Especializada en Next.js y React, integración de IA (Claude, Mistral) y sitios a medida en WordPress y Craft CMS.",
    lang: "Spanish",
  },
};

// Graphe d'entité (Person + WebSite) rendu sur toutes les pages, localisé par
// langue. @id stable pour que les autres nœuds (FAQPage/Service sur /local)
// puissent référencer la personne. Base = France, zone de service = Europe.
export function StructuredData({ locale = "en" }: { locale?: Language }) {
  const t = LOCALIZED[locale] ?? LOCALIZED.en;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${BASE}/#person`,
        name: "Adeline Lefebvre",
        jobTitle: t.jobTitle,
        description: t.description,
        url: `${BASE}/${locale}`,
        image: `${BASE}/profile-photo.jpg`,
        email: "mailto:adeline.lefe@gmail.com",
        sameAs: [
          "https://github.com/Adeline-Lefebvre",
          "https://www.linkedin.com/in/adeline-lefebvre-600b46aa/",
        ],
        address: {
          "@type": "PostalAddress",
          addressCountry: "FR",
        },
        knowsLanguage: ["French", "English", "Spanish"],
        areaServed: [
          { "@type": "Place", name: "Europe" },
          { "@type": "Country", name: "France" },
          { "@type": "Country", name: "Spain" },
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: "adeline.lefe@gmail.com",
          availableLanguage: ["French", "English", "Spanish"],
        },
        knowsAbout: [
          "Next.js",
          "React",
          "TypeScript",
          "Node.js",
          "AI Integration",
          "Claude API",
          "Mistral",
          "WordPress",
          "Craft CMS",
          "Headless CMS",
          "Prismic",
          "Stripe",
          "SEO",
          "i18n",
          "Fullstack Development",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${BASE}/#website`,
        url: BASE,
        name: "Adeline Lefebvre",
        inLanguage: ["fr", "en", "es"],
        publisher: { "@id": `${BASE}/#person` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
