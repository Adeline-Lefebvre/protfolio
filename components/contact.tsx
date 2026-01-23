"use client";

import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { getTranslations } from "@/lib/translations";

export function Contact() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section id="contact" className="mb-24 scroll-mt-20">
      <h2 className="mb-8 text-3xl font-bold tracking-tight">
        {t.contact.title}
      </h2>
      <Card className="p-8">
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {t.contact.description}
          </p>
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
          </div>
        </div>
      </Card>
    </section>
  );
}
