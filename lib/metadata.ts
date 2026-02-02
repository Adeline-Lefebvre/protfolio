import type { Language } from "./translations";

export const siteMetadata = {
  en: {
    title: "Adeline Lefebvre | Fullstack Web & Mobile Developer",
    description:
      "Fullstack Software Engineer specializing in Next.js, Flutter, and Node.js. Building impactful tech solutions for CSR and GreenTech projects. Based in Valencia, available worldwide.",
    keywords: [
      "Adeline Lefebvre",
      "Fullstack Developer",
      "Mobile App Developer",
      "Flutter Expert",
      "GreenTech",
      "Next.js Developer",
      "Software Engineer Valencia",
      "Sustainable Tech",
      "EdTech Developer",
    ],
    openGraph: {
      title: "Adeline Lefebvre | Fullstack Web & Mobile Developer",
      description:
        "Building tech solutions from scratch with a focus on impact and sustainability. Expert in Next.js & Flutter.",
    },
  },
  fr: {
    title: "Adeline Lefebvre | Développeuse Fullstack Web & Mobile",
    description:
      "Ingénieure logicielle Fullstack spécialisée en Next.js, Flutter et Node.js. Création de solutions tech à impact pour des projets RSE et GreenTech. Basée à Valence, disponible partout.",
    keywords: [
      "Adeline Lefebvre",
      "Développeuse Fullstack",
      "Développeuse Mobile",
      "Experte Flutter",
      "GreenTech",
      "Développeuse Next.js",
      "Ingénieure Logicielle Valence",
      "Tech Durable",
      "Développeuse EdTech",
    ],
    openGraph: {
      title: "Adeline Lefebvre | Développeuse Fullstack Web & Mobile",
      description:
        "Création de solutions tech de A à Z avec un focus sur l'impact et la durabilité. Experte Next.js & Flutter.",
    },
  },
  es: {
    title: "Adeline Lefebvre | Desarrolladora Fullstack Web & Mobile",
    description:
      "Ingeniera de Software Fullstack especializada en Next.js, Flutter y Node.js. Desarrollo de soluciones tecnológicas de impacto para proyectos de RSC y GreenTech. Basada en Valencia, disponible en todo el mundo.",
    keywords: [
      "Adeline Lefebvre",
      "Desarrolladora Fullstack",
      "Desarrolladora de Apps Móviles",
      "Experta Flutter",
      "GreenTech",
      "Desarrolladora Next.js",
      "Ingeniera de Software Valencia",
      "Tecnología Sostenible",
      "Desarrolladora EdTech",
    ],
    openGraph: {
      title: "Adeline Lefebvre | Desarrolladora Fullstack Web & Mobile",
      description:
        "Desarrollo de soluciones tecnológicas desde cero con enfoque en impacto y sostenibilidad. Experta en Next.js & Flutter.",
    },
  },
};

export function getMetadata(lang: Language = "en") {
  return siteMetadata[lang];
}
