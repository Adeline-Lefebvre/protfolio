# Offre « sites pour les acteurs engagés et de proximité » — design & stratégie

*Note de brainstorming — 27 juillet 2026*

Point de départ : après avoir adoré construire le site de **Pignon Libre**, l'idée
d'en faire une offre récurrente. Sites Next.js statiques + **Sveltia CMS**
(open-source, gratuit à vie, éditable par un non-technicien). Ce document fige la
réflexion ; la rédaction et le design de la page se feront dans une session dédiée.

### Cible : l'ADN, pas le statut juridique
La ligne de partage n'est **pas** « asso vs entreprise » mais l'**ADN** :

> **Les petites structures engagées et de proximité** — assos, collectifs,
> artisans, commerces locaux, acteurs de l'ESS et de l'économie du quotidien.

À taille humaine, ancrées dans leur territoire, souvent porteuses de valeurs.
Exemples validés : un **atelier de réparation de vélo** (économie circulaire,
anti-gaspi — l'ADN même de Pignon Libre), un **traiteur qui fait ses plats maison
chaque jour** (circuit court, artisanat). Peu importe qu'ils soient asso loi 1901
ou micro-entreprise.

**Ce qu'on n'ouvre PAS** : « toutes les petites entreprises » (dentiste, agence
immo, consultant…). Ce serait tomber dans un marché saturé et banalisé où l'on se
fait comparer au prix — et **perdre l'âme ESS**, qui est l'avantage défendable et
le second rôle de l'offre (aimant à valeurs). On élargit **la définition, pas la
porte**.

Le pitch (§2) tient à l'identique pour tous : un atelier vélo ne veut pas plus
payer une rente Wix à vie qu'une trésorière d'asso.

**Géographie : profil international, pas franco-français.** Adeline vit en
**Espagne** et a des **clients néerlandais** — l'offre ne doit pas se cadrer
"freelance française pour assos françaises", ce serait contredire son vrai profil.
Les valeurs voyagent (*economía social* en Espagne, *sociale/circulaire economie*
aux Pays-Bas ; le pitch autonomie est universel). Le RGPD est **européen** (FR, ES,
NL), donc la partie juridique reste cohérente partout.

⚠️ **Garder le message basé valeurs, pas basé institutions françaises.** Les
références **franco-françaises** (loi 1901, **HelloAsso**, France Bénévolat,
domaine `.fr`) restent des *exemples locaux*, jamais le socle du pitch — sinon la
version internationale casse. Prévoir des équivalents/formulations génériques.

---

## 1. La décision de fond : Version B, pas Version A

Deux façons très différentes de mener cette idée :

- **Version A — la petite usine à sites.** Devenir gérante d'un service
  productisé à volume. Le métier devient la vente, l'onboarding et le SAV ; le
  code tombe à ~20 % du temps. C'est le chemin vers « 6 000 €/mois », mais c'est
  un métier de gérante d'agence, pas de dev.
- **Version B — le canal ESS qui nourrit.** Rester freelance dev premium
  (positionnement actuel, TJM 400-500 €) et faire **1 à 2 sites/mois**, choisis,
  qui font kiffer. Complément de revenu + affirmation de valeurs.

**Choix retenu : B.** Raison décisive : la capacité est déjà prise (Rootyne,
Bulbus, missions possibles Femmie & Rosa, missions premium). La Version A ne
s'ajoute pas — elle *remplace* un travail aimé et bien payé par un métier de
commerciale à panier moyen 500 €. Ce serait un downgrade.

**Conséquences de B :**
- Pas besoin de volume → on peut être plus artisanale, alléger la productisation.
- La séparation de marque n'est plus nécessaire (voir §4) : l'offre *renforce*
  l'identité au lieu de la diluer.

### Le rôle de l'offre (pour cadrer les arbitrages)
1. **Complément de revenu** entre deux missions.
2. **Affirmation de valeurs / aimant à projets ESS.**

Ce n'est pas un business à scaler. Toute décision qui trahit la simplicité ou
ajoute une charge d'entretien lourde est à écarter.

---

## 2. Le pitch : l'autonomie (anti-Wix, anti-WordPress)

Le cœur du message, profondément aligné ESS :

> **« Je vous rends autonomes. Le site est à vous, personne ne vous tient en
> otage, et il ne vous coûte plus rien à faire tourner. »**

Différence réelle vs la concurrence — c'est *tout* l'argumentaire :

- **Wix / Squarespace** : 13-29 €/mois **pour toujours**. Le jour où on arrête de
  payer, **le site disparaît**. On ne possède rien : c'est une location.
- **Ce modèle** : site statique, hébergé **sans frais dans un usage normal**
  (Cloudflare Pages / Netlify free tier — conçu pour ça). Nom de domaine
  ~12 €/**an** payé en direct **à leur nom**. Le **contenu et le domaine leur
  appartiennent sans condition** (repo Git + contenu Sveltia). On arrête de
  travailler ensemble ? Le site continue de tourner.

Valeurs portées : autonomie, pas de rente, pas de dépendance. Aucun Wix ne peut
le dire.

> ⚠️ **Deux sur-promesses à ne PAS formuler telles quelles** (voir §7) :
> - **« Gratuit à vie »** — faux : le free tier des hébergeurs et les quotas de
>   formulaires (Netlify Forms = 100/mois) peuvent changer ou sauter au pire
>   moment (event à 300 inscrits). Dire *« sans frais d'hébergement dans un usage
>   normal, hébergeur tiers dont les conditions peuvent évoluer »*.
> - **« Le site vous appartient »** (au sens autonomie totale) — demi-fiction pour
>   un non-technicien qui ne sait ni build, ni déployer, ni migrer un repo Git.
>   Séparer honnêtement : *contenu + domaine = à vous sans condition* (ça suffit
>   déjà à battre Wix) vs *infra technique = à vous, mais évolutions par un dev*.

---

## 3. Tarifs

Principe : **socle + modules**, jamais de tarif unique (qui fait perdre de
l'argent sur les sites riches ou fuir la petite asso). Mais pas de menu à
12 lignes non plus — la simplicité est une valeur.

| Offre | Prix | Contenu |
|---|---|---|
| **Essentiel** | **500 €** | Une belle page unique. = aussi le **tarif solidaire** des toutes petites structures. |
| **Le site** | **900 €** | Plusieurs pages + **blog / actualités inclus**. Le cœur de l'offre. |
| **Modules** (le dynamique lourd) | **+250 à 400 €** chacun | Annonces / catalogue, agenda d'événements avec inscriptions, etc. |

**Pourquoi 500 € plancher et pas 300 €** : le code n'est pas ce qui coûte. Le
**coût fixe par projet** (appel de cadrage, collecte de contenu, domaine,
déploiement, A/R, onboarding) ne diminue pas avec la taille — ~1,5 jour de temps
réel quoi qu'il arrive. À 300 €, ça met sous le plancher freelance. Une offre
injuste envers soi ne tient pas dans le temps.

**Pourquoi le blog est inclus dans les 900 €** : une asso avec un vrai site
voudra presque toujours publier ses actus ; c'est trivial dans Sveltia ; l'inclure
rend l'offre plus généreuse et lisible. Les modules payants ne gardent que le
*lourd* (plus de champs, plus de support).

**Ce que le prix des modules facture vraiment** : pas le code (quasi gratuit avec
l'IA) mais le **surcroît d'onboarding et de support** (former à publier, gérer
plus de contenu).

Communication cible sur la page : *« 900 € le site. Besoin d'annonces, d'un
agenda ? +X €. »* Trois lignes, lisible, honnête. **Tarifs affichés** — rarissime
et très rassurant pour une asso.

### Récurrent : optionnel, annuel, jamais imposé
Pas d'abonnement mensuel « à vie » (ce que ce public fuit — engagement flou,
mauvaise visibilité budgétaire). À la place :

> **Forfait tranquillité — ~150 €/an, renouvelable, résiliable.** Payé une fois
> l'an → colle au cycle budgétaire des assos (subventions, AG).

⚠️ **À borner impérativement** (150 €/an ≈ 2 h au TJM → une seule montée de
version qui casse le build rend l'année déficitaire, + risque d'anti-sélection :
les plus demandeuses le prennent). Définir noir sur blanc :
- **Inclus** : jusqu'à **X modifs de contenu/an** + réponses aux questions sous
  Y jours ouvrés.
- **Hors forfait, devisé à part** : montées de version, mises à jour techniques/
  sécurité, évolutions de fonctionnalités.

- Celles qui veulent gérer seules : **rien**, elles sont autonomes.
- Celles qui veulent : forfait annuel **ou** modifs facturées à l'acte.

En B, le **one-shot est le vrai revenu** ; le forfait est un bonus sans pression
commerciale. (En cumul, quelques dizaines de sites × forfait = petit socle passif
qui scale sans vendre plus — mais ce n'est pas le but principal.)

---

## 4. Format & marque

Pas de marque / site séparé (c'était la reco pour la Version A, pour protéger le
premium). En B, on veut l'inverse : que l'offre **renforce l'identité**.

**Format retenu : une landing page dédiée, sous le domaine du portfolio.**
Route Next.js autonome avec sa propre identité visuelle — pas une section noyée
dans la home.

### Faut-il un nom ? Non — pas maintenant, peut-être jamais.
Dans l'ESS, la confiance = **la personne**. Les gens achètent à *Adeline, la dev
qui kiffe l'ESS et a fait Pignon Libre*, pas à une entité tierce. Un nom d'offre
mettrait une distance là où le nom propre porte déjà l'histoire et les valeurs.
Ne pas nommer = plus simple + aligné B.

Titre de page suffisant :
> **Des sites pour les acteurs engagés et de proximité — par Adeline Lefebvre**
> *Rapides, à vous, sans abonnement.*

Un nom redeviendra utile **seulement** en cas de passage en 3b (domaine dédié)
avec envie d'une identité partageable détachée du nom propre. Shortlist gardée
pour ce jour-là : **Belle Toile** (toile = site + voile, « prendre le bon vent »),
Champ Libre, Colibri, Racines. À décider à ce moment-là, sans pression.

### URL : 3a maintenant → 3b plus tard (zéro regret)
La cible est élargie (voir §1) *et* internationale (§4 langues) → le slug doit être
**neutre et trilingue**, pas un mot français comme `/proximite`.

**Slug retenu : `/local`** — s'écrit et se comprend à l'identique en **FR / EN /
ES**, et tombe pile sur le message (proximité, ancrage territorial). Un seul nom de
dossier partagé par les 3 locales → aucune plomberie de slug localisé. URLs :
`/fr/local`, `/en/local`, `/es/local`. (Alternatives : `/local-web`, `/nearby`.)

- **3a (maintenant)** : `adelinelefebvre.com/<locale>/local`. Coût 0 €, aucun
  engagement.
- **3b (plus tard)** : acheter un domaine (~12 €/an) et le faire **pointer vers le
  même déploiement** (règle de rewrite). URL propre et partageable, **toujours un
  seul site à maintenir**. Le domaine portera alors l'identité → le slug devient
  secondaire (ce choix n'est donc pas définitif).

**Garde-fous techniques pour un switch indolore :**
- **Liens internes en relatif** — jamais l'URL absolue codée en dur, pour que la
  page marche aussi bien sous son chemin qu'à la racine d'un domaine dédié.
- **Route autonome** avec identité visuelle propre.

### Langues & i18n (déjà en place)
Langues de travail d'Adeline (celles où elle peut *accompagner* un client de bout
en bout) : **français, anglais, espagnol**. Clients néerlandais → gérés en
**anglais**, donc **pas de version NL** nécessaire. Ce trio couvre son vrai
périmètre (base FR, international EN, Espagne ES).

Le portfolio est **déjà** internationalisé — la page réutilise l'i18n existant,
**aucune plomberie à ajouter** :
- Locales `en / fr / es`, défaut `en` — `lib/i18n-config.ts`.
- Routage `app/[locale]/…` → URLs `/(en|fr|es)/proximite`. Le sélecteur de langue
  existe déjà (`components/language-selector.tsx`).
- Dictionnaire dans `lib/translations.ts`.
- **Conséquence pour la session B** : rédiger le contenu **dans les 3 langues dès
  le départ**, pas juste en FR. Ajouter une langue plus tard = ajouter des chaînes
  au dictionnaire, pas reconstruire.

---

## 5. Structure de la landing page

Ordre validé (à détailler en session B : message, ton, visuel de chaque section) :

1. **Hero** — la promesse en une phrase + CTA « Parlons de votre projet ».
   *Un beau site rapide pour votre asso, qui vous appartient, sans abonnement.*
2. **Pour qui / le problème** — empathie, en nommant les deux publics : *« Vous
   êtes une asso, un collectif, un artisan, un commerce de proximité. Pas 3 000 €
   pour une agence, ni envie d'un WordPress usine à gaz. »*
3. **Ce qui vous rend autonome** — les 3 promesses : **rapide** / **à vous** (pas
   de rente) / **hébergement gratuit à vie**. L'anti-Wix.
4. **Ce que vous obtenez concrètement** — design sur-mesure, mobile, CMS Sveltia
   (tout modifier soi-même), référencement de base. *Nuance commerces* : un
   artisan/commerce voudra parfois du **local (fiche Google, avis, SEO de
   proximité)** là où une asso s'en fiche → une phrase ou un petit module dédié,
   rien de lourd.
5. **Les tarifs** — 500 / 900 / modules + forfait tranquillité optionnel.
   Transparents.
6. **Comment ça se passe** — process en 3-4 étapes. **Étape 1 = formulaire de
   contenu** (règle le « tueur silencieux » de la collecte + rassure).
7. **Un exemple** — Pignon Libre, étude de cas courte (quand le projet sera fini).
8. **Qui je suis** — Adeline, visage, engagement ESS. La confiance.
9. **FAQ** — objections : *« et si je veux changer un texte ? »*, *« et si vous
   arrêtez ? »*, *« c'est vraiment gratuit ? »*, *« je suis pas du tout techos… »*.
10. **CTA final** — contact / prendre rendez-vous.

---

## 6bis. Risques & garde-fous (issus d'une review adversariale)

La note gagne la bataille du *positionnement* mais doit combler des trous
d'*exécution et de risque*. Rien ne condamne le projet — ce sont des garde-fous.

### 🔴 À régler AVANT de vendre le 1er site
- **Juridique / responsabilité** : en micro-entreprise = responsabilité
  illimitée sur les biens propres. Rédiger **CGV + contrat type** (périmètre,
  **acompte 30-40 % à la commande**, garantie bugs bornée ex. 30 j après
  livraison, exclusion de responsabilité sur les hébergeurs tiers, contenu du
  forfait annuel). Souscrire une **RC Pro** (~100-200 €/an) — non négociable dès
  qu'on manipule inscriptions / données d'adhérents.
- **RGPD** : dès qu'il y a un formulaire (inscription, annuaire), il y a
  traitement de données. Un site statique n'a pas de backend → les données
  passent par un **tiers** (préférer un service hébergé UE). Livrer avec chaque
  site : **mentions légales + politique de confidentialité** ; clause précisant
  que **l'asso est responsable de traitement**.
- **Reformuler les 2 sur-promesses** (voir encadré §2) : « gratuit à vie » et
  « le site vous appartient ».

### 🟠 À cadrer avant de dépasser 3-4 sites
- **Forfait 150 €/an** : le borner (voir §3) sinon déficitaire sur les plus
  demandeurs.
- **Dépendance à Sveltia** (projet open-source quasi mono-mainteneur) = risque
  systémique sur tout le parc. Identifier un **plan B CMS** (Decap, Tina) et ne
  jamais promettre au client une pérennité que l'upstream ne garantit pas.
- **Auth & accès Sveltia** : trancher l'archi — compte GitHub du client (vraie
  autonomie, onboarding lourd) vs auth via infra perso (simple, mais casse la
  promesse de propriété). **Runbook accès** : ajouter/retirer un éditeur quand le
  bureau de l'asso tourne (turnover associatif énorme → support récurrent garanti).
- **Procédure de sortie / passation** (transfert repo + hébergeur + domaine +
  export contenu), documentée une fois en Loom. C'est ce qui *prouve* le pitch
  anti-otage.

### 🟡 Frictions & cohérence
- **Délai « 10 j »** incompatible avec des missions premium en parallèle →
  remplacer par « selon disponibilité, planning annoncé à la commande ».
- **Module inscriptions/billetterie** : un site statique ne le fait pas nativement.
  S'appuyer sur **HelloAsso** (standard associatif français, gratuit pour l'asso)
  plutôt que de facturer une usine à gaz fragile. Repositionner en « intégration
  propre de HelloAsso ».
- **Domaine « à leur nom »** : risque d'expiration au turnover (mail du bénévole
  mort). Consigne écrite : registrar recommandé, **renouvellement auto activé**,
  contact = **adresse générique de l'asso**, moi en contact technique secondaire.
- **Trésorerie** : les assos paient sur décision de bureau/CA, souvent en retard.
  L'acompte à la commande (déjà dans les CGV ci-dessus) couvre ce risque.

### Ajout au test de marché
Sur les 5 premiers sites, **mesurer le coût de support réel post-livraison**
(heures de SAV non facturé sur 6 mois). C'est *ça* qui dira si B est soutenable,
pas seulement le fait d'arriver à en vendre 5.

---

## 6. Prochaines étapes

- [ ] **Terminer Pignon Libre**, puis l'ajouter au portfolio comme étude de cas
      (sert aussi de preuve/référence pour cette offre).
- [ ] **Bloquants juridiques/risque (§6bis)** : CGV + contrat type, RC Pro,
      templates mentions légales + politique de confidentialité, reformulation des
      2 sur-promesses. À faire **avant la 1re vente**.
- [ ] **Trancher l'archi d'auth Sveltia** + identifier le plan B CMS (Decap/Tina).
- [ ] **Session B** : rédiger le message de chaque section + direction visuelle.
- [ ] **Construire la route `/assos`** (3a), liens relatifs.
- [ ] **Productiser légèrement** : formulaire de collecte de contenu obligatoire
      avant démarrage, vidéo Loom de formation Sveltia réutilisable, scope cadré
      (X pages, 2 A/R, délai 10 j après réception du contenu).
- [ ] **Tester le marché** : viser ~5 sites vendus via le réseau ESS/associatif
      (Flo, fédés de clubs vélo, France Bénévolat, mairies…). 5 sans forcer → le
      marché est là. Galère à en vendre 2 → appris pour 0 € investi.
- [ ] **Plus tard, si ça marche** : acheter le domaine, passer en 3b.
