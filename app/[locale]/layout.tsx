import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { i18n, type Locale } from "@/lib/i18n-config";
import { LanguageProvider } from "@/lib/language-context";
import { getMetadata } from "@/lib/metadata";
import type { Language } from "@/lib/translations";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const metadata = getMetadata(locale as Language);

  const baseUrl = "https://adelinelefebvre.com";

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "en-US": "/en",
        "fr-FR": "/fr",
        "es-ES": "/es",
        "x-default": "/en",
      },
    },
    openGraph: {
      title: metadata.openGraph.title,
      description: metadata.openGraph.description,
      url: `${baseUrl}/${locale}`,
      siteName: "Adeline Lefebvre Portfolio",
      locale: locale === "en" ? "en_US" : locale === "fr" ? "fr_FR" : "es_ES",
      alternateLocale:
        locale === "en"
          ? ["fr_FR", "es_ES"]
          : locale === "fr"
            ? ["en_US", "es_ES"]
            : ["en_US", "fr_FR"],
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Adeline Lefebvre - Fullstack Developer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.openGraph.title,
      description: metadata.openGraph.description,
      creator: "@adelinelefebvre",
      images: ["/og-image.jpg"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  if (!i18n.locales.includes(locale)) {
    notFound();
  }

  return <LanguageProvider initialLocale={locale}>{children}</LanguageProvider>;
}
