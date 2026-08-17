"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  if (typeof window === "undefined" || !window.matchMedia) return () => {};
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getSnapshot() {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia(QUERY).matches;
}

// Le serveur ne peut pas connaître la préférence : il suppose false.
function getServerSnapshot() {
  return false;
}

// Retourne true si "réduire les animations" est activé au niveau du système.
//
// useSyncExternalStore plutôt qu'un useState lu dans un effet : React sait
// alors qu'il doit utiliser l'instantané serveur pendant l'hydratation, puis
// basculer sur la valeur réelle. Lire matchMedia dans un initialiseur d'état
// donnerait le bon resultat mais provoquerait une divergence d'hydratation,
// puisque le HTML statique a été produit avec false.
export function usePrefersReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
