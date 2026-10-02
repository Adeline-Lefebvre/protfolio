"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

// true sur les appareils a pointeur fin capables de survol (souris, trackpad).
function useCanHover() {
  const [canHover, setCanHover] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanHover(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return canHover;
}

// Ecran d'un projet phare : une image d'attente optimisee, puis la video par
// dessus. La video n'est montee qu'a l'approche de l'ecran et ne joue que
// lorsqu'elle est utile : au survol de la bande avec une souris, a l'entree a
// l'ecran sur un appareil tactile. Jamais en mouvement reduit.
export function ProjectScreen({
  media,
  alt,
  active,
  blurred = false,
  priority = false,
}: {
  media: string;
  alt: string;
  active: boolean;
  blurred?: boolean;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [near, setNear] = useState(false);
  const [inView, setInView] = useState(false);
  const [started, setStarted] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const canHover = useCanHover();

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const nearObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          nearObserver.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    const viewObserver = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    nearObserver.observe(el);
    viewObserver.observe(el);
    return () => {
      nearObserver.disconnect();
      viewObserver.disconnect();
    };
  }, []);

  const withVideo = near && !blurred && !reducedMotion;
  const shouldPlay = withVideo && inView && (canHover ? active : true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (shouldPlay) video.play().catch(() => {});
    else video.pause();
  }, [shouldPlay]);

  return (
    <div ref={ref} className="absolute inset-0 bg-accent-deep">
      <Image
        src={`/projects/${media}-poster.jpg`}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 55vw, calc(100vw - 3rem)"
        className={`object-cover object-top ${blurred ? "scale-110 blur-xl" : ""}`}
      />
      {withVideo && (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          tabIndex={-1}
          onPlaying={() => setStarted(true)}
          className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-300 ${
            started ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={`/projects/${media}.webm`} type="video/webm" />
          <source src={`/projects/${media}.mp4`} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
