import Image from "next/image";

// --- TypeScript Interface for type safety ---
interface Collection {
  title: string;
  subtitle: string;
  label: string;
  image: string;
  alt: string;
}

// Data is now typed, and the unused 'gradient' property is removed for clarity
const collections: Collection[] = [
  {
    title: "Noir Collection",
    subtitle: "Bold, mysterious, and deeply captivating — for those who dare.",
    label: "30+ Perfumes",
    image: "/images/limited.jpg", // replace with your actual path
    alt: "A sophisticated bottle from the Noir Collection",
  },
  {
    title: "Essence Collection",
    subtitle: "Fresh, clean, and effortlessly charming for daily confidence.",
    label: "25+ Perfumes",
    image: "/images/oud.jpg", // replace with your actual path
    alt: "A bright, clean bottle from the Essence Collection",
  },
  {
    title: "Botanica Collection",
    subtitle: "Nature-inspired scents with calming, earthy elegance.",
    label: "40+ Perfumes",
    image: "/images/floral.jpg", // replace with your actual path
    alt: "A nature-inspired bottle from the Botanica Collection",
  },
];

export default function CollectionShowcase() {
  return (
    <section className="w-full max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6">
      {/* Badge now uses your brand's theme colors for consistency */}
      <div className="flex justify-center mb-5">
        <span className="bg-brand-bg-darker text-brand-primary px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
          Our Collections
        </span>
      </div>

      {/* Title is already well-themed, no changes needed */}
      <h2 className="text-3xl md:text-5xl font-semibold text-center mb-12 text-brand-primary">
        Discover Fragrances
        <br />
        from our <span className="text-brand-accent">Exclusive Collections</span>
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map((col, i) => (
          <div
            key={col.title}
            className="relative rounded-2xl overflow-hidden flex flex-col justify-end min-h-[480px] shadow-lg group"
          >
            {/* Background image with hover effect */}
            <div className="absolute inset-0">
              <Image
                src={col.image}
                alt={col.alt}
                fill
                className="object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-105"
                priority={i < 3} // Prioritize loading images that are likely above the fold
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Gradient overlay now uses your brand's primary color */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-brand-primary/40 to-transparent z-10" />
            </div>

            {/* Label now uses themed colors */}
            <div className="absolute top-5 left-5 z-20">
              <span className="bg-brand-primary/40 text-brand-secondary text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-md tracking-wide">
                {col.label}
              </span>
            </div>

            {/* Content text now uses themed colors */}
            <div className="relative z-20 p-6">
              <h3 className="text-brand-secondary text-2xl font-bold mb-2 drop-shadow-lg">
                {col.title}
              </h3>
              <p className="text-brand-secondary/90 text-base font-medium drop-shadow-md">
                {col.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
