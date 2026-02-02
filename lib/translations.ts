export type Language = "en" | "fr" | "es";

export const translations = {
  en: {
    nav: {
      portfolio: "Portfolio",
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Adeline Lefebvre",
      title: "Fullstack Software Engineer & Mobile App Developer",
      description:
        "Building tech solutions from scratch with a foundation in product and entrepreneurship. Specializing in Next.js, Vue.js, Node.js, TypeScript, and Flutter to deliver impactful fullstack projects in multilingual websites, AR applications, and educational mobile apps.",
    },
    about: {
      title: "About Me",
      paragraph1:
        "I didn't start in tech, but I definitely found my home here. My journey began in <span class='font-semibold text-primary'>product and entrepreneurship</span>, which gave me a <span class='italic'>'founder’s mindset'</span>: I love solving real problems.",
      paragraph2:
        "Today, I’m a <span class='font-semibold text-primary'>Fullstack & Mobile Developer</span> focused on bridging the gap between technology and nature. From my <span class='font-semibold text-accent'>CSR</span> background at <span class='font-semibold text-primary'>Deloitte</span> to building a reforestation site for the NGO <span class='font-semibold text-primary'>Desert Leaves</span> or an educational app about medicinal plants, I care deeply about sustainability.",
      paragraph3:
        "I also enjoy exploring how tech can serve local ecosystems. During a residency at <span class='font-semibold text-primary'>Anceu Coliving</span>, I developed an <span class='font-semibold text-accent'>Augmented Reality</span> project to help revitalize rural areas by bringing digital innovation to countryside communities.",
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
      title: "Let's Connect",
      description:
        "I'm always interested in hearing about new opportunities, collaborations, and projects—especially those focused on sustainability and social impact. Feel free to reach out!",
      email: "Email Me",
      linkedin: "LinkedIn",
      github: "GitHub",
      calendly: "Book a Meeting",
    },
  },
  fr: {
    nav: {
      portfolio: "Portfolio",
    },
    hero: {
      greeting: "Bonjour, je suis",
      name: "Adeline Lefebvre",
      title: "Développeuse informatique Fullstack Web & Mobile",
      description:
        "Je conçois des solutions techniques de A à Z en m'appuyant sur une solide base en Produit et Entrepreneuriat. Spécialisée en Next.js, Vue.js, Node.js, TypeScript et Flutter, je réalise des projets fullstack à fort impact : sites multilingues, applications de réalité augmentée (AR) et apps mobiles éducatives.",
    },
    about: {
      title: "À propos",
      paragraph1:
        "Je n'ai pas commencé dans la tech, mais j'y ai définitivement trouvé ma place. Mon parcours a débuté dans le <span class='font-semibold text-primary'>produit et l'entrepreneuriat</span>, ce qui m'a forgé un <span class='italic'>'founder’s mindset'</span> : j'aime résoudre des problèmes concrets.",
      paragraph2:
        "Aujourd'hui, je suis <span class='font-semibold text-primary'>développeuse Fullstack & Mobile</span>, déterminée à jeter des ponts entre technologie et nature. De mon expérience en <span class='font-semibold text-accent'>RSE</span> chez <span class='font-semibold text-primary'>Deloitte</span> à la création d'un site de reforestation pour l'ONG <span class='font-semibold text-primary'>Desert Leaves</span> ou d'une application éducative sur les plantes médicinales, la durabilité est au cœur de ma démarche.",
      paragraph3:
        "J’aime aussi explorer la manière dont la tech peut servir les écosystèmes locaux. Lors d'une résidence à <span class='font-semibold text-primary'>Anceu Coliving</span>, j'ai développé un projet de <span class='font-semibold text-accent'>Réalité Augmentée</span> pour dynamiser les zones rurales en apportant l'innovation numérique au cœur des campagnes.",
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
      title: "Contactez-moi",
      description:
        "Je suis toujours intéressée par les nouvelles opportunités, collaborations et projets—en particulier ceux axés sur la durabilité et l'impact social. N'hésitez pas à me contacter !",
      email: "M'envoyer un email",
      linkedin: "LinkedIn",
      github: "GitHub",
      calendly: "Prendre rendez-vous",
    },
  },
  es: {
    nav: {
      portfolio: "Portafolio",
    },
    hero: {
      greeting: "Hola, soy",
      name: "Adeline Lefebvre",
      title: "Ingeniera de Software Fullstack y Desarrolladora Mobile",
      description:
        "Desarrollo soluciones tecnológicas desde cero con una base sólida en producto y emprendimiento. Especializada en Next.js, Vue.js, Node.js, TypeScript y Flutter para entregar proyectos de alto impacto, desde sitios web multilingües hasta aplicaciones de realidad aumentada (AR) y apps móviles educativas.",
    },
    about: {
      title: "Sobre mí",
      paragraph1:
        "No empecé en el sector tecnológico, pero sin duda he encontrado mi hogar aquí. Mi trayectoria comenzó en <span class='font-semibold text-primary'>producto y emprendimiento</span>, lo que me dio una <span class='italic'>'mentalidad de fundadora'</span>: me encanta resolver problemas reales.",
      paragraph2:
        "Hoy soy <span class='font-semibold text-primary'>desarrolladora Fullstack y Mobile</span>, enfocada en cerrar la brecha entre la tecnología y la naturaleza. Desde mi experiencia en <span class='font-semibold text-accent'>RSC</span> en <span class='font-semibold text-primary'>Deloitte</span> hasta la creación de un sitio de reforestación para la ONG <span class='font-semibold text-primary'>Desert Leaves</span> o una app educativa sobre plantas medicinales, me comprometo profundamente con la sostenibilidad.",
      paragraph3:
        "También disfruto explorando cómo la tecnología puede servir a los ecosistemas locales. Durante una residencia en <span class='font-semibold text-primary'>Anceu Coliving</span>, desarrollé un proyecto de <span class='font-semibold text-accent'>Realidad Aumentada</span> para ayudar a revitalizar zonas rurales, llevando la innovación digital a las comunidades del campo.",
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
      title: "Conectemos",
      description:
        "Siempre estoy interesado en escuchar sobre nuevas oportunidades, colaboraciones y proyectos, especialmente aquellos enfocados en sostenibilidad e impacto social. ¡No dudes en contactarme!",
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
