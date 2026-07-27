"use client";

import { Github, Linkedin, Mail, Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LanguageSelector } from "./language-selector";
import { useLanguage } from "@/lib/language-context";
import { getTranslations } from "@/lib/translations";

export function Navigation() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: t.nav.services },
    { href: `/${language}/local`, label: t.nav.local },
    { href: "#projects", label: t.nav.projects },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12 lg:px-16">
        <div className="flex items-center gap-8">
          <a
            href="#"
            className="shrink-0 whitespace-nowrap text-lg font-semibold tracking-tight"
          >
            {t.nav.portfolio}
          </a>
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <LanguageSelector />
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
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="hidden sm:inline-flex"
          >
            <a
              href="mailto:adeline.lefe@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="hidden sm:inline-flex"
          >
            <a
              href="https://calendly.com/adeline-lefebvre/15min"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Phone call"
            >
              <Phone className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-border/40 bg-background px-6 py-4 md:px-12 lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary/50 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button asChild size="sm" className="mt-2">
              <a href="#contact" onClick={() => setOpen(false)}>
                {t.nav.contact}
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
