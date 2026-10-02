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
        "You have a product to launch, a site that needs to evolve, or an idea to test with AI. I start from your need, build it, ship it, and stay available afterwards. One point of contact, from the first call to production.",
      availableBadge: "Available for freelance",
      ctaPrimary: "Let's talk about your project",
      ctaCall: "Book a 15-min call",
      ctaProjects: "See my work",
      downloadCV: "Download CV",
    },
    trust: {
      label: "Trusted by",
    },
    services: {
      eyebrow: "Services",
      title: "Three ways to work together",
      subtitle: "My freelance web development services, from a first product to long-term care.",
      localOffer: "A dedicated offer for nonprofits & local shops",
      proofLabel: "Example:",
      ai: {
        title: "Launch a product or an AI app",
        description: "You have an idea or a business need. I design and build the complete application, all the way to production.",
        items: [
          "A custom application, from the interface to the database",
          "AI where it is useful: document extraction, automations, assistants",
          "Online payment, user accounts and an admin area",
          "Tested, documented code that your team can take over",
        ],
        proof: "Rootyne",
        stack: "Next.js · TypeScript · Claude · Mistral · Stripe",
      },
      cms: {
        title: "Build or redesign a custom site",
        description: "A site that looks like you, and that your team updates without a developer.",
        items: [
          "A faithful build of your design, or your agency's",
          "A simple editing space for your texts, images and pages",
          "Several languages and careful technical SEO",
          "Connected to your tools: CRM, recruitment, payment, newsletter",
        ],
        proof: "IN CULTURE",
        stack: "Next.js · Sanity · Prismic · WordPress · Craft CMS",
      },
      maintenance: {
        title: "Improve an existing site",
        description: "I take your site as it is and keep it moving forward over time.",
        items: [
          "New features, delivered in small steps",
          "Performance, mobile adaptation and technical SEO",
          "Fixes and updates that do not break what works",
          "One point of contact and a written report at every step",
        ],
        proof: "Velec Systems",
        stack: "WordPress · Craft CMS · Next.js",
      },
    },
    projects: {
      eyebrow: "Work",
      title: "Featured projects",
      intro: "A concrete need to start with, a live product at the end.",
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
          title: "Blood test results people can finally understand",
          summary: "A platform built from scratch: people upload their blood test, an AI pipeline extracts the values, and a clinical biologist reviews every report before it reaches them.",
          facts: [
            {
              value: "Full product",
              label: "from blood test upload to online payment, designed and shipped solo",
            },
            {
              value: "Protected data",
              label: "anonymized before any AI processing, encrypted, on HDS-compliant health data hosting",
            },
            {
              value: "AI under control",
              label: "a clinical biologist reviews and validates every report before it is sent",
            },
          ],
          role: "Founder and developer: product, development and production.",
        },
        inc: {
          name: "IN CULTURE",
          anonName: "Cultural collaborations agency",
          kicker: "Cultural collaborations agency",
          title: "A site true to the brand, updated by the agency itself",
          summary: "Four pages and 23 case pages, developed solo from the validated design to launch: a cursor-driven infinite carousel, audio that keeps playing across pages, and a CMS for every text, image and case.",
          facts: [
            {
              value: "Full autonomy",
              label: "the team edits every text, image and case itself, live within seconds",
            },
            {
              value: "Made to measure",
              label: "brand-specific interactions hand-coded from the design, with no theme or template",
            },
            {
              value: "0 downtime",
              label: "launch and domain switch without interrupting the agency's email",
            },
          ],
          role: "Development: Adeline Lefebvre, solo from design file to launch.",
        },
        desertLeaves: {
          name: "Desert Leaves",
          kicker: "Environmental NGO",
          title: "A donation and volunteering platform in four languages",
          summary: "A complete platform built from scratch: Next.js, headless Prismic CMS, one-time and recurring Stripe donations. Content is translated automatically the minute it is published, and the team corrects it in a simple Google Sheet.",
          facts: [
            {
              value: "4 languages",
              label: "Spanish, English, French and Dutch, translated one to two minutes after each publication",
            },
            {
              value: "€0",
              label: "per month for translation: no subscription, no API key, no server",
            },
            {
              value: "< 1 minute",
              label: "for a correction made by the team in the spreadsheet to appear on the site",
            },
          ],
          role: "Development of the platform from scratch, then its internationalization.",
        },
        lime: {
          name: "LIME Search",
          kicker: "Finance recruitment agency",
          title: "Confidential interim vacancies, shared with a single link",
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
              value: "GDPR",
              label: "CVs held on the server are deleted automatically after 7 days",
            },
          ],
          role: "Custom Craft plugin work on the OTYS integration, build from the agency's mockup, ongoing maintenance of the site.",
        },
        velec: {
          name: "Velec Systems",
          kicker: "Food industry manufacturer",
          title: "An industrial site that is faster, mobile-ready and properly indexed",
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
    process: {
      eyebrow: "Method",
      title: "How it works",
      steps: [
        {
          title: "We talk",
          text: "A 15-minute call, no commitment. You describe your need, I tell you what is feasible, and what is not.",
        },
        {
          title: "A clear quote",
          text: "A written scope and a price announced in advance, step by step. You know what you pay for and what you get.",
        },
        {
          title: "Delivery in steps",
          text: "You see the project move forward, with a written report at every step. After launch, I stay available to keep it evolving.",
        },
      ],
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
            "Amazing work and I would like to use this moment to express how happy and grateful we are to have you on board. We really can't do this without you and these tasks, how small sometimes they seem, are soooo important to solve.",
          author: "Rosa",
          role: "LIME Search",
        },
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
        "Vous avez un produit à lancer, un site à faire évoluer ou une idée à tester avec l'IA. Je pars de votre besoin, je construis, je mets en ligne, et je reste disponible ensuite. Une seule interlocutrice, du premier échange à la production.",
      availableBadge: "Disponible en freelance",
      ctaPrimary: "Discutons de votre projet",
      ctaCall: "Réserver un appel de 15 min",
      ctaProjects: "Voir mes projets",
      downloadCV: "Télécharger mon CV",
    },
    trust: {
      label: "Ils m'ont fait confiance",
    },
    services: {
      eyebrow: "Offres",
      title: "Trois façons de travailler ensemble",
      subtitle: "Mes services de développement web freelance, du premier produit au suivi dans la durée.",
      localOffer: "Une offre dédiée aux assos & commerces de proximité",
      proofLabel: "Exemple :",
      ai: {
        title: "Lancer un produit ou une app IA",
        description: "Vous avez une idée ou un besoin métier. Je conçois et développe l'application complète, jusqu'à la mise en production.",
        items: [
          "Une application sur mesure, de l'interface à la base de données",
          "De l'IA là où elle est utile : extraction de documents, automatisations, assistants",
          "Paiement en ligne, comptes et espace d'administration",
          "Un code testé et documenté, que votre équipe peut reprendre",
        ],
        proof: "Rootyne",
        stack: "Next.js · TypeScript · Claude · Mistral · Stripe",
      },
      cms: {
        title: "Créer ou refondre un site sur mesure",
        description: "Un site à votre image, que votre équipe met à jour sans développeur.",
        items: [
          "L'intégration fidèle de votre maquette, ou de celle de votre agence",
          "Un espace d'édition simple pour vos textes, images et pages",
          "Plusieurs langues et un référencement technique soigné",
          "La connexion à vos outils : CRM, recrutement, paiement, newsletter",
        ],
        proof: "IN CULTURE",
        stack: "Next.js · Sanity · Prismic · WordPress · Craft CMS",
      },
      maintenance: {
        title: "Faire évoluer un site existant",
        description: "Je reprends votre site tel qu'il est et je le fais avancer dans la durée.",
        items: [
          "De nouvelles fonctionnalités, livrées par petites étapes",
          "Performance, adaptation mobile et référencement technique",
          "Des corrections et mises à jour qui ne cassent pas l'existant",
          "Une seule interlocutrice et un compte rendu écrit à chaque étape",
        ],
        proof: "Velec Systems",
        stack: "WordPress · Craft CMS · Next.js",
      },
    },
    projects: {
      eyebrow: "Réalisations",
      title: "Projets phares",
      intro: "Un besoin concret au départ, un produit en ligne à l'arrivée.",
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
          title: "Des analyses de sang enfin compréhensibles",
          summary: "Une plateforme conçue de zéro : on dépose son bilan sanguin, l'IA en extrait les valeurs, et une biologiste médicale relit chaque compte rendu, avec des conseils alimentaires adaptés.",
          facts: [
            {
              value: "Produit complet",
              label: "du dépôt du bilan au paiement en ligne, conçu et mis en production seule",
            },
            {
              value: "Données protégées",
              label: "anonymisation avant tout traitement par l'IA, chiffrement et infrastructure conforme HDS pour les données de santé",
            },
            {
              value: "IA sous contrôle",
              label: "une biologiste médicale relit et valide chaque compte rendu avant envoi",
            },
          ],
          role: "Fondatrice et développeuse : produit, développement et mise en production.",
        },
        inc: {
          name: "IN CULTURE",
          anonName: "Agence de collaborations culturelles",
          kicker: "Agence de collaborations culturelles",
          title: "Un site à l'image de la marque, que l'agence met à jour seule",
          summary: "Quatre pages et 23 pages projet, développées seule de la maquette validée à la mise en ligne : carrousel infini piloté au curseur, lecture audio qui se poursuit d'une page à l'autre, et un CMS pour chaque texte, image et projet.",
          facts: [
            {
              value: "Autonomie totale",
              label: "l'équipe modifie elle-même textes, images et projets, en ligne en quelques secondes",
            },
            {
              value: "Sur mesure",
              label: "des interactions propres à la marque, codées à la main à partir de la maquette, sans thème ni template",
            },
            {
              value: "0 interruption",
              label: "mise en ligne et bascule du domaine sans couper la messagerie de l'agence",
            },
          ],
          role: "Développement : Adeline Lefebvre, seule de la maquette à la mise en ligne.",
        },
        desertLeaves: {
          name: "Desert Leaves",
          kicker: "ONG environnementale",
          title: "Une plateforme de dons et de bénévolat en quatre langues",
          summary: "Une plateforme complète développée de zéro : Next.js, CMS headless Prismic, dons Stripe ponctuels et récurrents. Le contenu est traduit automatiquement dès sa publication, et l'équipe le corrige dans un simple Google Sheet.",
          facts: [
            {
              value: "4 langues",
              label: "espagnol, anglais, français et néerlandais, traduites une à deux minutes après chaque publication",
            },
            {
              value: "0 €",
              label: "par mois pour la traduction : ni abonnement, ni clé d'API, ni serveur",
            },
            {
              value: "< 1 minute",
              label: "pour qu'une correction faite par l'équipe dans le tableur apparaisse sur le site",
            },
          ],
          role: "Développement de la plateforme de zéro, puis son internationalisation.",
        },
        lime: {
          name: "LIME Search",
          kicker: "Cabinet de recrutement finance",
          title: "Des offres d'intérim confidentielles, partagées par simple lien",
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
              value: "RGPD",
              label: "les CV en transit sur le serveur sont supprimés automatiquement après 7 jours",
            },
          ],
          role: "Développement du plugin Craft sur l'intégration OTYS, intégration de la maquette de l'agence, maintenance du site en continu.",
        },
        velec: {
          name: "Velec Systems",
          kicker: "Industriel agroalimentaire",
          title: "Un site industriel plus rapide, adapté au mobile et bien indexé",
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
    process: {
      eyebrow: "Méthode",
      title: "Comment ça se passe",
      steps: [
        {
          title: "On échange",
          text: "Un appel de 15 minutes, sans engagement. Vous me décrivez votre besoin, je vous dis ce qui est faisable, et ce qui ne l'est pas.",
        },
        {
          title: "Un devis clair",
          text: "Un périmètre écrit et un prix annoncé à l'avance, étape par étape. Vous savez ce que vous payez et ce que vous recevez.",
        },
        {
          title: "Des livraisons par étapes",
          text: "Vous voyez le projet avancer, avec un compte rendu écrit à chaque étape. Après la mise en ligne, je reste disponible pour le faire évoluer.",
        },
      ],
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
            "Un travail formidable, et je veux profiter de ce moment pour dire à quel point nous sommes heureux et reconnaissants de t'avoir dans l'équipe. On ne pourrait vraiment pas faire tout ça sans toi, et ces tâches, aussi petites qu'elles paraissent parfois, sont tellement importantes à régler.",
          author: "Rosa",
          role: "LIME Search",
        },
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
        "Tienes un producto que lanzar, un sitio que hacer evolucionar o una idea que probar con IA. Parto de tu necesidad, lo construyo, lo pongo en producción y sigo disponible después. Una sola interlocutora, del primer contacto a la producción.",
      availableBadge: "Disponible para freelance",
      ctaPrimary: "Hablemos de tu proyecto",
      ctaCall: "Reservar una llamada de 15 min",
      ctaProjects: "Ver mis proyectos",
      downloadCV: "Descargar CV",
    },
    trust: {
      label: "Han confiado en mí",
    },
    services: {
      eyebrow: "Servicios",
      title: "Tres formas de trabajar juntos",
      subtitle: "Mis servicios de desarrollo web freelance, del primer producto al acompañamiento a largo plazo.",
      localOffer: "Una oferta dedicada a asociaciones y comercios",
      proofLabel: "Ejemplo:",
      ai: {
        title: "Lanzar un producto o una app con IA",
        description: "Tienes una idea o una necesidad de negocio. Diseño y desarrollo la aplicación completa, hasta la puesta en producción.",
        items: [
          "Una aplicación a medida, de la interfaz a la base de datos",
          "IA donde aporta valor: extracción de documentos, automatizaciones, asistentes",
          "Pago en línea, cuentas y área de administración",
          "Un código probado y documentado, que tu equipo puede retomar",
        ],
        proof: "Rootyne",
        stack: "Next.js · TypeScript · Claude · Mistral · Stripe",
      },
      cms: {
        title: "Crear o rediseñar un sitio a medida",
        description: "Un sitio con tu identidad, que tu equipo actualiza sin depender de desarrollo.",
        items: [
          "La maquetación fiel de tu diseño, o del de tu agencia",
          "Un espacio de edición sencillo para textos, imágenes y páginas",
          "Varios idiomas y un SEO técnico cuidado",
          "La conexión con tus herramientas: CRM, selección, pago, newsletter",
        ],
        proof: "IN CULTURE",
        stack: "Next.js · Sanity · Prismic · WordPress · Craft CMS",
      },
      maintenance: {
        title: "Hacer evolucionar un sitio existente",
        description: "Retomo tu sitio tal como está y lo hago avanzar a largo plazo.",
        items: [
          "Nuevas funciones, entregadas en pequeños pasos",
          "Rendimiento, adaptación móvil y SEO técnico",
          "Correcciones y actualizaciones que no rompen lo que funciona",
          "Una sola interlocutora y un informe escrito en cada etapa",
        ],
        proof: "Velec Systems",
        stack: "WordPress · Craft CMS · Next.js",
      },
    },
    projects: {
      eyebrow: "Trabajos",
      title: "Proyectos destacados",
      intro: "Una necesidad concreta al principio, un producto en línea al final.",
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
          title: "Análisis de sangre por fin comprensibles",
          summary: "Una plataforma creada desde cero: se sube el análisis de sangre, un pipeline de IA extrae los valores y una bióloga clínica revisa cada informe antes de entregarlo.",
          facts: [
            {
              value: "Producto completo",
              label: "de la subida del análisis al pago en línea, diseñado y puesto en producción en solitario",
            },
            {
              value: "Datos protegidos",
              label: "anonimización antes de cualquier tratamiento por IA, cifrado e infraestructura conforme a HDS para datos de salud",
            },
            {
              value: "IA bajo control",
              label: "una bióloga clínica revisa y valida cada informe antes de enviarlo",
            },
          ],
          role: "Fundadora y desarrolladora: producto, desarrollo y puesta en producción.",
        },
        inc: {
          name: "IN CULTURE",
          anonName: "Agencia de colaboraciones culturales",
          kicker: "Agencia de colaboraciones culturales",
          title: "Un sitio fiel a la marca, que la agencia actualiza por sí misma",
          summary: "Cuatro páginas y 23 páginas de proyecto, desarrolladas en solitario desde el diseño validado hasta la publicación: carrusel infinito guiado por el cursor, audio que sigue sonando entre páginas y un CMS para cada texto, imagen y proyecto.",
          facts: [
            {
              value: "Autonomía total",
              label: "el equipo edita por sí mismo textos, imágenes y proyectos, en línea en segundos",
            },
            {
              value: "A medida",
              label: "interacciones propias de la marca, programadas a mano a partir del diseño, sin tema ni plantilla",
            },
            {
              value: "0 interrupciones",
              label: "lanzamiento y cambio de dominio sin cortar el correo de la agencia",
            },
          ],
          role: "Desarrollo: Adeline Lefebvre, en solitario del diseño a la publicación.",
        },
        desertLeaves: {
          name: "Desert Leaves",
          kicker: "ONG ambiental",
          title: "Una plataforma de donaciones y voluntariado en cuatro idiomas",
          summary: "Una plataforma completa creada desde cero: Next.js, CMS headless Prismic, donaciones Stripe puntuales y recurrentes. El contenido se traduce automáticamente en cuanto se publica, y el equipo lo corrige en una simple hoja de Google Sheets.",
          facts: [
            {
              value: "4 idiomas",
              label: "español, inglés, francés y neerlandés, traducidos uno o dos minutos después de cada publicación",
            },
            {
              value: "0 €",
              label: "al mes por la traducción: sin suscripción, sin clave de API, sin servidor",
            },
            {
              value: "< 1 minuto",
              label: "para que una corrección del equipo en la hoja de cálculo aparezca en el sitio",
            },
          ],
          role: "Desarrollo de la plataforma desde cero, y después su internacionalización.",
        },
        lime: {
          name: "LIME Search",
          kicker: "Agencia de selección en finanzas",
          title: "Ofertas de interim confidenciales, compartidas con un simple enlace",
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
              value: "RGPD",
              label: "los CV en tránsito en el servidor se eliminan automáticamente a los 7 días",
            },
          ],
          role: "Desarrollo del plugin de Craft sobre la integración con OTYS, maquetación a partir del diseño de la agencia, mantenimiento continuo del sitio.",
        },
        velec: {
          name: "Velec Systems",
          kicker: "Fabricante industrial agroalimentario",
          title: "Un sitio industrial más rápido, adaptado al móvil y bien indexado",
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
    process: {
      eyebrow: "Método",
      title: "Cómo funciona",
      steps: [
        {
          title: "Hablamos",
          text: "Una llamada de 15 minutos, sin compromiso. Me cuentas tu necesidad y te digo qué es viable, y qué no.",
        },
        {
          title: "Un presupuesto claro",
          text: "Un alcance por escrito y un precio anunciado de antemano, etapa por etapa. Sabes lo que pagas y lo que recibes.",
        },
        {
          title: "Entregas por etapas",
          text: "Ves avanzar el proyecto, con un informe escrito en cada etapa. Tras el lanzamiento, sigo disponible para hacerlo evolucionar.",
        },
      ],
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
            "Un trabajo increíble, y quiero aprovechar este momento para expresar lo felices y agradecidos que estamos de tenerte en el equipo. De verdad no podríamos hacer todo esto sin ti, y estas tareas, por pequeñas que a veces parezcan, son importantísimas de resolver.",
          author: "Rosa",
          role: "LIME Search",
        },
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
