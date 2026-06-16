# Refonte portfolio — Design (2026-06-16)

## Boussole stratégique

**Positionnement : hybride produit + IA assumé.**
Fil rouge : *« Je transforme un besoin business en produit qui tourne — du site sur-mesure à l'app IA. »*

Trois couches empilées dans le bon ordre :
- **L'IA attire et différencie** → bloc dédié + Rootyne en vitrine (chaud + prouvable).
- **Le produit rassure et crédibilise** → product mindset (Station F, business school), produits réels en prod, users payants.
- **Le CMS / maintenance fait rentrer le cash** → présenté comme une offre claire (missions ponctuelles + retainer type Lime Search).

Ce qui différencie Adeline : la combinaison rare *product mindset + double compétence CMS/fullstack + produits réels shippés avec IA et utilisateurs payants*. Un dev pur ne comprend pas le business ; un profil business ne code pas Rootyne.

## Problème résolu

Le portfolio live raconte une positioning d'il y a un an (GreenTech/EdTech/AR, projets de certif et de résidence) déconnectée du Malt/LinkedIn actuel (freelance à louer : WordPress custom, Craft, Next.js, IA, maintenance). Un client venu du Malt ne voyait aucun des projets freelance récents. La refonte réaligne le site sur la réalité commerciale.

## Approche : 2 phases

- **Phase 1 (cette itération)** — contenu + palette. Réécriture complète des textes pour la nouvelle positioning, nouvelle structure, palette solaire. Mise en ligne rapide, faible risque.
- **Phase 2 (plus tard)** — direction artistique (typo signature, micro-interactions, grille) à la Kevin Leclerc.

## Nouvelle structure de page

1. **Hero** — pitch hybride, badge dispo, 2 CTA (« Discutons » / « Voir mes projets »).
2. **Barre de logos clients** *(nouveau)* — LIME Search, Code Create, Desert Leaves, SDS Lingo.
3. **Offres / Ce que je fais** *(nouveau, cœur)* — 3 cartes :
   - Apps & intégrations IA (Next.js + Claude/Mistral) — pointe de lance
   - Sites & CMS sur-mesure (WordPress custom, Craft, headless)
   - Maintenance & évolutions (retainer, modèle Lime Search)
4. **Projets phares** — réels, IA en premier.
5. **About** — recentré product mindset + parcours + chiffres (6 pays, users payants).
6. **Témoignage** *(nouveau)* — reco de Romain Quellec.
7. **Contact** — inchangé (déjà bien).

Section « Compétences » en grille de badges : supprimée (générique, peu lue). Les compétences sont réparties dans les offres et projets.

## Vitrine projets (médias prêts dans `public/`)

| Ordre | Projet | Média | Angle |
|---|---|---|---|
| 1 | Rootyne | `rootyne-1..4.jpg` (carrousel) | IA, prod, santé |
| 2 | Desert Leaves | `dl-1..5.jpg` (carrousel) | projet complet from scratch |
| 3 | LIME Search | `lime.webm` | Craft CMS + mission récurrente |
| 4 | Bulbus | `bulbus.webm` | produit perso, 37 users payants |
| 5 | SDS Lingo | `sds.jpg` | Next.js multilingue |
| 6 | Club Fifty Five | `c55.webm` | WordPress/Elementor custom |

Repli « Autres expérimentations » en bas : Pepstery (AR, `pepstery.webm`) + mention crédibilité Cubyn (80+ services). HappyCaw : retiré.

## Palette solaire (« Terracotta Rootyne »)

Cohérence directe avec le produit Rootyne.

| Rôle | Hex | Usage |
|---|---|---|
| fond | `#FBF7F0` | crème cassé |
| texte | `#2A2A28` | encre douce |
| primary | `#D97757` | terracotta (boutons, liens, CTA) |
| accent | `#2F4A3C` | vert sapin (sérieux/pro, titres d'accent) |
| badge | `#E8A03D` | ambre (badges, highlights) |

Open question : **dark mode**. L'identité solaire est fondamentalement claire (Rootyne est light-only). À trancher : (a) supprimer le dark mode, (b) garder un dark mode chaud dérivé. Reco : supprimer en phase 1 pour un message visuel net, réintroduire en phase 2 si vraiment voulu.

## Données factuelles à intégrer

- Bulbus : 37 utilisateurs payants, ~200 téléchargements, discussions B2B écoles d'herboristerie.
- Produits en prod servant de vrais utilisateurs dans 6 pays.
- Cubyn : 80+ microservices, Kubernetes/GCP.
- Rootyne : pipeline IA Claude + Mistral, anonymisation, chiffrement AES-256-GCM, HDS-compliant.
- Reco Romain Quellec (Directeur technique) : « développeuse sérieuse, autonome, super vision technique… les yeux fermés ».

## Quick wins techniques

- Renommer le projet npm (`my-v0-project` → `portfolio`).
- Garder i18n FR/EN/ES, structured data, sitemap, lazy-load vidéos (fondations saines).

## Hors scope phase 1

Direction artistique complète, dark mode chaud, refonte de la nav, blog/études de cas longues.
