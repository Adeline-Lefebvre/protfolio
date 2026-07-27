"use client";

import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, Phone, Download } from "lucide-react";
import { Eyebrow } from "@/components/eyebrow";
import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { getTranslations } from "@/lib/translations";

export function Contact() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

  return (
    <section id="contact" className="mb-24 scroll-mt-20">
      <Eyebrow>{t.contact.eyebrow}</Eyebrow>
      <h2 className="mb-8 text-3xl tracking-tight md:text-4xl">
        {t.contact.title}
      </h2>
      <Card className="p-8">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
            </span>
            <span className="text-sm font-medium text-accent">
              {t.hero.availableBadge}
            </span>
          </div>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {t.contact.description}
          </p>
          {accessKey && (
            <ContactForm
              accessKey={accessKey}
              labels={t.contact.form}
              subject="Nouveau message depuis adelinelefebvre.com"
            />
          )}
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <a
                href="https://calendly.com/adeline-lefebvre/15min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="mr-2 h-4 w-4" />
                {t.contact.calendly}
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="mailto:adeline.lefe@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="mr-2 h-4 w-4" />
                {t.contact.email}
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://www.linkedin.com/in/adeline-lefebvre-600b46aa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                {t.contact.linkedin}
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://github.com/Adeline-Lefebvre"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                {t.contact.github}
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/CV.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                {t.hero.downloadCV}
              </a>
            </Button>
          </div>
        </div>
      </Card>
    </section>
  );
}
