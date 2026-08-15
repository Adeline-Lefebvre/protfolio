"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollAnimation(threshold = 0) {
  const ref = useRef<HTMLDivElement>(null);
  // `null` = pas encore évalué côté client. Dans cet état on rend le contenu
  // visible, pour que le HTML statique ne parte jamais en opacity-0 : sinon
  // toute la page sous le hero reste blanche entre le premier rendu et
  // l'hydratation, ce qui se compte en secondes sur un mobile en réseau lent.
  // C'est l'observer qui décide ensuite de masquer, et il ne masque que ce qui
  // est déjà hors écran : la transition d'entrée reste donc invisible.
  const [isVisible, setIsVisible] = useState<boolean | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Fallback: if IntersectionObserver is unavailable, show content immediately.
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        } else {
          // Première évaluation : la section est hors écran, on l'arme pour
          // l'animation. Les sections déjà à l'écran ne passent jamais ici.
          setIsVisible(false);
        }
      },
      // Positive bottom margin: reveal ~200px BEFORE the section enters the
      // viewport, so it's already faded in by the time the user sees it.
      { threshold, rootMargin: "0px 0px 200px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible: isVisible ?? true };
}
