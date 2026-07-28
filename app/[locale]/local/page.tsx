import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { i18n, type Locale } from "@/lib/i18n-config";
import { getLocalContent } from "@/lib/local-content";
import type { Language } from "@/lib/translations";
import { LocalPage } from "@/components/local/local-page";

const BASE = "https://adelinelefebvre.com";

const SERVICE_TYPE: Record<Language, string> = {
  fr: "Création de site web pour associations, artisans et commerces",
  en: "Website design for nonprofits, craftspeople and local shops",
  es: "Diseño web para asociaciones, autónomos y comercios locales",
};

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
          alt: meta.title,
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

  const c = getLocalContent(locale as Language);

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: locale,
    mainEntity: c.faq.items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: SERVICE_TYPE[locale as Language],
    provider: { "@id": `${BASE}/#person` },
    areaServed: [{ "@type": "Place", name: "Europe" }],
    url: `${BASE}/${locale}/local`,
    offers: [
      {
        "@type": "Offer",
        name: c.pricing.essential.name,
        price: "500",
        priceCurrency: "EUR",
        description: c.pricing.essential.text,
      },
      {
        "@type": "Offer",
        name: c.pricing.site.name,
        price: "900",
        priceCurrency: "EUR",
        description: c.pricing.site.text,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <LocalPage />
    </>
  );
}
