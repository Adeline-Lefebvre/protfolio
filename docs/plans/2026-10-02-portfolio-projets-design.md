# Refonte de la section projets et mise à jour du portfolio

Date : 2 octobre 2026
Source des contenus : `docs/updates.md` (notes d'Adeline, non versionnées)

## Objectif

Le portfolio doit refléter le travail récent et montrer tout de suite à un prospect la valeur apportée. Cinq projets s'ajoutent (IN CULTURE, Revier, Lipology Clinic, Velec Systems, The Shifters), deux s'enrichissent (Desert Leaves, LIME Search), un disparaît (SDS Lingo, hors ligne).

## Décisions prises

### Positionnement

Cible prioritaire : les clients directs avec un projet produit ou IA (startups, PME, fondateurs). Deuxième message : la relation dans la durée (maintenance, évolutions). Les agences ne sont pas ciblées en premier, mais les projets réalisés pour Code Create servent de preuve.

### Projets réalisés pour Code Create

Revier, IN CULTURE, Club Fifty Five et Lipology ont été réalisés pour l'agence Code Create, qui en a assuré le design et la direction de projet. Chaque fiche la crédite.

- Crédit sur chaque fiche : « Développement : Adeline Lefebvre. Design et direction de projet : Code Create. », avec un lien vers l'agence.
- Plus aucune mention « marque blanche » : elle se contredit dès que le client final est nommé.
- Les logos Lipology Clinic et Club Fifty Five sortent de la barre « Ils m'ont fait confiance ». Le logo Code Create y reste.
- Le périmètre décrit est celui du développement, pas du design ni de la stratégie.
- Chaque projet d'agence porte un réglage « nommé / anonymisé » dans les données, pour pouvoir retirer un nom de client en changeant une ligne.

### Travail assisté par IA

Pas de mention de méthode sur le site. Les fiches parlent de résultats et de rigueur (tests, revues de code). Aucune formulation ne doit laisser croire à un travail entièrement manuel. Pour Desert Leaves : « traduit automatiquement à la publication, relu deux fois, corrigé par l'équipe », jamais « traduit par des professionnels ».

### Pas de page par projet

Tout tient sur la page d'accueil. Les données sont structurées pour permettre des pages dédiées plus tard.

## Structure de la page d'accueil

Nouvel ordre :

1. Hero
2. Logos
3. Projets phares
4. Autres projets
5. Offres
6. Témoignages
7. À propos
8. Contact

Les projets passent avant les offres : la preuve avant la promesse. La page ne s'enferme plus dans `max-w-6xl` : chaque section gère sa largeur. Les projets vont jusqu'aux bords de l'écran, le texte courant garde une colonne lisible.

### Hero

Le texte ne change pas. Les deux halos flous et le motif `TopoField` disparaissent. À la place, un aplat sable (`--secondary`) aux bords nets occupe le tiers droit et va jusqu'au bord de l'écran. La photo est posée dessus, en portrait rectangulaire aux angles légèrement arrondis. La page `/local` reçoit le même traitement.

### Logos

LIME Search, Desert Leaves, Lemon, Code Create, plus Velec Systems et Rootyne (logos récupérés sur leurs sites). Sortent : Lipology Clinic, Club Fifty Five, SDS Lingo.

## Projets phares

Ordre : Rootyne, IN CULTURE, Desert Leaves, LIME Search, Velec Systems.

Chaque projet est une bande pleine largeur d'environ 80 % de la hauteur d'écran. Le visuel occupe 60 % et touche le bord, le texte 40 %. Le côté alterne, le fond alterne entre crème et sable.

Ordre de lecture du texte :

1. Étiquette : le type de client.
2. Nom du projet, puis titre en Fraunces : le résultat pour le client.
3. Une phrase : ce qui a été livré.
4. Trois faits marquants, chiffrés quand les notes le permettent.
5. Rôle, et crédit le cas échéant.
6. Stack et lien vers le site.

Interactions :

- À l'apparition : le visuel se révèle, le texte suit avec un léger décalage.
- Au survol du visuel : la vidéo démarre, l'image s'agrandit légèrement, un bouton « Voir le site » apparaît.
- Sur mobile : visuel au-dessus du texte, vidéo lancée à l'entrée à l'écran, tout le texte visible.
- Mouvement réduit : image fixe, aucune animation.

Points de contenu par projet :

- **Rootyne** : fiche actuelle, reformulée au nouveau format.
- **IN CULTURE** : site de marque développé seule de la maquette à la mise en ligne, carrousel piloté au curseur, audio persistant, CMS Sanity, autonomie éditoriale du client. Crédit Code Create.
- **Desert Leaves** : ajout des quatre langues, de la traduction automatique du contenu CMS sans abonnement, des 69 tests.
- **LIME Search** : ajout du job board privé pour l'intérim (offres invisibles des listes et de Google, carte de partage générée, candidature créée dans OTYS, RGPD).
- **Velec Systems** : performance, responsive de 47 pages, SEO technique, stabilisation après mise en production. Illustre l'offre maintenance.

## Autres projets

Mosaïque de cinq tuiles bord à bord : deux grandes puis trois sur grand écran, deux colonnes sur tablette, une sur mobile.

Au repos : capture du site, nom du projet et une ligne de contexte toujours lisibles. Au survol ou au focus clavier : un voile vert sapin révèle le problème résolu, deux faits marquants, le crédit, la stack et le lien. Sur mobile, le détail est affiché en permanence sous l'image.

- **Revier** : intégration fidèle d'une maquette, composants sur mesure. Crédit Code Create.
- **Lipology Clinic** : migration de 125 pages et plus, données structurées, conformité médicale. Mention « en cours ». Crédit Code Create.
- **Club Fifty Five** : fiche actuelle sans « marque blanche ». Crédit Code Create.
- **Bulbus** : inchangé sur le fond.
- **The Shifters** : contribution bénévole dans une équipe, avec le correctif de redirection après connexion.

En pied de section, sur une ligne : Pepstery et la mention Cubyn / Klox.

## Contenus et données

- Textes en français, anglais et espagnol dans `lib/translations.ts`. Pas de tiret cadratin, ton sobre, formulations épicènes sans point médian. Aucun chiffre qui ne vient pas des notes. Adeline relit tout avant la mise en ligne.
- Les projets passent dans un fichier de données dédié : niveau, visuels, stack, lien, crédit, réglage d'anonymisation.
- `components/projects.tsx` est remplacé par trois composants : bande phare, tuile de mosaïque, lecteur vidéo (conservé). Le carrousel d'images disparaît.

## Visuels

Produits avec Playwright, installé hors du projet.

- Projets phares : vidéo en boucle de 8 à 12 secondes, sans son, en WebM et MP4, avec image d'attente. Cible : moins de 1,5 Mo par vidéo.
- Mosaïque : une image fixe par projet.
- Captures homogènes : même largeur d'écran, même cadrage, bannières de cookies fermées.
- The Shifters : site public uniquement.
- Rootyne, Bulbus, Pepstery : visuels existants réutilisés s'ils tiennent en grand format.

### Cas particulier : LIME Search

Les offres d'intérim sont privées par conception. La capture ne doit montrer aucune donnée réelle : elle se fait sur une page d'offre dont les données sont remplacées dans le navigateur avant la prise de vue :

- intitulé générique, sans « (test) » ;
- consultante, email, référence et tarif fictifs ;
- cadrage sur l'en-tête de l'offre et le formulaire, sans la section qui décrit le client ;
- carte de partage reconstruite à l'identique avec les mêmes données fictives, montrée dans un faux fil WhatsApp.

Aucune URL d'offre ni de carte de partage n'apparaît dans le portfolio ou dans le dépôt.

## Performance

Les vidéos ne se chargent qu'à l'approche de l'écran. Les animations sont en CSS. Aucune bibliothèque d'animation n'est ajoutée. Le poids de la page d'accueil est comparé avant et après.

## Suppression de SDS Lingo

À retirer : la fiche projet, les trois langues de `lib/translations.ts`, la barre de logos, les deux mentions de `cv-source/cv.html`, `public/sds.jpg`. À vérifier : `public/llms.txt`, les données structurées, le sitemap. Le CV est mis à jour avec les nouveaux projets et le PDF régénéré.

## Vérifications avant livraison

- Affichage de l'accueil et de `/local` à 320, 768, 1280 et 1920 px, dans les trois langues, sans débordement horizontal.
- Mosaïque utilisable au clavier, détail visible au focus, contrastes AA sur le voile vert, mouvement réduit respecté.
- Build et lint.
- Chaque lien de projet testé.

Garde-fous de confidentialité, relus un par un :

- Code Create : crédit sur les quatre fiches, aucune « marque blanche », aucun logo de client final dans la barre.
- Revier : rien sur le SEO ni la performance.
- Lipology : mention « en cours », aucune promesse médicale reprise.
- LIME : aucune URL d'offre, aucune donnée réelle dans les captures.
- Velec : aucun point interne du client.
- Desert Leaves : « relu deux fois », pas « traduit par des professionnels ».
- The Shifters : nombre de membres vérifié sur une source publique, sinon retiré. Statut bénévole explicite.

## Mise en ligne

Travail sur une branche dédiée. Rien ne part sur `main` ni en production sans l'accord d'Adeline. Commits découpés : nettoyage SDS, hero, structure de page, projets phares, mosaïque, visuels, CV.

Messages à préparer, envoyés par Adeline :

1. À Code Create, avec la formulation exacte du crédit.
2. À LIME Search, puisque le client est nommé.
3. À Velec, pour demander un témoignage.
