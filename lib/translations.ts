export type Language = "en" | "fr" | "es";

export const translations = {
  en: {
    nav: {
      portfolio: "Adeline Lefebvre",
      about: "About",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
      local: "Nonprofits & shops",
      menu: "Menu",
      backToPortfolio: "Back to portfolio",
      skipToContent: "Skip to content",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Adeline Lefebvre",
      title: "Freelance fullstack web developer. I build web products that last, from custom sites to AI apps.",
      description:
        "From idea to production, I turn a business need into a reliable, high-performing product. A dual fullstack and CMS skill set, a product background (Station F), and products running in production across 6 countries.",
      availableBadge: "Available for freelance",
      ctaPrimary: "Let's talk about your project",
      ctaProjects: "See my work",
      downloadCV: "Download CV",
    },
    trust: {
      label: "Trusted by",
    },
    services: {
      eyebrow: "Services",
      title: "My freelance web development services",
      subtitle: "Three ways to work together, from build to long-term care.",
      localOffer: "A dedicated offer for nonprofits & local shops",
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
      eyebrow: "Work",
      title: "Featured projects",
      viewProject: "View project",
      viewSlide: "Go to image",
      moreTitle: "Other experiments",
      cubynNote:
        "Before freelancing: Software Engineer at Cubyn (80+ microservices, Kubernetes/GCP) and Klox (React/Node SaaS platform).",
      rootyne: {
        title: "Rootyne, AI health platform",
        description:
          "Help anyone understand their blood test and adjust their diet. I built the platform from scratch: AI extraction pipeline (Claude + Mistral) with an anonymization layer, a biologist review dashboard, and encrypted HDS-compliant infrastructure.",
      },
      desertLeaves: {
        title: "Desert Leaves, environmental NGO",
        description:
          "Rally donations and volunteers to reforest arid land. A complete platform built from scratch: Next.js + headless Prismic CMS, Stripe donations (one-time & recurring), multilingual SEO.",
      },
      lime: {
        title: "LIME Search, finance recruitment",
        description:
          "Attract top finance talent, and let the client edit the site without a developer. Multilingual recruitment platform in Craft CMS: custom Twig/PHP components, technical SEO, ongoing maintenance.",
      },
      bulbus: {
        title: "Bulbus, educational mobile app",
        description:
          "Revise herbalism anywhere and pass the exams. Cross-platform Flutter app: 150+ plants, timed mock exams, in-app purchases. Live on iOS & Android with 37 paying users.",
      },
      sds: {
        title: "SDS Lingo, multilingual website",
        description:
          "Get a translation quote from a single form, in three languages. Next.js site (EN/FR/CS): full i18n, a quote form with file upload, multilingual SEO (hreflang), optimized Core Web Vitals.",
      },
      c55: {
        title: "Club Fifty Five, creative agency",
        description:
          "Give a talent agency a premium showcase, delivered white-label. Custom widgets (animated marquee), Theme Builder, advanced forms, responsive across 5 breakpoints.",
      },
      pepstery: {
        title: "Pepstery, augmented reality game",
        description:
          "Marker-based AR game built during a tech residency: 3D character generation, real-time interactions (Pusher), non-linear storytelling (A-Frame, MindAR).",
      },
    },
    about: {
      eyebrow: "Background",
      title: "About",
      paragraph1:
        "My path started in <strong class='font-semibold text-primary'>product and entrepreneurship</strong> (Station F, business school). I kept that <em class='italic'>founder's mindset</em>: I start from the business need, not the tech.",
      paragraph2:
        "Today I'm a <strong class='font-semibold text-primary'>fullstack developer</strong>. I've shipped products to production, used by real people across <strong class='font-semibold text-accent'>6 countries</strong>: from Rootyne (a health platform powered by Claude + Mistral) to Bulbus (a mobile app with 37 paying users).",
      paragraph3:
        "My <strong class='font-semibold text-primary'>dual skill set</strong> covers fullstack (Next.js, React, Node) <em class='italic'>and</em> CMS (custom WordPress, Craft, headless), so I adapt to very different projects, from SaaS built from scratch to long-term maintenance.",
      paragraph4:
        "I believe in <strong class='font-semibold text-accent'>lasting partnerships</strong>: clear communication, reliable delivery, and real care for business impact. <strong class='font-semibold text-primary'>Available for new collaborations</strong> across Europe.",
      personal:
        "Off-screen, I'm training in herbalism (that's where my app Bulbus came from) and constantly tinkering with new AI tools. I like building things that mean something.",
    },
    testimonial: {
      eyebrow: "Kind words",
      title: "What people say",
      items: [
        {
          quote:
            "I've seen Adeline's work and I recommend her without hesitation. She's a serious, autonomous developer with a great technical vision. You can trust her to deliver your SaaS or web projects!",
          author: "Romain Quellec",
          role: "CTO, former manager of Adeline",
        },
        {
          quote:
            "Her motivation and her commitment were greatly appreciated by our team, as were her responsiveness and her positive attitude. Adeline adapts easily to many situations. I highly recommend her project-management skills.",
          author: "Manon Duhem",
          role: "CSR Manager, Deloitte Luxembourg",
        },
        {
          quote:
            "Amazing work and I would like to use this moment to express how happy and grateful we are to have you on board. We really can't do this without you and these tasks, how small sometimes they seem, are soooo important to solve.",
          author: "Rosa",
          role: "LIME Search",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's work together",
      description:
        "Available for one-off missions as well as long-term maintenance partnerships. An app, a custom website, an AI integration, or picking up an existing project? Let's talk.",
      email: "Email me",
      linkedin: "LinkedIn",
      github: "GitHub",
      calendly: "Book a meeting",
      form: {
        name: "Your name",
        email: "Your email",
        message: "Your message",
        send: "Send message",
        sending: "Sending…",
        success:
          "Thanks, your message is on its way. I'll get back to you soon.",
        error: "Something went wrong. Try again or email me directly.",
      },
    },
  },
  fr: {
    nav: {
      portfolio: "Adeline Lefebvre",
      about: "À propos",
      services: "Offres",
      projects: "Projets",
      contact: "Contact",
      local: "Assos & commerces",
      menu: "Menu",
      backToPortfolio: "Retour au portfolio",
      skipToContent: "Aller au contenu",
    },
    hero: {
      greeting: "Bonjour, je suis",
      name: "Adeline Lefebvre",
      title: "Développeuse web fullstack freelance. Je conçois des produits web qui durent, du site sur-mesure à l'app IA.",
      description:
        "De l'idée à la mise en production, je transforme un besoin métier en produit fiable et performant. Double compétence fullstack et CMS, background produit (Station F), et des produits en production utilisés dans 6 pays.",
      availableBadge: "Disponible en freelance",
      ctaPrimary: "Discutons de votre projet",
      ctaProjects: "Voir mes projets",
      downloadCV: "Télécharger mon CV",
    },
    trust: {
      label: "Ils m'ont fait confiance",
    },
    services: {
      eyebrow: "Offres",
      title: "Mes services de développement web freelance",
      subtitle: "Trois façons de travailler ensemble, de la création au suivi dans la durée.",
      localOffer: "Une offre dédiée aux assos & commerces de proximité",
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
          "Des sites qui vont au-delà des thèmes : développement sur-mesure, headless, multilingue.",
        items: [
          "WordPress / Elementor Pro sur-mesure",
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
          "Nouvelles fonctionnalités & optimisations",
          "Performance & SEO",
          "Support direct, communication claire",
        ],
      },
    },
    projects: {
      eyebrow: "Réalisations",
      title: "Projets phares",
      viewProject: "Voir le projet",
      viewSlide: "Aller au visuel",
      moreTitle: "Autres expérimentations",
      cubynNote:
        "Avant le freelance : Software Engineer chez Cubyn (architecture 80+ microservices, Kubernetes/GCP) et Klox (plateforme SaaS React/Node).",
      rootyne: {
        title: "Rootyne, plateforme santé IA",
        description:
          "Aider chacun à comprendre ses analyses de sang et adapter son alimentation. J'ai conçu la plateforme de A à Z : pipeline d'extraction IA (Claude + Mistral) avec anonymisation, dashboard biologiste de validation, infrastructure HDS chiffrée.",
      },
      desertLeaves: {
        title: "Desert Leaves, ONG environnementale",
        description:
          "Mobiliser dons et bénévoles pour reboiser des zones arides. Plateforme complète développée de zéro : Next.js + CMS headless Prismic, dons Stripe (ponctuels & récurrents), SEO multilingue.",
      },
      lime: {
        title: "LIME Search, recrutement finance",
        description:
          "Attirer les meilleurs profils finance, et laisser l'équipe éditer le site en autonomie. Plateforme de recrutement multilingue en Craft CMS : composants Twig/PHP sur-mesure, SEO technique, maintenance en continu.",
      },
      bulbus: {
        title: "Bulbus, app mobile éducative",
        description:
          "Réviser l'herboristerie partout et réussir ses examens. App cross-platform (Flutter) : 150+ plantes, examens chronométrés, achats in-app. En ligne sur iOS et Android, 37 comptes payants.",
      },
      sds: {
        title: "SDS Lingo, site multilingue",
        description:
          "Obtenir un devis de traduction en un seul formulaire, en trois langues. Site Next.js (EN/FR/CS) : i18n complet, formulaire de devis avec envoi de fichiers, SEO multilingue (hreflang), Core Web Vitals optimisés.",
      },
      c55: {
        title: "Club Fifty Five, agence créative",
        description:
          "Donner une vitrine premium à une agence de talents, livrée en marque blanche. Widgets sur-mesure (marquee animé), Theme Builder, formulaires avancés, responsive sur 5 breakpoints.",
      },
      pepstery: {
        title: "Pepstery, jeu en réalité augmentée",
        description:
          "Jeu AR par marqueurs développé en résidence tech : génération de personnages 3D, interactions temps réel (Pusher), narration non-linéaire (A-Frame, MindAR).",
      },
    },
    about: {
      eyebrow: "Parcours",
      title: "À propos",
      paragraph1:
        "Mon parcours a commencé dans le <strong class='font-semibold text-primary'>produit et l'entrepreneuriat</strong> (Station F, école de commerce). J'en ai gardé une <em class='italic'>mentalité de fondatrice</em> : je pars du besoin métier, pas de la techno.",
      paragraph2:
        "Aujourd'hui, je suis <strong class='font-semibold text-primary'>développeuse fullstack</strong>. J'ai mis en production des produits utilisés par de vraies personnes dans <strong class='font-semibold text-accent'>6 pays</strong> : de Rootyne (plateforme santé avec IA Claude + Mistral) à Bulbus (app mobile, 37 comptes payants).",
      paragraph3:
        "Ma <strong class='font-semibold text-primary'>double compétence</strong> couvre le fullstack (Next.js, React, Node) <em class='italic'>et</em> le CMS (WordPress sur-mesure, Craft, headless), ce qui me permet de m'adapter à des projets très variés, de la création d'un SaaS à la maintenance long terme.",
      paragraph4:
        "Je crois aux <strong class='font-semibold text-accent'>partenariats durables</strong> : communication claire, livraison fiable, et un vrai souci de l'impact concret. <strong class='font-semibold text-primary'>Disponible pour de nouvelles collaborations</strong> en Europe.",
      personal:
        "Hors écran, je me forme à l'herboristerie (c'est de là qu'est née mon app Bulbus) et je teste en continu de nouveaux outils IA. J'aime construire des choses qui ont du sens.",
    },
    testimonial: {
      eyebrow: "Recommandations",
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
        {
          quote:
            "Un travail formidable, et je veux profiter de ce moment pour dire à quel point nous sommes heureux et reconnaissants de t'avoir dans l'équipe. On ne pourrait vraiment pas faire tout ça sans toi, et ces tâches, aussi petites qu'elles paraissent parfois, sont tellement importantes à régler.",
          author: "Rosa",
          role: "LIME Search",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Travaillons ensemble",
      description:
        "Disponible pour des missions ponctuelles comme pour des partenariats de maintenance au long cours. Une app, un site sur-mesure, une intégration IA ou la reprise d'un projet existant ? Parlons-en.",
      email: "M'envoyer un email",
      linkedin: "LinkedIn",
      github: "GitHub",
      calendly: "Prendre rendez-vous",
      form: {
        name: "Votre nom",
        email: "Votre email",
        message: "Votre message",
        send: "Envoyer le message",
        sending: "Envoi…",
        success: "Merci, votre message est parti. Je vous réponds vite.",
        error: "Un souci est survenu. Réessayez ou écrivez-moi directement.",
      },
    },
  },
  es: {
    nav: {
      portfolio: "Adeline Lefebvre",
      about: "Sobre mí",
      services: "Servicios",
      projects: "Proyectos",
      contact: "Contacto",
      local: "Asociaciones y comercios",
      menu: "Menú",
      backToPortfolio: "Volver al portafolio",
      skipToContent: "Ir al contenido",
    },
    hero: {
      greeting: "Hola, soy",
      name: "Adeline Lefebvre",
      title: "Desarrolladora web fullstack freelance. Creo productos web que perduran, del sitio a medida a la app con IA.",
      description:
        "De la idea a la producción, convierto una necesidad de negocio en un producto fiable y de alto rendimiento. Doble competencia fullstack y CMS, base en producto (Station F), y productos en producción usados en 6 países.",
      availableBadge: "Disponible para freelance",
      ctaPrimary: "Hablemos de tu proyecto",
      ctaProjects: "Ver mis proyectos",
      downloadCV: "Descargar CV",
    },
    trust: {
      label: "Han confiado en mí",
    },
    services: {
      eyebrow: "Servicios",
      title: "Mis servicios de desarrollo web freelance",
      subtitle: "Tres formas de trabajar juntos, de la creación al mantenimiento a largo plazo.",
      localOffer: "Una oferta dedicada a asociaciones y comercios",
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
          "Sitios que van más allá de las plantillas: desarrollo a medida, headless, multilingüe.",
        items: [
          "WordPress / Elementor Pro a medida",
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
      eyebrow: "Trabajos",
      title: "Proyectos destacados",
      viewProject: "Ver proyecto",
      viewSlide: "Ir a la imagen",
      moreTitle: "Otros experimentos",
      cubynNote:
        "Antes del freelance: Software Engineer en Cubyn (arquitectura de 80+ microservicios, Kubernetes/GCP) y Klox (plataforma SaaS React/Node).",
      rootyne: {
        title: "Rootyne, plataforma de salud con IA",
        description:
          "Ayudar a cualquiera a entender sus análisis de sangre y ajustar su alimentación. Creé la plataforma desde cero: pipeline de extracción con IA (Claude + Mistral) con anonimización, dashboard de validación para biólogos e infraestructura HDS cifrada.",
      },
      desertLeaves: {
        title: "Desert Leaves, ONG ambiental",
        description:
          "Movilizar donaciones y voluntarios para reforestar zonas áridas. Plataforma completa desarrollada desde cero: Next.js + CMS headless Prismic, donaciones Stripe (puntuales y recurrentes), SEO multilingüe.",
      },
      lime: {
        title: "LIME Search, reclutamiento financiero",
        description:
          "Atraer a los mejores perfiles de finanzas, y dejar que el equipo edite la web de forma autónoma. Plataforma de reclutamiento multilingüe en Craft CMS: componentes Twig/PHP a medida, SEO técnico, mantenimiento continuo.",
      },
      bulbus: {
        title: "Bulbus, app móvil educativa",
        description:
          "Repasar la herboristería en cualquier lugar y aprobar los exámenes. App multiplataforma (Flutter): 150+ plantas, exámenes cronometrados, compras in-app. Disponible en iOS y Android, 37 cuentas de pago.",
      },
      sds: {
        title: "SDS Lingo, sitio multilingüe",
        description:
          "Conseguir un presupuesto de traducción con un solo formulario, en tres idiomas. Sitio Next.js (EN/FR/CS): i18n completo, formulario de presupuesto con subida de archivos, SEO multilingüe (hreflang), Core Web Vitals optimizados.",
      },
      c55: {
        title: "Club Fifty Five, agencia creativa",
        description:
          "Dar a una agencia de talentos una vitrina premium, entregada en marca blanca. Widgets a medida (marquee animado), Theme Builder, formularios avanzados, responsive en 5 breakpoints.",
      },
      pepstery: {
        title: "Pepstery, juego de realidad aumentada",
        description:
          "Juego de RA por marcadores desarrollado en una residencia tech: generación de personajes 3D, interacciones en tiempo real (Pusher), narrativa no lineal (A-Frame, MindAR).",
      },
    },
    about: {
      eyebrow: "Trayectoria",
      title: "Sobre mí",
      paragraph1:
        "Mi camino comenzó en el <strong class='font-semibold text-primary'>producto y el emprendimiento</strong> (Station F, escuela de negocios). Conservé esa <em class='italic'>mentalidad de fundadora</em>: parto de la necesidad de negocio, no de la tecnología.",
      paragraph2:
        "Hoy soy <strong class='font-semibold text-primary'>desarrolladora fullstack</strong>. He llevado a producción productos usados por personas reales en <strong class='font-semibold text-accent'>6 países</strong>: desde Rootyne (plataforma de salud con IA Claude + Mistral) hasta Bulbus (app móvil, 37 cuentas de pago).",
      paragraph3:
        "Mi <strong class='font-semibold text-primary'>doble competencia</strong> abarca el fullstack (Next.js, React, Node) <em class='italic'>y</em> el CMS (WordPress a medida, Craft, headless), lo que me permite adaptarme a proyectos muy distintos, de la creación de un SaaS al mantenimiento a largo plazo.",
      paragraph4:
        "Creo en las <strong class='font-semibold text-accent'>colaboraciones duraderas</strong>: comunicación clara, entrega fiable y un cuidado real por el impacto de negocio. <strong class='font-semibold text-primary'>Disponible para nuevas colaboraciones</strong> en Europa.",
      personal:
        "Fuera de la pantalla, me formo en herboristería (de ahí nació mi app Bulbus) y experimento sin parar con nuevas herramientas de IA. Me gusta construir cosas que tienen sentido.",
    },
    testimonial: {
      eyebrow: "Recomendaciones",
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
        {
          quote:
            "Un trabajo increíble, y quiero aprovechar este momento para expresar lo felices y agradecidos que estamos de tenerte en el equipo. De verdad no podríamos hacer todo esto sin ti, y estas tareas, por pequeñas que a veces parezcan, son importantísimas de resolver.",
          author: "Rosa",
          role: "LIME Search",
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Trabajemos juntos",
      description:
        "Disponible tanto para misiones puntuales como para colaboraciones de mantenimiento a largo plazo. ¿Una app, un sitio a medida, una integración con IA o retomar un proyecto existente? Hablemos.",
      email: "Enviarme un email",
      linkedin: "LinkedIn",
      github: "GitHub",
      calendly: "Reservar una reunión",
      form: {
        name: "Tu nombre",
        email: "Tu email",
        message: "Tu mensaje",
        send: "Enviar mensaje",
        sending: "Enviando…",
        success: "Gracias, tu mensaje está en camino. Te respondo pronto.",
        error: "Algo falló. Inténtalo de nuevo o escríbeme directamente.",
      },
    },
  },
};

export function getTranslations(lang: Language) {
  return translations[lang];
}
