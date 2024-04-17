import './Article.css';

export const Article = ({ title, description, type }: ArticleProps) => {
  return (
    <article className="flex flex-col gap-4 justify-center" style={{ width: 350 }}>
      <div className="bg-gray-300 flex justify-center items-center" style={{ height: 200 }}>
        <p className="text-white text-3xl font-bold text-center" style={{ textShadow: '1px 1px 1px #0006' }}>{title}</p>
      </div>

      <div>
        <p className="text-center text-wrap">{description}</p>
      </div>

      <div className="flex justify-center">
        {type === 'register' && <button className="register-button px-8 py-2 rounded-full text-white font-bold">S'inscrire</button>}
        {type === 'subscription' && <button className="subscription-button px-8 py-2 rounded-full text-white font-bold">S'inscrire</button>}
      </div>
    </article>
  );
}

export interface ArticleProps {
  title: string;
  description: string;
  type: 'register' | 'subscription';
}
