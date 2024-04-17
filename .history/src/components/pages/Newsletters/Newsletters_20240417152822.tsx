import { Header } from './Header';
import './Newsletters.css';

export const Newsletters = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-4 container border border-blue-700 p-4" style={{height: 500}}>
        <Header />

        <section className="flex flex-col">
          <div className="text-with-border">
            <h2 className="text-2xl font-bold uppercase">Les Echos</h2>
          </div>

          <div>azdazda</div>
        </section>
      </div>
    </div>
  );
}
