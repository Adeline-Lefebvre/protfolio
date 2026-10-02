# Stratégie SEO & GEO — adelinelefebvre.com

Synthèse des 4 audits (technique, contenu/mots-clés, GEO/LLM, off-page) du 28/07/2026.
Base : France (mis à jour le 2 octobre 2026, auparavant Espagne), service partout en Europe. Deux offres : dev freelance (international) + sites de proximité (Europe francophone/hispanophone/anglophone).

## 1. Déjà fait dans le repo (commits du 28/07)
- Rendu statique restauré (régression `headers()` annulée), les 6 URLs repassent en SSG.
- Schema localisé : Person (base France, `knowsLanguage`, `areaServed` Europe, `contactPoint`, `@id`) + WebSite.
- `/local` : JSON-LD FAQPage + Service/Offer (500/900 €).
- robots.txt AI-friendly (GPTBot, ClaudeBot, PerplexityBot… autorisés ; Bytespider bloqué).
- hreflang unifiés (en/fr/es + x-default) sitemap ⇄ pages.
- Meta descriptions raccourcies en phrase-réponse.
- `public/llms.txt`.
- Passe mots-clés sur les titres (H1/H2/meta) des 2 pages × 3 langues.

## 2. Cartographie mots-clés cibles

**FR — /local (France + francophonie)** : création site internet association · site web pas cher association · site vitrine artisan · création site commerce de proximité · site association sans abonnement · prix site internet association · développeuse web freelance
**FR — home** : développeuse fullstack freelance · développeur web freelance Next.js · intégration IA Claude API freelance · React TypeScript freelance · headless CMS sur-mesure
**ES — /local (Espagne)** : diseño web para asociaciones · diseño web para autónomos · página web comercios locales · diseño web sin cuota mensual · web para ONG · precio página web autónomos
**ES — home** : desarrolladora fullstack freelance · desarrollador web Next.js freelance · integración de IA · desarrollo web a medida
**EN — home (long-tail qualifié)** : freelance fullstack developer for hire · Next.js developer for hire · AI integration developer (Claude API) · freelance headless CMS developer

## 3. Hors-site — à faire par Adeline (je ne peux pas)

### Mesure (à installer en premier)
- Google Search Console : propriété **domaine** (couvre les 3 langues), soumettre le sitemap, vérifier le rapport hreflang après 2-4 semaines.
- Bing Webmaster Tools (import depuis GSC) + IndexNow (alimente Copilot/ChatGPT).
- Rank tracking léger sur 10-15 mots-clés par langue/offre.

### Autorité (meilleur ratio effort/impact)
- **Backlinks « réalisé par »** depuis les sites clients (Desert Leaves, Pignon Libre, LIME Search, Rootyne) : footer ou mentions légales, ancre « Site réalisé par Adeline Lefebvre » → adelinelefebvre.com. Leur envoyer le snippet HTML prêt.
- LinkedIn FR/EN optimisé (titre « Développeuse Fullstack Freelance Next.js/IA · FR/EN/ES · France », section Sélection avec liens, URL propre) + 3-5 recommandations clients.
- Malt (priorité France), puis Codeur/Freework. International : Contra (gratuit, bien indexé).
- Google Business Profile en **Service Area Business** (adresse masquée, zone d'intervention déclarée). Ne jamais déclarer d'adresse fausse.
- Ajouter chaque nouveau profil au `sameAs` du schema (`components/structured-data.tsx`).

### GEO / citations LLM
- Requêtes-tests récurrentes dans ChatGPT/Claude/Perplexity/Gemini (3 langues), noter si citée.
- Suivi des user-agents IA (OAI-SearchBot, PerplexityBot, ClaudeBot, ChatGPT-User) dans les logs.
- Profils hors-site cohérents au mot près (même nom, intitulé, localisation) : c'est ce qui « prouve » l'entité aux LLM.

### Plan 30 / 60 / 90 jours (~2-3 h/semaine)
- **0-30** : GSC + Bing + IndexNow · LinkedIn à fond · demandes de backlink aux 4 clients · rank tracking.
- **31-60** : Malt 100 % + 1 autre plateforme · Google Business (SAB) · recommandations + 1er avis · 5 citations/annuaires ciblés pour /local.
- **61-90** : 1er article Hashnode (Next.js + Claude API) cross-posté dev.to (canonical) · 1 profil international · 1re revue KPI trimestrielle.

## 4. Médias à produire (je ne peux pas générer d'image)
- **og-image dédiée à /local** (1200×630) sur le thème « sites pour assos/commerces » (la page réutilise l'og-image « developer » de la home).
- Ré-encoder les JPG > 300 Ko (`sds.jpg`, `rootyne-1.jpg`, `dl-*.jpg`) en webp/AVIF, recadrer `profile-photo.jpg` (~500 px).
- `poster` + ratio CSS réservé sur les `.webm` de projets (anti-CLS).

## 5. Chantier contenu différé (à cadrer séparément)
- Landing pages par intention sous /local : `/local/site-association`, `/local/site-artisan`, `/local/site-ong` (+ ES `web-asociaciones`, `web-autonomos`), chacune H1 dédié + FAQ + tarif + cas client.
- Études de cas indexables `/[locale]/projets/[slug]` (Rootyne, LIME, Desert Leaves…).
- Mini-blog /local : « combien coûte un site asso », « site avec ou sans abonnement », « cuánto cuesta una web autónomos » (intention informationnelle amont).
- FAQ orientée recrutement sur la home (questions type « fait-elle du Next.js en freelance ? », « travaille-t-elle en anglais/espagnol ? ») + balisage FAQPage.
