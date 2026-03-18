export type Language = "en" | "fr" | "es";

export const translations = {
  en: {
    nav: {
      portfolio: "Portfolio",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Adeline Lefebvre",
      title: "Fullstack Software Engineer & Mobile App Developer",
      description:
        "Building tech solutions from scratch with a foundation in product and entrepreneurship. Specializing in Next.js, Vue.js, Node.js, TypeScript, and Flutter to deliver impactful fullstack projects in multilingual websites, AR applications, and educational mobile apps.",
      availableBadge: "Available for freelance",
      cta: "Let's discuss your project",
      downloadCV: "Download CV",
    },
    about: {
      title: "About Me",
      paragraph1:
        "I didn't start in tech, but I found my home here. My journey from <span class='font-semibold text-primary'>product and entrepreneurship</span> gave me a <span class='italic'>founder's mindset</span>: I love solving real problems and shipping solutions that users actually love.",
      paragraph2:
        "Today, I'm a <span class='font-semibold text-primary'>Fullstack Developer</span> specializing in <span class='font-semibold text-accent'>React, Next.js, Node.js, and Flutter</span> — focused on bridging technology and sustainability. From building a reforestation platform for <span class='font-semibold text-primary'>Desert Leaves</span> to creating an educational app about medicinal plants (<span class='font-semibold text-accent'>30+ paying users, 4.8/5 rating</span>), I care deeply about building tech that matters.",
      paragraph3:
        "I bring <span class='font-semibold text-accent'>full-stack expertise</span> with a proven track record of products in production serving real users across 6 countries. My background in product (<span class='font-semibold text-primary'>Station F</span>) means I don't just code: I understand business needs, prioritize impact, and execute fast.",
      paragraph4:
        "Currently <span class='font-semibold text-primary'>available for freelance missions</span> across Europe: web development (React, Next.js), mobile apps (Flutter), full-stack projects (Node.js + React), and AI integration (OpenAI, Claude API).",
    },
    skills: {
      title: "Skills & Expertise",
      frontend: "Frontend Development",
      backend: "Backend Development",
      mobile: "Mobile Development",
      tools: "Tools & Platforms",
      focus: "Special Focus Areas",
    },
    projects: {
      title: "Featured Projects",
      viewProject: "View Project",
      code: "Code",
      project1: {
        title: "Fullstack EdTech Mobile App",
        description:
          "Designed and developed a Flutter app (iOS/Android) with a Node.js backend. Features user authentication, data management, and In-App Purchases.",
      },
      project2: {
        title: "Desert Leaves - Green Foundation",
        description:
          "Multilingual website with Headless CMS, Stripe integration, and SEO optimization for a global reforestation initiative.",
      },
      project3: {
        title: "AR Mystery Experience",
        description:
          "Marker-based augmented reality game developed during a tech residency. Real-time 3D interactions and non-linear storytelling via A-Frame.",
      },
      project4: {
        title: "Cubyn - E-commerce Logistics",
        description:
          "Scale-up experience in a microservices environment (80+ services). Built reliable backend systems using Node.js, GCP, and Kubernetes.",
      },
      project5: {
        title: "HappyCaw - Mobile Certification",
        description:
          "Mobile application built with React Native to achieve my official Computer Developer certification.",
      },
    },
    contact: {
      title: "Let's Work Together",
      description:
        "Currently available for freelance missions and collaborations worldwide. Whether you need a fullstack web app, a mobile application, or a technical audit — I'd love to hear about your project.",
      email: "Email Me",
      linkedin: "LinkedIn",
      github: "GitHub",
      calendly: "Book a Meeting",
    },
  },
  fr: {
    nav: {
      portfolio: "Portfolio",
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      contact: "Contact",
    },
    hero: {
      greeting: "Bonjour, je suis",
      name: "Adeline Lefebvre",
      title: "Développeuse informatique Fullstack Web & Mobile",
      description:
        "Je conçois des solutions techniques de A à Z en m'appuyant sur une solide base en Produit et Entrepreneuriat. Spécialisée en Next.js, Vue.js, Node.js, TypeScript et Flutter, je réalise des projets fullstack à fort impact : sites multilingues, applications de réalité augmentée (AR) et apps mobiles éducatives.",
      availableBadge: "Disponible en freelance",
      cta: "Discutons de votre projet",
      downloadCV: "Télécharger mon CV",
    },
    about: {
      title: "À propos",
      paragraph1:
        "Je n'ai pas commencé dans la tech, mais j'y ai trouvé ma place. Mon parcours en <span class='font-semibold text-primary'>produit et entrepreneuriat</span> m'a forgé un <span class='italic'>founder's mindset</span> : j'aime résoudre de vrais problèmes et livrer des solutions que les utilisateurs adorent vraiment.",
      paragraph2:
        "Aujourd'hui, je suis <span class='font-semibold text-primary'>développeuse Fullstack</span> spécialisée en <span class='font-semibold text-accent'>React, Next.js, Node.js et Flutter</span> — déterminée à jeter des ponts entre technologie et durabilité. De la création d'une plateforme de reforestation pour <span class='font-semibold text-primary'>Desert Leaves</span> à une application éducative sur les plantes médicinales (<span class='font-semibold text-accent'>30+ utilisateurs payants, note 4.8/5</span>), je bâtis de la tech qui a du sens.",
      paragraph3:
        "J'apporte une <span class='font-semibold text-accent'>expertise full-stack</span> avec des produits en production servant de vrais utilisateurs dans 6 pays. Mon expérience produit (<span class='font-semibold text-primary'>Station F</span>) fait que je ne code pas seulement : je comprends les enjeux business, priorise l'impact et exécute vite.",
      paragraph4:
        "Actuellement <span class='font-semibold text-primary'>disponible pour missions freelance</span> en Europe : développement web (React, Next.js), applications mobiles (Flutter), projets full-stack (Node.js + React), et intégration IA (OpenAI, Claude API).",
    },
    skills: {
      title: "Compétences & Expertise",
      frontend: "Développement Frontend",
      backend: "Développement Backend",
      mobile: "Développement Mobile",
      tools: "Outils & Plateformes",
      focus: "Domaines de Spécialisation",
    },
    projects: {
      title: "Projets Phares",
      viewProject: "Voir le Projet",
      code: "Code",
      project1: {
        title: "Application Mobile EdTech Fullstack",
        description:
          "Conception et développement d'une application Flutter (iOS/Android) avec backend Node.js. Gestion complète des comptes, authentification et achats in-app.",
      },
      project2: {
        title: "Desert Leaves - Fondation Écologique",
        description:
          "Site multilingue haute performance avec CMS Headless, système de dons (Stripe) et optimisation SEO pour la reforestation des zones arides.",
      },
      project3: {
        title: "Expérience RA : Jeu de Mystère",
        description:
          "Jeu en réalité augmentée par marqueurs développé en résidence tech. Interactions 3D temps réel et narration non-linéaire avec A-Frame.",
      },
      project4: {
        title: "Cubyn - Logistique E-commerce",
        description:
          "Contribution à une architecture de 80+ microservices. Optimisation des flux logistiques européens avec Node.js, Kubernetes et RabbitMQ.",
      },
      project5: {
        title: "HappyCaw - Certification Mobile",
        description:
          "Application mobile développée avec React Native dans le cadre de ma certification de développeuse informatique.",
      },
    },
    contact: {
      title: "Travaillons Ensemble",
      description:
        "Actuellement disponible pour des missions freelance et collaborations dans le monde entier. Que vous ayez besoin d'une application web fullstack, d'une app mobile ou d'un audit technique — parlons de votre projet.",
      email: "M'envoyer un email",
      linkedin: "LinkedIn",
      github: "GitHub",
      calendly: "Prendre rendez-vous",
    },
  },
  es: {
    nav: {
      portfolio: "Portafolio",
      about: "Sobre mí",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      name: "Adeline Lefebvre",
      title: "Ingeniera de Software Fullstack y Desarrolladora Mobile",
      description:
        "Desarrollo soluciones tecnológicas desde cero con una base sólida en producto y emprendimiento. Especializada en Next.js, Vue.js, Node.js, TypeScript y Flutter para entregar proyectos de alto impacto, desde sitios web multilingües hasta aplicaciones de realidad aumentada (AR) y apps móviles educativas.",
      availableBadge: "Disponible para freelance",
      cta: "Hablemos de tu proyecto",
      downloadCV: "Descargar CV",
    },
    about: {
      title: "Sobre mí",
      paragraph1:
        "No empecé en tecnología, pero encontré mi hogar aquí. Mi trayectoria en <span class='font-semibold text-primary'>producto y emprendimiento</span> me dio una <span class='italic'>mentalidad de fundadora</span>: me encanta resolver problemas reales y entregar soluciones que los usuarios realmente aman.",
      paragraph2:
        "Hoy soy <span class='font-semibold text-primary'>desarrolladora Fullstack</span> especializada en <span class='font-semibold text-accent'>React, Next.js, Node.js y Flutter</span> — enfocada en conectar tecnología y sostenibilidad. Desde crear una plataforma de reforestación para <span class='font-semibold text-primary'>Desert Leaves</span> hasta una app educativa sobre plantas medicinales (<span class='font-semibold text-accent'>30+ usuarios de pago, valoración 4.8/5</span>), construyo tecnología que importa.",
      paragraph3:
        "Aporto <span class='font-semibold text-accent'>experiencia full-stack</span> con productos en producción sirviendo usuarios reales en 6 países. Mi experiencia en producto (<span class='font-semibold text-primary'>Station F</span>) significa que no solo codifico: entiendo necesidades de negocio, priorizo impacto y ejecuto rápido.",
      paragraph4:
        "Actualmente <span class='font-semibold text-primary'>disponible para misiones freelance</span> en Europa: desarrollo web (React, Next.js), apps móviles (Flutter), proyectos full-stack (Node.js + React), e integración IA (OpenAI, Claude API).",
    },
    skills: {
      title: "Habilidades & Experiencia",
      frontend: "Desarrollo Frontend",
      backend: "Desarrollo Backend",
      mobile: "Desarrollo Móvil",
      tools: "Herramientas & Plataformas",
      focus: "Áreas de Enfoque Especial",
    },
    projects: {
      title: "Proyectos Destacados",
      viewProject: "Ver Proyecto",
      code: "Código",
      project1: {
        title: "App Móvil EdTech Fullstack",
        description:
          "Diseño y desarrollo de una aplicación Flutter (iOS/Android) con backend en Node.js. Gestión de cuentas, autenticación y compras in-app.",
      },
      project2: {
        title: "Desert Leaves - Fundación Ecológica",
        description:
          "Sitio web multilingüe de alto rendimiento con CMS Headless, sistema de donaciones (Stripe) y optimización SEO para la reforestación.",
      },
      project3: {
        title: "Experiencia RA: Juego de Misterio",
        description:
          "Juego de realidad aumentada desarrollado en residencia tech. Interacciones 3D en tiempo real y narrativa interactiva con A-Frame.",
      },
      project4: {
        title: "Cubyn - Logística E-commerce",
        description:
          "Contribución a una arquitectura de más de 80 microservicios. Optimización de flujos logísticos con Node.js, Kubernetes y RabbitMQ.",
      },
      project5: {
        title: "HappyCaw - Certificación Móvil",
        description:
          "Aplicación móvil desarrollada con React Native como parte de mi certificación oficial de desarrolladora informática.",
      },
    },
    contact: {
      title: "Trabajemos Juntos",
      description:
        "Actualmente disponible para misiones freelance y colaboraciones en todo el mundo. Ya sea que necesites una aplicación web fullstack, una app móvil o una auditoría técnica — me encantaría conocer tu proyecto.",
      email: "Envíame un Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      calendly: "Reservar una Reunión",
    },
  },
};

export function getTranslations(lang: Language) {
  return translations[lang];
}
