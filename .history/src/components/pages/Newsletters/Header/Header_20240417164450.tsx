import { Heading } from '~/components/atoms/Heading'

export const Header = () => {
  return (
    <header className="bg-gray-100 text-center py-6 px-4 rounded-xl">
      <Heading variant="h1">Newsletters</Heading>

      <p>Dans cette page, vous retrouvez l'ensemble des newsletters des Echos et des marques satellites. Ainsi, vous pouvez découvrir toutes nos newsletters selon vos centres d'intérêt et gérer plus facilement l'inscription à vos newsletters.</p>
    </header>
  );
}
