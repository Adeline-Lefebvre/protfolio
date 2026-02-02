"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import type { Language } from "./translations";
import Cookies from "js-cookie";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({
  children,
  initialLocale,
}: {
  children: ReactNode;
  initialLocale: Language;
}) {
  const [language] = useState<Language>(initialLocale);
  const router = useRouter();
  const pathname = usePathname();

  const setLanguage = (lang: Language) => {
    // Set cookie for middleware
    Cookies.set("NEXT_LOCALE", lang, { expires: 365 });

    // Redirect to new locale
    const segments = pathname.split("/");
    segments[1] = lang;
    router.push(segments.join("/"));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
