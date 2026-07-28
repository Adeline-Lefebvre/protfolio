import type { MetadataRoute } from "next";
import { i18n } from "@/lib/i18n-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://adelinelefebvre.com";
  const lastModified = new Date();

  const home = i18n.locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: locale === i18n.defaultLocale ? 1.0 : 0.9,
    alternates: {
      languages: Object.fromEntries(
        i18n.locales.map((l) => [l, `${baseUrl}/${l}`])
      ),
    },
  }));

  const local = i18n.locales.map((locale) => ({
    url: `${baseUrl}/${locale}/local`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
    alternates: {
      languages: Object.fromEntries(
        i18n.locales.map((l) => [l, `${baseUrl}/${l}/local`])
      ),
    },
  }));

  return [...home, ...local];
}
