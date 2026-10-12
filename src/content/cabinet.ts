import { site } from './site';
import type { ContentPage } from './types';

/** Pages « Le cabinet ». Les rubriques marquées « todo » attendent des informations du cabinet. */
export const cabinetPages: ContentPage[] = [
  {
    slug: 'demarche',
    name: 'Notre démarche',
    tagline: 'Quatre temps, toujours les mêmes',
    title: 'Notre démarche de courtier en quatre temps',
    description:
      "Comment travaille le cabinet : écouter, auditer l'existant, comparer les assureurs, suivre dans la durée. Une méthode écrite, identique pour chaque client.",
    h1: 'Notre démarche',
    intro: "Que vous veniez pour une décennale ou pour préparer votre retraite, le déroulement est le même. Vous savez à chaque étape ce qui va suivre.",
    sections: [
      {
        heading: '1. Écouter',
        paragraphs: ["Un premier échange, au téléphone, en visioconférence ou sur place. Nous cherchons à comprendre votre activité, votre situation et ce qui vous amène. Rien n'est proposé à ce stade."],
      },
      {
        heading: "2. Auditer l'existant",
        paragraphs: ["Nous relisons vos contrats en cours : garanties, plafonds, franchises, exclusions, cotisations. Vous recevez un état des lieux écrit, qu'il y ait ou non quelque chose à changer."],
      },
      {
        heading: '3. Comparer et recommander',
        paragraphs: [
          `Nous interrogeons les assureurs du réseau ${site.network} sur votre dossier réel et présentons les offres dans un tableau lisible. La recommandation est motivée par écrit : pourquoi ce contrat, et ce qu'il ne couvre pas.`,
        ],
      },
      {
        heading: '4. Mettre en place et suivre',
        paragraphs: ["Nous gérons la souscription et, le cas échéant, la résiliation de l'ancien contrat. Ensuite, un point annuel et un interlocuteur unique en cas de sinistre ou de changement dans votre activité."],
      },
      {
        heading: 'Nos engagements',
        list: [
          'Une recommandation écrite et motivée avant toute signature',
          'La nature de notre rémunération indiquée avant toute proposition',
          'La liberté de ne rien changer si vos contrats conviennent',
          'Le même interlocuteur, de la première étude au sinistre',
        ],
      },
    ],
    faq: [
      { q: 'Combien de temps dure une étude ?', a: "De quelques jours pour un contrat simple à quelques semaines pour un dossier complet d'entreprise." },
      { q: 'Le premier rendez-vous est-il payant ?', a: "Non. Il est sans engagement." },
      { q: 'Que se passe-t-il si je ne donne pas suite ?', a: "Rien. Vous conservez l'état des lieux de vos contrats." },
    ],
  },
  {
    slug: 'qui-sommes-nous',
    name: 'Qui sommes-nous',
    tagline: 'Un courtier indépendant à Chalon-sur-Saône',
    title: 'Qui sommes-nous : courtier indépendant à Chalon-sur-Saône',
    description:
      "Ellipse Solutions est un cabinet de courtage en assurance indépendant, installé à Chalon-sur-Saône, immatriculé à l'ORIAS et membre du réseau NousAssurons.",
    h1: 'Qui sommes-nous',
    intro: `${site.name} est un cabinet de courtage en assurance fondé par ${site.founder.name}. Il accompagne les professionnels et les particuliers de Bourgogne du Sud.`,
    sections: [
      {
        heading: 'Le cabinet en quelques faits vérifiables',
        list: [
          `${site.legalName}, ${site.legal.form}, ${site.legal.rcs}`,
          `Immatriculé à l'ORIAS sous le n° ${site.legal.orias} en qualité de ${site.legal.oriasCategory}`,
          "Activité placée sous le contrôle de l'Autorité de contrôle prudentiel et de résolution",
          `Membre du réseau ${site.network}, qui donne accès à plus de ${site.insurersCount} compagnies`,
        ],
      },
      {
        heading: 'Ce que signifie « indépendant »',
        paragraphs: [
          "Le cabinet n'appartient à aucun assureur et n'a aucun lien capitalistique avec une compagnie, une mutuelle ou une banque. Il n'a pas de contrat maison à placer.",
        ],
      },
      {
        heading: 'Notre champ d\'intervention',
        paragraphs: [
          "Le cabinet exerce le métier de courtier en assurance : assurances des professionnels, prévoyance, santé, assurance emprunteur, assurance-vie, épargne retraite.",
          "Il n'est pas conseiller en investissements financiers et ne délivre ni conseil fiscal ni conseil juridique. Sur ces sujets, il travaille avec votre expert-comptable, votre notaire ou votre avocat.",
        ],
      },
      {
        heading: 'Pour qui nous travaillons',
        list: ['Artisans et entreprises du bâtiment', 'Vignerons, viticulteurs et exploitants agricoles', 'Dirigeants de TPE et PME, indépendants et professions libérales', 'Particuliers et familles'],
      },
      {
        heading: 'Notre zone',
        paragraphs: [`${site.baseCity} et ses alentours, dans un rayon d'environ ${site.radiusKm} km : Saône-et-Loire, sud de la Côte-d'Or, ouest du Jura, nord de l'Ain.`],
      },
      { heading: "L'histoire du cabinet", todo: "Date de création, raisons de la fondation, étapes marquantes. À rédiger avec Yoann Janet." },
    ],
    faq: [
      { q: 'Comment vérifier votre immatriculation ?', a: `Sur le site de l'ORIAS, www.orias.fr, avec le numéro ${site.legal.orias} ou le nom du cabinet.` },
      { q: 'Êtes-vous conseiller en gestion de patrimoine ?', a: "Le cabinet est courtier en assurance. Il intervient sur le volet assurantiel du patrimoine : assurance-vie, épargne retraite, prévoyance, transmission par l'assurance." },
    ],
  },
  {
    slug: site.founder.slug,
    name: site.founder.name,
    tagline: 'Votre interlocuteur',
    title: `${site.founder.name}, courtier en assurance à Chalon-sur-Saône`,
    description: `${site.founder.name}, fondateur d'${site.name} : parcours, domaines d'intervention et manière de travailler d'un courtier en assurance indépendant.`,
    h1: site.founder.name,
    intro: `${site.founder.role}. C'est lui qui vous reçoit, étudie votre dossier et reste votre interlocuteur.`,
    sections: [
      { heading: 'Parcours', todo: "Formation, expériences précédentes (gestion patrimoniale immobilière, optimisation de l'habitat), capacité professionnelle. À compléter, avec un portrait photographique." },
      {
        heading: 'Statut et vérification',
        paragraphs: [`Il exerce au sein d'${site.legalName}, immatriculée à l'ORIAS sous le n° ${site.legal.orias} en qualité de ${site.legal.oriasCategory}. L'immatriculation se vérifie sur www.orias.fr.`],
      },
      {
        heading: 'Les sujets qu\'il traite',
        list: [
          'Assurances des entreprises du bâtiment : décennale, responsabilité, chantier',
          'Assurances des domaines viticoles et des exploitations agricoles',
          'Protection du dirigeant : prévoyance, homme-clé, responsabilité',
          "Épargne et transmission par l'assurance : assurance-vie, épargne retraite, clause bénéficiaire",
        ],
      },
      {
        heading: 'Sa manière de travailler',
        paragraphs: ["Partir de la situation réelle avant de parler de contrat. Se déplacer sur le chantier, au domaine ou dans l'entreprise quand c'est utile. Écrire ce qui est recommandé et pourquoi."],
      },
      {
        heading: 'Ce qu\'il ne fait pas',
        list: [
          "Il ne promet aucun rendement et n'annonce aucun tarif sans étude",
          'Il ne délivre ni conseil fiscal ni conseil juridique',
          "Il ne recommande pas de changer un contrat qui convient",
        ],
      },
      { heading: 'Engagements locaux', todo: "Adhésions professionnelles, réseaux d'entrepreneurs, partenariats locaux, interventions. À compléter." },
    ],
  },
  {
    slug: 'compagnies-partenaires',
    name: 'Les compagnies comparées',
    tagline: `Plus de ${site.insurersCount} assureurs`,
    title: `Plus de ${site.insurersCount} compagnies d'assurance comparées`,
    description: `Membre du réseau ${site.network}, le cabinet compare plus de ${site.insurersCount} compagnies d'assurance pour les professionnels et les particuliers.`,
    h1: 'Les compagnies que nous comparons',
    intro: `Le cabinet est membre du réseau ${site.network}. Cette affiliation lui donne accès à plus de ${site.insurersCount} compagnies, généralistes et spécialisées.`,
    sections: [
      {
        heading: 'Pourquoi un réseau',
        paragraphs: [
          "Un courtier isolé n'a pas le volume nécessaire pour ouvrir un compte chez chaque assureur. Le réseau mutualise ces accès et négocie les conditions pour l'ensemble de ses membres.",
          "Le cabinet conserve sa liberté de choix : aucun assureur n'est imposé, aucun quota n'est à remplir.",
        ],
      },
      {
        heading: 'Ce que cela change pour vous',
        list: [
          'Plusieurs assureurs consultés pour une même demande',
          'Des compagnies spécialisées pour les dossiers difficiles : création, résiliation, métiers à risque',
          'La possibilité de déplacer un contrat sans changer d\'interlocuteur',
        ],
      },
      {
        heading: 'Comment nous choisissons',
        paragraphs: ["Le tarif n'est qu'un critère. Nous regardons d'abord les définitions des garanties, les exclusions, la solidité de l'assureur et sa façon de gérer les sinistres."],
      },
      { heading: 'Les assureurs partenaires', todo: "Liste ou logos des compagnies, selon les règles d'usage du réseau NousAssurons. À valider avant affichage." },
      {
        heading: 'Une gestion dématérialisée',
        paragraphs: ["Devis, signature et documents passent par une plateforme sécurisée. Vous retrouvez vos contrats et attestations en ligne, sans attendre un courrier."],
      },
    ],
    faq: [
      { q: 'Comparez-vous tous les assureurs du marché ?', a: "Non. Nous comparons ceux auxquels le réseau donne accès, soit plus de 87 compagnies. Le périmètre de la comparaison vous est précisé dans la recommandation." },
      { q: 'Suis-je client du réseau ou du cabinet ?', a: "Du cabinet. Le réseau est un outil ; votre interlocuteur reste le même." },
    ],
  },
  {
    slug: 'remuneration',
    name: 'Notre rémunération',
    tagline: 'Qui nous paie, et comment',
    title: 'Comment le cabinet est-il rémunéré ?',
    description: "Commissions, honoraires : comment un courtier en assurance est rémunéré, et ce que le cabinet vous indique par écrit avant toute proposition.",
    h1: 'Comment nous sommes rémunérés',
    intro: "La question est légitime et la réponse doit être simple. Vous la recevez par écrit avant toute proposition.",
    sections: [
      {
        heading: 'La commission',
        paragraphs: ["Dans la plupart des cas, le cabinet est rémunéré par une commission incluse dans la cotisation et versée par l'assureur. Vous ne payez rien en plus du contrat."],
      },
      {
        heading: 'Les honoraires',
        paragraphs: ["Pour certaines missions d'étude ou d'audit qui ne débouchent pas sur un contrat, des honoraires peuvent être convenus. Ils font toujours l'objet d'un accord écrit préalable."],
      },
      {
        heading: 'Ce que la réglementation prévoit',
        paragraphs: [
          "Avant la conclusion d'un contrat, le courtier doit indiquer la nature de sa rémunération et préciser s'il travaille avec un ou plusieurs assureurs. Ces informations figurent dans le document remis lors du premier rendez-vous.",
        ],
      },
      {
        heading: 'Notre règle',
        paragraphs: ["Un contrat mieux commissionné n'est jamais recommandé s'il vous couvre moins bien. La recommandation écrite expose les raisons du choix, pour que vous puissiez en juger."],
      },
      { heading: 'Barème des honoraires', todo: "Indiquer ici si le cabinet facture des honoraires, dans quels cas et selon quel barème." },
    ],
  },
  {
    slug: 'avis-clients',
    name: 'Avis clients',
    tagline: 'Ce que disent ceux que nous accompagnons',
    title: 'Avis clients du cabinet',
    description: "Les avis des clients du cabinet : artisans, vignerons, dirigeants et particuliers accompagnés autour de Chalon-sur-Saône.",
    h1: 'Avis clients',
    intro: "Nous publions uniquement des avis vérifiables, déposés par des clients sur une plateforme indépendante.",
    sections: [
      { heading: 'Les avis', todo: "Aucun avis n'est affiché tant qu'il n'est pas réel et vérifiable. Brancher ici la fiche Google du cabinet (note, nombre d'avis, extraits) dès qu'elle existe." },
      {
        heading: 'Comment les avis sont recueillis',
        paragraphs: ["Après chaque dossier, le client reçoit une invitation à donner son avis. Tous les avis sont publiés, favorables ou non, sans contrepartie."],
      },
      { heading: 'Cas clients', todo: "Deux ou trois cas réels et anonymisés (un artisan, un domaine, un dirigeant) : situation de départ, ce qui a été fait, résultat. Avec l'accord des intéressés." },
    ],
  },
  {
    slug: 'partenaires',
    name: 'Partenaires et prescripteurs',
    tagline: 'Experts-comptables, notaires, professionnels du bâtiment',
    title: 'Partenaires et apporteurs : travailler avec le cabinet',
    description: "Experts-comptables, notaires, avocats, agents immobiliers, fournisseurs du bâtiment : comment recommander le cabinet à vos clients, dans un cadre écrit.",
    h1: 'Partenaires et prescripteurs',
    intro: "Vos clients vous posent des questions d'assurance qui ne sont pas votre métier. Nous y répondons, en vous tenant informé.",
    sections: [
      {
        heading: 'À qui nous nous adressons',
        list: [
          'Experts-comptables et conseils en gestion',
          'Notaires et avocats',
          'Agents immobiliers et courtiers en crédit',
          'Négoces de matériaux, constructeurs, maîtres d\'œuvre',
          'Fournisseurs et prestataires du monde viticole et agricole',
        ],
      },
      {
        heading: 'Comment cela fonctionne',
        paragraphs: ["Vous nous mettez en relation avec votre client, avec son accord. Nous menons l'étude et vous tenons au courant de son issue. Votre client reste le vôtre."],
      },
      {
        heading: 'Un cadre écrit',
        paragraphs: [
          "La recommandation fait l'objet d'une convention qui précise le rôle de chacun. L'apporteur met en relation : il ne présente pas les contrats et ne conseille pas, ce qui est réservé aux intermédiaires immatriculés.",
        ],
      },
      { heading: 'Rémunération des apporteurs', todo: "Préciser si le cabinet rémunère les mises en relation, et selon quelles modalités." },
    ],
    faq: [
      { q: 'Faut-il être immatriculé à l\'ORIAS pour recommander le cabinet ?', a: "Non, tant que vous vous limitez à une mise en relation, sans présenter ni proposer de contrat." },
      { q: 'Suis-je informé de la suite donnée ?', a: "Oui, avec l'accord du client." },
    ],
  },
];

export const cabinetPath = (slug: string) => `/cabinet/${slug}`;
