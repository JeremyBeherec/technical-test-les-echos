import { Heading } from '~/components/atoms/Heading';

export const Header = ({ title, description }: HeaderProps) => {
  return (
    <header className="bg-gray-100 text-center py-6 px-4 rounded-xl">
      <Heading variant="h1">{title}</Heading>

      <p>{description}</p>
    </header>
  );
}

export interface HeaderProps {
  title: string;
  description: string;
}
