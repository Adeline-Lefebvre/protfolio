// Donnees non traduites des projets. Les textes vivent dans lib/translations.ts
// (projects.items), sous la meme cle.

export type FeaturedId = "rootyne" | "inc" | "desertLeaves" | "lime" | "velec";
export type MoreId = "revier" | "lipology" | "c55" | "bulbus" | "shifters";

export type Credit = { name: string; href: string };

type Base = {
  link: string;
  stack: string[];
  // Projet realise pour une agence : elle est creditee sur la fiche.
  credit?: Credit;
  // Bascule de retrait rapide. A true, la fiche n'affiche plus le nom du client
  // (remplace par `anonName` dans les traductions), ni le lien, et le visuel
  // est floute. Une ligne a changer si l'agence ou le client le demande.
  anonymous?: boolean;
};

export type FeaturedProject = Base & {
  id: FeaturedId;
  // Nom de base des fichiers dans /public/projects : <media>.webm, <media>.mp4
  // et <media>-poster.jpg.
  media: string;
  // Carte de partage affichee dans une bulle de conversation, par-dessus le visuel.
  shareCard?: { src: string; title: string; domain: string };
  // Le visuel a ete capture avec des donnees fictives : on le dit.
  fictionalData?: boolean;
};

export type MoreProject = Base & {
  id: MoreId;
  image: string;
  // Point d'ancrage du recadrage (object-position).
  focus?: string;
};

const CODE_CREATE: Credit = {
  name: "Code Create",
  href: "https://codecreate.eu/",
};

export const featuredProjects: FeaturedProject[] = [
  {
    id: "rootyne",
    link: "https://www.rootyne.health/fr",
    stack: ["Next.js", "Claude API", "Mistral", "Firebase", "Stripe"],
    media: "rootyne",
  },
  {
    id: "inc",
    link: "https://inculture.global/",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity", "Vercel"],
    media: "inc",
    credit: CODE_CREATE,
    anonymous: false,
  },
  {
    id: "desertLeaves",
    link: "https://www.desertleaves.org",
    stack: ["Next.js", "Prismic", "Stripe", "next-intl", "Google Apps Script"],
    media: "desertleaves",
  },
  {
    id: "lime",
    // Site public uniquement. Les pages d'offres d'interim ne doivent jamais
    // etre liees depuis une page indexee : c'est tout l'objet du projet.
    link: "https://www.limesearch.nl",
    stack: ["Craft CMS", "PHP", "Twig", "OTYS API", "GD"],
    media: "lime",
    shareCard: {
      src: "/projects/lime-card.jpg",
      title: "Interim Finance Manager",
      domain: "limesearch.nl",
    },
    fictionalData: true,
  },
  {
    id: "velec",
    link: "https://www.velecsystems.com/",
    stack: ["WordPress", "Elementor Pro", "WPML", "WP Rocket", "WP-CLI"],
    media: "velec",
  },
];

export const moreProjects: MoreProject[] = [
  {
    id: "bulbus",
    link: "https://bulbus-app.com",
    stack: ["Flutter", "Node.js", "MongoDB"],
    image: "/projects/bulbus.jpg",
    focus: "center top",
  },
  {
    id: "revier",
    link: "https://revier.bio/",
    stack: ["WordPress", "Elementor Pro", "JavaScript", "CSS"],
    image: "/projects/revier.jpg",
    focus: "center top",
    credit: CODE_CREATE,
    anonymous: false,
  },
  {
    id: "c55",
    link: "https://clubfiftyfive.co",
    stack: ["WordPress", "Elementor Pro", "JavaScript", "CSS"],
    image: "/projects/c55.jpg",
    focus: "center top",
    credit: CODE_CREATE,
    anonymous: false,
  },
  {
    id: "lipology",
    link: "https://www.lipologyclinic.nl/",
    stack: ["WordPress", "Elementor Pro", "Rank Math", "Schema.org"],
    image: "/projects/lipology.jpg",
    focus: "right top",
    credit: CODE_CREATE,
    anonymous: false,
  },
  {
    id: "shifters",
    link: "https://www.theshifters.org/",
    stack: ["React", "TypeScript", "Fastify", "PostgreSQL"],
    image: "/projects/shifters.jpg",
    focus: "left top",
  },
];

export const PEPSTERY_LINK = "https://anceu-pepstery.web.app/";
