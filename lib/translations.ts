export type Language = "en" | "fr" | "es";

export const translations = {
  en: {
    nav: {
      portfolio: "Adeline Lefebvre",
      about: "About",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Adeline Lefebvre",
      title: "Fullstack developer, from custom sites to AI apps",
      description:
        "From the business need to production, I build web products that last. Product background (Station F) and a dual fullstack & CMS skill set: Next.js apps with AI (Claude, Mistral), custom websites (WordPress, Craft CMS), and long-term maintenance.",
      availableBadge: "Available for freelance",
      ctaPrimary: "Let's talk about your project",
      ctaProjects: "See my work",
      downloadCV: "Download CV",
    },
    trust: {
      label: "Trusted by",
    },
    services: {
      title: "What I do",
      subtitle: "Three ways to work together, from build to long-term care.",
      ai: {
        title: "AI apps & integrations",
        description:
          "Fullstack Next.js apps with AI built in: extraction pipelines, dashboards, automations.",
        items: [
          "Next.js / TypeScript",
          "Claude API, Mistral, OpenAI",
          "Dashboards & data pipelines",
          "Stripe payments, auth",
        ],
      },
      cms: {
        title: "Custom sites & CMS",
        description:
          "Websites that go beyond templates: custom development, headless, multilingual.",
        items: [
          "Custom WordPress / Elementor Pro",
          "Craft CMS, Prismic (headless)",
          "Multilingual sites & technical SEO",
          "API integrations",
        ],
      },
      maintenance: {
        title: "Maintenance & evolution",
        description:
          "A long-term partnership: I keep your site alive and evolving, reliably.",
        items: [
          "WordPress / Craft / Next.js upkeep",
          "New features & optimizations",
          "Performance & SEO",
          "Direct support, clear communication",
        ],
      },
    },
    projects: {
      title: "Featured projects",
      viewProject: "View project",
      moreTitle: "Other experiments",
      cubynNote:
        "Before freelancing: Software Engineer at Cubyn (80+ microservices, Kubernetes/GCP) and Klox (React/Node SaaS platform).",
      rootyne: {
        title: "Rootyne, AI health platform",
        description:
          "Personalized blood-test analysis. AI extraction pipeline (Claude + Mistral) with an anonymization layer, a biologist review dashboard, and encrypted HDS-compliant infrastructure. Built from scratch.",
      },
      desertLeaves: {
        title: "Desert Leaves, environmental NGO",
        description:
          "A complete platform built from scratch for a reforestation foundation: Next.js + headless Prismic CMS, Stripe donations (one-time & recurring), multilingual SEO.",
      },
      lime: {
        title: "LIME Search, finance recruitment",
        description:
          "Multilingual recruitment platform in Craft CMS. Custom Twig/PHP components the client can edit, technical SEO, plus ongoing maintenance and new features.",
      },
      bulbus: {
        title: "Bulbus, educational mobile app",
        description:
          "Cross-platform Flutter app for herbalism students. 150+ plants, timed mock exams, in-app purchases. Live on iOS & Android with 37 paying users.",
      },
      sds: {
        title: "SDS Lingo, multilingual website",
        description:
          "Next.js site (EN/FR/CS) for a technical translation company. Full i18n, a quote form with file upload, multilingual SEO (hreflang) and optimized Core Web Vitals.",
      },
      c55: {
        title: "Club Fifty Five, creative agency",
        description:
          "Premium showcase site for a Dutch talent agency, delivered white-label. Custom widgets (animated marquee), Theme Builder, advanced forms, responsive across 5 breakpoints.",
      },
      pepstery: {
        title: "Pepstery, augmented reality game",
        description:
          "Marker-based AR game built during a tech residency: 3D character generation, real-time interactions (Pusher), non-linear storytelling (A-Frame, MindAR).",
      },
    },
    about: {
      title: "About",
      paragraph1:
        "My path started in <strong class='font-semibold text-primary'>product and entrepreneurship</strong> (Station F, business school). I kept that <em class='italic'>founder's mindset</em>: I start from the business need, not the tech.",
      paragraph2:
        "Today I'm a <strong class='font-semibold text-primary'>fullstack developer</strong>. I've shipped real products in production serving real users across <strong class='font-semibold text-accent'>6 countries</strong>: from Rootyne (a health platform powered by Claude + Mistral) to Bulbus (a mobile app with 37 paying users).",
      paragraph3:
        "My <strong class='font-semibold text-primary'>dual skill set</strong> covers fullstack (Next.js, React, Node) <em class='italic'>and</em> CMS (custom WordPress, Craft, headless), so I adapt to very different projects, from SaaS built from scratch to long-term maintenance.",
      paragraph4:
        "I believe in <strong class='font-semibold text-accent'>lasting partnerships</strong>: clear communication, reliable delivery, and real care for business impact. <strong class='font-semibold text-primary'>Available for new collaborations</strong> across Europe.",
      personal:
        "Off-screen, I'm training in herbalism (that's where my app Bulbus came from) and constantly tinkering with new AI tools. I like building things that mean something.",
    },
    testimonial: {
      title: "What people say",
      items: [
        {
          quote:
            "I've seen Adeline's work and I recommend her with my eyes closed. She's a serious, autonomous developer with a great technical vision. You can trust her to deliver your SaaS or web projects!",
          author: "Romain Quellec",
          role: "CTO, former manager of Adeline",
        },
        {
          quote:
            "Her motivation and her commitment were greatly appreciated by our team, as were her responsiveness and her positive attitude. Adeline adapts easily to many situations. I highly recommend her project-management skills.",
          author: "Manon Duhem",
          role: "CSR Manager, Deloitte Luxembourg",
        },
      ],
    },
    contact: {
      title: "Let's work together",
      description:
        "Available for one-off missions as well as long-term maintenance partnerships. An app, a custom website, an AI integration, or picking up an existing project? Let's talk.",
      email: "Email me",
      linkedin: "LinkedIn",
      github: "GitHub",
      calendly: "Book a meeting",
    },
  },
  fr: {
    nav: {
      portfolio: "Adeline Lefebvre",
      about: "À propos",
      services: "Offres",
      projects: "Projets",
      contact: "Contact",
    },
    hero: {
      greeting: "Bonjour, je suis",
      name: "Adeline Lefebvre",
      title: "Développeuse Fullstack, du site sur-mesure à l'app IA",
      description:
        "Du besoin métier à la mise en production, je crée des produits web qui durent. Background produit (Station F) et double compétence fullstack & CMS : apps Next.js avec IA (Claude, Mistral), sites sur-mesure (WordPress, Craft CMS) et maintenance au long cours.",
      availableBadge: "Disponible en freelance",
      ctaPrimary: "Discutons de votre projet",
      ctaProjects: "Voir mes projets",
      downloadCV: "Télécharger mon CV",
    },
    trust: {
      label: "Ils m'ont fait confiance",
    },
    services: {
      title: "Ce que je fais",
      subtitle: "Trois façons de travailler ensemble, du build au long terme.",
      ai: {
        title: "Apps & intégrations IA",
        description:
          "Applications fullstack Next.js avec IA intégrée : pipelines d'extraction, dashboards, automatisations.",
        items: [
          "Next.js / TypeScript",
          "Claude API, Mistral, OpenAI",
          "Dashboards & pipelines de données",
          "Paiements Stripe, authentification",
        ],
      },
      cms: {
        title: "Sites & CMS sur-mesure",
        description:
          "Des sites qui vont au-delà des thèmes : développement custom, headless, multilingue.",
        items: [
          "WordPress / Elementor Pro custom",
          "Craft CMS, Prismic (headless)",
          "Sites multilingues & SEO technique",
          "Intégrations API",
        ],
      },
      maintenance: {
        title: "Maintenance & évolutions",
        description:
          "Un partenariat long terme : je fais vivre et évoluer votre site, en toute fiabilité.",
        items: [
          "Maintenance WordPress / Craft / Next.js",
          "Nouvelles features & optimisations",
          "Performance & SEO",
          "Support direct, communication claire",
        ],
      },
    },
    projects: {
      title: "Projets phares",
      viewProject: "Voir le projet",
      moreTitle: "Autres expérimentations",
      cubynNote:
        "Avant le freelance : Software Engineer chez Cubyn (architecture 80+ microservices, Kubernetes/GCP) et Klox (plateforme SaaS React/Node).",
      rootyne: {
        title: "Rootyne, plateforme santé IA",
        description:
          "Analyse de bilans sanguins personnalisée. Pipeline d'extraction IA (Claude + Mistral) avec couche d'anonymisation, dashboard biologiste de validation, infrastructure HDS chiffrée. Conçue from scratch.",
      },
      desertLeaves: {
        title: "Desert Leaves, fondation environnementale",
        description:
          "Plateforme complète développée from scratch pour une ONG de reforestation : Next.js + CMS headless Prismic, dons Stripe (ponctuels & récurrents), SEO multilingue.",
      },
      lime: {
        title: "LIME Search, recrutement finance",
        description:
          "Plateforme de recrutement multilingue en Craft CMS. Composants Twig/PHP sur-mesure éditables par le client, SEO technique, maintenance et nouvelles features en continu.",
      },
      bulbus: {
        title: "Bulbus, app mobile éducative",
        description:
          "App cross-platform (Flutter) pour étudiants en herboristerie. 150+ plantes, examens chronométrés, achats in-app. Live sur iOS & Android, 37 utilisateurs payants.",
      },
      sds: {
        title: "SDS Lingo, site multilingue",
        description:
          "Site Next.js (EN/FR/CS) pour une société de traduction technique. i18n complet, formulaire de devis avec upload, SEO multilingue (hreflang) et Core Web Vitals optimisés.",
      },
      c55: {
        title: "Club Fifty Five, agence créative",
        description:
          "Site vitrine premium d'une agence de talents néerlandaise, en white-label. Widgets custom (marquee animé), Theme Builder, formulaires avancés, responsive sur 5 breakpoints.",
      },
      pepstery: {
        title: "Pepstery, jeu en réalité augmentée",
        description:
          "Jeu AR par marqueurs développé en résidence tech : génération de personnages 3D, interactions temps réel (Pusher), narration non-linéaire (A-Frame, MindAR).",
      },
    },
    about: {
      title: "À propos",
      paragraph1:
        "Mon parcours a commencé dans le <strong class='font-semibold text-primary'>produit et l'entrepreneuriat</strong> (Station F, école de commerce). J'en ai gardé une <em class='italic'>mentalité de fondatrice</em> : je pars du besoin business, pas de la techno.",
      paragraph2:
        "Aujourd'hui, je suis <strong class='font-semibold text-primary'>développeuse fullstack</strong>. J'ai shippé des produits réels en production qui servent de vrais utilisateurs dans <strong class='font-semibold text-accent'>6 pays</strong> : de Rootyne (plateforme santé avec IA Claude + Mistral) à Bulbus (app mobile, 37 utilisateurs payants).",
      paragraph3:
        "Ma <strong class='font-semibold text-primary'>double compétence</strong> couvre le fullstack (Next.js, React, Node) <em class='italic'>et</em> le CMS (WordPress custom, Craft, headless), ce qui me permet de m'adapter à des projets très variés, du SaaS from scratch à la maintenance long terme.",
      paragraph4:
        "Je crois aux <strong class='font-semibold text-accent'>partenariats durables</strong> : communication claire, livraison fiable, et un vrai souci de l'impact business. <strong class='font-semibold text-primary'>Disponible pour de nouvelles collaborations</strong> en Europe.",
      personal:
        "Hors écran, je me forme à l'herboristerie (c'est de là qu'est née mon app Bulbus) et je teste en continu de nouveaux outils IA. J'aime construire des choses qui ont du sens.",
    },
    testimonial: {
      title: "Ce qu'on dit de moi",
      items: [
        {
          quote:
            "J'ai eu l'occasion de voir le travail d'Adeline et je la recommande les yeux fermés. C'est une développeuse sérieuse, autonome et dotée d'une super vision technique. Vous pouvez lui faire confiance pour mener à bien vos projets SaaS ou web !",
          author: "Romain Quellec",
          role: "Directeur technique, ancien manager d'Adeline",
        },
        {
          quote:
            "Sa motivation et son implication ont été très appréciées par notre équipe, tout comme sa réactivité et sa bonne volonté. Adeline s'adapte facilement à de nombreuses situations. Je recommande vivement ses compétences en gestion de projets.",
          author: "Manon Duhem",
          role: "Responsable RSE, Deloitte Luxembourg",
        },
      ],
    },
    contact: {
      title: "Travaillons ensemble",
      description:
        "Disponible pour des missions ponctuelles comme pour des partenariats de maintenance au long cours. Une app, un site sur-mesure, une intégration IA ou la reprise d'un projet existant ? Parlons-en.",
      email: "M'envoyer un email",
      linkedin: "LinkedIn",
      github: "GitHub",
      calendly: "Prendre rendez-vous",
    },
  },
  es: {
    nav: {
      portfolio: "Adeline Lefebvre",
      about: "Sobre mí",
      services: "Servicios",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      name: "Adeline Lefebvre",
      title: "Desarrolladora Fullstack, del sitio a medida a la app con IA",
      description:
        "De la necesidad de negocio a la puesta en producción, creo productos web que perduran. Base en producto (Station F) y doble competencia fullstack y CMS: apps Next.js con IA (Claude, Mistral), sitios a medida (WordPress, Craft CMS) y mantenimiento a largo plazo.",
      availableBadge: "Disponible para freelance",
      ctaPrimary: "Hablemos de tu proyecto",
      ctaProjects: "Ver mis proyectos",
      downloadCV: "Descargar CV",
    },
    trust: {
      label: "Han confiado en mí",
    },
    services: {
      title: "Lo que hago",
      subtitle: "Tres formas de trabajar juntos, del desarrollo al largo plazo.",
      ai: {
        title: "Apps e integraciones IA",
        description:
          "Aplicaciones fullstack Next.js con IA integrada: pipelines de extracción, dashboards, automatizaciones.",
        items: [
          "Next.js / TypeScript",
          "Claude API, Mistral, OpenAI",
          "Dashboards y pipelines de datos",
          "Pagos Stripe, autenticación",
        ],
      },
      cms: {
        title: "Sitios y CMS a medida",
        description:
          "Sitios que van más allá de las plantillas: desarrollo custom, headless, multilingüe.",
        items: [
          "WordPress / Elementor Pro custom",
          "Craft CMS, Prismic (headless)",
          "Sitios multilingües y SEO técnico",
          "Integraciones de API",
        ],
      },
      maintenance: {
        title: "Mantenimiento y evolución",
        description:
          "Una colaboración a largo plazo: mantengo tu sitio vivo y en evolución, con fiabilidad.",
        items: [
          "Mantenimiento WordPress / Craft / Next.js",
          "Nuevas funciones y optimizaciones",
          "Rendimiento y SEO",
          "Soporte directo, comunicación clara",
        ],
      },
    },
    projects: {
      title: "Proyectos destacados",
      viewProject: "Ver proyecto",
      moreTitle: "Otros experimentos",
      cubynNote:
        "Antes del freelance: Software Engineer en Cubyn (arquitectura de 80+ microservicios, Kubernetes/GCP) y Klox (plataforma SaaS React/Node).",
      rootyne: {
        title: "Rootyne, plataforma de salud con IA",
        description:
          "Análisis personalizado de análisis de sangre. Pipeline de extracción con IA (Claude + Mistral) con capa de anonimización, dashboard de validación para biólogos e infraestructura HDS cifrada. Creada desde cero.",
      },
      desertLeaves: {
        title: "Desert Leaves, ONG ambiental",
        description:
          "Plataforma completa desarrollada desde cero para una fundación de reforestación: Next.js + CMS headless Prismic, donaciones Stripe (puntuales y recurrentes), SEO multilingüe.",
      },
      lime: {
        title: "LIME Search, reclutamiento financiero",
        description:
          "Plataforma de reclutamiento multilingüe en Craft CMS. Componentes Twig/PHP a medida editables por el cliente, SEO técnico, mantenimiento y nuevas funciones continuas.",
      },
      bulbus: {
        title: "Bulbus, app móvil educativa",
        description:
          "App multiplataforma (Flutter) para estudiantes de herboristería. 150+ plantas, exámenes cronometrados, compras in-app. En vivo en iOS y Android, 37 usuarios de pago.",
      },
      sds: {
        title: "SDS Lingo, sitio multilingüe",
        description:
          "Sitio Next.js (EN/FR/CS) para una empresa de traducción técnica. i18n completo, formulario de presupuesto con subida de archivos, SEO multilingüe (hreflang) y Core Web Vitals optimizados.",
      },
      c55: {
        title: "Club Fifty Five, agencia creativa",
        description:
          "Sitio de presentación premium de una agencia de talentos neerlandesa, en marca blanca. Widgets custom (marquee animado), Theme Builder, formularios avanzados, responsive en 5 breakpoints.",
      },
      pepstery: {
        title: "Pepstery, juego de realidad aumentada",
        description:
          "Juego de RA por marcadores desarrollado en una residencia tech: generación de personajes 3D, interacciones en tiempo real (Pusher), narrativa no lineal (A-Frame, MindAR).",
      },
    },
    about: {
      title: "Sobre mí",
      paragraph1:
        "Mi camino comenzó en el <strong class='font-semibold text-primary'>producto y el emprendimiento</strong> (Station F, escuela de negocios). Conservé esa <em class='italic'>mentalidad de fundadora</em>: parto de la necesidad de negocio, no de la tecnología.",
      paragraph2:
        "Hoy soy <strong class='font-semibold text-primary'>desarrolladora fullstack</strong>. He lanzado productos reales en producción que sirven a usuarios reales en <strong class='font-semibold text-accent'>6 países</strong>: desde Rootyne (plataforma de salud con IA Claude + Mistral) hasta Bulbus (app móvil, 37 usuarios de pago).",
      paragraph3:
        "Mi <strong class='font-semibold text-primary'>doble competencia</strong> abarca el fullstack (Next.js, React, Node) <em class='italic'>y</em> el CMS (WordPress custom, Craft, headless), lo que me permite adaptarme a proyectos muy distintos, del SaaS desde cero al mantenimiento a largo plazo.",
      paragraph4:
        "Creo en las <strong class='font-semibold text-accent'>colaboraciones duraderas</strong>: comunicación clara, entrega fiable y un cuidado real por el impacto de negocio. <strong class='font-semibold text-primary'>Disponible para nuevas colaboraciones</strong> en Europa.",
      personal:
        "Fuera de la pantalla, me formo en herboristería (de ahí nació mi app Bulbus) y experimento sin parar con nuevas herramientas de IA. Me gusta construir cosas que tienen sentido.",
    },
    testimonial: {
      title: "Lo que dicen de mí",
      items: [
        {
          quote:
            "He podido ver el trabajo de Adeline y la recomiendo con los ojos cerrados. Es una desarrolladora seria, autónoma y con una gran visión técnica. ¡Puedes confiar en ella para llevar a buen puerto tus proyectos SaaS o web!",
          author: "Romain Quellec",
          role: "Director técnico, exmanager de Adeline",
        },
        {
          quote:
            "Su motivación y su implicación fueron muy apreciadas por nuestro equipo, al igual que su capacidad de reacción y su buena disposición. Adeline se adapta con facilidad a muchas situaciones. Recomiendo encarecidamente sus competencias en gestión de proyectos.",
          author: "Manon Duhem",
          role: "Responsable de RSC, Deloitte Luxembourg",
        },
      ],
    },
    contact: {
      title: "Trabajemos juntos",
      description:
        "Disponible tanto para misiones puntuales como para colaboraciones de mantenimiento a largo plazo. ¿Una app, un sitio a medida, una integración con IA o retomar un proyecto existente? Hablemos.",
      email: "Enviarme un email",
      linkedin: "LinkedIn",
      github: "GitHub",
      calendly: "Reservar una reunión",
    },
  },
};

export function getTranslations(lang: Language) {
  return translations[lang];
}
