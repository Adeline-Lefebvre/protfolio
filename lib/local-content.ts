import type { Language } from "./translations";

// Contenu de la page /local (offre sites pour les acteurs engagés et de proximité).
// Trilingue FR / EN / ES. Corrections de relecture native intégrées.
// Style : sobre, direct, humain, sans tiret cadratin. Registre : vous (FR) / tú (ES).

export const localContent = {
  fr: {
    meta: {
      title:
        "Des sites pour les acteurs engagés et de proximité — Adeline Lefebvre",
      description:
        "Des sites web rapides et beaux, sans abonnement, pour les associations, artisans et commerces de proximité. Le site vous appartient, l'hébergement est gratuit.",
    },
    nav: {
      home: "Portfolio",
      pricing: "Tarifs",
      work: "Réalisations",
      cta: "Parlons de votre projet",
    },
    hero: {
      eyebrow: "Sites web · économie locale",
      titlePre: "Un site qui vous appartient ",
      titleEm: "vraiment",
      titlePost: ".",
      subtitle:
        "Beau, rapide, sans abonnement. Pensé pour les assos, artisans et commerces qui font vivre le local.",
      cta: "Parlons de votre projet",
      ctaSecondary: "Voir les réalisations",
    },
    eyebrows: {
      forWho: "Pour qui",
      promises: "La différence",
      includes: "Inclus",
      pricing: "Tarifs",
      process: "Le déroulé",
      work: "Réalisations",
      about: "À propos",
      faq: "Bon à savoir",
      contact: "Contact",
    },
    forWho: {
      title: "Pour qui ?",
      items: [
        "Vous portez une association, un atelier, un commerce de proximité.",
        "Vous voulez un site simple, beau et crédible, sans y passer vos soirées.",
        "Vous n'avez pas 3 000 € pour une agence, et pas envie d'un abonnement à vie.",
        "Vous voulez un site à vous, pas loué à une plateforme.",
      ],
    },
    promises: {
      title: "Ce qui change avec moi",
      fast: {
        title: "Rapide",
        text: "Votre site s'affiche en un instant, sur mobile comme sur ordinateur. Pas de lenteurs, pas de plugins qui rament.",
      },
      yours: {
        title: "À vous",
        text: "Le contenu et le nom de domaine vous appartiennent. Vous modifiez tout vous-même, quand vous voulez. Aucun abonnement, aucune dépendance.",
      },
      noFees: {
        title: "Sans frais qui courent",
        text: "L'hébergement est gratuit dans un usage normal. Pas de facture mensuelle, pas de mauvaise surprise. Si vous arrêtez de travailler avec moi, le site continue de tourner.",
      },
    },
    includes: {
      title: "Ce que comprend votre site",
      items: [
        "Un design sur mesure, à votre image.",
        "Un site impeccable sur mobile, tablette et ordinateur.",
        "Un espace simple pour tout modifier vous-même : textes, photos, actualités. Sans savoir coder.",
        "Un blog et des actualités inclus, pour publier vos nouvelles quand vous voulez.",
        "Les bases du référencement, pour qu'on vous trouve sur Google.",
      ],
    },
    pricing: {
      title: "Des tarifs clairs, affichés",
      essential: {
        name: "Essentiel",
        price: "500 €",
        text: "Une belle page unique. Tout ce qu'il faut pour exister en ligne, proprement.",
      },
      site: {
        name: "Le site",
        price: "900 €",
        badge: "Le plus courant",
        text: "Plusieurs pages, blog et actualités inclus. Le choix le plus courant.",
      },
      modulesTitle: "Modules, selon vos besoins",
      modules: [
        "Petites annonces ou catalogue : à partir de 400 €",
        "Agenda d'événements : à partir de 250 €",
      ],
      solidarity:
        "Une toute petite structure avec un budget serré ? Parlons-en, on trouvera une solution.",
      serenity: {
        title: "Envie d'être serein ?",
        optional: "Optionnel",
        intro:
          "Aucun frais récurrent n'est obligatoire. Mais si vous préférez ne penser à rien, le forfait Sérénité (150 € par an, entièrement optionnel) s'occupe de tout :",
        items: [
          "Votre nom de domaine, renouvelé sans que vous y pensiez.",
          "Votre site maintenu en ligne, à jour et sécurisé.",
          "Un coup de main en priorité quand vous êtes bloqué.",
        ],
        outro:
          "Renouvelable, résiliable à tout moment. Sans forfait, vous restez autonome et vous me sollicitez à la carte selon vos besoins.",
        fineprint:
          "Maintenance technique courante incluse. Les évolutions importantes sont devisées à part.",
      },
    },
    process: {
      title: "Comment ça se passe",
      steps: [
        {
          title: "On échange",
          text: "Un appel ou une visio. Vous me parlez de votre projet, je vous dis ce que je peux faire et à quel prix. Devis clair, acompte, et on démarre.",
        },
        {
          title: "Vous me transmettez votre contenu",
          text: "Textes, photos, logo, via un formulaire simple que je vous envoie. C'est l'étape clé : votre site avance dès que votre contenu est complet.",
        },
        {
          title: "Je construis votre site",
          text: "Vous le découvrez, on l'ajuste ensemble (jusqu'à deux séries de retouches). Comptez une à deux semaines après réception de votre contenu, selon mon planning.",
        },
        {
          title: "Mise en ligne",
          text: "Je vous forme à votre espace en une demi-heure, avec une courte vidéo à garder. Le site est à vous.",
        },
      ],
    },
    work: {
      title: "Quelques réalisations",
      items: [
        {
          name: "Desert Leaves",
          image: "/dl-1.jpg",
          meta: "ONG de reforestation (Espagne)",
          text: "Un site bilingue pour présenter leurs projets, mobiliser des dons et des bénévoles. Rapide, clair, à leur image.",
          href: "https://www.desertleaves.org/en",
          cta: "Voir le site",
        },
        {
          name: "Pignon Libre",
          image: "/pignon-libre.webp",
          meta: "Atelier vélo associatif",
          text: "Un site simple pour présenter l'atelier, les permanences et les actualités, que l'équipe met à jour elle-même.",
          href: "https://pignon-libre.vercel.app/",
          cta: "Voir le site",
        },
      ],
    },
    about: {
      title: "Qui je suis",
      paragraphs: [
        "Je m'appelle Adeline, développeuse web. Je travaille à distance, avec des clients en France, en Espagne, aux Pays-Bas et ailleurs en Europe.",
        "<strong class='font-semibold text-accent'>L'économie sociale et solidaire</strong> me tient à cœur depuis des années. Je crois au potentiel de l'économie circulaire et d'une économie plus responsable, et je suis convaincue que <strong class='font-semibold text-foreground'>les projets à impact local sont les premiers acteurs du changement</strong>. C'est pour ça que j'aime construire des sites pour des structures qui font quelque chose d'utile : associations, artisans, commerces de proximité. Des projets à taille humaine, où je connais les gens pour qui je travaille.",
        "Mon approche tient en une idée : un site beau et rapide, <strong class='font-semibold text-primary'>que vous possédez vraiment</strong>, sans vous enfermer dans un abonnement ou une technologie que personne ne maîtrise chez vous.",
      ],
      link: "En savoir plus sur mon travail",
    },
    faq: {
      title: "Questions fréquentes",
      items: [
        {
          q: "Et si je veux modifier mon site plus tard ?",
          a: "Vous le faites vous-même, depuis votre espace, aussi souvent que vous voulez : changer un texte, ajouter une photo, publier une actualité. Pour les changements plus techniques, je reste disponible.",
        },
        {
          q: "Qu'est-ce qui se passe si j'arrête de travailler avec vous ?",
          a: "Votre site continue de fonctionner, et il reste à vous. Le contenu et le nom de domaine vous appartiennent. Vous pouvez le confier à quelqu'un d'autre : je prépare tout ce qu'il faut pour une passation propre.",
        },
        {
          q: "L'hébergement est vraiment gratuit ?",
          a: "Oui, dans un usage normal. Les sites que je construis sont légers et s'hébergent sans frais sur des plateformes prévues pour ça. Reste le nom de domaine (environ 12 € par an), que vous payez en direct, à votre nom.",
        },
        {
          q: "Je ne suis pas à l'aise avec la technique, c'est un problème ?",
          a: "Pas du tout. Votre espace est pensé pour ça : si vous savez écrire un mail, vous saurez l'utiliser. Je vous forme à la livraison, avec une courte vidéo à garder. Et je reste joignable si vous bloquez.",
        },
        {
          q: "Combien de temps pour avoir mon site ?",
          a: "En général une à deux semaines après réception de votre contenu, selon mon planning. Le vrai facteur, c'est vous : le site avance vite dès que vos textes et vos photos sont prêts.",
        },
        {
          q: "Est-ce que je peux vendre ou prendre des inscriptions en ligne ?",
          a: "Oui. Selon vos besoins, j'intègre une solution simple et fiable, par exemple pour les dons, la billetterie ou les inscriptions. On choisit ensemble ce qui vous convient.",
        },
      ],
    },
    cta: {
      title: "Parlons de votre projet",
      text: "Une association, une activité, un lieu à faire connaître ? Dites-moi en quelques mots ce dont vous avez besoin. Je vous réponds vite, et le premier échange est gratuit, sans engagement.",
      hesitant:
        "Pas encore sûr de votre budget ou de ce qu'il vous faut ? Écrivez-moi quand même, je vous oriente avec plaisir.",
      email: "Me contacter",
      call: "Prendre rendez-vous",
      location: "À distance, en Europe et au-delà",
    },
  },

  en: {
    meta: {
      title:
        "Websites for engaged, local organisations — Adeline Lefebvre",
      description:
        "Fast, beautiful websites with no subscription, for nonprofits, makers and local businesses. The site is yours, hosting is free.",
    },
    nav: {
      home: "Portfolio",
      pricing: "Pricing",
      work: "Work",
      cta: "Let's talk about your project",
    },
    hero: {
      eyebrow: "Web design · local economy",
      titlePre: "A website that's ",
      titleEm: "truly",
      titlePost: " yours.",
      subtitle:
        "Beautiful, fast, no subscription. Built for nonprofits, makers and local businesses that bring their communities to life.",
      cta: "Let's talk about your project",
      ctaSecondary: "See the work",
    },
    eyebrows: {
      forWho: "Who for",
      promises: "The difference",
      includes: "Included",
      pricing: "Pricing",
      process: "The process",
      work: "Work",
      about: "About",
      faq: "Good to know",
      contact: "Contact",
    },
    forWho: {
      title: "Who it's for",
      items: [
        "You run a nonprofit, a workshop, a local business.",
        "You want a website that's simple, beautiful and credible, without spending your evenings on it.",
        "You don't have €3,000 for an agency, and you don't want a lifetime subscription.",
        "You want a website that's yours, not rented from a platform.",
      ],
    },
    promises: {
      title: "What's different with me",
      fast: {
        title: "Fast",
        text: "Your site loads in an instant, on mobile and desktop alike. No lag, no clunky plugins.",
      },
      yours: {
        title: "Yours",
        text: "The content and the domain name belong to you. You edit everything yourself, whenever you want. No subscription, no lock-in.",
      },
      noFees: {
        title: "No running costs",
        text: "Hosting is free under normal use. No monthly bill, no nasty surprises. If you stop working with me, the site keeps running.",
      },
    },
    includes: {
      title: "What your website includes",
      items: [
        "A custom design, true to who you are.",
        "A site that looks great on mobile, tablet and desktop.",
        "A simple dashboard to edit everything yourself: text, photos, news. No coding needed.",
        "A blog and news section included, to post your updates whenever you like.",
        "The basics of SEO, so people find you on Google.",
      ],
    },
    pricing: {
      title: "Clear, upfront pricing",
      essential: {
        name: "Essential",
        price: "€500",
        text: "A single beautiful page. Everything you need to exist online, done well.",
      },
      site: {
        name: "The website",
        price: "€900",
        badge: "Most popular",
        text: "Several pages, blog and news included. The most common choice.",
      },
      modulesTitle: "Modules, depending on your needs",
      modules: [
        "Listings or catalogue: from €400",
        "Events calendar: from €250",
      ],
      solidarity:
        "A very small group on a tight budget? Let's talk, we'll work something out.",
      serenity: {
        title: "Want peace of mind?",
        optional: "Optional",
        intro:
          "No recurring cost is mandatory. But if you'd rather not think about any of it, the fully optional Serenity plan (€150 per year) takes care of everything:",
        items: [
          "Your domain name, renewed without you thinking about it.",
          "Your site kept online, up to date and secure.",
          "Priority help when you're stuck.",
        ],
        outro:
          "Renewable, cancellable anytime. Without the plan, you stay independent and call on me as needed.",
        fineprint:
          "Routine technical maintenance included. Major changes are quoted separately.",
      },
    },
    process: {
      title: "How it works",
      steps: [
        {
          title: "We talk",
          text: "A call or video chat. You tell me about your project, I tell you what I can do and what it costs. A clear quote, a deposit, and we're off.",
        },
        {
          title: "You send me your content",
          text: "Text, photos, logo, through a simple form I send you. This is the key step: your site moves fast as soon as your content is ready.",
        },
        {
          title: "I build your site",
          text: "You get a first look, and we fine-tune it together (up to two rounds of changes). Count on one to two weeks after I receive your content, depending on my schedule.",
        },
        {
          title: "Going live",
          text: "I train you on your dashboard in half an hour, with a short video to keep. The site is yours.",
        },
      ],
    },
    work: {
      title: "Recent work",
      items: [
        {
          name: "Desert Leaves",
          image: "/dl-1.jpg",
          meta: "Reforestation NGO (Spain)",
          text: "A bilingual site to showcase their projects and rally donations and volunteers. Fast, clear, true to them.",
          href: "https://www.desertleaves.org/en",
          cta: "Visit the site",
        },
        {
          name: "Pignon Libre",
          image: "/pignon-libre.webp",
          meta: "Community bike workshop",
          text: "A simple site for the workshop, its opening hours and news, that the team updates itself.",
          href: "https://pignon-libre.vercel.app/",
          cta: "Visit the site",
        },
      ],
    },
    about: {
      title: "About me",
      paragraphs: [
        "My name is Adeline, a web developer. I work remotely, with clients in France, Spain, the Netherlands and elsewhere in Europe.",
        "<strong class='font-semibold text-accent'>The social and solidarity economy</strong> has mattered to me for years. I believe in the potential of the circular economy and a more responsible way of doing business, and I'm convinced that <strong class='font-semibold text-foreground'>projects with local impact are the first drivers of change</strong>. That's why I love building sites for organisations doing something useful: nonprofits, makers, local businesses. Human-scale projects, where I know the people I work for.",
        "My approach comes down to one idea: a beautiful, fast website that <strong class='font-semibold text-primary'>you truly own</strong>, without locking you into a subscription or a technology no one on your team understands.",
      ],
      link: "More about my work",
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          q: "What if I want to change my site later?",
          a: "You do it yourself, from your dashboard, as often as you like: change a text, add a photo, post an update. For more technical changes, I'm here.",
        },
        {
          q: "What happens if I stop working with you?",
          a: "Your site keeps working, and it stays yours. The content and domain name belong to you. You can hand it to someone else: I prepare everything for a clean handover.",
        },
        {
          q: "Is hosting really free?",
          a: "Yes, under normal use. The sites I build are lightweight and host for free on platforms made for it. There's just the domain name (around €12 a year), which you pay directly, in your name.",
        },
        {
          q: "I'm not comfortable with tech, is that a problem?",
          a: "Not at all. Your dashboard is made for that: if you can write an email, you can use it. I train you at delivery, with a short video to keep. And I'm reachable if you get stuck.",
        },
        {
          q: "How long until I have my site?",
          a: "Usually one to two weeks after I receive your content, depending on my schedule. The real factor is you: the site moves fast once your text and photos are ready.",
        },
        {
          q: "Can I sell or take registrations online?",
          a: "Yes. Depending on your needs, I integrate a simple, reliable solution, for example for donations, ticketing or registrations. We choose together what suits you.",
        },
      ],
    },
    cta: {
      title: "Let's talk about your project",
      text: "A nonprofit, an activity, a place you want people to know about? Tell me in a few words what you need. I reply quickly, and the first conversation is free, no strings attached.",
      hesitant:
        "Not sure about your budget or what you need yet? Write to me anyway, I'm happy to point you in the right direction.",
      email: "Get in touch",
      call: "Book a call",
      location: "Remote, across Europe and beyond",
    },
  },

  es: {
    meta: {
      title:
        "Webs para estructuras comprometidas y de barrio — Adeline Lefebvre",
      description:
        "Webs rápidas y bonitas, sin suscripción, para asociaciones, artesanos y comercios de barrio. La web es tuya, el alojamiento es gratuito.",
    },
    nav: {
      home: "Portfolio",
      pricing: "Precios",
      work: "Trabajos",
      cta: "Hablemos de tu proyecto",
    },
    hero: {
      eyebrow: "Diseño web · economía local",
      titlePre: "Una web que es ",
      titleEm: "de verdad",
      titlePost: " tuya.",
      subtitle:
        "Bonita, rápida, sin suscripción. Pensada para las asociaciones, artesanos y comercios que dan vida a lo local.",
      cta: "Hablemos de tu proyecto",
      ctaSecondary: "Ver los trabajos",
    },
    eyebrows: {
      forWho: "Para quién",
      promises: "La diferencia",
      includes: "Incluido",
      pricing: "Precios",
      process: "El proceso",
      work: "Trabajos",
      about: "Sobre mí",
      faq: "Bueno saber",
      contact: "Contacto",
    },
    forWho: {
      title: "Para quién",
      items: [
        "Llevas una asociación, un taller, un comercio de barrio.",
        "Quieres una web sencilla, bonita y creíble, sin dedicarle todas tus tardes.",
        "No tienes 3.000 € para una agencia, y no quieres una suscripción de por vida.",
        "Quieres una web tuya, no alquilada a una plataforma.",
      ],
    },
    promises: {
      title: "Lo que cambia conmigo",
      fast: {
        title: "Rápida",
        text: "Tu web se muestra al instante, tanto en móvil como en ordenador. Sin lentitud, sin plugins que van a trompicones.",
      },
      yours: {
        title: "Tuya",
        text: "El contenido y el nombre de dominio son tuyos. Lo modificas todo tú, cuando quieras. Sin suscripción, sin dependencia.",
      },
      noFees: {
        title: "Sin gastos recurrentes",
        text: "El alojamiento es gratuito en un uso normal. Sin factura mensual, sin sorpresas. Si dejas de trabajar conmigo, la web sigue funcionando.",
      },
    },
    includes: {
      title: "Lo que incluye tu web",
      items: [
        "Un diseño a medida, con tu identidad.",
        "Una web impecable en móvil, tablet y ordenador.",
        "Un espacio sencillo para modificarlo todo tú: textos, fotos, noticias. Sin saber programar.",
        "Un blog y noticias incluidos, para publicar tus novedades cuando quieras.",
        "Las bases del posicionamiento (SEO), para que te encuentren en Google.",
      ],
    },
    pricing: {
      title: "Precios claros, a la vista",
      essential: {
        name: "Esencial",
        price: "500 €",
        text: "Una sola página bonita. Todo lo necesario para existir en internet, con buen acabado.",
      },
      site: {
        name: "La web",
        price: "900 €",
        badge: "La más habitual",
        text: "Varias páginas, blog y noticias incluidos. La opción más habitual.",
      },
      modulesTitle: "Módulos, según tus necesidades",
      modules: [
        "Anuncios clasificados o catálogo: desde 400 €",
        "Agenda de eventos: desde 250 €",
      ],
      solidarity:
        "¿Una estructura muy pequeña con un presupuesto ajustado? Hablémoslo, algo podremos hacer.",
      serenity: {
        title: "¿Quieres tranquilidad?",
        optional: "Opcional",
        intro:
          "No hay ningún gasto recurrente obligatorio. Pero si prefieres no pensar en nada, el plan Tranquilidad (150 € al año, totalmente opcional) se ocupa de todo:",
        items: [
          "Tu nombre de dominio, renovado sin que tengas que pensar en ello.",
          "Tu web mantenida en línea, actualizada y segura.",
          "Una mano amiga con prioridad cuando te atascas.",
        ],
        outro:
          "Renovable, cancelable en cualquier momento. Sin el plan, mantienes tu autonomía y me consultas puntualmente según tus necesidades.",
        fineprint:
          "Mantenimiento técnico habitual incluido. Las mejoras o ampliaciones importantes se presupuestan aparte.",
      },
    },
    process: {
      title: "Cómo funciona",
      steps: [
        {
          title: "Hablamos",
          text: "Una llamada o videollamada. Me cuentas tu proyecto, te digo qué puedo hacer y a qué precio. Presupuesto claro, un anticipo, y empezamos.",
        },
        {
          title: "Me envías tu contenido",
          text: "Textos, fotos, logo, a través de un formulario sencillo que te envío. Es el paso clave: tu web avanza en cuanto tu contenido está completo.",
        },
        {
          title: "Construyo tu web",
          text: "La descubres, la ajustamos juntos (hasta dos rondas de cambios). Cuenta con una o dos semanas tras recibir tu contenido, según mi agenda.",
        },
        {
          title: "Publicación",
          text: "Te formo en tu espacio en media hora, con un vídeo corto para guardar. La web es tuya.",
        },
      ],
    },
    work: {
      title: "Algunos trabajos",
      items: [
        {
          name: "Desert Leaves",
          image: "/dl-1.jpg",
          meta: "ONG de reforestación (España)",
          text: "Una web bilingüe para presentar sus proyectos y movilizar donaciones y voluntarios. Rápida, clara, fiel a su identidad.",
          href: "https://www.desertleaves.org/en",
          cta: "Ver la web",
        },
        {
          name: "Pignon Libre",
          image: "/pignon-libre.webp",
          meta: "Taller de bicicletas comunitario",
          text: "Una web sencilla para presentar el taller, sus horarios y sus noticias, que el equipo actualiza por sí mismo.",
          href: "https://pignon-libre.vercel.app/",
          cta: "Ver la web",
        },
      ],
    },
    about: {
      title: "Quién soy",
      paragraphs: [
        "Me llamo Adeline, desarrolladora web. Trabajo en remoto, con clientes en Francia, España, los Países Bajos y otros lugares de Europa.",
        "<strong class='font-semibold text-accent'>La economía social y solidaria</strong> me importa desde hace años. Creo en el potencial de la economía circular y de una manera de hacer las cosas más responsable, y estoy convencida de que <strong class='font-semibold text-foreground'>los proyectos con impacto local son los primeros motores del cambio</strong>. Por eso me gusta crear webs para estructuras que hacen algo útil: asociaciones, artesanos, comercios de barrio. Proyectos a escala humana, donde conozco a las personas para las que trabajo.",
        "Mi enfoque se resume en una idea: una web bonita y rápida, <strong class='font-semibold text-primary'>que sea de verdad tuya</strong>, sin encerrarte en una suscripción o en una tecnología que nadie domina en tu equipo.",
      ],
      link: "Más sobre mi trabajo",
    },
    faq: {
      title: "Preguntas frecuentes",
      items: [
        {
          q: "¿Y si quiero modificar mi web más adelante?",
          a: "Lo haces tú, desde tu espacio, tantas veces como quieras: cambiar un texto, añadir una foto, publicar una noticia. Para cambios más técnicos, sigo disponible.",
        },
        {
          q: "¿Qué pasa si dejo de trabajar contigo?",
          a: "Tu web sigue funcionando, y sigue siendo tuya. El contenido y el nombre de dominio son tuyos. Puedes confiarla a otra persona: preparo todo lo necesario para un traspaso limpio.",
        },
        {
          q: "¿El alojamiento es de verdad gratuito?",
          a: "Sí, en un uso normal. Las webs que construyo son ligeras y se alojan sin coste en plataformas pensadas para ello. Queda solo el nombre de dominio (unos 12 € al año), que pagas directamente, a tu nombre.",
        },
        {
          q: "No me manejo bien con la tecnología, ¿es un problema?",
          a: "En absoluto. Tu espacio está pensado para eso: si sabes escribir un correo, sabrás usarlo. Te formo en la entrega, con un vídeo corto para guardar. Y estoy disponible si te atascas.",
        },
        {
          q: "¿Cuánto tarda en estar lista mi web?",
          a: "Normalmente una o dos semanas tras recibir tu contenido, según mi agenda. El factor real eres tú: la web avanza rápido en cuanto tus textos y fotos están listos.",
        },
        {
          q: "¿Puedo vender o gestionar inscripciones en línea?",
          a: "Sí. Según tus necesidades, integro una solución sencilla y fiable, por ejemplo para donaciones, venta de entradas o inscripciones. Elegimos juntos lo que mejor te convenga.",
        },
      ],
    },
    cta: {
      title: "Hablemos de tu proyecto",
      text: "¿Una asociación, una actividad, un lugar que quieres dar a conocer? Cuéntame en pocas palabras lo que necesitas. Respondo rápido, y la primera conversación es gratuita y sin compromiso.",
      hesitant:
        "¿Todavía no tienes claro tu presupuesto o lo que necesitas? Escríbeme igualmente, te oriento con mucho gusto.",
      email: "Contactar",
      call: "Reservar una llamada",
      location: "En remoto, por Europa y más allá",
    },
  },
};

export function getLocalContent(lang: Language) {
  return localContent[lang];
}
