'use client';

import Image from "next/image";
import Button from "../Button";
import { 
  motion, 
  useInView, 
  useScroll,
  useTransform,
  easeOut, 
  easeInOut, 
  cubicBezier 
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Sparkles, Award, ChevronLeft, ChevronRight } from "lucide-react";

const ingredientImages = [
  { 
    src: "/images/flower1.jpg", 
    alt: "White blossom", 
    name: "White Blossom",
    description: "Pure elegance",
    className: "top-12 left-[18%] w-32 h-32"
  },
  { 
    src: "/images/lemon.jpg", 
    alt: "Lemon", 
    name: "Citrus Lemon",
    description: "Fresh zest",
    className: "top-16 right-[18%] w-28 h-28"
  },
  { 
    src: "/images/bergamot.jpg", 
    alt: "Bergamot oil", 
    name: "Bergamot Oil",
    description: "Refined essence",
    className: "top-48 right-8 w-32 h-32"
  },
  { 
    src: "/images/lavender.jpg", 
    alt: "Lavender", 
    name: "French Lavender",
    description: "Calming grace",
    className: "bottom-32 right-24 w-32 h-32"
  },
  { 
    src: "/images/jasmine.jpg", 
    alt: "Jasmine flower", 
    name: "Jasmine Flower",
    description: "Exotic allure",
    className: "bottom-8 right-[18%] w-32 h-32"
  },
  { 
    src: "/images/flower2.jpg", 
    alt: "Small blossoms", 
    name: "Spring Blossoms",
    description: "Delicate beauty",
    className: "bottom-10 left-[25%] w-28 h-28"
  },
  { 
    src: "/images/rose.jpg", 
    alt: "Red roses", 
    name: "Damask Rose",
    description: "Romantic heart",
    className: "bottom-36 left-8 w-32 h-32"
  },
  { 
    src: "/images/cinnamon.jpg", 
    alt: "Cinnamon", 
    name: "Ceylon Cinnamon",
    description: "Warm spice",
    className: "top-44 left-8 w-28 h-28"
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
      ease: easeOut
    }
  }
};

const imageVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0,
    rotate: -180,
    y: 100
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    y: 0,
    transition: {
      duration: 0.8,
      ease: cubicBezier(0.23, 1, 0.32, 1)
    }
  }
};

const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    rotate: [-2, 2, -2],
    scale: [1, 1.05, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: easeInOut
    }
  }
};

const contentVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOut
    }
  }
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8, y: -20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut
    }
  }
};

export default function IngredientShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showMobileCarousel, setShowMobileCarousel] = useState(false);
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 50]);

  // Auto-advance mobile carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % ingredientImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % ingredientImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + ingredientImages.length) % ingredientImages.length);
  };

  return (
    <section 
      ref={ref}
      className="relative min-h-[800px] w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden flex items-center justify-center py-20" 
      id="ingredients"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"
          style={{ y: y1 }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: easeInOut
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/4 rounded-full blur-3xl"
          style={{ y: y2 }}
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: easeInOut,
            delay: 2
          }}
        />
      </div>

      {/* Desktop Floating Ingredient Images */}
      <motion.div
        className="hidden lg:block absolute inset-0"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {ingredientImages.map((img, idx) => (
          <motion.div
            key={img.src}
            className={`absolute rounded-3xl overflow-hidden shadow-2xl border border-white/10 ${img.className}`}
            variants={imageVariants}
            whileHover={{ 
              scale: 1.1,
              zIndex: 30,
              boxShadow: "0 25px 50px rgba(251, 191, 36, 0.3)",
              transition: { duration: 0.3, ease: easeOut }
            }}
            style={{ 
              zIndex: 10,
              animationDelay: `${idx * 0.2}s`
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-500 hover:scale-110"
              sizes="128px"
              priority={idx < 2}
            />
            
            {/* Hover overlay with info */}
            <motion.div
              className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <h4 className="text-sm font-bold mb-1">{img.name}</h4>
              <p className="text-xs text-amber-400">{img.description}</p>
            </motion.div>

            {/* Floating animation */}
            <motion.div
              className="absolute inset-0"
              variants={floatingVariants}
              animate="animate"
              style={{ animationDelay: `${idx * 0.5}s` }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile Ingredient Carousel */}
      <motion.div 
        className="lg:hidden absolute top-10 left-0 right-0 z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.8, delay: 0.5, ease: easeOut }}
      >
        <div className="flex items-center justify-center gap-4 px-4">
          <motion.button
            onClick={prevImage}
            className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(251, 191, 36, 0.2)" }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>

          <motion.div 
            className="relative w-32 h-32 rounded-2xl overflow-hidden shadow-lg border border-white/20"
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            <Image
              src={ingredientImages[currentImageIndex].src}
              alt={ingredientImages[currentImageIndex].alt}
              fill
              className="object-cover"
              sizes="128px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-2 left-2 right-2 text-center">
              <h4 className="text-white text-xs font-semibold">
                {ingredientImages[currentImageIndex].name}
              </h4>
              <p className="text-amber-400 text-xs">
                {ingredientImages[currentImageIndex].description}
              </p>
            </div>
          </motion.div>

          <motion.button
            onClick={nextImage}
            className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(251, 191, 36, 0.2)" }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {ingredientImages.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentImageIndex ? 'bg-amber-400 scale-125' : 'bg-white/30'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </motion.div>

      {/* Tablet View - Grid Layout */}
      <motion.div 
        className="hidden md:grid lg:hidden absolute top-10 left-4 right-4 grid-cols-4 gap-3 z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {ingredientImages.slice(0, 4).map((img, idx) => (
          <motion.div
            key={img.src}
            className="relative w-20 h-20 rounded-xl overflow-hidden shadow-lg border border-white/10"
            variants={imageVariants}
            whileHover={{ 
              scale: 1.1,
              zIndex: 20,
              transition: { duration: 0.2, ease: easeOut }
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="80px"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-xs font-semibold text-center px-1">
                {img.name}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Center Content */}
      <motion.div 
        className="relative z-20 max-w-4xl mx-auto flex flex-col items-center text-center px-4 mt-20 lg:mt-0"
        variants={contentVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Enhanced Badge */}
        <motion.div
          className="
            inline-flex items-center gap-3 px-6 py-3 mb-8
            bg-gradient-to-r from-amber-500/15 to-orange-500/15
            backdrop-blur-md border border-amber-500/30 rounded-full
            text-amber-400 text-sm font-bold tracking-wider
            shadow-lg shadow-amber-500/10
          "
          variants={badgeVariants}
          whileHover={{
            scale: 1.05,
            backgroundColor: "rgba(251, 191, 36, 0.2)",
            borderColor: "rgba(251, 191, 36, 0.5)",
          }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Award className="w-4 h-4" />
          </motion.div>
          50K+ customers are satisfied with FIRAAQ
        </motion.div>

        <motion.h2 
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
        >
          Only{' '}
          <motion.span
            className="text-transparent bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 bg-clip-text"
            animate={{
              backgroundPosition: ['0%', '100%', '0%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: easeInOut
            }}
          >
            high-quality
          </motion.span>
          <br />
          perfume ingredients
        </motion.h2>

        <motion.p 
          className="text-gray-300 text-lg md:text-xl mb-10 max-w-3xl leading-relaxed font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5, ease: easeOut }}
        >
          We create perfumes that can be enjoyed to the fullest, using ingredients whose quality is beyond doubt. 
          Each essence is carefully selected from the finest sources around the world.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.7, ease: easeOut }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="outline" 
              className="
                text-white hover:text-black 
                border-amber-500/50 hover:border-amber-400
                hover:bg-gradient-to-r hover:from-amber-400 hover:to-orange-500
                transition-all duration-500 px-8 py-4 text-lg
                backdrop-blur-sm shadow-lg hover:shadow-2xl hover:shadow-amber-500/25
              "
            >
              <span className="flex items-center gap-3">
                <Sparkles className="w-5 h-5" />
                View our story
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

     
    </section>
  );
}
