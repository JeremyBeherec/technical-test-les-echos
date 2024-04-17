import { Article } from '~/components/molecules/Article';
import { Section } from '~/components/molecules/Section';
import { lesEchos, investments } from '~/data/newsletters';

import { Header } from '../../molecules/Header';
import './Newsletters.css';

export const Newsletters = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-4 container p-4">
        <Header
          title="Newsletters"
          description="Dans cette page, vous retrouvez l'ensemble des newsletters des Echos et des marques satellites. Ainsi, vous pouvez découvrir toutes nos newsletters selon vos centres d'intérêt et gérer plus facilement l'inscription à vos newsletters."
        />

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
