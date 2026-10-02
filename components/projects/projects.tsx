"use client";

import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import { Eyebrow } from "@/components/eyebrow";
import { AnimatedSection } from "@/components/animated-section";
import { useLanguage } from "@/lib/language-context";
import { getTranslations } from "@/lib/translations";
import {
  featuredProjects,
  moreProjects,
  PEPSTERY_LINK,
} from "@/lib/projects";
import { FeaturedProject } from "./featured-project";
import { ProjectTile } from "./project-tile";

// Mosaique : deux grandes tuiles puis trois sur ordinateur, deux colonnes sur
// tablette (la derniere prend la ligne entiere), une colonne sur mobile.
const TILE_SPAN = [
  "md:col-span-3",
  "md:col-span-3",
  "md:col-span-3 lg:col-span-2",
  "md:col-span-3 lg:col-span-2",
  "md:col-span-6 lg:col-span-2",
];
const TILE_SIZES = [
  "(min-width: 768px) 50vw, 100vw",
  "(min-width: 768px) 50vw, 100vw",
  "(min-width: 1024px) 34vw, (min-width: 768px) 50vw, 100vw",
  "(min-width: 1024px) 34vw, (min-width: 768px) 50vw, 100vw",
  "(min-width: 1024px) 34vw, 100vw",
];

export function Projects() {
  const { language } = useLanguage();
  const t = getTranslations(language).projects;
  const labels = {
    viewSite: t.viewSite,
    creditLabel: t.creditLabel,
    fictionalData: t.fictionalData,
    shareCardAlt: t.shareCardAlt,
  };

  return (
    <section id="projects" className="mb-16 scroll-mt-24 md:mb-24">
      <Container>
        <AnimatedSection>
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2 className="mb-2 text-3xl tracking-tight md:text-4xl">{t.title}</h2>
          <p className="mb-8 text-lg text-muted-foreground md:mb-10">
            {t.intro}
          </p>
        </AnimatedSection>
      </Container>

      <div className="border-y border-border">
        {featuredProjects.map((project, index) => (
          <FeaturedProject
            key={project.id}
            project={project}
            copy={t.items[project.id]}
            labels={labels}
            flip={index % 2 === 1}
          />
        ))}
      </div>

      <Container className="mt-16 md:mt-24">
        <AnimatedSection>
          <h3 className="font-display mb-2 text-2xl font-semibold tracking-tight md:text-3xl">
            {t.moreTitle}
          </h3>
          <p className="mb-8 text-lg text-muted-foreground">{t.moreIntro}</p>
        </AnimatedSection>
      </Container>

      <div className="grid gap-px bg-accent-deep md:grid-cols-6">
        {moreProjects.map((project, index) => (
          <ProjectTile
            key={project.id}
            project={project}
            copy={t.items[project.id]}
            labels={labels}
            className={TILE_SPAN[index]}
            sizes={TILE_SIZES[index]}
          />
        ))}
      </div>

      <Container className="mt-10">
        <div className="grid gap-4 border-l-2 border-primary/30 pl-5 text-muted-foreground md:grid-cols-2 md:gap-10">
          <p className="leading-relaxed">
            {t.pepsteryNote}{" "}
            <a
              href={PEPSTERY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pepstery (opens in new tab)"
              className="inline-flex items-center gap-1 font-medium text-primary hover:text-primary/80"
            >
              {t.viewSite}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </p>
          <p className="leading-relaxed">{t.cubynNote}</p>
        </div>
        <div className="mt-12 flex justify-center">
          <Button asChild size="lg">
            <a href="#contact">{getTranslations(language).nav.contact}</a>
          </Button>
        </div>
      </Container>
    </section>
  );
}
