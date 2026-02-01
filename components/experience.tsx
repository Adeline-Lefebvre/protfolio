"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/language-context";
import { getTranslations } from "@/lib/translations";

const skills = {
  frontend: ["Next.js", "React", "Vue.js", "TypeScript", "Tailwind CSS"],
  backend: ["Node.js", "GraphQL", "REST APIs", "PostgreSQL", "MongoDB"],
  mobile: ["Flutter", "Dart", "React Native", "Expo", "Mobile UI/UX"],
  tools: [
    "Git",
    "GCP",
    "Kubernetes",
    "CI/CD (CircleCI)",
    "Stripe",
    "SEO & Google Ads",
  ],
  focus: [
    "GreenTech & CSR",
    "EdTech",
    "AR Applications",
    "Product Management",
    "Multilingual Apps",
  ],
};

export function Experience() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section id="experience" className="mb-24 scroll-mt-20">
      <h2 className="mb-8 text-3xl font-bold tracking-tight">
        {t.skills.title}
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="mb-4 text-xl font-semibold">{t.skills.frontend}</h3>
          <div className="flex flex-wrap gap-2">
            {skills.frontend.map((skill) => (
              <Badge key={skill} variant="outline" className="text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="mb-4 text-xl font-semibold">{t.skills.backend}</h3>
          <div className="flex flex-wrap gap-2">
            {skills.backend.map((skill) => (
              <Badge key={skill} variant="outline" className="text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="mb-4 text-xl font-semibold">{t.skills.mobile}</h3>
          <div className="flex flex-wrap gap-2">
            {skills.mobile.map((skill) => (
              <Badge key={skill} variant="outline" className="text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="mb-4 text-xl font-semibold">{t.skills.tools}</h3>
          <div className="flex flex-wrap gap-2">
            {skills.tools.map((skill) => (
              <Badge key={skill} variant="outline" className="text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </Card>

        <Card className="p-6 md:col-span-2">
          <h3 className="mb-4 text-xl font-semibold">{t.skills.focus}</h3>
          <div className="flex flex-wrap gap-2">
            {skills.focus.map((skill) => (
              <Badge key={skill} className="text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
