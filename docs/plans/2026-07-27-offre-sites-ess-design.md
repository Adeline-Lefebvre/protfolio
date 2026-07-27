# Offre « sites pour les assos et l'ESS » — design & stratégie

*Note de brainstorming — 27 juillet 2026*

Point de départ : après avoir adoré construire le site de **Pignon Libre**, l'idée
d'en faire une offre récurrente pour les assos, collectifs et petits acteurs de
l'ESS. Sites Next.js statiques + **Sveltia CMS** (open-source, gratuit à vie,
éditable par un non-technicien). Ce document fige la réflexion ; la rédaction et
le design de la page se feront dans une session dédiée.

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
- **Ce modèle** : site statique, hébergé **réellement gratuitement** (Cloudflare
  Pages / Netlify free tier — conçu pour ça). Nom de domaine ~12 €/**an** payé en
  direct **à leur nom**. Le site **leur appartient** (repo Git + contenu Sveltia).
  On arrête de travailler ensemble ? Le site continue de tourner, gratuitement.

Valeurs portées : autonomie, pas de rente, pas de dépendance. Aucun Wix ne peut
le dire.

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

> **Forfait tranquillité — ~150 €/an, renouvelable, résiliable.** Mises à jour,
> petites modifs, réponses aux questions. Payé une fois l'an → colle au cycle
> budgétaire des assos (subventions, AG).

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
> **Des sites pour les assos et l'ESS — par Adeline Lefebvre**
> *Rapides, à vous, sans abonnement.*

Un nom redeviendra utile **seulement** en cas de passage en 3b (domaine dédié)
avec envie d'une identité partageable détachée du nom propre. Shortlist gardée
pour ce jour-là : **Belle Toile** (toile = site + voile, « prendre le bon vent »),
Champ Libre, Colibri, Racines. À décider à ce moment-là, sans pression.

### URL : 3a maintenant → 3b plus tard (zéro regret)
- **3a (maintenant)** : `adelinelefebvre.com/assos`. Coût 0 €, aucun engagement.
- **3b (plus tard)** : acheter `belletoile.fr` (ou autre, ~12 €/an) et le faire
  **pointer vers le même déploiement** (règle de rewrite). URL propre et
  partageable, **toujours un seul site à maintenir**.

**Garde-fous techniques pour un switch indolore :**
- **Liens internes en relatif** — jamais `adelinelefebvre.com/assos/...` codé en
  dur, pour que la page marche aussi bien sous `/assos` qu'à la racine d'un
  domaine dédié.
- **Route `/assos` autonome** avec identité visuelle propre.

---

## 5. Structure de la landing page

Ordre validé (à détailler en session B : message, ton, visuel de chaque section) :

1. **Hero** — la promesse en une phrase + CTA « Parlons de votre projet ».
   *Un beau site rapide pour votre asso, qui vous appartient, sans abonnement.*
2. **Pour qui / le problème** — empathie : *« Vous êtes une asso, un collectif,
   un petit commerce engagé. Pas 3 000 € pour une agence, ni envie d'un WordPress
   usine à gaz. »*
3. **Ce qui vous rend autonome** — les 3 promesses : **rapide** / **à vous** (pas
   de rente) / **hébergement gratuit à vie**. L'anti-Wix.
4. **Ce que vous obtenez concrètement** — design sur-mesure, mobile, CMS Sveltia
   (tout modifier soi-même), référencement de base.
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

## 6. Prochaines étapes

- [ ] **Terminer Pignon Libre**, puis l'ajouter au portfolio comme étude de cas
      (sert aussi de preuve/référence pour cette offre).
- [ ] **Session B** : rédiger le message de chaque section + direction visuelle.
- [ ] **Construire la route `/assos`** (3a), liens relatifs.
- [ ] **Productiser légèrement** : formulaire de collecte de contenu obligatoire
      avant démarrage, vidéo Loom de formation Sveltia réutilisable, scope cadré
      (X pages, 2 A/R, délai 10 j après réception du contenu).
- [ ] **Tester le marché** : viser ~5 sites vendus via le réseau ESS/associatif
      (Flo, fédés de clubs vélo, France Bénévolat, mairies…). 5 sans forcer → le
      marché est là. Galère à en vendre 2 → appris pour 0 € investi.
- [ ] **Plus tard, si ça marche** : acheter le domaine, passer en 3b.
