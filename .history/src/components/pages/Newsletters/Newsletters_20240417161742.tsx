import { Article } from '~/components/molecules/Article';
import { lesEchos, investments } from '~/data/newsletters';

import { Header } from './Header';
import './Newsletters.css';

export const Newsletters = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-4 container p-4">
        <Header />

        <main className="flex flex-col gap-12">
          <section className="flex flex-col gap-8">
            <h2 className="text-xl font-bold uppercase text-with-border pb-4">Les Echos</h2>

            <div className="flex gap-4 flex-wrap justify-around">
              {lesEchos.map(newsletter => (
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

          <section className="flex flex-col gap-8">
            <h2 className="text-xl font-bold uppercase text-with-border pb-4">Investir</h2>

            <div className="flex gap-4 flex-wrap justify-around">
              {investments.map(newsletter => (
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
        </main>
      </div>
    </div>
  );
}
