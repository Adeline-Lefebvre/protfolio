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
      intro: "Each one started with a business problem. Here is what I delivered.",
      moreTitle: "More projects",
      moreIntro: "Agency builds, a large migration, a mobile app and volunteer work.",
      viewSite: "View site",
      creditLabel: "Design and project lead:",
      fictionalData: "Screen recorded with fictional data.",
      shareCardAlt: "Share card generated for a vacancy, shown in a chat preview",
      pepsteryNote: "Also: Pepstery, a marker-based augmented reality game built during a tech residency.",
      cubynNote: "Before freelancing: Software Engineer at Cubyn (80+ microservices, Kubernetes/GCP) and Klox (React/Node SaaS platform).",
      items: {
        rootyne: {
          name: "Rootyne",
          kicker: "AI health platform",
          title: "Understand your blood test and adjust your diet",
          summary: "A platform built from scratch: people upload their blood test, an AI pipeline extracts the values, and a clinical biologist reviews every report before it reaches them.",
          facts: [
            {
              value: "Claude + Mistral",
              label: "extraction pipeline, behind an anonymization layer",
            },
            {
              value: "HDS",
              label: "encrypted infrastructure, compliant with French health data hosting",
            },
            {
              value: "Human review",
              label: "a dedicated dashboard where the biologist validates each report",
            },
          ],
          role: "Founder and developer: product, development and production.",
        },
        inc: {
          name: "IN CULTURE",
          anonName: "Cultural collaborations agency",
          kicker: "Cultural collaborations agency",
          title: "A brand site the agency runs on its own",
          summary: "Four pages and 23 case pages, developed solo from the validated design to launch: a cursor-driven infinite carousel, audio that keeps playing across pages, and a CMS for every text, image and case.",
          facts: [
            {
              value: "23",
              label: "case pages the team edits in Sanity, live within seconds",
            },
            {
              value: "0",
              label: "animation library: CSS and requestAnimationFrame only",
            },
            {
              value: "Light / dark",
              label: "two themes, responsive from mobile to 1920 px",
            },
          ],
          role: "Development: Adeline Lefebvre, solo from design file to launch.",
        },
        desertLeaves: {
          name: "Desert Leaves",
          kicker: "Environmental NGO",
          title: "Rally donations and volunteers, in four languages",
          summary: "A complete platform built from scratch: Next.js, headless Prismic CMS, one-time and recurring Stripe donations. Content is translated automatically the minute it is published, and the team corrects it in a simple Google Sheet.",
          facts: [
            {
              value: "4 languages",
              label: "Spanish, English, French and Dutch, with localized URLs",
            },
            {
              value: "€0",
              label: "per month for translation: no subscription, no API key, no server",
            },
            {
              value: "69 tests",
              label: "automated, and translations proofread twice before launch",
            },
          ],
          role: "Development of the platform from scratch, then its internationalization.",
        },
        lime: {
          name: "LIME Search",
          kicker: "Finance recruitment agency",
          title: "Interim vacancies shared privately, invisible to Google",
          summary: "On the Craft CMS site I maintain, interim assignments circulate by direct link in a private WhatsApp group. They never appear in lists, in the sitemap or in search results.",
          facts: [
            {
              value: "1 link",
              label: "per vacancy, short and shareable, with a branded preview card generated automatically",
            },
            {
              value: "0 re-entry",
              label: "applications and CVs land directly in OTYS, the system the recruitment team already uses",
            },
            {
              value: "7 days",
              label: "then CVs held on the server are deleted automatically (GDPR)",
            },
          ],
          role: "Custom Craft plugin work on the OTYS integration, build from the agency's mockup, ongoing maintenance of the site.",
        },
        velec: {
          name: "Velec Systems",
          kicker: "Food industry manufacturer",
          title: "Launch a trilingual redesign that is fast, responsive and properly indexed",
          summary: "Performance optimization of an Elementor Pro and WPML build, responsive adaptation, technical SEO fixes across a WordPress multisite, then post-launch stabilization with the client's SEO agency.",
          facts: [
            {
              value: "89",
              label: "PageSpeed score on desktop, on a very dense home page",
            },
            {
              value: "47 pages",
              label: "adapted for tablet and mobile",
            },
            {
              value: "384 URLs",
              label: "discovered by Google once the sitemaps were fixed, up from 261",
            },
          ],
          role: "Successive fixed-price missions since August 2026, with a written report at every step.",
        },
        revier: {
          name: "Revier Therapeutics",
          anonName: "Cardiometabolic biotech",
          kicker: "Biotech one-pager",
          summary: "A precise, scientific showcase designed to attract funding and partnerships, built pixel-perfect from the agency's mockup.",
          points: [
            "Two-state header that inverts over the hero, then pins on scroll",
            "Clinical pipeline chart, scroll progress indicator and program popups, custom-coded",
          ],
        },
        lipology: {
          name: "Lipology Clinic",
          anonName: "Dutch medical clinic",
          kicker: "Medical clinic, migration in progress",
          summary: "Move a 400-page clinic site to a new mobile-first design without losing content.",
          points: [
            "Around 125 treatment pages migrated so far, template by template",
            "FAQ structured data, anchor navigation, metadata and medical compliance fixes",
          ],
        },
        c55: {
          name: "Club Fifty Five",
          anonName: "Creative talent agency",
          kicker: "Creative talent agency",
          summary: "A premium showcase for a talent agency, built with WordPress and Elementor Pro.",
          points: [
            "Custom widgets, including an animated marquee",
            "Theme Builder, advanced forms, responsive across 5 breakpoints",
          ],
        },
        bulbus: {
          name: "Bulbus",
          kicker: "Mobile app, my own product",
          summary: "Revise herbalism anywhere and pass the plant recognition exams.",
          points: [
            "150+ plants, timed mock exams, in-app purchases",
            "Live on iOS and Android, 37 paying users",
          ],
        },
        shifters: {
          name: "The Shifters",
          kicker: "Climate nonprofit, volunteer work",
          summary: "Volunteer developer on the internal tools team of a 20,000-member climate association.",
          points: [
            "Fixed a login redirect that was losing deep links, covered by 11 tests",
            "Features and fixes across several services, with code review on every merge request",
          ],
        },
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
      intro: "À chaque fois, un besoin métier au départ. Voici ce que j'ai livré.",
      moreTitle: "Autres projets",
      moreIntro: "Des intégrations pour une agence, une grande migration, une app mobile et du bénévolat.",
      viewSite: "Voir le site",
      creditLabel: "Design et direction de projet :",
      fictionalData: "Capture réalisée avec des données fictives.",
      shareCardAlt: "Carte de partage générée pour une offre, affichée dans un aperçu de conversation",
      pepsteryNote: "Aussi : Pepstery, un jeu en réalité augmentée par marqueurs, développé en résidence tech.",
      cubynNote: "Avant le freelance : Software Engineer chez Cubyn (architecture 80+ microservices, Kubernetes/GCP) et Klox (plateforme SaaS React/Node).",
      items: {
        rootyne: {
          name: "Rootyne",
          kicker: "Plateforme santé IA",
          title: "Comprendre sa prise de sang et adapter son alimentation",
          summary: "Une plateforme conçue de zéro : on dépose son bilan sanguin, un pipeline IA en extrait les valeurs, et une biologiste médicale relit chaque compte rendu avant qu'il soit remis.",
          facts: [
            {
              value: "Claude + Mistral",
              label: "pipeline d'extraction, derrière une couche d'anonymisation",
            },
            {
              value: "HDS",
              label: "infrastructure chiffrée, conforme à l'hébergement de données de santé",
            },
            {
              value: "Relecture humaine",
              label: "un tableau de bord dédié où la biologiste valide chaque compte rendu",
            },
          ],
          role: "Fondatrice et développeuse : produit, développement et mise en production.",
        },
        inc: {
          name: "IN CULTURE",
          anonName: "Agence de collaborations culturelles",
          kicker: "Agence de collaborations culturelles",
          title: "Un site de marque que l'agence fait vivre en autonomie",
          summary: "Quatre pages et 23 pages projet, développées seule de la maquette validée à la mise en ligne : carrousel infini piloté au curseur, lecture audio qui se poursuit d'une page à l'autre, et un CMS pour chaque texte, image et projet.",
          facts: [
            {
              value: "23",
              label: "pages projet que l'équipe édite dans Sanity, en ligne en quelques secondes",
            },
            {
              value: "0",
              label: "bibliothèque d'animation : uniquement CSS et requestAnimationFrame",
            },
            {
              value: "Clair / sombre",
              label: "deux thèmes, responsive du mobile au 1920 px",
            },
          ],
          role: "Développement : Adeline Lefebvre, seule de la maquette à la mise en ligne.",
        },
        desertLeaves: {
          name: "Desert Leaves",
          kicker: "ONG environnementale",
          title: "Mobiliser dons et bénévoles, en quatre langues",
          summary: "Une plateforme complète développée de zéro : Next.js, CMS headless Prismic, dons Stripe ponctuels et récurrents. Le contenu est traduit automatiquement dès sa publication, et l'équipe le corrige dans un simple Google Sheet.",
          facts: [
            {
              value: "4 langues",
              label: "espagnol, anglais, français et néerlandais, avec des URL localisées",
            },
            {
              value: "0 €",
              label: "par mois pour la traduction : ni abonnement, ni clé d'API, ni serveur",
            },
            {
              value: "69 tests",
              label: "automatiques, et des traductions relues deux fois avant la mise en ligne",
            },
          ],
          role: "Développement de la plateforme de zéro, puis son internationalisation.",
        },
        lime: {
          name: "LIME Search",
          kicker: "Cabinet de recrutement finance",
          title: "Des offres d'intérim partagées en privé, invisibles de Google",
          summary: "Sur le site Craft CMS que je maintiens, les missions d'intérim circulent par lien direct dans un groupe WhatsApp privé. Elles n'apparaissent ni dans les listes, ni dans le sitemap, ni dans les résultats de recherche.",
          facts: [
            {
              value: "1 lien",
              label: "court par offre, avec une carte d'aperçu générée aux couleurs de l'agence",
            },
            {
              value: "0 ressaisie",
              label: "candidatures et CV arrivent directement dans OTYS, l'outil de l'équipe de recrutement",
            },
            {
              value: "7 jours",
              label: "puis les CV en transit sur le serveur sont supprimés automatiquement (RGPD)",
            },
          ],
          role: "Développement du plugin Craft sur l'intégration OTYS, intégration de la maquette de l'agence, maintenance du site en continu.",
        },
        velec: {
          name: "Velec Systems",
          kicker: "Industriel agroalimentaire",
          title: "Mettre en ligne une refonte trilingue rapide, responsive et bien indexée",
          summary: "Optimisation des performances d'un site Elementor Pro et WPML, adaptation responsive, corrections SEO techniques sur un multisite WordPress, puis stabilisation après la mise en production avec l'agence SEO du client.",
          facts: [
            {
              value: "89",
              label: "de score PageSpeed sur ordinateur, sur une page d'accueil très dense",
            },
            {
              value: "47 pages",
              label: "adaptées pour tablette et mobile",
            },
            {
              value: "384 URL",
              label: "découvertes par Google une fois les sitemaps corrigés, contre 261",
            },
          ],
          role: "Missions successives au forfait depuis août 2026, avec un compte rendu écrit à chaque étape.",
        },
        revier: {
          name: "Revier Therapeutics",
          anonName: "Biotech cardiométabolique",
          kicker: "Biotech, site d'une page",
          summary: "Une vitrine scientifique et précise, pensée pour attirer financements et partenariats, intégrée au pixel près depuis la maquette de l'agence.",
          points: [
            "En-tête à deux états, qui s'inverse sur le hero puis se fixe au défilement",
            "Pipeline clinique, indicateur de progression et popups par programme, codés sur mesure",
          ],
        },
        lipology: {
          name: "Lipology Clinic",
          anonName: "Clinique médicale néerlandaise",
          kicker: "Clinique médicale, migration en cours",
          summary: "Faire passer un site de 400 pages vers un nouveau design pensé pour le mobile, sans perdre de contenu.",
          points: [
            "Environ 125 pages de traitement migrées à ce jour, template par template",
            "Données structurées FAQ, navigation par ancres, métadonnées et corrections de conformité médicale",
          ],
        },
        c55: {
          name: "Club Fifty Five",
          anonName: "Agence de talents créatifs",
          kicker: "Agence de talents créatifs",
          summary: "Une vitrine premium pour une agence de talents, intégrée sous WordPress et Elementor Pro.",
          points: [
            "Widgets sur mesure, dont un bandeau défilant animé",
            "Theme Builder, formulaires avancés, responsive sur 5 points de rupture",
          ],
        },
        bulbus: {
          name: "Bulbus",
          kicker: "App mobile, produit personnel",
          summary: "Réviser l'herboristerie partout et réussir ses examens de reconnaissance de plantes.",
          points: [
            "Plus de 150 plantes, examens chronométrés, achats intégrés",
            "En ligne sur iOS et Android, 37 comptes payants",
          ],
        },
        shifters: {
          name: "The Shifters",
          kicker: "Association pour le climat, bénévolat",
          summary: "Développeuse bénévole dans l'équipe outils internes d'une association de 20 000 membres.",
          points: [
            "Correction d'une redirection après connexion qui perdait les liens profonds, couverte par 11 tests",
            "Fonctionnalités et correctifs sur plusieurs services, avec revue de code à chaque merge request",
          ],
        },
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
      intro: "En cada caso, una necesidad de negocio como punto de partida. Esto es lo que entregué.",
      moreTitle: "Más proyectos",
      moreIntro: "Desarrollos para una agencia, una gran migración, una app móvil y voluntariado.",
      viewSite: "Ver el sitio",
      creditLabel: "Diseño y dirección de proyecto:",
      fictionalData: "Captura realizada con datos ficticios.",
      shareCardAlt: "Tarjeta para compartir generada para una oferta, mostrada en una vista previa de conversación",
      pepsteryNote: "También: Pepstery, un juego de realidad aumentada por marcadores, desarrollado en una residencia tech.",
      cubynNote: "Antes del freelance: Software Engineer en Cubyn (arquitectura de 80+ microservicios, Kubernetes/GCP) y Klox (plataforma SaaS React/Node).",
      items: {
        rootyne: {
          name: "Rootyne",
          kicker: "Plataforma de salud con IA",
          title: "Entender tu análisis de sangre y ajustar tu alimentación",
          summary: "Una plataforma creada desde cero: se sube el análisis de sangre, un pipeline de IA extrae los valores y una bióloga clínica revisa cada informe antes de entregarlo.",
          facts: [
            {
              value: "Claude + Mistral",
              label: "pipeline de extracción, tras una capa de anonimización",
            },
            {
              value: "HDS",
              label: "infraestructura cifrada, conforme al alojamiento de datos de salud en Francia",
            },
            {
              value: "Revisión humana",
              label: "un panel dedicado donde la bióloga valida cada informe",
            },
          ],
          role: "Fundadora y desarrolladora: producto, desarrollo y puesta en producción.",
        },
        inc: {
          name: "IN CULTURE",
          anonName: "Agencia de colaboraciones culturales",
          kicker: "Agencia de colaboraciones culturales",
          title: "Un sitio de marca que la agencia gestiona de forma autónoma",
          summary: "Cuatro páginas y 23 páginas de proyecto, desarrolladas en solitario desde el diseño validado hasta la publicación: carrusel infinito guiado por el cursor, audio que sigue sonando entre páginas y un CMS para cada texto, imagen y proyecto.",
          facts: [
            {
              value: "23",
              label: "páginas de proyecto que el equipo edita en Sanity, en línea en segundos",
            },
            {
              value: "0",
              label: "librerías de animación: solo CSS y requestAnimationFrame",
            },
            {
              value: "Claro / oscuro",
              label: "dos temas, responsive del móvil a 1920 px",
            },
          ],
          role: "Desarrollo: Adeline Lefebvre, en solitario del diseño a la publicación.",
        },
        desertLeaves: {
          name: "Desert Leaves",
          kicker: "ONG ambiental",
          title: "Movilizar donaciones y voluntariado, en cuatro idiomas",
          summary: "Una plataforma completa creada desde cero: Next.js, CMS headless Prismic, donaciones Stripe puntuales y recurrentes. El contenido se traduce automáticamente en cuanto se publica, y el equipo lo corrige en una simple hoja de Google Sheets.",
          facts: [
            {
              value: "4 idiomas",
              label: "español, inglés, francés y neerlandés, con URL localizadas",
            },
            {
              value: "0 €",
              label: "al mes por la traducción: sin suscripción, sin clave de API, sin servidor",
            },
            {
              value: "69 tests",
              label: "automáticos, y traducciones revisadas dos veces antes de publicar",
            },
          ],
          role: "Desarrollo de la plataforma desde cero, y después su internacionalización.",
        },
        lime: {
          name: "LIME Search",
          kicker: "Agencia de selección en finanzas",
          title: "Ofertas de interim compartidas en privado, invisibles para Google",
          summary: "En el sitio Craft CMS que mantengo, las misiones de interim circulan por enlace directo en un grupo privado de WhatsApp. No aparecen ni en los listados, ni en el sitemap, ni en los resultados de búsqueda.",
          facts: [
            {
              value: "1 enlace",
              label: "corto por oferta, con una tarjeta de vista previa generada con los colores de la agencia",
            },
            {
              value: "0 reintroducción",
              label: "candidaturas y CV llegan directamente a OTYS, la herramienta del equipo de selección",
            },
            {
              value: "7 días",
              label: "y los CV en tránsito en el servidor se eliminan automáticamente (RGPD)",
            },
          ],
          role: "Desarrollo del plugin de Craft sobre la integración con OTYS, maquetación a partir del diseño de la agencia, mantenimiento continuo del sitio.",
        },
        velec: {
          name: "Velec Systems",
          kicker: "Fabricante industrial agroalimentario",
          title: "Lanzar un rediseño trilingüe rápido, responsive y bien indexado",
          summary: "Optimización del rendimiento de un sitio Elementor Pro y WPML, adaptación responsive, correcciones de SEO técnico en un multisitio WordPress y estabilización tras el lanzamiento junto a la agencia SEO del cliente.",
          facts: [
            {
              value: "89",
              label: "de puntuación PageSpeed en escritorio, en una página de inicio muy densa",
            },
            {
              value: "47 páginas",
              label: "adaptadas para tableta y móvil",
            },
            {
              value: "384 URL",
              label: "descubiertas por Google tras corregir los sitemaps, frente a 261",
            },
          ],
          role: "Misiones sucesivas a precio cerrado desde agosto de 2026, con un informe escrito en cada etapa.",
        },
        revier: {
          name: "Revier Therapeutics",
          anonName: "Biotecnológica cardiometabólica",
          kicker: "Biotecnología, sitio de una página",
          summary: "Un escaparate científico y preciso, pensado para atraer financiación y alianzas, maquetado al píxel a partir del diseño de la agencia.",
          points: [
            "Cabecera de dos estados, que se invierte sobre el hero y luego se fija al hacer scroll",
            "Pipeline clínico, indicador de progreso y popups por programa, programados a medida",
          ],
        },
        lipology: {
          name: "Lipology Clinic",
          anonName: "Clínica médica neerlandesa",
          kicker: "Clínica médica, migración en curso",
          summary: "Trasladar un sitio de 400 páginas a un nuevo diseño pensado para móvil, sin perder contenido.",
          points: [
            "Unas 125 páginas de tratamiento migradas hasta la fecha, plantilla a plantilla",
            "Datos estructurados de FAQ, navegación por anclas, metadatos y correcciones de conformidad médica",
          ],
        },
        c55: {
          name: "Club Fifty Five",
          anonName: "Agencia de talento creativo",
          kicker: "Agencia de talento creativo",
          summary: "Un escaparate premium para una agencia de talento, creado con WordPress y Elementor Pro.",
          points: [
            "Widgets a medida, entre ellos una marquesina animada",
            "Theme Builder, formularios avanzados, responsive en 5 puntos de ruptura",
          ],
        },
        bulbus: {
          name: "Bulbus",
          kicker: "App móvil, producto propio",
          summary: "Repasar la herboristería en cualquier lugar y aprobar los exámenes de reconocimiento de plantas.",
          points: [
            "Más de 150 plantas, exámenes cronometrados, compras integradas",
            "Disponible en iOS y Android, 37 cuentas de pago",
          ],
        },
        shifters: {
          name: "The Shifters",
          kicker: "Asociación por el clima, voluntariado",
          summary: "Desarrolladora voluntaria en el equipo de herramientas internas de una asociación de 20 000 miembros.",
          points: [
            "Corrección de una redirección tras el inicio de sesión que perdía los enlaces profundos, cubierta por 11 tests",
            "Funciones y correcciones en varios servicios, con revisión de código en cada merge request",
          ],
        },
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
