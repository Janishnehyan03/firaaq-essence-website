import Image from 'next/image';
import Header from '../Header';
import Hero from '../Hero';

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-brand-bg to-brand-bg-darker font-sans">
      {/* Background Image */}
      <Image
        src="/images/hero.jpg"
        alt="Mocko Velour Dark Gold Perfume Bottle on a stone pedestal with orange fabric"
        fill
        priority
        className="object-cover object-center z-0"
        sizes="100vw"
      />
      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-bg via-brand-bg-darker/40 to-brand-bg-darker/60 z-10" />
      <Header />
      <Hero />
    </main>
  );
}