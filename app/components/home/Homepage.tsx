import Image from "next/image";
import { ArrowDown, Play } from "lucide-react";
import Header from "../Header";
import Hero from "../Hero";

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Image with Modern Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Mocko Velour Dark Gold Perfume Bottle on a stone pedestal with orange fabric"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/30" />

        {/* Subtle Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <Header />
      <Hero />
    </main>
  );
}
