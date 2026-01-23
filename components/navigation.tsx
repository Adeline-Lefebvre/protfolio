"use client";

import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { LanguageSelector } from "./language-selector";
import { useLanguage } from "@/lib/language-context";
import { getTranslations } from "@/lib/translations";

export function Navigation() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12 lg:px-16">
        <a href="#" className="text-lg font-semibold tracking-tight">
          {t.nav.portfolio}
        </a>
        <div className="flex items-center gap-2">
          <LanguageSelector />
          <ThemeToggle />
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/Adeline-Lefebvre"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://www.linkedin.com/in/adeline-lefebvre-600b46aa/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="mailto:adeline.lefe@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://calendly.com/adeline-lefebvre/15min"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Phone call"
            >
              <Phone className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
