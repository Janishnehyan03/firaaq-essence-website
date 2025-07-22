'use client';

import Image from "next/image";
import { 
  motion, 
  useInView, 
  useScroll,
  useTransform,
  easeOut, 
  easeInOut, 
  cubicBezier 
} from "framer-motion";
import { useRef, useState } from "react";
import { 
  Sparkles, 
  Heart, 
  Globe, 
  Award,
  Quote,
  ArrowRight,
  Users,
  Clock,
  Star
} from "lucide-react";

// Enhanced experience highlights data
const experiences = [
  {
    number: "25+",
    label: "Years of Expertise",
    description: "Crafting exceptional fragrances",
    icon: <Clock className="w-6 h-6" />,
    color: "from-amber-400 to-orange-500"
  },
  {
    number: "200+",
    label: "Unique Scents",
    description: "In our exclusive collections",
    icon: <Star className="w-6 h-6" />,
    color: "from-orange-400 to-red-500"
  },
  {
    number: "50k+",
    label: "Happy Customers",
    description: "Worldwide community",
    icon: <Users className="w-6 h-6" />,
    color: "from-amber-500 to-yellow-500"
  },
];

// Enhanced values/principles data
const values = [
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Artisanal Craft",
    description: "Every bottle tells a story, meticulously crafted by master perfumers using traditional techniques passed down through generations.",
    gradient: "from-amber-400 to-orange-500"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Emotional Connection",
    description: "Fragrances that capture the essence of longing, love, and the beautiful pain of separation, creating deep emotional bonds.",
    gradient: "from-rose-400 to-pink-500"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Heritage",
    description: "Inspired by cultures worldwide, blending Eastern mystique with Western elegance to create truly universal scents.",
    gradient: "from-blue-400 to-purple-500"
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
      ease: easeOut
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: cubicBezier(0.23, 1, 0.32, 1)
    }
  }
};

const statsVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easeOut
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, rotateY: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 1,
      ease: cubicBezier(0.23, 1, 0.32, 1)
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 80, rotateX: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: cubicBezier(0.23, 1, 0.32, 1)
    }
  }
};

export default function AboutSection() {
  const ref = useRef(null);
  const imageRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const isImageInView = useInView(imageRef, { once: true, amount: 0.3 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 50]);

  return (
    <section
      ref={ref}
      className="relative w-full py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black"
      id="about"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-96 h-96 bg-amber-500/8 rounded-full blur-3xl"
          style={{ y: y1 }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.8, 0.3],
            x: [0, 100, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: easeInOut
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-80 h-80 bg-orange-500/6 rounded-full blur-3xl"
          style={{ y: y2 }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.6, 0.2],
            x: [0, -80, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: easeInOut,
            delay: 3
          }}
        />
        
        {/* Additional floating elements */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-amber-500/3 to-transparent rounded-full blur-[100px]"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Enhanced Section Badge */}
        <motion.div 
          className="flex justify-center mb-12"
          variants={itemVariants}
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
              <Award className="w-4 h-4" />
            </motion.div>
            About FIRAAQ
          </motion.div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-24">
          {/* Left Content */}
          <motion.div 
            className="lg:col-span-7 space-y-10"
            variants={itemVariants}
          >
            <div className="space-y-8">
              <motion.h2
                className="
                  text-4xl md:text-6xl lg:text-7xl 
                  font-bold tracking-tight text-white
                  leading-none
                "
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
              >
                The Art of
                <br />
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
                  Longing
                </motion.span>
              </motion.h2>

              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-transparent rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: easeOut }}
              />
            </div>

            <motion.div 
              className="space-y-8 text-gray-300 text-lg md:text-xl leading-relaxed font-light"
              variants={itemVariants}
            >
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4, ease: easeOut }}
              >
                FIRAAQ embodies the profound emotion of separation – that
                beautiful, aching longing for someone you love who is far away.
                Born from the ancient Urdu word that captures this universal
                human experience, our fragrances tell stories of love, memory,
                and connection across distances.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.6, ease: easeOut }}
              >
                Each scent in our collection is a carefully composed symphony of
                emotions, designed to evoke memories, kindle desire, and
                celebrate the intensity of love that transcends physical
                boundaries. We believe that fragrance is the most intimate form
                of poetry – one that speaks directly to the soul.
              </motion.p>
            </motion.div>

            {/* Enhanced Experience Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-8 pt-12"
              variants={containerVariants}
            >
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index} 
                  className="text-center group cursor-pointer"
                  variants={statsVariants}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2, ease: easeOut }
                  }}
                  custom={index}
                >
                  <motion.div className="relative mb-4">
                    <motion.div
                      className={`
                        w-16 h-16 mx-auto rounded-full 
                        bg-gradient-to-r ${exp.color} opacity-20
                        flex items-center justify-center mb-3
                        group-hover:opacity-30 transition-opacity duration-300
                      `}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5, ease: easeOut }}
                    >
                      <div className="text-white">
                        {exp.icon}
                      </div>
                    </motion.div>
                    
                    <motion.div
                      className="
                        text-4xl lg:text-5xl font-bold text-white 
                        mb-2 transition-all duration-300
                        group-hover:text-transparent group-hover:bg-gradient-to-r
                        group-hover:from-amber-400 group-hover:to-orange-500
                        group-hover:bg-clip-text
                      "
                      animate={{
                        scale: [1, 1.02, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    >
                      {exp.number}
                    </motion.div>
                  </motion.div>
                  
                  <div className="text-gray-300 text-sm font-semibold tracking-wide uppercase mb-2">
                    {exp.label}
                  </div>
                  <div className="text-gray-400 text-xs leading-relaxed">
                    {exp.description}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Right Image */}
          <motion.div 
            ref={imageRef}
            className="lg:col-span-5"
            variants={imageVariants}
            initial="hidden"
            animate={isImageInView ? "visible" : "hidden"}
          >
            <div className="relative group perspective-1000">
              <motion.div
                className="
                  relative aspect-[4/5] rounded-3xl overflow-hidden
                  bg-gray-900/50 backdrop-blur-sm border border-gray-800/50
                  transition-all duration-700
                  group-hover:border-amber-500/30
                  shadow-2xl shadow-black/20
                "
                whileHover={{ 
                  rotateY: -5,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: easeOut }
                }}
              >
                <Image
                  src="/images/floral.jpg"
                  alt="Master perfumer crafting FIRAAQ fragrances"
                  fill
                  className="
                    object-cover object-center
                    transition-transform duration-700
                    group-hover:scale-110
                  "
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="
                  absolute inset-0 
                  bg-gradient-to-t from-black/80 via-black/20 to-transparent
                " />
                
                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Enhanced Floating Quote */}
              <motion.div
                className="
                  absolute -bottom-8 -left-8 lg:-left-12
                  bg-gray-900/95 backdrop-blur-md text-white
                  p-8 rounded-3xl max-w-sm
                  border border-amber-500/20
                  shadow-2xl shadow-amber-500/10
                "
                initial={{ opacity: 0, y: 50, x: -50 }}
                animate={isImageInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: 50, x: -50 }}
                transition={{ duration: 0.8, delay: 0.8, ease: easeOut }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(251, 191, 36, 0.2)",
                  transition: { duration: 0.2, ease: easeOut }
                }}
              >
                <Quote className="w-8 h-8 text-amber-400 mb-4" />
                <p className="text-base italic font-light leading-relaxed mb-4 text-gray-200">
                  "Every fragrance we create carries the weight of emotion and
                  the lightness of dreams."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full" />
                  <div className="text-sm text-amber-400 font-semibold">
                    FIRAAQ Masters
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Values Section */}
        <motion.div 
          className="border-t border-gray-800/50 pt-24"
          variants={itemVariants}
        >
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            <h3 className="
              text-3xl md:text-4xl lg:text-5xl 
              font-bold text-white mb-6
              tracking-wide
            ">
              Our{' '}
              <span className="text-transparent bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text">
                Philosophy
              </span>
            </h3>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
              Three pillars that define every FIRAAQ creation and guide our journey in crafting exceptional fragrances
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 lg:gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="
                  group text-center perspective-1000
                  p-10 rounded-3xl
                  bg-gray-900/40 backdrop-blur-md border border-gray-800/50
                  transition-all duration-500
                  hover:bg-gray-800/60 hover:border-amber-500/30
                  shadow-xl hover:shadow-2xl hover:shadow-amber-500/10
                  cursor-pointer
                "
                variants={cardVariants}
                whileHover={{ 
                  y: -15,
                  rotateY: hoveredCard === index ? 5 : 0,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: easeOut }
                }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <motion.div
                  className={`
                    inline-flex items-center justify-center
                    w-20 h-20 rounded-full
                    bg-gradient-to-r ${value.gradient} opacity-20
                    mb-8 transition-all duration-300
                    group-hover:opacity-30 group-hover:scale-110
                  `}
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.2,
                    transition: { duration: 0.5, ease: easeOut }
                  }}
                >
                  <div className="text-white">
                    {value.icon}
                  </div>
                </motion.div>

                <motion.h4
                  className="
                    text-2xl font-bold text-white mb-6
                    tracking-wide transition-all duration-300
                    group-hover:text-transparent group-hover:bg-gradient-to-r
                    group-hover:from-amber-400 group-hover:to-orange-500
                    group-hover:bg-clip-text
                  "
                >
                  {value.title}
                </motion.h4>

                <motion.p
                  className="
                    text-gray-300 leading-relaxed text-base
                    font-light group-hover:text-gray-200
                    transition-colors duration-300
                  "
                >
                  {value.description}
                </motion.p>

                {/* Animated bottom accent */}
                <motion.div
                  className="mt-8 mx-auto w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"
                  animate={{
                    width: hoveredCard === index ? "60%" : "0%"
                  }}
                  transition={{ duration: 0.3, ease: easeOut }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="flex justify-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
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
              boxShadow: "0 20px 40px rgba(251, 191, 36, 0.2)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              Discover Our Story
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
