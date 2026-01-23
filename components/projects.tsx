"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { getTranslations } from "@/lib/translations"

const projectTags = [
  ["Next.js", "TypeScript", "i18n", "Stripe"],
  ["Flutter", "AR", "Education", "Mobile"],
  ["Vue.js", "Node.js", "GreenTech", "CSR"],
  ["Flutter", "EdTech", "Mobile", "Firebase"],
]

export function Projects() {
  const { language } = useLanguage()
  const t = getTranslations(language)

  const projects = [
    {
      title: t.projects.project1.title,
      description: t.projects.project1.description,
      tags: projectTags[0],
      link: "#",
      github: "#",
    },
    {
      title: t.projects.project2.title,
      description: t.projects.project2.description,
      tags: projectTags[1],
      link: "#",
      github: "#",
    },
    {
      title: t.projects.project3.title,
      description: t.projects.project3.description,
      tags: projectTags[2],
      link: "#",
      github: "#",
    },
    {
      title: t.projects.project4.title,
      description: t.projects.project4.description,
      tags: projectTags[3],
      link: "#",
      github: "#",
    },
  ]

  return (
    <section id="projects" className="mb-24 scroll-mt-20">
      <h2 className="mb-8 text-3xl font-bold tracking-tight">{t.projects.title}</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col p-6">
            <div className="mb-4">
              <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{project.description}</p>
            </div>
            <div className="mb-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="mt-auto flex gap-2">
              <Button variant="outline" size="sm" asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  {t.projects.viewProject}
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  {t.projects.code}
                </a>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
