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
}: {
  src: string;
  layout?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      const ratio = video.videoWidth / video.videoHeight;
      setAspectRatio(ratio);
      setIsLoading(false);
    };

    // Si les métadonnées sont déjà chargées (vidéo en cache)
    if (video.readyState >= 1) {
      handleLoadedMetadata();
    }

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    return () =>
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
  }, []);

  return (
    <div
      className={`
        relative mx-auto overflow-hidden bg-slate-900 shadow-2xl
        ${layout === "mobile" ? "max-w-75 max-h-150 rounded-3xl" : "w-full max-h-125 rounded-xl"}
      `}
      style={aspectRatio ? { aspectRatio: aspectRatio.toString() } : undefined}
    >
      {isLoading && (
        <div className="absolute inset-0 animate-pulse bg-slate-800" />
      )}
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="h-full w-full object-contain"
      />
    </div>
  );
}

export function Projects() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  const projects = [
    {
      title: t.projects.project1.title,
      description: t.projects.project1.description,
      tags: ["Flutter", "Node.js", "MongoDB", "IAP"],
      video: "bulbus.mp4",
      layout: "mobile",
      link: "https://apps.apple.com/fr/app/bulbus/id6742380845",
    },
    {
      title: t.projects.project3.title,
      description: t.projects.project3.description,
      tags: ["A-Frame", "MindAR", "Pusher.js", "3D"],
      video: "pepstery.mp4",
      layout: "mobile",
      link: "https://anceu-pepstery.web.app/",
    },
    {
      title: t.projects.project2.title,
      description: t.projects.project2.description,
      tags: ["Next.js", "TypeScript", "Prismic", "Stripe"],
      images: ["dl-1.jpg", "dl-2.jpg", "dl-3.jpg", "dl-4.jpg", "dl-5.jpg"],
      link: "https://www.desertleaves.org",
    },
    {
      title: t.projects.project4.title,
      description: t.projects.project4.description,
      tags: ["Node.js", "Vue.js", "Kubernetes", "GCP"],
      video: "cubyn-plus-legal-compliance.mp4",
      link: "https://www.ecommerce-nation.fr/livraison-cubyn/",
    },
    {
      title: t.projects.project5.title,
      description: t.projects.project5.description,
      video: "happyCow.mp4",
      layout: "mobile",
      tags: ["React Native", "JavaScript", "Mobile"],
    },
  ];

  return (
    <section id="projects" className="mb-24 scroll-mt-20">
      <h2 className="mb-8 text-3xl font-bold tracking-tight">
        {t.projects.title}
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col overflow-hidden">
            <div>
              {project.video && (
                <div className="px-4 pt-4 flex justify-center">
                  <AdaptiveVideoPlayer
                    src={project.video}
                    layout={project.layout}
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
                                alt={`${project.title} ${index}`}
                                fill
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
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {t.projects.viewProject}
                    </a>
                  </Button>
                </div>
              ) : null}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
