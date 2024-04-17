import clsx from 'clsx';

export const Header = ({ className }: HeaderProps) => {
  return (
    <header className={clsx('bg-gray-100 text-center py-6 px-4 rounded-lg', className)}>
      <h1 className="text-3xl font-bold uppercase mb-4">Newsletters</h1>

      <p>Dans cette page, vous retrouvez l'ensemble des newsletters des Echos et des marques satellites. Ainsi, vous pouvez découvrir toutes nos newsletters selon vos centres d'intérêt et gérer plus facilement l'inscription à vos newsletters.</p>
    </header>
  );
}

export interface HeaderProps {
  className?: string;
}
