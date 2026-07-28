// Motif signature : arbre fractal (branches récursives). Évoque la croissance,
// les racines, la nature. SVG décoratif, hérite la couleur via currentColor.
// Déterministe (pas de hasard) pour éviter tout décalage d'hydratation.
type Segment = [number, number, number, number, number];

function buildBranches(): Segment[] {
  const segments: Segment[] = [];
  const grow = (
    x: number,
    y: number,
    angle: number,
    length: number,
    depth: number
  ) => {
    if (depth === 0 || length < 3) return;
    const x2 = x + Math.cos(angle) * length;
    const y2 = y + Math.sin(angle) * length;
    segments.push([x, y, x2, y2, depth]);
    grow(x2, y2, angle - 0.42, length * 0.75, depth - 1);
    grow(x2, y2, angle + 0.58, length * 0.68, depth - 1);
  };
  grow(200, 384, -Math.PI / 2, 98, 7);
  return segments;
}

const BRANCHES = buildBranches();

export function TopoField({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {BRANCHES.map(([x1, y1, x2, y2, depth], i) => (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="currentColor"
          strokeWidth={Math.max(0.4, depth * 0.4)}
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

export function TopoDivider({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 56"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
      className={className}
    >
      <path
        d="M0 28 C 160 8, 300 48, 460 28 S 760 8, 920 28 1200 24"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M0 42 C 200 22, 380 60, 560 42 S 880 22, 1060 42 1200 40"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.55"
      />
    </svg>
  );
}

export function HandUnderline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 12"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
      className={className}
    >
      <path
        d="M3 8 C 42 3, 72 10, 112 6 S 182 3, 197 7"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
