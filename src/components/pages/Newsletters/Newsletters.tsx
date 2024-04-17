import { Header } from '~/components/molecules/Header';
import { lesEchos, investments } from '~/data/newsletters';

import { NewsletterSection } from './NewsletterSection';
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
          <NewsletterSection title="Les Echos" newsletters={lesEchos} />
          <NewsletterSection title="Investir" newsletters={investments} />
        </main>
      </div>
    </div>
  );
}
