import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { StructuredData } from "@/components/structured-data";
import { HtmlLang } from "@/components/html-lang";

const _inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
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
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        <HtmlLang />
        <StructuredData />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
