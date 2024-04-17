import { Heading } from '~/components/atoms/Heading';
import { Article } from '~/components/molecules/Article';
import { Section } from '~/components/molecules/Section';
import { lesEchos, investments } from '~/data/newsletters';

import { Header } from './Header';
import './Newsletters.css';

export const Newsletters = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-4 container p-4">
        <Header />

        <main className="flex flex-col gap-12">
          <Section title="Les Echos">
            <div className="flex gap-8 flex-wrap justify-around">
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
          </Section>

          <Section title="Investir">
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
          </Section>
        </main>
      </div>
    </div>
  );
}
