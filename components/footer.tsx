"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-6 sm:flex-row sm:justify-between md:px-12 lg:px-16">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Adeline Lefebvre
        </p>
        {/* -mr-3 seulement en ligne : compense le padding optique des cibles
            de 44px pour aligner les icones sur le bord du conteneur. */}
        <div className="flex items-center gap-2 sm:-mr-3">
          <a
            href="https://github.com/Adeline-Lefebvre"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-11 w-11 items-center justify-center rounded-full text-muted-foreground transition-colors active:bg-secondary active:text-foreground hover:text-foreground"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/adeline-lefebvre-600b46aa/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-full text-muted-foreground transition-colors active:bg-secondary active:text-foreground hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:adeline.lefe@gmail.com"
            aria-label="Email"
            className="flex h-11 w-11 items-center justify-center rounded-full text-muted-foreground transition-colors active:bg-secondary active:text-foreground hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
