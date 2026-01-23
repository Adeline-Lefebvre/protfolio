import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";

const _inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Adeline Lefebvre | Fullstack Web & Mobile Developer",
  description:
    "Fullstack Software Engineer specializing in Next.js, Flutter, and Node.js. Building impactful tech solutions for CSR and GreenTech projects. Based in Valencia, available worldwide.",
  keywords: [
    "Adeline Lefebvre",
    "Fullstack Developer",
    "Mobile App Developer",
    "Flutter Expert",
    "GreenTech",
    "Next.js Developer",
  ],
  authors: [{ name: "Adeline Lefebvre" }],
  creator: "Adeline Lefebvre",
  openGraph: {
    title: "Adeline Lefebvre | Fullstack Web & Mobile Developer",
    description:
      "Building tech solutions from scratch with a focus on impact and sustainability. Expert in Next.js & Flutter.",
    url: "https://adelinelefebvre.com",
    siteName: "Adeline Lefebvre Portfolio",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
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
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
