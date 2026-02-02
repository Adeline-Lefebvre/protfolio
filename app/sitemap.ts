import type { MetadataRoute } from "next";
import { i18n } from "@/lib/i18n-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://adelinelefebvre.com";
  const lastModified = new Date();

  return i18n.locales.map((locale) => ({
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
}
