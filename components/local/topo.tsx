// Motif signature "courbes de niveau" (carte de territoire / cernes du bois).
// SVG décoratifs, hérite la couleur via currentColor. Purement ornemental.

export function TopoField({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
      className={className}
    >
      {Array.from({ length: 9 }).map((_, i) => {
        const r = 20 + i * 22;
        const cx = 200 + (i % 2 === 0 ? 0 : 12);
        const cy = 200 - i * 3;
        const ry = r * (0.72 + (i % 3) * 0.05);
        return (
          <ellipse
            key={i}
            cx={cx}
            cy={cy}
            rx={r}
            ry={ry}
            stroke="currentColor"
            strokeWidth="1.1"
          />
        );
      })}
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
