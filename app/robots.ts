import type { MetadataRoute } from "next";

// Politique explicite : on laisse passer les crawlers classiques ET les bots IA
// (search/RAG + entraînement) pour maximiser l'indexation et les citations par
// ChatGPT, Claude, Perplexity, Google AI Overviews. Seul Bytespider (scraper
// agressif, sans valeur de citation FR/EN/ES) est bloqué.
export default function robots(): MetadataRoute.Robots {
  const aiBots = [
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "ClaudeBot",
    "Claude-SearchBot",
    "Claude-User",
    "anthropic-ai",
    "PerplexityBot",
    "Perplexity-User",
    "Google-Extended",
    "Applebot-Extended",
  ];

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      { userAgent: aiBots, allow: "/" },
      { userAgent: "Bytespider", disallow: "/" },
    ],
    sitemap: "https://adelinelefebvre.com/sitemap.xml",
    host: "https://adelinelefebvre.com",
  };
}
