"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function HtmlLang() {
  const pathname = usePathname();

  useEffect(() => {
    const locale = pathname.split("/")[1];
    if (locale && ["en", "fr", "es"].includes(locale)) {
      document.documentElement.lang = locale;
    }
  }, [pathname]);

  return null;
}
