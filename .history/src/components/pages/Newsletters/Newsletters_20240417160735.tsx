import { Article } from '~/components/molecules/Article';
import { newsletters } from '~/data/newsletters';

import { Header } from './Header';
import './Newsletters.css';

export const Newsletters = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-4 container border border-blue-700 p-4">
        <Header />

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-bold uppercase text-with-border pb-4">Les Echos</h2>

          <div className="flex gap-4 flex-wrap justify-around">
            {newsletters.map(newsletter => (
              <Article
                key={newsletter.id}
                title={newsletter.title}
                description={newsletter.description}
                note={newsletter.note}
                accessType={newsletter.accessType}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
