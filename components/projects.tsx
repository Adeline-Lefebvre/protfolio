"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { getTranslations } from "@/lib/translations";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef, useEffect, useMemo, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { Eyebrow } from "@/components/eyebrow";

function AdaptiveVideoPlayer({
  src,
  layout,
  title,
  fill,
}: {
  src: string;
  layout?: string;
  title: string;
  fill?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  // Montage differe a l'approche du viewport, puis mise en pause des que la
  // video en sort. L'observer restait auparavant deconnecte apres le premier
  // passage : les quatre demos tournaient en boucle en permanence une fois
  // depassees, pour rien, en consommant batterie et CPU.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (!reducedMotion) videoRef.current?.play().catch(() => {});
        } else {
          videoRef.current?.pause();
        }
      },
      { rootMargin: "100px" }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [reducedMotion]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isVisible) return;

    const handleLoadedMetadata = () => {
      const ratio = video.videoWidth / video.videoHeight;
      setAspectRatio(ratio);
      setIsLoading(false);
    };

    if (video.readyState >= 1) {
      handleLoadedMetadata();
    }

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    return () =>
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
  }, [isVisible]);

  // Mode "fill" : la video remplit son conteneur et en touche les bords
  // (utilise pour les visuels verticaux places a cote du texte).
  if (fill) {
    return (
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden bg-secondary"
        // La colonne s'etirait sur toute la hauteur de la carte alors que la
        // video garde ses proportions : tout le reste etait du fond, soit un
        // grand aplat vert sur un tiers de la carte. On lui donne le ratio de
        // la video, le parent est en self-start, et il ne reste plus de fond
        // visible une fois la video chargee.
        style={{
          aspectRatio: aspectRatio ? aspectRatio.toString() : "9 / 19",
        }}
      >
        {(isLoading || !isVisible) && (
          <div className="absolute inset-0 animate-pulse bg-secondary" />
        )}
        {isVisible && (
          <video
            ref={videoRef}
            poster={`/${src}-poster.jpg`}
            autoPlay={!reducedMotion}
            loop
            muted
            playsInline
            preload="metadata"
            aria-label={`Demo video for ${title}`}
            className="h-full w-full object-contain"
          >
            <source src={`/${src}.webm`} type="video/webm" />
            <source src={`/${src}.mp4`} type="video/mp4" />
          </video>
        )}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`
        relative mx-auto overflow-hidden bg-secondary
        ${layout === "mobile" ? "max-w-75 max-h-150 rounded-3xl" : "w-full max-h-125"}
      `}
      // Toujours un ratio, jamais une hauteur mini : le ternaire precedent
      // remplaçait 250px par le ratio mesure des l'arrivee des metadonnees, ce
      // qui faisait sauter la page d'environ 97px sous le doigt.
      style={{
        aspectRatio: aspectRatio
          ? aspectRatio.toString()
          : layout === "mobile"
            ? "9 / 19"
            : "16 / 9",
      }}
    >
      {(isLoading || !isVisible) && (
        <div className="absolute inset-0 animate-pulse bg-secondary" />
      )}
      {isVisible && (
        <video
          ref={videoRef}
          poster={`/${src}-poster.jpg`}
          autoPlay={!reducedMotion}
          loop
          muted
          playsInline
          controls
          preload="metadata"
          aria-label={`Demo video for ${title}`}
          className="h-full w-full object-contain"
        >
          <source src={`/${src}.webm`} type="video/webm" />
          <source src={`/${src}.mp4`} type="video/mp4" />
        </video>
      )}
    </div>
  );
}

// Ratio des captures de sites : elles font toutes entre 1.82 et 1.88, alors
// que le conteneur etait en aspect-16/8, soit 2.0. L'ecart produisait des
// bandes vert fonce sur les cotes, en object-contain.
const SHOT_RATIO = "aspect-[16/8.7]";

function ProjectCarousel({
  images,
  title,
  slideLabel,
  reducedMotion,
}: {
  images: string[];
  title: string;
  slideLabel: string;
  reducedMotion: boolean;
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Memoise : le tableau etait recree a chaque rendu, ce qui faisait
  // reinitialiser embla sans raison.
  // Le cast est necessaire tant qu'embla-carousel-autoplay et le coeur tire
  // par embla-carousel-react ne partagent pas la meme version de types.
  const plugins = useMemo(
    () =>
      reducedMotion
        ? []
        : [Autoplay({ delay: 3000, stopOnInteraction: true }) as any],
    [reducedMotion]
  );

  return (
    <div>
      <div
        className={`relative ${SHOT_RATIO} w-full overflow-hidden bg-secondary`}
      >
        <Carousel
          className="h-full w-full"
          plugins={plugins}
          opts={{ loop: true }}
          setApi={setApi}
        >
          {/* ml-0 / pl-0 : la gouttiere de 16px d'embla decalait la hauteur
              de la diapositive de celle du conteneur, ce qui laissait un
              liseré vert de 8px sous chaque visuel. */}
          <CarouselContent className="ml-0">
            {images.map((img, index) => (
              <CarouselItem key={img} className="pl-0">
                <div className={`relative ${SHOT_RATIO}`}>
                  <Image
                    src={img}
                    alt={`${title} - ${index + 1}`}
                    fill
                    sizes="(min-width: 768px) 50vw, calc(100vw - 3rem)"
                    className="object-contain object-top"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      {/* Sans pastilles, rien n'indiquait que les visuels etaient balayables,
          et l'autoplay s'arretait au premier contact sans moyen de reprendre :
          4 visuels sur 5 restaient invisibles. */}
      {images.length > 1 && (
        <div role="group" aria-label={title} className="flex justify-center">
          {images.map((img, index) => (
            <button
              key={img}
              type="button"
              onClick={() => api?.scrollTo(index)}
              aria-label={`${slideLabel} ${index + 1}`}
              aria-current={index === selected}
              className="flex h-11 w-11 items-center justify-center"
            >
              <span
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === selected ? "w-5 bg-primary" : "w-1.5 bg-border"
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function Projects() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const reducedMotion = usePrefersReducedMotion();

  const projects = [
    {
      title: t.projects.rootyne.title,
      description: t.projects.rootyne.description,
      tags: ["Next.js", "Claude API", "Mistral", "Firebase"],
      images: [
        "/rootyne-1.jpg",
        "/rootyne-2.jpg",
        "/rootyne-3.jpg",
        "/rootyne-4.jpg",
      ],
      link: "https://www.rootyne.health/fr",
    },
    {
      title: t.projects.desertLeaves.title,
      description: t.projects.desertLeaves.description,
      tags: ["Next.js", "Prismic", "Stripe", "SEO"],
      images: ["/dl-1.jpg", "/dl-2.jpg", "/dl-3.jpg", "/dl-4.jpg", "/dl-5.jpg"],
      link: "https://www.desertleaves.org",
    },
    {
      title: t.projects.lime.title,
      description: t.projects.lime.description,
      tags: ["Craft CMS", "PHP", "Twig", "SEO"],
      video: "lime",
      link: "https://limesearch.nl",
    },
    {
      title: t.projects.bulbus.title,
      description: t.projects.bulbus.description,
      tags: ["Flutter", "Node.js", "MongoDB", "IAP"],
      video: "bulbus",
      layout: "mobile",
      link: "https://bulbus-app.com",
    },
    {
      title: t.projects.sds.title,
      description: t.projects.sds.description,
      tags: ["Next.js", "next-intl", "Tailwind CSS", "SEO"],
      images: ["/sds.jpg"],
      link: "https://www.sds-lingo.cz",
    },
    {
      title: t.projects.c55.title,
      description: t.projects.c55.description,
      tags: ["WordPress", "Elementor Pro", "Custom JS", "CSS"],
      video: "c55",
      link: "https://clubfiftyfive.co",
    },
  ];

  return (
    <section id="projects" className="mb-24 scroll-mt-24">
      <Eyebrow>{t.projects.eyebrow}</Eyebrow>
      <h2 className="mb-8 text-3xl tracking-tight md:text-4xl">
        {t.projects.title}
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card
            key={project.title}
            className={`flex ${project.layout === "mobile" ? "flex-row" : "flex-col"} gap-0 overflow-hidden py-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5`}
          >
            <div
              className={
                // Proportionnel plutot que 112px figes : a 320px la colonne de
                // texte tombait a 112px et le bouton, en whitespace-nowrap
                // shrink-0, depassait de la carte et se faisait clipper.
                project.layout === "mobile" ? "w-1/3 max-w-44 shrink-0 self-start" : ""
              }
            >
              {project.video &&
                (project.layout === "mobile" ? (
                  <AdaptiveVideoPlayer
                    src={project.video}
                    title={project.title}
                    fill
                  />
                ) : (
                  <div className="flex justify-center">
                    <AdaptiveVideoPlayer
                      src={project.video}
                      layout={project.layout}
                      title={project.title}
                    />
                  </div>
                ))}

              {project.images && (
                <ProjectCarousel
                  images={project.images}
                  title={project.title}
                  slideLabel={t.projects.viewSlide}
                  reducedMotion={reducedMotion}
                />
              )}
            </div>

            <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-6">
              <div className="mb-4">
                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              {project.link ? (
                <div className="mt-auto flex gap-2">
                  <Button size="sm" asChild>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${t.projects.viewProject}: ${project.title} (opens in new tab)`}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />
                      {t.projects.viewProject}
                    </a>
                  </Button>
                </div>
              ) : null}
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="mb-6 text-xl font-semibold text-muted-foreground">
          {t.projects.moreTitle}
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="flex flex-row gap-0 overflow-hidden py-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
            <div className="w-1/3 max-w-44 shrink-0 self-start">
              <AdaptiveVideoPlayer
                src="pepstery"
                title={t.projects.pepstery.title}
                fill
              />
            </div>
            <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-6">
              <h4 className="mb-2 text-lg font-semibold">
                {t.projects.pepstery.title}
              </h4>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                {t.projects.pepstery.description}
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {["A-Frame", "MindAR", "Pusher.js", "3D"].map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="mt-auto flex gap-2">
                <Button size="sm" asChild>
                  <a
                    href="https://anceu-pepstery.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t.projects.viewProject}: ${t.projects.pepstery.title} (opens in new tab)`}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />
                    {t.projects.viewProject}
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          <div className="flex items-center">
            <p className="border-l-2 border-primary/30 pl-5 text-muted-foreground leading-relaxed">
              {t.projects.cubynNote}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <Button asChild size="lg">
          <a href="#contact">{t.nav.contact}</a>
        </Button>
      </div>
    </section>
  );
}
