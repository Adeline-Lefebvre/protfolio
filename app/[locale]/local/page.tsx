import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { i18n, type Locale } from "@/lib/i18n-config";
import { getLocalContent } from "@/lib/local-content";
import type { Language } from "@/lib/translations";
import { LocalPage } from "@/components/local/local-page";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!i18n.locales.includes(locale as Locale)) {
    return {};
  }

  const { meta } = getLocalContent(locale as Language);
  const baseUrl = "https://adelinelefebvre.com";

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/local`,
      languages: {
        "en-US": "/en/local",
        "fr-FR": "/fr/local",
        "es-ES": "/es/local",
        "x-default": "/en/local",
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${baseUrl}/${locale}/local`,
      siteName: "Adeline Lefebvre",
      locale: locale === "en" ? "en_US" : locale === "fr" ? "fr_FR" : "es_ES",
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Adeline Lefebvre",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/og-image.png"],
    },
  };
}

export default async function LocalRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!i18n.locales.includes(locale as Locale)) {
    notFound();
  }

  return <LocalPage />;
}
