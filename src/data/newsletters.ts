import type { Newsletter } from '~/types';

export const lesEchos: Newsletter[] = [
  {
    id: 1,
    title: 'La matinale',
    description: 'Chaque matin, les articles qui font la une de l\'actualité pour ne rien rater des titres de la matinées.',
    accessType: 'register',
  },
  {
    id: 2,
    title: 'La matinale des abonnés',
    description: 'Tout ce qu\'il faut savoir pour démarrer la journée dans notre condensé de l\'actualité préparé spécialement pour nos abonnés.',
    accessType: 'subscription',
  },
  {
    id: 3,
    title: 'Les titres de 18h',
    description: 'Chaque soir, les articles qui font la une de l\'actualité pour ne rien rater des titres de la journée.',
    accessType: 'register',
  },
  {
    id: 4,
    title: 'La 18h des abonnés',
    description: 'Retrouvez un décryptage de l\'actualité du jour par un de nos rédacteurs en chef, à lire sans quitter sa boîte de réception et préparé spécialement pour nos abonnés.',
    accessType: 'subscription',
  },
  {
    id: 5,
    title: 'Le Zoom des Echos',
    description: 'Recevez un focus sur LE sujet d\'actualité du moment. Une sélection d\'articles à ne pas manquer pour mieux comprendre.',
    accessType: 'register',
  },
  {
    id: 6,
    title: 'Votre journal à 21h30',
    description: 'Recevez votre journal en version numérique dès 21h30 la veille de sa parution.',
    note: 'Réservé aux abonnés Entreprises et Pro',
    accessType: 'subscription',
  },
];

export const investments: Newsletter[] = [
  {
    id: 1,
    title: 'Enquête de la semaine',
    description: 'Chaque semaine, les enquêtes de la Rédaction sur une valeur, un secteur ou un événement marché pour améliorer votre connaissance du marché.',
    accessType: 'public',
  },
  {
    id: 2,
    title: 'Placements',
    description: 'Immobilier, assurance-vie, fiscalité... tous les conseils de la Rédaction pour vous aider à faire les meilleurs placements.',
    accessType: 'public',
  },
  {
    id: 3,
    title: 'Morning mail',
    description: 'Les dernières informations marchés et valeurs à connaitre avant l\'ouverture de la séance pour faciliter vos arbitrages.',
    accessType: 'public',
  },
];
