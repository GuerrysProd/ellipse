import { site } from './site';
import type { Faq } from './types';

export const faqCategories: { name: string; items: Faq[] }[] = [
  {
    name: 'Le cabinet',
    items: [
      { q: `Qu'est-ce qu'${site.name} ?`, a: `Un cabinet de courtage en assurance indépendant, installé à ${site.baseCity}, immatriculé à l'ORIAS sous le n° ${site.legal.orias}.` },
      { q: 'Quelle différence entre un courtier et un agent ?', a: "L'agent représente une compagnie. Le courtier représente son client et compare plusieurs assureurs pour lui." },
      { q: 'Dans quelle zone intervenez-vous ?', a: `Autour de ${site.baseCity}, dans un rayon d'environ ${site.radiusKm} km. Les échanges peuvent aussi se tenir en visioconférence.` },
      { q: 'Le premier rendez-vous est-il payant ?', a: "Non. Il est sans engagement, et la nature de notre rémunération vous est indiquée avant toute proposition." },
      { q: 'Les simulateurs du site m\'engagent-ils ?', a: "Non. Ils donnent une estimation. Vos coordonnées servent à vous remettre le résultat et à vous proposer un échange, que vous êtes libre de refuser." },
    ],
  },
  {
    name: 'Bâtiment',
    items: [
      { q: "L'assurance décennale est-elle obligatoire pour un micro-entrepreneur ?", a: "Oui. L'obligation dépend de la nature des travaux, pas du statut." },
      { q: 'En combien de temps peut-on obtenir une attestation ?', a: "Quelques jours le plus souvent, lorsque le dossier est complet. Davantage en création ou après une résiliation." },
      { q: 'Peut-on changer d\'assureur décennale en cours d\'année ?', a: "En principe non : la résiliation se fait à l'échéance annuelle, en respectant le préavis prévu au contrat." },
      { q: 'La décennale suffit-elle ?', a: "Non. Elle ne couvre ni les dommages causés aux tiers pendant le chantier, ni votre matériel, ni votre revenu en cas d'arrêt." },
    ],
  },
  {
    name: 'Vigne et agriculture',
    items: [
      { q: "L'assurance récolte est-elle obligatoire ?", a: "Non, mais l'indemnisation publique des pertes exceptionnelles est moins favorable aux exploitants non assurés." },
      { q: 'Comment assurer un stock de vin dont la valeur varie ?', a: "Par un contrat dont le capital s'ajuste sur déclaration, plutôt qu'un capital fixe." },
      { q: 'Faut-il déclarer la vente directe et l\'accueil au domaine ?', a: "Oui. Toute activité non déclarée est exclue de la garantie." },
      { q: 'Vous déplacez-vous sur l\'exploitation ?', a: "Oui. La visite est le seul moyen de vérifier les valeurs à assurer." },
    ],
  },
  {
    name: 'Dirigeant et indépendant',
    items: [
      { q: 'Que touche un indépendant en arrêt de travail ?', a: "Des indemnités calculées sur ses revenus déclarés, plafonnées et versées après un délai de carence. Elles couvrent rarement ses charges." },
      { q: 'Qu\'est-ce qu\'une assurance homme-clé ?', a: "Un contrat souscrit par l'entreprise sur la tête d'une personne indispensable. Le capital est versé à l'entreprise." },
      { q: 'La mutuelle d\'entreprise est-elle obligatoire ?', a: "Oui, dès le premier salarié, avec une participation de l'employeur d'au moins la moitié de la cotisation." },
      { q: 'Peut-on déduire ses cotisations de prévoyance ?', a: "Les travailleurs non salariés le peuvent, dans certaines limites et pour des contrats éligibles." },
    ],
  },
  {
    name: 'Épargne et transmission',
    items: [
      { q: "L'argent d'une assurance-vie est-il bloqué ?", a: "Non. Il reste disponible. Seule la fiscalité des gains évolue avec la durée du contrat." },
      { q: 'PER ou assurance-vie ?', a: "Le PER réduit l'impôt aujourd'hui mais bloque l'épargne. L'assurance-vie reste disponible. Les deux se complètent souvent." },
      { q: 'Peut-on changer d\'assurance de prêt ?', a: "Oui, à tout moment pour un prêt immobilier, à condition de présenter des garanties équivalentes." },
      { q: 'Donnez-vous des conseils fiscaux ?', a: "Non. Le cabinet est courtier en assurance. Les questions fiscales et juridiques se traitent avec votre expert-comptable ou votre notaire." },
    ],
  },
  {
    name: 'Crédit',
    items: [
      { q: 'Qui décide d\'accorder le prêt ?', a: "L'établissement prêteur, et lui seul. Le cabinet prépare le dossier, le présente à plusieurs établissements et compare leurs propositions." },
      { q: 'Faut-il payer avant d\'obtenir le prêt ?', a: "Non. Aucun versement ne peut être exigé d'un particulier avant l'obtention du prêt." },
      { q: 'Un regroupement de crédits fait-il économiser ?', a: "Il réduit la mensualité en allongeant la durée, ce qui augmente le plus souvent le coût total. Il se décide en connaissant les deux chiffres." },
      { q: 'Peut-on choisir l\'assurance de son prêt ?', a: "Oui. Vous pouvez la souscrire ailleurs que dans la banque qui prête, à garanties équivalentes, et en changer ensuite." },
    ],
  },
];
