"use client";

import { Mail, Linkedin, Github, Phone, Download } from "lucide-react";
import { Eyebrow } from "@/components/eyebrow";
import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { getTranslations } from "@/lib/translations";

// Boutons secondaires en outline sur fond vert (hover = crème plein, texte vert).
const OUTLINE =
  "border-background/30 bg-transparent text-background hover:bg-background hover:text-accent";

export function Contact() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

  return (
    <section id="contact" className="scroll-mt-24">
      <div className="relative mx-[calc(50%-50vw)] overflow-hidden bg-linear-to-br from-accent-deep via-accent to-accent-bright py-16 text-background md:py-24">
        <div className="relative mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
          <Eyebrow tone="amber">{t.contact.eyebrow}</Eyebrow>
          <h2 className="mb-4 text-3xl tracking-tight text-background md:text-4xl">
            {t.contact.title}
          </h2>
          <div className="mb-4 flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber" />
            </span>
            <span className="text-sm font-medium text-background">
              {t.hero.availableBadge}
            </span>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-background/90">
            {t.contact.description}
          </p>
          {accessKey && (
            <div className="mt-8 max-w-2xl rounded-2xl bg-background p-6 text-foreground">
              <ContactForm
                accessKey={accessKey}
                labels={t.contact.form}
                subject="Nouveau message depuis adelinelefebvre.com"
              />
            </div>
          )}
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="outline" className={OUTLINE}>
              <a
                href="https://calendly.com/adeline-lefebvre/15min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="mr-2 h-4 w-4" />
                {t.contact.calendly}
              </a>
            </Button>
            <Button asChild variant="outline" className={OUTLINE}>
              <a
                href="mailto:adeline.lefe@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="mr-2 h-4 w-4" />
                {t.contact.email}
              </a>
            </Button>
            <Button asChild variant="outline" className={OUTLINE}>
              <a
                href="https://www.linkedin.com/in/adeline-lefebvre-600b46aa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                {t.contact.linkedin}
              </a>
            </Button>
            <Button asChild variant="outline" className={OUTLINE}>
              <a
                href="https://github.com/Adeline-Lefebvre"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                {t.contact.github}
              </a>
            </Button>
            <Button asChild variant="outline" className={OUTLINE}>
              <a href="/CV.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                {t.hero.downloadCV}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
