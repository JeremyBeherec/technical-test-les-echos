import { Heading } from '~/components/atoms/Heading';

import './Newsletters.css';

export const Section = ({ title, children }: SectionProps) => {
  return (
    <section className="flex flex-col gap-6">
      <Heading variant="h2" className="heading-with-border">{title}</Heading>

      <div className="flex gap-8 flex-wrap justify-around">
        {children}
      </div>
    </section>
  );
}


export interface SectionProps {
  title: string;
  children: React.ReactNode;
}
