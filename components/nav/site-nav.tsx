"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, Phone, Menu, X } from "lucide-react";
import { LanguageSelector } from "@/components/language-selector";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { getTranslations } from "@/lib/translations";
import { getLocalContent } from "@/lib/local-content";
import { useActiveSection } from "@/hooks/use-active-section";

type Section = { id: string; label: string };

const SOCIALS = [
  { href: "https://github.com/Adeline-Lefebvre", label: "GitHub", Icon: Github },
  {
    href: "https://www.linkedin.com/in/adeline-lefebvre-600b46aa/",
    label: "LinkedIn",
    Icon: Linkedin,
  },
  { href: "mailto:adeline.lefe@gmail.com", label: "Email", Icon: Mail },
  {
    href: "https://calendly.com/adeline-lefebvre/15min",
    label: "Prendre rendez-vous",
    Icon: Phone,
  },
] as const;

const FOCUS =
  "rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

function PageTabs({
  homeHref,
  localHref,
  localLabel,
  onLocal,
}: {
  homeHref: string;
  localHref: string;
  localLabel: string;
  onLocal: boolean;
}) {
  const tab =
    "px-4 py-2 text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring";
  const activeCls = "bg-primary text-primary-foreground";
  const idleCls = "text-muted-foreground hover:text-foreground";
  return (
    <div className="fixed left-6 top-6 z-50 flex overflow-hidden rounded-full border border-border/50 bg-background/70 backdrop-blur">
      <a
        href={homeHref}
        aria-current={!onLocal ? "page" : undefined}
        className={`${tab} ${!onLocal ? activeCls : idleCls}`}
      >
        Portfolio
      </a>
      <a
        href={localHref}
        aria-current={onLocal ? "page" : undefined}
        className={`${tab} ${onLocal ? activeCls : idleCls}`}
      >
        {localLabel}
      </a>
    </div>
  );
}

function SectionRail({ sections }: { sections: Section[] }) {
  const active = useActiveSection(sections.map((s) => s.id));
  return (
    <nav
      aria-label="Sections"
      className="fixed left-6 top-24 z-40 hidden xl:block"
    >
      <ul className="flex flex-col gap-4">
        {sections.map((s) => {
          const isActive = active === s.id;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`group flex items-center gap-3 ${FOCUS}`}
              >
                <span
                  className={`w-0.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? "h-8 bg-primary"
                      : "h-4 bg-border group-hover:h-6 group-hover:bg-muted-foreground"
                  }`}
                />
                <span
                  className={`transition-all duration-300 ${
                    isActive
                      ? "text-base font-semibold text-foreground"
                      : "text-sm font-medium text-muted-foreground group-hover:text-foreground"
                  }`}
                >
                  {s.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function SocialDock() {
  return (
    <div className="fixed right-6 top-6 z-40 hidden xl:flex">
      <div className="flex flex-col items-center gap-1.5 rounded-full border border-border/50 bg-background/70 p-2 backdrop-blur">
        {SOCIALS.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground ${FOCUS}`}
          >
            <Icon className="h-5 w-5" />
          </a>
        ))}
        <div className="my-1 h-px w-5 bg-border" />
        <LanguageSelector />
      </div>
    </div>
  );
}

function MobileMenu({ sections }: { sections: Section[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed right-6 top-6 z-50 xl:hidden">
      <div className="flex items-center gap-1 rounded-full border border-border/50 bg-background/70 p-1 backdrop-blur">
        <LanguageSelector />
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
      {open && (
        <div className="mt-2 w-56 rounded-2xl border border-border/50 bg-background/95 p-3 shadow-lg backdrop-blur">
          <ul className="flex flex-col">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary/50 hover:text-foreground"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="my-2 h-px bg-border" />
          <div className="flex justify-around px-1">
            {SOCIALS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function SiteNavShell({
  sections,
  onLocal,
  localLabel,
  homeHref,
  localHref,
}: {
  sections: Section[];
  onLocal: boolean;
  localLabel: string;
  homeHref: string;
  localHref: string;
}) {
  return (
    <>
      <PageTabs
        homeHref={homeHref}
        localHref={localHref}
        localLabel={localLabel}
        onLocal={onLocal}
      />
      <SectionRail sections={sections} />
      <SocialDock />
      <MobileMenu sections={sections} />
    </>
  );
}

export function HomeNav() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const sections: Section[] = [
    { id: "services", label: t.nav.services },
    { id: "projects", label: t.nav.projects },
    { id: "about", label: t.nav.about },
    { id: "testimonials", label: t.testimonial.eyebrow },
    { id: "contact", label: t.nav.contact },
  ];
  return (
    <SiteNavShell
      sections={sections}
      onLocal={false}
      localLabel={t.nav.local}
      homeHref={`/${language}`}
      localHref={`/${language}/local`}
    />
  );
}

export function LocalNav() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const c = getLocalContent(language);
  const sections: Section[] = [
    { id: "forwho", label: c.eyebrows.forWho },
    { id: "pricing", label: c.eyebrows.pricing },
    { id: "work", label: c.eyebrows.work },
    { id: "testimonials", label: t.testimonial.eyebrow },
    { id: "contact", label: c.eyebrows.contact },
  ];
  return (
    <SiteNavShell
      sections={sections}
      onLocal={true}
      localLabel={t.nav.local}
      homeHref={`/${language}`}
      localHref={`/${language}/local`}
    />
  );
}
