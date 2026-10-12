import { photos } from './images';
import { site } from './site';

const photoCredits = [...new Set(Object.values(photos).map((photo) => photo.credit))].sort((a, b) => a.localeCompare(b, 'fr'));
import type { ContentPage } from './types';

/** Pages légales. Rédaction de travail : à faire valider par le cabinet et, si besoin, par un juriste avant mise en ligne. */
export const legalPages: ContentPage[] = [
  {
    slug: 'mentions-legales',
    name: 'Mentions légales',
    title: 'Mentions légales',
    description: `Mentions légales du site ${site.name} : éditeur, immatriculation ORIAS, autorité de contrôle, médiation, hébergement.`,
    h1: 'Mentions légales',
    intro: 'Informations relatives à l\'éditeur du site et à son activité réglementée.',
    sections: [
      {
        heading: 'Éditeur du site',
        list: [`${site.legalName}, ${site.legal.form}`, `SIRET ${site.legal.siret}`, site.legal.rcs, `Téléphone : ${site.phone.display}`, `E-mail : ${site.email}`],
        todo: 'Adresse du siège social à indiquer.',
      },
      { heading: 'Directeur de la publication', paragraphs: [site.legal.publisher] },
      {
        heading: 'Immatriculation',
        paragraphs: [`Intermédiaire immatriculé au registre de l'ORIAS sous le n° ${site.legal.orias} en qualité de ${site.legal.oriasCategory}. Registre consultable sur www.orias.fr.`, "Garantie financière et assurance de responsabilité civile professionnelle conformes au Code des assurances."],
      },
      { heading: 'Autorité de contrôle', paragraphs: [site.legal.acpr] },
      {
        heading: 'Intermédiation en crédit',
        paragraphs: ["Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager. Aucun versement, de quelque nature que ce soit, ne peut être exigé d'un particulier avant l'obtention d'un ou plusieurs prêts d'argent."],
        todo: "Catégorie d'immatriculation à l'ORIAS pour l'intermédiation en opérations de banque, et liste des établissements partenaires.",
      },
      {
        heading: 'Indépendance',
        paragraphs: ["Le cabinet n'est soumis à aucune obligation contractuelle de travailler exclusivement avec une ou plusieurs entreprises d'assurance. Aucune entreprise d'assurance ne détient de participation dans son capital, et il n'en détient aucune dans une entreprise d'assurance."],
      },
      { heading: 'Médiation', paragraphs: [`En cas de litige non résolu par le cabinet : ${site.legal.mediator}.`] },
      { heading: 'Hébergement', todo: "Nom, adresse et téléphone de l'hébergeur du site." },
      { heading: 'Propriété intellectuelle', paragraphs: ["Les textes, outils et éléments graphiques du site sont la propriété du cabinet. Toute reproduction sans accord préalable est interdite."] },
      { heading: 'Crédits photographiques', paragraphs: [`Photographies issues de la banque d'images Unsplash : ${photoCredits.join(', ')}.`] },
      {
        heading: 'Portée des informations',
        paragraphs: ["Les contenus et simulateurs du site ont une valeur informative. Ils ne constituent ni une offre de contrat, ni un conseil personnalisé, ni un conseil fiscal ou juridique."],
      },
    ],
  },
  {
    slug: 'confidentialite',
    name: 'Confidentialité',
    title: 'Politique de confidentialité',
    description: `Politique de confidentialité du site ${site.name} : données collectées, finalités, durées de conservation et droits des personnes.`,
    h1: 'Politique de confidentialité',
    intro: 'Quelles données nous collectons, pourquoi, pendant combien de temps, et comment exercer vos droits.',
    sections: [
      { heading: 'Responsable du traitement', paragraphs: [`${site.legalName}, joignable à l'adresse ${site.email}.`] },
      {
        heading: 'Données collectées',
        list: [
          'Formulaire de rappel : prénom, nom, téléphone, créneau souhaité',
          'Simulateurs : réponses saisies, puis prénom, nom, e-mail et téléphone pour accéder au résultat',
          'Formulaires de contact et d\'audit : coordonnées et message',
          "Mesure d'audience : données de navigation, uniquement avec votre accord",
        ],
      },
      { heading: 'Finalités', list: ['Vous recontacter et répondre à votre demande', 'Préparer une étude ou un rendez-vous', "Mesurer la fréquentation du site et l'améliorer"] },
      { heading: 'Base légale', paragraphs: ["Les mesures précontractuelles prises à votre demande, votre consentement pour être recontacté et pour la mesure d'audience, et les obligations légales applicables aux intermédiaires en assurance."] },
      { heading: 'Destinataires', paragraphs: ["Le cabinet et ses prestataires techniques. Si vous donnez suite à une étude, les assureurs consultés pour établir une proposition. Vos données ne sont ni cédées ni revendues."] },
      { heading: 'Durée de conservation', todo: 'Durées à fixer par le cabinet : demandes sans suite, clients, documents contractuels.' },
      { heading: 'Vos droits', paragraphs: [`Vous pouvez accéder à vos données, les faire rectifier ou effacer, limiter leur traitement, vous y opposer et demander leur portabilité, en écrivant à ${site.email}. Vous pouvez aussi saisir la CNIL, www.cnil.fr.`] },
      { heading: 'Démarchage téléphonique', paragraphs: ["Le cabinet ne vous appelle que si vous l'avez demandé ou accepté. Vous pouvez retirer votre accord à tout moment."] },
    ],
  },
  {
    slug: 'cookies',
    name: 'Cookies',
    title: 'Gestion des cookies',
    description: `Les cookies utilisés par le site ${site.name} et la manière de modifier vos choix.`,
    h1: 'Gestion des cookies',
    intro: 'Le site fonctionne sans cookie publicitaire. Les seuls traceurs soumis à votre accord servent à mesurer la fréquentation.',
    sections: [
      { heading: 'Cookies nécessaires', paragraphs: ["Ils assurent le fonctionnement du site et la mémorisation de vos choix. Ils ne nécessitent pas de consentement."] },
      { heading: "Mesure d'audience", paragraphs: ["Ces traceurs ne sont déposés qu'avec votre accord. Ils servent à connaître les pages consultées et à améliorer le site."] },
      { heading: 'Modifier vos choix', todo: 'Brancher ici le bouton du bandeau de consentement une fois celui-ci installé.' },
    ],
  },
  {
    slug: 'reclamations',
    name: 'Réclamations',
    title: 'Réclamations et médiation',
    description: `Comment adresser une réclamation à ${site.name}, dans quels délais vous recevez une réponse et comment saisir le médiateur de l'assurance.`,
    h1: 'Réclamations et médiation',
    intro: "Un désaccord doit pouvoir s'exprimer simplement. Voici comment nous le traitons.",
    sections: [
      { heading: 'Nous écrire', list: [`Par e-mail : ${site.email}`, 'Par courrier, à l\'adresse du cabinet'], todo: 'Adresse postale à indiquer.' },
      { heading: 'Ce qu\'il faut joindre', list: ['Vos coordonnées et le contrat concerné', "L'exposé des faits et de votre demande", 'Les pièces utiles : courriers, attestations, devis'] },
      {
        heading: 'Nos délais',
        paragraphs: ["Nous accusons réception de votre réclamation dans un délai de dix jours ouvrables et vous apportons une réponse dans un délai maximal de deux mois."],
      },
      { heading: 'Médiation', paragraphs: [`Si la réponse ne vous satisfait pas, ou en l'absence de réponse dans les deux mois, vous pouvez saisir gratuitement : ${site.legal.mediator}.`] },
      { heading: 'Autorité de contrôle', paragraphs: [site.legal.acpr] },
    ],
    faq: [
      { q: 'La réclamation suspend-elle mon contrat ?', a: 'Non. Vos garanties restent en vigueur pendant son traitement.' },
      { q: 'La médiation est-elle payante ?', a: 'Non, elle est gratuite pour l\'assuré.' },
    ],
  },
];
