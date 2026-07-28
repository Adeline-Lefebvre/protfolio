import type { MetadataRoute } from "next";
import { i18n } from "@/lib/i18n-config";

const baseUrl = "https://adelinelefebvre.com";

// hreflang par langue (sans région pour couvrir toute l'Europe francophone /
// hispanophone / anglophone) + x-default. Doit rester identique aux alternates
// déclarés dans les pages.
function altLanguages(path: string) {
  const languages: Record<string, string> = {};
  for (const l of i18n.locales) {
    languages[l] = `${baseUrl}/${l}${path}`;
  }
  languages["x-default"] = `${baseUrl}/${i18n.defaultLocale}${path}`;
  return languages;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const home = i18n.locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: locale === i18n.defaultLocale ? 1.0 : 0.9,
    alternates: { languages: altLanguages("") },
  }));

  const local = i18n.locales.map((locale) => ({
    url: `${baseUrl}/${locale}/local`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
    alternates: { languages: altLanguages("/local") },
  }));

  return [...home, ...local];
}
