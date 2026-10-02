"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Github, Linkedin, Mail, Phone, Menu, X } from "lucide-react";
import { LanguageSelector } from "@/components/language-selector";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { getTranslations } from "@/lib/translations";
import { useActiveSection } from "@/hooks/use-active-section";

export type Section = { id: string; label: string };

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

// Retour vers le portfolio, affiché uniquement depuis /local. L'ancien contrôle
// segmenté à deux onglets a été retiré : /local se diffuse par lien direct, la
// home la référence déjà dans la section Offres, et les deux pastilles fixes
// finissaient par se chevaucher sur petit écran (le libellé espagnol dépassait
// sous le sélecteur de langue dès 430px).
function BackToPortfolio({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      className={`fixed left-4 top-4 z-50 flex min-h-11 items-center gap-1.5 rounded-full border border-border/50 bg-background/70 px-4 text-sm font-medium text-muted-foreground backdrop-blur transition-colors outline-none active:bg-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:left-6 md:top-6 md:min-h-9 hover:text-foreground`}
    >
      <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden="true" />
      Portfolio
    </a>
  );
}

function SectionRail({ sections }: { sections: Section[] }) {
  const active = useActiveSection(sections.map((s) => s.id));
  return (
    <nav
      aria-label="Sections"
      className="fixed left-6 top-24 z-40 hidden 2xl:block"
    >
      <ul className="flex flex-col gap-4 rounded-2xl border border-border/40 bg-background/80 p-4 backdrop-blur">
        {sections.map((s) => {
          const isActive = active === s.id;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={isActive ? "location" : undefined}
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
    <div className="fixed bottom-6 right-6 z-40 hidden 2xl:flex">
      <div className="flex flex-col items-center gap-1.5 rounded-full border border-white/10 bg-accent/85 p-2 text-white shadow-lg backdrop-blur">
        {SOCIALS.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`flex h-9 w-9 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-background/15 hover:text-white ${FOCUS}`}
          >
            <Icon className="h-5 w-5" />
          </a>
        ))}
        <div className="my-1 h-px w-5 bg-white/25" />
        <LanguageSelector
          side="left"
          align="end"
          className="text-white/80 hover:bg-background/15 hover:text-white focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </div>
    </div>
  );
}

function MobileMenu({
  sections,
  menuLabel,
}: {
  sections: Section[];
  menuLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const contact = sections.find((s) => s.id === "contact");

  useEffect(() => {
    if (!open) return;
    const container = containerRef.current;

    // Le focus entre dans le panneau à l'ouverture, ce qui rend le cycle de
    // tabulation ci-dessous utile, et revient sur le bouton à la fermeture.
    panelRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !container) return;
      const focusables = container.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    // Un appui hors du bloc ferme le menu. pointerdown couvre aussi le début
    // d'un geste de scroll, donc le panneau ne reste pas flotter au-dessus
    // d'une page qui défile.
    const onPointerDown = (e: PointerEvent) => {
      if (!container?.contains(e.target as Node)) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);

    // Verrouillage du scroll. La compensation de largeur évite le saut de mise
    // en page là où une scrollbar occupe de la place (sans effet sur mobile,
    // où elle est en superposition).
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    const prevOverflow = document.body.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;
    document.body.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPaddingRight;
    };
  }, [open]);

  return (
    <nav
      ref={containerRef}
      aria-label={menuLabel}
      className="fixed right-4 top-4 z-50 2xl:hidden md:right-6 md:top-6"
    >
      <div className="flex items-center gap-1 rounded-full border border-border/50 bg-background/70 p-1 backdrop-blur">
        <LanguageSelector />
        <Button
          ref={triggerRef}
          variant="ghost"
          size="icon"
          className="rounded-full"
          aria-label={menuLabel}
          aria-expanded={open}
          aria-controls="mobile-menu-panel"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
      {open && (
        <div
          ref={panelRef}
          id="mobile-menu-panel"
          tabIndex={-1}
          className="mt-2 max-h-[calc(100svh-5.5rem)] w-56 overflow-y-auto overscroll-contain rounded-2xl border border-border/50 bg-background/95 p-3 shadow-lg outline-none backdrop-blur"
        >
          {contact && (
            <a
              href={`#${contact.id}`}
              onClick={() => setOpen(false)}
              className="mb-3 flex min-h-11 items-center justify-center rounded-full bg-primary px-4 text-center text-sm font-semibold text-primary-foreground transition-opacity active:opacity-80"
            >
              {contact.label}
            </a>
          )}
          <ul className="flex flex-col gap-1">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center rounded-md px-3 text-base font-medium text-muted-foreground transition-colors active:bg-secondary active:text-foreground hover:bg-secondary/50 hover:text-foreground"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="my-2 h-px bg-border" />
          <div className="flex justify-between">
            {SOCIALS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full text-muted-foreground transition-colors active:bg-secondary active:text-foreground hover:bg-secondary hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export function SiteNavShell({
  sections,
  menuLabel,
  back,
}: {
  sections: Section[];
  menuLabel: string;
  back?: { href: string; label: string };
}) {
  return (
    <>
      {back && <BackToPortfolio href={back.href} label={back.label} />}
      <SectionRail sections={sections} />
      <SocialDock />
      <MobileMenu sections={sections} menuLabel={menuLabel} />
    </>
  );
}

export function HomeNav() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const sections: Section[] = [
    { id: "projects", label: t.nav.projects },
    { id: "services", label: t.nav.services },
    { id: "testimonials", label: t.testimonial.eyebrow },
    { id: "about", label: t.nav.about },
    { id: "contact", label: t.nav.contact },
  ];
  return <SiteNavShell sections={sections} menuLabel={t.nav.menu} />;
}

// LocalNav vit dans son propre module (./local-nav) : tant qu'elle etait ici,
// importer HomeNav depuis la home tirait aussi getLocalContent, et le contenu
// complet de /local dans les trois langues se retrouvait dans le bundle d'une
// page qui ne l'affiche jamais.
