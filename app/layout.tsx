import type React from "react";
import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adelinelefebvre.com"),
  authors: [{ name: "Adeline Lefebvre" }],
  creator: "Adeline Lefebvre",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  verification: {
    google: "VLz5CJ9PGWxaOEA5CnvHqsd9CBuPzeQDkjwZ-MzpeBQ",
  },
};

// Le layout racine reste statique (SSG) : <html>/<body> obligatoires ici.
// La locale n'est pas connue à ce niveau (segment enfant [locale]), donc le
// `lang` est ajusté côté client depuis [locale]/layout. Les hreflang portent
// le signal de langue pour les moteurs.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className={`font-sans antialiased`}>
        <noscript>
          <style>{`.reveal-anim{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
