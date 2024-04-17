import type { Newsletter } from '~/types';

export const newsletters: Newsletter[] = [
  {
    title: 'La matinale',
    description: 'Chaque matin, les articles qui font la une de l\'actualité pour ne rien rater des titres de la matinées.',
    accessType: 'register',
  },
  {
    title: 'La matinale des abonnés',
    description: 'Tout ce qu\'il faut savoir pour démarrer la journée dans notre condensé de l\'actualité préparé spécialement pour nos abonnés.',
    accessType: 'subscription',
  },
  {
    title: 'Les titres de 18h',
    description: 'Chaque soir, les articles qui font la une de l\'actualité pour ne rien rater des titres de la journée.',
    accessType: 'register',
  },
  {
    title: 'La 18h des abonnés',
    description: 'Retrouvez un décryptage de l\'actualité du jour par un de nos rédacteurs en chef, à lire sans quitter sa boîte de réception et préparé spécialement pour nos abonnés.',
    accessType: 'subscription',
  },
  {
    title: 'Le Zoom des Echos',
    description: 'Recevez un focus sur LE sujet d\'actualité du moment. Une sélection d\'articles à ne pas manquer pour mieux comprendre.',
    accessType: 'register',
  },
  {
    title: 'Votre journal à 21h30',
    description: 'Recevez votre journal en version numérique dès 21h30 la veille de sa parution.',
    note: 'Réservé aux abonnés Entreprises et Pro',
    accessType: 'subscription',
  },
];
