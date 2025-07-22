"use client";

import Image from "next/image";
import {
  motion,
  useInView,
  easeOut,
  easeInOut,
  cubicBezier,
  useAnimation,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ShoppingCart, Heart, Star, Sparkles, ArrowRight } from "lucide-react";

// Enhanced product interface
interface Product {
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  image: string;
  category?: string;
  rating?: number;
  isBestseller?: boolean;
  isNew?: boolean;
}

const products: Product[] = [
  {
    name: "Soléne Morning Ray",
    description: "Warmth of sunrise, subtle femininity",
    price: 120,
    image: "/images/perfume1.jpg",
    category: "Essence",
    rating: 4.8,
    isBestseller: true,
  },
  {
    name: "Noxen Silent Sweet",
    description: "Strong, moody, sweet",
    price: 110,
    image: "/images/perfume2.jpg",
    category: "Noir",
    rating: 4.9,
    isNew: true,
  },
  {
    name: "Salvia Morning Fresh",
    description: "Fresh, Strong, Masculine",
    price: 150,
    oldPrice: 175,
    image: "/images/signature.jpg",
    category: "Botanica",
    rating: 4.7,
  },
  {
    name: "Noxen Silent",
    description: "Mysterious and captivating essence",
    price: 99,
    image: "/images/floral.jpg",
    category: "Noir",
    rating: 4.6,
  },
  {
    name: "Essence Gold Dust",
    description: "Luxury in every drop",
    price: 129,
    image: "/images/oud.jpg",
    category: "Essence",
    rating: 4.9,
    isBestseller: true,
  },
  {
    name: "Botanica Soft Lilac",
    description: "Nature's gentle embrace",
    price: 84,
    oldPrice: 100,
    image: "/images/limited.jpg",
    category: "Botanica",
    rating: 4.5,
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.12,
      ease: easeOut,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 100,
    scale: 0.8,
    rotateY: -15,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.8,
      ease: cubicBezier(0.23, 1, 0.32, 1),
    },
  },
};

const badgeVariants = {
  hidden: { scale: 0, rotate: -90 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      delay: 0.3,
      ease: easeOut,
    },
  },
};

const overlayVariants = {
  hover: {
    background: [
      "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.4), transparent)",
      "linear-gradient(to top, rgba(251,191,36,0.1), rgba(251,191,36,0.05), transparent)",
    ],
    transition: { duration: 0.3, ease: easeInOut },
  },
};

export default function DiscoverScents() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [likedItems, setLikedItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const toggleLike = (index: number) => {
    const newLikedItems = new Set(likedItems);
    if (newLikedItems.has(index)) {
      newLikedItems.delete(index);
    } else {
      newLikedItems.add(index);
    }
    setLikedItems(newLikedItems);
  };

  return (
    <section
      ref={ref}
      className="relative w-full max-w-7xl mx-auto pt-20 pb-32 px-4 sm:px-6 overflow-hidden"
      id="discover"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-40 w-96 h-96 bg-amber-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: easeInOut,
          }}
        />
        <motion.div
          className="absolute bottom-1/3 -right-40 w-80 h-80 bg-orange-500/6 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -80, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: easeInOut,
            delay: 3,
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative z-10"
      >
        {/* Section Badge */}
        <motion.div
          className="flex justify-center mb-8"
          variants={cardVariants}
        >
          <motion.div
            className="
              inline-flex items-center gap-3 px-6 py-3
              bg-gradient-to-r from-amber-500/15 to-orange-500/15
              backdrop-blur-md border border-amber-500/30 rounded-full
              text-amber-400 text-sm font-bold tracking-wider uppercase
              shadow-lg shadow-amber-500/10
            "
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(251, 191, 36, 0.2)",
              borderColor: "rgba(251, 191, 36, 0.5)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4" />
            </motion.div>
            Signature Collection
          </motion.div>
        </motion.div>

        {/* Enhanced Title */}
        <motion.div className="text-center mb-16" variants={cardVariants}>
          <motion.h2
            className="
              text-4xl md:text-6xl lg:text-7xl font-bold 
              text-white mb-6 leading-tight
            "
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
          >
            We know you love lots of
            <br />
            <motion.span
              className="text-transparent bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 bg-clip-text relative"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: easeInOut,
              }}
            >
              discover them now
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5, ease: easeOut }}
          >
            Explore our curated selection of premium fragrances, each crafted to
            tell a unique story
          </motion.p>
        </motion.div>

        {/* Enhanced Products Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              className="
                group relative rounded-3xl overflow-hidden 
                min-h-[480px] flex items-end
                bg-gray-900/50 backdrop-blur-sm
                border border-gray-800/50
                transition-all duration-500
                hover:border-amber-500/30
                hover:shadow-2xl hover:shadow-amber-500/20
                cursor-pointer perspective-1000
              "
              variants={cardVariants}
              whileHover={{
                y: -15,
                rotateY: 3,
                scale: 1.02,
                transition: { duration: 0.3, ease: easeOut },
              }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              {/* Product Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover object-center transition-all duration-700 group-hover:scale-110"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>

              {/* Animated Overlay */}
              <motion.div
                className="absolute inset-0 z-10"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.2) 100%)",
                }}
                variants={overlayVariants}
                animate={hoveredCard === index ? "hover" : ""}
              />

              {/* Badges */}
              <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-20">
                {/* Category Badge */}
                <motion.div
                  className="
                    px-3 py-1.5 rounded-full text-xs font-semibold
                    bg-black/50 backdrop-blur-md text-white
                    border border-white/20
                  "
                  variants={badgeVariants}
                >
                  {product.category}
                </motion.div>
              </div>

              

              {/* Card Content */}
              <motion.div
                className="relative z-20 w-full p-8 text-white"
                initial={{ y: 20, opacity: 0.8 }}
                animate={{
                  y: hoveredCard === index ? -10 : 0,
                  opacity: 1,
                }}
                transition={{ duration: 0.3, ease: easeOut }}
              >
                <motion.h3
                  className="text-2xl font-bold mb-3 leading-tight"
                  animate={{
                    textShadow:
                      hoveredCard === index
                        ? "0 0 20px rgba(251, 191, 36, 0.5)"
                        : "0 4px 8px rgba(0, 0, 0, 0.5)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {product.name}
                </motion.h3>

                <motion.p
                  className="text-gray-300 text-base mb-4 leading-relaxed"
                  animate={{
                    opacity: hoveredCard === index ? 1 : 0.8,
                  }}
                >
                  {product.description}
                </motion.p>

                {/* Price Section */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-amber-400 font-bold text-xl">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.oldPrice && (
                      <span className="line-through text-gray-500 text-base">
                        ${product.oldPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="flex justify-center mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 1.2, ease: easeOut }}
        >
          <motion.button
            className="
              group relative overflow-hidden
              px-12 py-4 min-w-[300px]
              bg-transparent border-2 border-amber-500/40
              text-white font-semibold text-lg tracking-wide uppercase
              rounded-full backdrop-blur-sm
            "
            whileHover={{
              borderColor: "rgba(251, 191, 36, 0.8)",
              backgroundColor: "rgba(251, 191, 36, 0.1)",
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(251, 191, 36, 0.2)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              Explore Full Collection
              <motion.div
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </span>

            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, ease: easeOut }}
            />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
