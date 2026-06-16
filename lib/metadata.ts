import type { Language } from "./translations";

export const siteMetadata = {
  en: {
    title: "Adeline Lefebvre | Freelance Fullstack Developer — Next.js, AI, WordPress",
    description:
      "Freelance fullstack developer. I build Next.js apps with AI (Claude, Mistral), custom websites (WordPress, Craft CMS) and maintain them long-term. Product mindset, remote across Europe.",
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
    title: "Adeline Lefebvre | Développeuse Fullstack Freelance — Next.js, IA, WordPress",
    description:
      "Développeuse fullstack freelance. Je conçois des apps Next.js avec IA (Claude, Mistral), des sites sur-mesure (WordPress, Craft CMS) et j'en assure la maintenance. Vision produit, remote en Europe.",
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
    title: "Adeline Lefebvre | Desarrolladora Fullstack Freelance — Next.js, IA, WordPress",
    description:
      "Desarrolladora fullstack freelance. Creo apps Next.js con IA (Claude, Mistral), sitios a medida (WordPress, Craft CMS) y me encargo de su mantenimiento. Mentalidad de producto, remoto en Europa.",
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
