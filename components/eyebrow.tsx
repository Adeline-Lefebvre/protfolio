import type { ReactNode } from "react";

// Sur-titre (kicker) de section, partagé par la home et la page /local.
export function Eyebrow({
  children,
  tone = "accent",
}: {
  children: ReactNode;
  tone?: "accent" | "amber";
}) {
  return (
    <p
      className={`mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${
        tone === "amber" ? "text-amber" : "text-accent"
      }`}
    >
      <span
        className={`h-px w-6 ${tone === "amber" ? "bg-amber/60" : "bg-accent/50"}`}
      />
      {children}
    </p>
  );
}
