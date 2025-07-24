"use client";

import Image from "next/image";
import { easeOut, motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

// --- TypeScript Interface for type safety ---
interface Product {
  name: string;
  rateUAE: string;
  rateIndia: string;
  volume: string;
  category: string;
  subtitle?: string;
  label?: string;
  image?: string;
  alt?: string;
  featured?: boolean;
}

// Updated data with FIRAAQ products
const products: Product[] = [
  {
    name: "FIRAAQ MEN",
    subtitle:
      "Bold, sophisticated fragrances crafted for the modern gentleman who commands attention.",
    image: "/images/img3.jpg",
    alt: "FIRAAQ Men's fragrance collection",
    featured: true,
    rateUAE: "120 AED",
    rateIndia: "2999 INR",
    volume: "80 ML",
    category: "Men",
  },
  {
    name: "FIRAAQ UNISEX",
    subtitle:
      "A versatile and timeless fragrance designed for both men and women.",
    image: "/images/img2.jpg",
    alt: "FIRAAQ Unisex fragrance",
    rateUAE: "99 AED",
    rateIndia: "2499 INR",
    volume: "80 ML",
    category: "Unisex",
  },
  {
    name: "FIRAAQ WOMEN",
    subtitle:
      "Elegant and captivating scents designed for the confident, sophisticated woman.",
    image: "/images/img3.jpg",
    alt: "FIRAAQ Women's fragrance",
    rateUAE: "99 AED",
    rateIndia: "2499 INR",
    volume: "80 ML",
    category: "Women",
  },
  
];

export default function ProductShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8, y: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  return (
    <section
      className="relative w-full max-w-7xl mx-auto pt-20 pb-32 px-4 sm:px-6"
      id="collection"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-20 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-60 h-60 bg-orange-500/4 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Enhanced Badge */}
        <motion.div
          className="flex justify-center mb-8"
          variants={badgeVariants}
        >
          <motion.div
            className="
              inline-flex items-center gap-3 px-6 py-3
              bg-gradient-to-r from-amber-500/10 to-orange-500/10
              backdrop-blur-md border border-amber-500/20 rounded-full
              text-amber-400 text-sm font-bold tracking-wider uppercase
              shadow-lg shadow-amber-500/10
            "
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(251, 191, 36, 0.15)",
              borderColor: "rgba(251, 191, 36, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4" />
            </motion.div>
            FIRAAQ Products
          </motion.div>
        </motion.div>

        {/* Enhanced Title */}
        <motion.div className="text-center mb-16" variants={titleVariants}>
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover FIRAAQ
            <br />
            <span className="relative">
              Premium{" "}
              <motion.span
                className="text-transparent bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 bg-clip-text relative"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Fragrance Products
              </motion.span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </span>
          </motion.h2>

          <motion.p
            className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience luxury fragrances crafted with precision. Each 80ml bottle
            delivers exceptional quality at accessible prices across UAE and India.
          </motion.p>
        </motion.div>

        {/* Enhanced Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              className={`
                relative rounded-3xl overflow-hidden flex flex-col justify-end 
                min-h-[520px] group cursor-pointer
                ${product.featured ? "md:col-span-2 lg:col-span-1" : ""}
              `}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              {/* Background image with enhanced hover effect */}
              <div className="absolute inset-0">
                <Image
                  src={product.image || "/images/default.jpg"}
                  alt={product.alt || product.name}
                  fill
                  className="object-cover object-center transition-all duration-700 ease-out group-hover:scale-110"
                  priority={i < 3}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Enhanced gradient overlay */}
                <motion.div
                  className="absolute inset-0 z-10"
                  style={{
                    background: `linear-gradient(
                      to top,
                      rgba(0, 0, 0, 0.9) 0%,
                      rgba(0, 0, 0, 0.7) 30%,
                      rgba(0, 0, 0, 0.4) 60%,
                      rgba(0, 0, 0, 0.1) 100%
                    )`,
                  }}
                />

                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Enhanced content */}
              <motion.div
                className="relative z-20 p-8"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1 + 0.4 }}
              >
                <motion.h3
                  className="text-white text-3xl font-bold mb-4 leading-tight"
                  animate={{
                    textShadow:
                      hoveredIndex === i
                        ? "0 0 20px rgba(251, 191, 36, 0.4)"
                        : "0 4px 8px rgba(0, 0, 0, 0.3)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {product.name}
                </motion.h3>

                <motion.p
                  className="text-white/90 text-base font-medium mb-4 leading-relaxed"
                  animate={{
                    opacity: hoveredIndex === i ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {product.subtitle}
                </motion.p>

                {/* Pricing information */}
                <motion.div
                  className="flex flex-wrap gap-3 mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: hoveredIndex === i ? 1 : 0.7,
                    y: hoveredIndex === i ? 0 : 10,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white/10 backdrop-blur-sm text-white text-sm px-3 py-1.5 rounded-full border border-white/20">
                    UAE: {product.rateUAE}
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm text-white text-sm px-3 py-1.5 rounded-full border border-white/20">
                    India: {product.rateIndia}
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm text-white text-sm px-3 py-1.5 rounded-full border border-white/20">
                    {product.volume}
                  </div>
                </motion.div>

                {/* Call to action button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: hoveredIndex === i ? 1 : 0,
                    y: hoveredIndex === i ? 0 : 20,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.button
                    className="
                      inline-flex items-center gap-2 px-6 py-3
                      bg-gradient-to-r from-amber-400 to-orange-500
                      text-black font-semibold text-sm rounded-full
                      shadow-lg hover:shadow-xl
                    "
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 30px rgba(251, 191, 36, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      const message = encodeURIComponent(
                        `Hi, I'm interested in:\n` +
                        `Product: ${product.name}\n` +
                        `Category: ${product.category}\n` +
                        `Volume: ${product.volume}\n` +
                        `UAE Price: ${product.rateUAE}\n` +
                        `India Price: ${product.rateIndia}`
                      );
                      window.open(`https://wa.me/918129775892?text=${message}`, "_blank");
                    }}
                  >
                    Shop Now
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Products Button */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="
              group relative overflow-hidden
              px-12 py-4 min-w-[250px]
              bg-transparent border-2 border-amber-400/30
              text-white font-semibold text-lg tracking-wide uppercase
              rounded-full backdrop-blur-sm
              transition-all duration-500
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
              View All FIRAAQ Products
              <motion.div
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </span>

            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-orange-500/20"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
