import type { Credit } from "@/lib/projects";

// Credit de l'agence pour laquelle le projet a ete realise.
export function ProjectCredit({
  credit,
  label,
  onDark = false,
}: {
  credit: Credit;
  label: string;
  onDark?: boolean;
}) {
  return (
    <span>
      {label}{" "}
      <a
        href={credit.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`font-semibold underline decoration-1 underline-offset-2 transition-colors ${
          onDark
            ? "text-background hover:text-amber"
            : "text-foreground hover:text-primary"
        }`}
      >
        {credit.name}
      </a>
      .
    </span>
  );
}
