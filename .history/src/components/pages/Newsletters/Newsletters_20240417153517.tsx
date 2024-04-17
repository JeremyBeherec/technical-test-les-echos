import { Header } from './Header';
import './Newsletters.css';

export const Newsletters = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-4 container border border-blue-700 p-4" style={{height: 500}}>
        <Header />

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-bold uppercase text-with-border pb-4">Les Echos</h2>

          <div className="flex gap-4">
            <article className="flex flex-col justify-center">
              <div className="bg-gray-300 flex justify-center items-center" style={{ width: 350, height: 200 }}>
                <p className="text-white text-3xl font-bold" style={{ textShadow: '1px 1px 1px #0006' }}>La matinale</p>
              </div>

              <p className="text-center text-wrap">Chaque matin, les articles qui font la une de l'actualité pour ne rien rater des titres de la matinées.</p>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
}
