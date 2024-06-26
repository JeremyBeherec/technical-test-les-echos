import { tv } from 'tailwind-variants';

import type { NewsletterAccessType } from '~/types';

import './Article.css';

const button = tv({
  base: 'px-8 py-2 rounded-full font-bold text-sm',
  variants: {
    accessType: {
      register: 'text-white register-button',
      subscription: 'text-black subscription-button',
    },
  },
});

const buttonText = {
  register: 'S\'inscrire',
  subscription: 'S\'abonner',
};

export const Article = ({ title, description, note, accessType }: ArticleProps) => {
  return (
    <article className="flex flex-col justify-between article">
      <div className="flex flex-col gap-4">
        <div className="bg-gray-300 flex justify-center items-center thumbnail-wrapper">
          <p className="text-white text-3xl font-bold text-center">{title}</p>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center text-wrap">{description}</p>
          <strong className="text-center text-wrap">{note}</strong>
        </div>
      </div>

      {accessType !== 'public' && (
        <div className="flex justify-center">
          <button className={button({ accessType })}>{buttonText[accessType]}</button>
        </div>
      )}
    </article>
  );
}

export interface ArticleProps {
  title: string;
  description: string;
  note?: string;
  accessType: NewsletterAccessType;
}
