import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex items-center bg-gradient-to-br from-[#171717] via-[#221e1e] to-[#101012] text-gray-100 min-h-[100dvh] px-4 sm:px-8 lg:px-16 pt-safe pb-20 sm:py-28"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-24">
        {/* === Column 1: Text & Mobile Image === */}
        <div className="motion-safe:animate-fade-in-up text-center md:text-left max-w-xl mx-auto md:mx-0">
          {/* Fragrant "pill" tag */}
          <div className="inline-block bg-white/10 border border-amber-300/40 text-amber-300 font-semibold uppercase tracking-widest text-xs px-4 py-2 mb-8 rounded-full shadow-sm">
            Artisanal Oud
          </div>

          <h1 className="font-serif font-bold text-white text-4xl xs:text-5xl md:text-7xl tracking-tight leading-tight drop-shadow-lg">
            FIRAAQ
            <span className="block mt-4 text-lg font-sans text-amber-300 font-normal tracking-wider md:mt-6">
              Eau de Parfum
            </span>
          </h1>

          {/* Mobile Image (below title) */}
          <div className="mt-10 md:hidden mx-auto w-full max-w-xs rounded-[2.25rem] shadow-2xl shadow-black/60 border border-gray-800 ring-1 ring-amber-100/10 overflow-hidden aspect-[3/4] relative">
            <Image
              src="/images/oud.jpg"
              alt="A bottle of Oud perfume elegantly displayed"
              fill
              priority
              sizes="(min-width: 768px) 0px, 100vw"
              className="object-cover object-top"
            />
            {/* Decorative glow */}
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-amber-300/40 via-transparent to-transparent blur-lg pointer-events-none"/>
          </div>

          <p className="mt-8 text-base sm:text-lg md:text-xl leading-relaxed text-gray-200/90 font-sans max-w-lg mx-auto md:mx-0">
            The profound ache of separation from someone you{" "}
            <span className="font-semibold text-amber-300">love</span>, captured in an unforgettable essence.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row sm:justify-center md:justify-start items-stretch sm:items-center gap-4 sm:gap-5 w-full">
            <button
              aria-label="Discover the Firaaq collection"
              className="w-full sm:w-auto bg-gradient-to-r from-amber-500 via-amber-400 to-amber-700 text-white font-semibold uppercase tracking-wide text-base px-10 py-4 rounded-full shadow-lg hover:from-amber-600 hover:to-amber-700 hover:scale-105 transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-500/40"
            >
              Discover The Collection
            </button>
            <button
              aria-label="Contact us about Firaaq"
              className="w-full sm:w-auto bg-transparent border-2 border-amber-200 text-amber-200 font-semibold uppercase tracking-wide text-base px-10 py-4 rounded-full shadow-sm hover:bg-white/5 hover:text-amber-100 hover:border-amber-300 transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-200/30"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* === Column 2: Desktop Image with Decoration === */}
        <div className="hidden md:flex justify-center items-center motion-safe:animate-fade-in">
          <div className="relative w-full max-w-md lg:max-w-lg rounded-[2.25rem] shadow-2xl shadow-black/60 border border-gray-800 ring-1 ring-amber-100/10 overflow-hidden aspect-[3/4]">
            <Image
              src="/images/oud.jpg"
              alt="A bottle of Oud perfume elegantly displayed"
              fill
              sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw"
              className="object-cover object-top"
              priority={false}
            />
            {/* Decorative golden glow */}
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-amber-200/40 via-transparent to-transparent blur-lg pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
