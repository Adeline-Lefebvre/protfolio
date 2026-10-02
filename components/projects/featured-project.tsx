"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import type { FeaturedProject as FeaturedProjectData } from "@/lib/projects";
import { ProjectScreen } from "./project-screen";
import { ProjectCredit } from "./project-credit";

export type FeaturedCopy = {
  name: string;
  anonName?: string;
  kicker: string;
  title: string;
  summary: string;
  facts: { value: string; label: string }[];
  role: string;
};

export type ProjectLabels = {
  viewSite: string;
  creditLabel: string;
  fictionalData: string;
  shareCardAlt: string;
};

// Terracotta fonce pour le petit texte : celui du theme passe a 4.0 de
// contraste sur les bandes sable, sous le seuil AA de 4.5.
const TERRA_TEXT = "text-[#a8472c]";

const REVEAL =
  "transition-all duration-700 ease-out motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none";

// Bande pleine largeur d'un projet phare : un aplat vert qui porte l'ecran du
// site d'un cote, le texte de l'autre. `flip` alterne le cote du visuel.
export function FeaturedProject({
  project,
  copy,
  labels,
  flip,
  index,
  priority,
}: {
  project: FeaturedProjectData;
  copy: FeaturedCopy;
  labels: ProjectLabels;
  flip: boolean;
  // Rang du projet (0, 1, 2...), affiche en repere "01", "02" devant le sur-titre.
  index: number;
  priority?: boolean;
}) {
  const [active, setActive] = useState(false);
  const { ref, isVisible } = useScrollAnimation(0.15, "0px");
  const anonymous = project.anonymous === true;
  const name = anonymous ? (copy.anonName ?? copy.name) : copy.name;

  const screen = (
    <div className="relative w-full">
      <div className="relative aspect-16/10 overflow-hidden rounded-lg shadow-[0_30px_60px_-20px_rgba(0,0,0,0.55)] ring-1 ring-white/10 transition-transform duration-500 ease-out motion-reduce:transition-none lg:group-hover/band:scale-[1.02]">
        <ProjectScreen
          media={project.media}
          alt={name}
          active={active}
          blurred={anonymous}
          priority={priority}
        />
        {!anonymous && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-4 right-4 hidden items-center gap-1.5 rounded-full bg-background px-4 py-2 text-sm font-semibold text-foreground opacity-0 shadow-lg transition-all duration-300 lg:flex lg:translate-y-2 lg:group-hover/band:translate-y-0 lg:group-hover/band:opacity-100 lg:group-focus-within/band:translate-y-0 lg:group-focus-within/band:opacity-100"
          >
            {labels.viewSite}
            <ArrowUpRight className="h-4 w-4" />
          </span>
        )}
      </div>
      {project.shareCard && !anonymous && (
        // Bulle de conversation : la carte de partage telle qu'elle apparait
        // quand on colle le lien d'une offre dans une messagerie.
        <div className="absolute -bottom-7 -left-2 w-[36%] max-w-64 -rotate-2 rounded-xl rounded-bl-sm bg-[#e4f7d6] p-1 shadow-xl sm:-bottom-8 sm:-left-4 sm:w-[42%] sm:p-1.5 lg:-left-8">
          <div className="relative aspect-1200/630 overflow-hidden rounded-lg">
            <Image
              src={project.shareCard.src}
              alt={labels.shareCardAlt}
              fill
              sizes="256px"
              className="object-cover"
            />
          </div>
          <p
            aria-hidden="true"
            className="hidden px-1.5 pb-0.5 pt-1.5 text-[0.7rem] leading-tight text-[#1f2c24] sm:block"
          >
            <span className="block font-semibold">{project.shareCard.title}</span>
            <span className="opacity-60">{project.shareCard.domain}</span>
          </p>
        </div>
      )}
    </div>
  );

  return (
    <article
      ref={ref}
      id={`project-${project.id}`}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      className={`group/band grid scroll-mt-6 lg:min-h-[min(80vh,46rem)] lg:grid-cols-5 ${
        flip ? "bg-secondary" : "bg-background"
      }`}
    >
      <div
        className={`relative flex items-center overflow-hidden bg-accent lg:col-span-3 ${
          flip ? "lg:order-2" : ""
        }`}
      >
        <div
          className={`w-full px-6 pb-12 pt-8 sm:px-10 sm:pb-14 sm:pt-10 lg:px-14 lg:py-14 xl:px-20 ${REVEAL} ${
            isVisible
              ? "translate-x-0 opacity-100"
              : flip
                ? "translate-x-10 opacity-0"
                : "-translate-x-10 opacity-0"
          }`}
        >
          {anonymous ? (
            screen
          ) : (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${labels.viewSite}: ${name} (opens in new tab)`}
              className="block rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-4 focus-visible:ring-offset-accent"
            >
              {screen}
            </a>
          )}
          {project.fictionalData && !anonymous && (
            <p className="mt-10 text-right text-xs text-background/70 sm:mt-12">
              {labels.fictionalData}
            </p>
          )}
        </div>
      </div>

      <div className="flex items-center lg:col-span-2">
        <div
          className={`w-full max-w-2xl px-6 py-10 delay-150 sm:px-10 lg:max-w-xl lg:px-12 lg:py-14 xl:px-16 ${REVEAL} ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            <span className="font-display text-lg leading-none tracking-normal text-foreground">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span aria-hidden="true" className="h-px w-6 shrink-0 bg-accent/50" />
            {copy.kicker}
          </p>
          <p className={`mb-2 text-sm font-semibold ${TERRA_TEXT}`}>{name}</p>
          <h3 className="font-display text-balance text-2xl font-semibold leading-tight tracking-tight sm:text-3xl xl:text-4xl">
            {copy.title}
          </h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {copy.summary}
          </p>

          <dl className="mt-6 divide-y divide-border border-y border-border">
            {copy.facts.map((fact) => (
              <div
                key={fact.value}
                className="grid gap-x-4 gap-y-0.5 py-3 sm:grid-cols-[9.5rem_1fr] sm:items-baseline"
              >
                <dt className="font-display text-xl font-semibold leading-tight text-foreground">
                  {fact.value}
                </dt>
                <dd className="text-sm leading-snug text-muted-foreground">
                  {fact.label}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-5 text-sm leading-relaxed text-foreground/80">
            {copy.role}
            {project.credit && (
              <>
                {" "}
                <ProjectCredit
                  credit={project.credit}
                  label={labels.creditLabel}
                />
              </>
            )}
          </p>

          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
            {project.stack.join(" · ")}
          </p>

          {!anonymous && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${labels.viewSite}: ${name} (opens in new tab)`}
              className={`-mx-2 mt-4 inline-flex min-h-11 items-center gap-1.5 rounded-md px-2 text-sm font-semibold transition-colors active:bg-secondary hover:opacity-80 ${TERRA_TEXT}`}
            >
              {labels.viewSite}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
