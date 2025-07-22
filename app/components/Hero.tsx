'use client';

import { ArrowDown, Phone } from "lucide-react";
import { motion, useScroll, useTransform, useSpring, easeInOut } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

/**
 * Modern hero section with Framer Motion animations
 */
export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();

  // Parallax transforms
  const y1 = useTransform(scrollY, [0, 300], [0, -100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0.3]);

  // Spring animations for smooth performance
  const springY1 = useSpring(y1, { stiffness: 100, damping: 30 });
  const springY2 = useSpring(y2, { stiffness: 100, damping: 30 });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Animation variants - Fixed structure and syntax
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  };

  const fadeUpVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: easeInOut
      }
    }
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: easeInOut
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: easeInOut
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: easeInOut
      }
    }
  };

  return (
    <section
      className="relative z-20 w-full min-h-screen flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/8 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
          style={{ y: springY1 }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-500/5 rounded-full blur-2xl"
          variants={floatingVariants}
          animate="animate"
          style={{ y: springY2 }}
        />

        {/* Additional floating elements */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-amber-400/3 via-orange-400/2 to-amber-400/3 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <motion.div
        className="relative w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ opacity }}
      >
        {/* Brand Badge */}
        <motion.div
          className="flex justify-center mb-8"
          variants={fadeUpVariants}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white/80 text-xs tracking-wider uppercase font-medium"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderColor: "rgba(251, 191, 36, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="w-1.5 h-1.5 bg-amber-400 rounded-full"
              variants={pulseVariants}
              animate="animate"
            />
            Luxury Fragrance
          </motion.div>
        </motion.div>

        {/* Main Content Container */}
        <div className="text-center space-y-12">
          {/* Hero Title with Modern Typography */}
          <motion.div
            className="space-y-6"
            variants={fadeUpVariants}
          >
            <motion.h1
              id="hero-heading"
              className="relative text-[clamp(4rem,12vw,10rem)] font-bold tracking-[0.15em] text-white leading-none drop-shadow-2xl"
              variants={titleVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <motion.span
                className="relative inline-block before:absolute before:inset-0 before:bg-gradient-to-r before:from-amber-400/20 before:to-orange-400/20 before:blur-3xl before:-z-10"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(251, 191, 36, 0.3)",
                    "0 0 40px rgba(251, 191, 36, 0.5)",
                    "0 0 20px rgba(251, 191, 36, 0.3)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                FIRAAQ
              </motion.span>
            </motion.h1>

            {/* Decorative Line */}
            <motion.div
              className="flex items-center justify-center gap-4"
              variants={fadeUpVariants}
            >
              <motion.div
                className="h-px w-12 bg-gradient-to-r from-transparent to-amber-400/60"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
              <motion.div
                className="w-2 h-2 bg-amber-400/80 rounded-full"
                variants={pulseVariants}
                animate="animate"
              />
              <motion.div
                className="h-px w-12 bg-gradient-to-l from-transparent to-amber-400/60"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </motion.div>
          </motion.div>

          {/* Subtitle with Refined Typography */}
          <motion.div
            className="max-w-3xl mx-auto space-y-4"
            variants={fadeUpVariants}
          >
            <motion.p
              className="text-white/90 text-xl sm:text-2xl md:text-3xl font-light tracking-[0.1em] leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              THE PAIN OF BEING AWAY
            </motion.p>
            <motion.p
              className="text-white text-lg sm:text-xl md:text-2xl font-normal tracking-wide opacity-90"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              FROM SOMEONE YOU LOVE
            </motion.p>
          </motion.div>

          {/* Modern CTA Section */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
            variants={fadeUpVariants}
          >
            {/* Primary CTA */}
            <motion.div
              className="group relative overflow-hidden px-8 py-4 min-w-[200px] bg-gradient-to-r from-amber-400 to-orange-500 text-black font-semibold text-sm tracking-wider uppercase rounded-full transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-amber-500/25 cursor-pointer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(251, 191, 36, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <Link href="#collection" className="relative z-10 flex items-center justify-center gap-2 w-full h-full">
                Discover Collection
                <motion.div
                  whileHover={{ y: 4 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowDown className="w-4 h-4" />
                </motion.div>
              </Link>

              {/* Hover effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-amber-400"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Secondary CTA */}
            <motion.button
              className="group relative overflow-hidden px-8 py-4 min-w-[200px] bg-transparent border-2 border-white/30 text-white font-medium text-sm tracking-wider uppercase rounded-full backdrop-blur-sm transition-all duration-300"
              whileHover={{
                scale: 1.02,
                borderColor: "rgba(255, 255, 255, 0.8)",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                boxShadow: "0 10px 30px rgba(255, 255, 255, 0.1)"
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <Link href={"#contact"} >
                <span className="flex items-center justify-center gap-2">
                  <motion.div
                    whileHover={{ rotate: 15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Phone className="w-4 h-4" />
                  </motion.div>
                  Contact Us
                </span>
              </Link>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          whileHover={{ borderColor: "rgba(251, 191, 36, 0.8)" }}
        >
          <motion.div
            className="w-1 h-2 bg-white/60 rounded-full mt-2"
            animate={{
              y: [0, 12, 0],
              opacity: [1, 0.3, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
        <motion.p
          className="text-white/50 text-xs uppercase tracking-wider"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll
        </motion.p>
      </motion.div>
    </section>
  );
}