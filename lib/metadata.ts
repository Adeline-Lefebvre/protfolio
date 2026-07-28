import type { Language } from "./translations";

export const siteMetadata = {
  en: {
    title: "Adeline Lefebvre | Freelance Fullstack Developer (Next.js, AI, WordPress)",
    description:
      "Adeline Lefebvre, freelance fullstack web developer (FR/EN/ES) based in Spain. Next.js, React and AI integration (Claude, Mistral), remote across Europe.",
    keywords: [
      "Adeline Lefebvre",
      "Freelance Fullstack Developer",
      "Next.js Developer",
      "AI Integration Developer",
      "Claude API",
      "Custom WordPress Developer",
      "Craft CMS Developer",
      "Headless CMS",
      "React TypeScript Developer",
    ],
    openGraph: {
      title: "Adeline Lefebvre | Freelance Fullstack Developer",
      description:
        "From custom websites to AI apps. Next.js, Claude/Mistral, WordPress & Craft CMS, plus long-term maintenance.",
    },
  },
  fr: {
    title: "Adeline Lefebvre | Développeuse Fullstack Freelance (Next.js, IA, WordPress)",
    description:
      "Adeline Lefebvre, développeuse web fullstack freelance (FR/EN/ES) basée en Espagne. Next.js, React et intégration IA (Claude, Mistral), en remote en Europe.",
    keywords: [
      "Adeline Lefebvre",
      "Développeuse Fullstack Freelance",
      "Développeuse Next.js",
      "Intégration IA",
      "Claude API",
      "Développeuse WordPress custom",
      "Craft CMS",
      "Headless CMS",
      "React TypeScript",
    ],
    openGraph: {
      title: "Adeline Lefebvre | Développeuse Fullstack Freelance",
      description:
        "Du site sur-mesure à l'app IA. Next.js, Claude/Mistral, WordPress & Craft CMS, et maintenance long terme.",
    },
  },
  es: {
    title: "Adeline Lefebvre | Desarrolladora Fullstack Freelance (Next.js, IA, WordPress)",
    description:
      "Adeline Lefebvre, desarrolladora web fullstack freelance (FR/EN/ES) desde España. Next.js, React e integración de IA (Claude, Mistral), en remoto por Europa.",
    keywords: [
      "Adeline Lefebvre",
      "Desarrolladora Fullstack Freelance",
      "Desarrolladora Next.js",
      "Integración de IA",
      "Claude API",
      "Desarrolladora WordPress custom",
      "Craft CMS",
      "Headless CMS",
      "React TypeScript",
    ],
    openGraph: {
      title: "Adeline Lefebvre | Desarrolladora Fullstack Freelance",
      description:
        "Del sitio a medida a la app con IA. Next.js, Claude/Mistral, WordPress y Craft CMS, y mantenimiento a largo plazo.",
    },
  },
};

export function getMetadata(lang: Language = "en") {
  return siteMetadata[lang];
}
