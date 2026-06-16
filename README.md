# Portfolio — Adeline Lefebvre

Personal portfolio of **Adeline Lefebvre**, freelance fullstack developer.
From custom sites to AI apps — Next.js, AI integrations (Claude, Mistral),
custom WordPress & Craft CMS, with long-term maintenance.

🌐 **Live:** [adelinelefebvre.com](https://adelinelefebvre.com)

## Stack

- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS v4, shadcn/ui (Radix)
- **Fonts:** Fraunces (display) + Inter (body)
- **i18n:** custom middleware, 3 locales (EN / FR / ES) with hreflang
- **Analytics:** Vercel Analytics
- **Deploy:** Vercel

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm start        # serve the production build
```

## Structure

- `app/[locale]/` — localized pages (en / fr / es)
- `components/` — sections (hero, services, projects, testimonials…) and `ui/`
- `lib/translations.ts` — all copy, per locale
- `lib/i18n-config.ts` — locales config
- `public/` — media (project screenshots & demo videos)

## SEO

Sitemap, robots, JSON-LD structured data, per-locale metadata and hreflang
are generated from `app/sitemap.ts`, `app/robots.ts` and `lib/metadata.ts`.
