import { Article } from '~/components/molecules/Article';

import { Header } from './Header';
import './Newsletters.css';

export const Newsletters = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-4 container border border-blue-700 p-4">
        <Header />

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-bold uppercase text-with-border pb-4">Les Echos</h2>

          <div className="flex gap-4">
            <Article
              title="La matinale"
              description="Chaque matin, les articles qui font la une de l'actualité pour ne rien rater des titres de la matinées."
              type="register"
            />

            <Article
              title="La matinale des abonnés"
              description="Tout ce qu'il faut savoir pour démarrer la journée dans notre condensé de l'actualité préparé spécialement pour nos abonnés."
              type="register"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
