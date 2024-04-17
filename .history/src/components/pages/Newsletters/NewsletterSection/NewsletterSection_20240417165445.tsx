import { Article } from '~/components/molecules/Article';
import { Section } from '~/components/molecules/Section';
import type { Newsletter } from '~/types';

export const NewsletterSection = ({ title, newsletters }: NewsletterSectionProps) => {
  return (
    <Section title={title}>
      <div className="flex gap-8 flex-wrap justify-around">
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
    </Section>
  );
}

export interface NewsletterSectionProps {
  title: string;
  newsletters: Newsletter[];
}
