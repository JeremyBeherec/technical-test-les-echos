import { Header } from './Header';
import './Newsletters.css';

export const Newsletters = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-4 container border border-blue-700 p-4" style={{height: 500}}>
        <Header />

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold uppercase text-with-border pb-4">Les Echos</h2>

          <div className="flex gap-4">
            <article>
              <div className="bg-gray-300" style={{ width: 400, height: 200 }}>
                La matinale
              </div>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
}
