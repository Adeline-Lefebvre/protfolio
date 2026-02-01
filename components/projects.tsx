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

export function Projects() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  const projects = [
    {
      title: t.projects.project1.title,
      description: t.projects.project1.description,
      tags: ["Flutter", "Node.js", "MongoDB", "IAP"],
      gif: "/demo-app.gif",
      link: "https://apps.apple.com/fr/app/bulbus/id6742380845",
    },
    {
      title: t.projects.project2.title,
      description: t.projects.project2.description,
      tags: ["Next.js", "TypeScript", "Prismic", "Stripe"],
      images: ["dl-1.jpg", "dl-2.jpg", "dl-3.jpg", "dl-4.jpg", "dl-5.jpg"],
      link: "https://www.desertleaves.org",
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
      title: t.projects.project4.title,
      description: t.projects.project4.description,
      tags: ["Node.js", "Vue.js", "Kubernetes", "GCP"],
      video: "cubyn-plus-legal-compliance.mov",
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
                  <div
                    className={`
        relative mx-auto overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl
        ${
          project.layout === "mobile"
            ? "w-65 aspect-[9/19.5] rounded-[2.5rem]" // Look Smartphone
            : "w-full aspect-16/8 rounded-xl" // Look Desktop
        }
      `}
                  >
                    {/* Encoche adaptative */}
                    <div
                      className={`
        absolute left-1/2 -translate-x-1/2 bg-primary/20 z-10
        ${
          project.layout === "mobile"
            ? "top-2 w-16 h-4 rounded-2xl"
            : "top-0 w-20 h-1.5 rounded-b-md"
        }
      `}
                    ></div>

                    <video
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                </div>
              )}

              {project.images && (
                <div className="px-4 pt-4">
                  <div className="relative mx-auto w-full aspect-16/8 overflow-hidden rounded-xl border border-slate-500 bg-slate-800 shadow-2xl">
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

              {project.gif && (
                <div className="relative mx-auto w-50 h-107.5 overflow-hidden rounded-3xl border border-slate-500 bg-slate-800 shadow-xl">
                  <Image
                    src={project.gif}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    unoptimized
                  />
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
