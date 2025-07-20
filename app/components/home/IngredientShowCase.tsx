import Image from "next/image";
import Button from "../Button";

const ingredientImages = [
  { src: "/images/flower1.jpg", alt: "White blossom", className: "top-12 left-[18%] w-32 h-32" },
  { src: "/images/lemon.jpg", alt: "Lemon", className: "top-16 right-[18%] w-28 h-28" },
  { src: "/images/bergamot.jpg", alt: "Bergamot oil", className: "top-48 right-8 w-32 h-32" },
  { src: "/images/lavender.jpg", alt: "Lavender", className: "bottom-32 right-24 w-32 h-32" },
  { src: "/images/jasmine.jpg", alt: "Jasmine flower", className: "bottom-8 right-[18%] w-32 h-32" },
  { src: "/images/flower2.jpg", alt: "Small blossoms", className: "bottom-10 left-[25%] w-28 h-28" },
  { src: "/images/rose.jpg", alt: "Red roses", className: "bottom-36 left-8 w-32 h-32" },
  { src: "/images/cinnamon.jpg", alt: "Cinnamon", className: "top-44 left-8 w-28 h-28" },
];

export default function IngredientShowcase() {
  return (
    <section className="relative min-h-[700px] w-full bg-[#181818] overflow-hidden flex items-center justify-center py-20">
      {/* Floating ingredient images */}
      {ingredientImages.map((img, idx) => (
        <div
          key={img.src}
          className={`absolute rounded-2xl overflow-hidden shadow-lg ${img.className} hidden md:block`}
          style={{ zIndex: 10 }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            sizes="128px"
            priority={idx < 2}
          />
        </div>
      ))}
      {/* Center Content */}
      <div className="relative z-20 max-w-2xl mx-auto flex flex-col items-center text-center">
        <span className="px-6 py-1 rounded-full border border-brand-accent text-sm font-medium text-white/80 bg-white/5 mb-6 shadow-sm">
          50K+ customers are satisfied with Mocko
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Only high-quality<br />parfume ingredients
        </h2>
        <p className="text-white/70 text-lg mb-8 max-w-xl">
          We create perfumes that can be enjoyed to the fullest,<br />
          using ingredients whose quality is beyond doubt.
        </p>
       <Button variant="outline" className="text-white/80 hover:text-white border-white/20 hover:bg-white/10 transition-colors">
         View our story
       </Button>
      </div>
    </section>
  );
}