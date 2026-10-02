import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { MoreProject } from "@/lib/projects";
import { ProjectCredit } from "./project-credit";
import type { ProjectLabels } from "./featured-project";

export type TileCopy = {
  name: string;
  anonName?: string;
  kicker: string;
  summary: string;
  points: string[];
};

// Ambre eclairci pour les sur-titres : l'ambre du theme tombe a 4.4 de
// contraste sur le vert sapin, sous le seuil AA de 4.5 pour du petit texte.
// Tuile de la mosaique. Le nom et le contexte restent toujours lisibles sur
// l'image. Le detail est un voile vert qui monte au survol ou au focus clavier
// sur ordinateur, et un bloc toujours affiche sous l'image ailleurs : voir
// .project-tile dans globals.css.
export function ProjectTile({
  project,
  copy,
  labels,
  className = "",
  sizes,
}: {
  project: MoreProject;
  copy: TileCopy;
  labels: ProjectLabels;
  className?: string;
  sizes: string;
}) {
  const anonymous = project.anonymous === true;
  const name = anonymous ? (copy.anonName ?? copy.name) : copy.name;

  return (
    <article
      // Sans lien, rien ne recevrait le focus : on rend la tuile focusable
      // pour que le detail reste accessible au clavier.
      tabIndex={anonymous ? 0 : undefined}
      className={`project-tile group/tile relative flex flex-col overflow-hidden bg-accent text-background outline-none ${className}`}
    >
      <div className="project-tile__media relative">
        <Image
          src={project.image}
          alt=""
          fill
          sizes={sizes}
          style={{ objectPosition: project.focus ?? "center top" }}
          className={`object-cover transition-transform duration-700 ease-out motion-reduce:transition-none lg:group-hover/tile:scale-[1.03] ${
            anonymous ? "scale-110 blur-xl" : ""
          }`}
        />
        <div className="absolute inset-0 bg-linear-to-t from-accent-deep via-accent-deep/55 via-30% to-transparent to-60%" />
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#f0b55f]">
            {copy.kicker}
          </p>
          <h4 className="font-display text-2xl font-semibold tracking-tight text-background">
            {name}
          </h4>
        </div>
      </div>

      <div className="project-tile__detail flex flex-col bg-accent p-5 sm:p-6">
        <div className="project-tile__heading">
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#f0b55f]">
            {copy.kicker}
          </p>
          <p className="mb-3 font-display text-2xl font-semibold tracking-tight">
            {name}
          </p>
        </div>
        <p className="leading-relaxed text-background/90">{copy.summary}</p>
        <ul className="mt-3 space-y-1.5 text-sm leading-snug text-background/80">
          {copy.points.map((point) => (
            <li key={point} className="flex gap-2">
              <span
                aria-hidden="true"
                className="mt-[0.45em] h-1 w-3 shrink-0 bg-amber"
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-4">
          {project.credit && (
            <p className="mb-2 text-sm text-background/80">
              <ProjectCredit
                credit={project.credit}
                label={labels.creditLabel}
                onDark
              />
            </p>
          )}
          <p className="text-xs text-background/70">
            {project.stack.join(" · ")}
          </p>
          {!anonymous && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${labels.viewSite}: ${name} (opens in new tab)`}
              className="-mx-2 mt-2 inline-flex min-h-11 items-center gap-1.5 rounded-md px-2 text-sm font-semibold text-background outline-none transition-colors active:bg-background/10 hover:text-amber focus-visible:ring-2 focus-visible:ring-amber"
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
