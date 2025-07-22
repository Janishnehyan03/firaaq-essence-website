import Header from '../Header';
import Hero from '../Hero';

export default function HomePage() {
  return (
    <main className="min-h-screen w-full bg-black font-sans text-white">
      <div className="relative z-10">
        <Header />
        <Hero />
      </div>
    </main>
  );
}
