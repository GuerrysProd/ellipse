# Ellipse Solutions — site du cabinet

Site en React (Next.js) : 123 pages, tous les parcours de conversion, et l'identité visuelle du cabinet.

## Lancer le site

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

Stack : Next.js 16 (App Router, pages générées statiquement), React 19, TypeScript, Tailwind CSS v4, icônes Lucide. Déploiement prévu sur Vercel.

## Les 123 pages

| Rubrique | Adresse | Pages |
|---|---|---|
| Accueil | `/` | 1 |
| Protéger | `/proteger` + 25 offres | 26 |
| Préparer | `/preparer` + 11 offres | 12 |
| Financer | `/financer` + 6 offres de crédit | 7 |
| Simulateurs | `/simulateurs` + 16 simulateurs | 17 |
| Vous êtes | `/vous-etes` + 6 profils | 7 |
| Métiers du bâtiment | `/metiers` + 7 métiers | 8 |
| Zones d'intervention | `/secteurs` + 12 secteurs | 13 |
| Le cabinet | `/cabinet` + 7 pages | 8 |
| Guides | `/guides` + 12 guides | 13 |
| Conversions | `/etre-rappele`, `/rendez-vous`, `/audit-gratuit`, `/contact`, `/sinistre` | 5 |
| Ressources | `/faq`, `/lexique` | 2 |
| Légal | `/mentions-legales`, `/confidentialite`, `/cookies`, `/reclamations` | 4 |

S'y ajoutent `/sitemap.xml`, `/robots.txt`, `/llms.txt` et la route `/api/lead`.

Le menu suit la signature du cabinet : **Protéger** (aujourd'hui) et **Préparer** (demain), puis **Financer**, **Vous êtes**, **Le cabinet**, **S'informer**. Trois actions sont présentes partout : faire une simulation, être rappelé, prendre rendez-vous.

## Identité visuelle

| Élément | Choix | Où le modifier |
|---|---|---|
| Couleurs | Argent et bleu pétrole du logo, bleu nuit pour les fonds sombres, touche dorée réservée aux détails | `src/app/globals.css`, bloc `@theme` |
| Typographies | Cormorant Garamond pour les titres (dans l'esprit du logotype), Manrope pour le texte | `src/app/layout.tsx` |
| Logo | La sphère fournie (`public/brand/logo-ellipse.png`), le nom composé en texte | `src/components/Logo.tsx` |
| Réseau | Logo NousAssurons blanc, sur fond sombre uniquement | `public/brand/nousassurons-blanc.png` |
| Motif | Ellipses en rotation lente, en écho au logo | `src/components/Orbits.tsx` |
| Photographies | 30 images Unsplash, servies par leur CDN, créditées dans les mentions légales | `src/content/images.ts` |
| Icônes | Une icône par offre, simulateur, profil et métier | `src/components/icons.ts` |
| Animations | Apparition au défilement, survols, étapes du simulateur. Désactivées si le visiteur demande moins de mouvement | `globals.css`, `RevealObserver.tsx` |

Pour changer la photo d'une page, modifier la correspondance dans `src/content/images.ts` (par offre, profil, métier, secteur ou guide).

## Où modifier quoi

Tout le texte est dans `src/content/`. Aucune page n'a de texte en dur, sauf l'accueil et les pages de conversion.

| Pour modifier… | Fichier |
|---|---|
| Coordonnées, mentions, chiffres du cabinet | `src/content/site.ts` |
| Une offre | `src/content/offers/*.ts` |
| Un simulateur (questions, calcul, textes) | `src/content/simulators/*.ts` |
| Les barèmes fiscaux des simulateurs | `src/content/simulators/baremes.ts` |
| Un profil, un métier, un secteur | `profiles.ts`, `trades.ts`, `sectors.ts` |
| Un guide | `guides-activite.ts`, `guides-patrimoine.ts` |
| Les pages du cabinet, les pages légales | `cabinet.ts`, `legal.ts` |
| La FAQ, le lexique | `faq.ts`, `glossary.ts` |
| Le menu | `src/content/navigation.ts` |

Ajouter une offre, un secteur ou un guide revient à ajouter une entrée dans le fichier correspondant : la page, le menu, le pied de page, le sitemap et le maillage se mettent à jour seuls. Une référence vers une page inexistante fait échouer la compilation.

Les gabarits sont dans `src/components/templates/` et dans les routes de `src/app/`.

## Les parcours

**Simulateurs** : deux ou trois étapes de questions, puis demande de coordonnées (prénom, nom, e-mail, mobile, accord), puis résultat. Le résultat n'est jamais affiché avant l'envoi des coordonnées.

**Formulaire de rappel** : prénom, nom, téléphone, créneau facultatif. Présent sur la quasi-totalité des pages.

**Demandes** : tous les formulaires envoient vers `/api/lead`, qui valide, écarte les robots (champ piège, délai minimal) et transmet à `LEAD_WEBHOOK_URL`. Sans webhook, la route accepte en développement et répond 503 en production : le visiteur voit alors un message d'échec avec le numéro du cabinet, aucune demande n'est perdue en silence.

## Variables d'environnement

Voir `.env.example`. Par défaut, le site demande aux moteurs de ne pas l'indexer (`NEXT_PUBLIC_SITE_INDEXABLE=false`) et affiche les encadrés « À compléter ».

## Ce qui a été vérifié

- Compilation et contrôle de types.
- Les 123 pages répondent, ont un seul titre principal, un titre de page unique, et aucun lien interne cassé.
- Les 16 simulateurs déroulés jusqu'au résultat, calculs recoupés à la main.
- Formulaires de rappel, de contact et d'audit : contrôles de saisie, envoi, confirmation, rejets de la route.
- Menu de bureau et menu mobile, barre d'action mobile.

## Avant toute mise en ligne

1. **Faire valider tous les textes par le cabinet.** Ce sont des rédactions de travail sur un sujet réglementé. Les offres ont été imaginées largement : retirer celles que le cabinet ne distribue pas.
2. **Confirmer le statut du cabinet pour le crédit.** L'univers « Financer » suppose une immatriculation à l'ORIAS pour l'intermédiation en opérations de banque. La catégorie est à renseigner dans `site.ts` (`creditStatus`) et dans les mentions légales ; sans elle, ces pages ne doivent pas être publiées.
3. **Faire vérifier les barèmes** de `baremes.ts` (plafond de la Sécurité sociale, droits de succession, assurance-vie) et les hypothèses des simulateurs.
4. **Compléter les encadrés « À compléter »** : adresse, horaires, hébergeur, parcours du fondateur, avis clients, liste des assureurs, barème d'honoraires.
5. **Brancher** le CRM (`LEAD_WEBHOOK_URL`), la mesure d'audience (`NEXT_PUBLIC_GTM_ID`) et un bandeau de consentement.
6. **Ajouter** une limitation de débit sur `/api/lead`.
7. **Prévoir les redirections** des anciennes adresses : `/qui-sommes-nous-` vers `/cabinet/qui-sommes-nous`, `/un-bilan-patrimonial-cest-quoi-` vers `/preparer/bilan-patrimonial`.
8. **Passer** `NEXT_PUBLIC_SITE_INDEXABLE` à `true`.
9. **Remplacer les photos de banque d'images** par des photos du cabinet dès qu'elles existent, et fournir le logo en version vectorielle et un portrait en haute définition.

