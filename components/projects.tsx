"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { getTranslations } from "@/lib/translations";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef, useEffect, useState } from "react";

function AdaptiveVideoPlayer({
  src,
  layout,
  title,
}: {
  src: string;
  layout?: string;
  title: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  // Lazy load videos when they come into view
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

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

  return (
    <div
      ref={containerRef}
      className={`
        relative mx-auto overflow-hidden bg-slate-900 shadow-2xl
        ${layout === "mobile" ? "max-w-75 max-h-150 rounded-3xl" : "w-full max-h-125 rounded-xl"}
      `}
      style={aspectRatio ? { aspectRatio: aspectRatio.toString() } : { minHeight: layout === "mobile" ? "400px" : "250px" }}
    >
      {(isLoading || !isVisible) && (
        <div className="absolute inset-0 animate-pulse bg-slate-800" />
      )}
      {isVisible && (
        <video
          ref={videoRef}
          src={src}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-label={`Demo video for ${title}`}
          className="h-full w-full object-contain"
        />
      )}
    </div>
  );
}

export function Projects() {
  const { language } = useLanguage();
  const t = getTranslations(language);

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
      video: "lime.webm",
      link: "https://limesearch.nl",
    },
    {
      title: t.projects.bulbus.title,
      description: t.projects.bulbus.description,
      tags: ["Flutter", "Node.js", "MongoDB", "IAP"],
      video: "bulbus.webm",
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
      video: "c55.webm",
      link: "https://clubfiftyfive.co",
    },
  ];

  return (
    <section id="projects" className="mb-24 scroll-mt-20">
      <h2 className="mb-8 text-3xl font-bold tracking-tight">
        {t.projects.title}
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
            <div>
              {project.video && (
                <div className="px-4 pt-4 flex justify-center">
                  <AdaptiveVideoPlayer
                    src={project.video}
                    layout={project.layout}
                    title={project.title}
                  />
                </div>
              )}

              {project.images && (
                <div className="px-4 pt-4">
                  <div className="relative mx-auto w-full aspect-16/8 overflow-hidden rounded-xl bg-slate-800 shadow-2xl">
                    <Carousel
                      className="w-full h-full"
                      plugins={[
                        Autoplay({
                          delay: 3000,
                          stopOnInteraction: false,
                        }) as any,
                      ]}
                      opts={{
                        loop: true,
                      }}
                    >
                      <CarouselContent>
                        {project.images.map((img, index) => (
                          <CarouselItem key={index}>
                            <div className="relative aspect-16/10">
                              <Image
                                src={img}
                                alt={`${project.title} - Screenshot ${index + 1}`}
                                fill
                                sizes="(min-width: 768px) 50vw, 100vw"
                                className="object-contain object-top"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                    </Carousel>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-1 flex-col p-6">
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
          <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
            <div className="px-4 pt-4 flex justify-center">
              <AdaptiveVideoPlayer
                src="pepstery.webm"
                layout="mobile"
                title={t.projects.pepstery.title}
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
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
    </section>
  );
}
