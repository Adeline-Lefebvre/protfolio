import type { ReactNode } from "react";

// Colonne de lecture du site. Les sections pleine largeur (projets, bandes de
// couleur) s'en passent et la reutilisent pour leurs titres.
export const CONTAINER = "mx-auto w-full max-w-6xl px-6 md:px-12 lg:px-16";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`${CONTAINER} ${className}`}>{children}</div>;
}
