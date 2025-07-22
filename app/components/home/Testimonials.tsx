"use client";

import { Star, Quote, ArrowRight, Sparkles } from "lucide-react";
import { 
  motion, 
  useInView, 
  useAnimation,
  easeOut,
  easeInOut,
  cubicBezier
} from "framer-motion";
import { useRef, useEffect, useState } from "react";

// --- TypeScript Interface for type safety ---
interface Testimonial {
    name: string;
    role: string;
    text: string;
    image?: string;
    rating: number;
}

// Enhanced testimonials data with ratings
const testimonials: Testimonial[] = [
    {
        name: "Rina Lestari",
        role: "Wellness Coach",
        text: "I'm in love with the Botanica Collection. 'Lavelle Quiet Bloom' has this calming lavender touch that makes me feel grounded throughout my busy days.",
        rating: 5,
    },
    {
        name: "Sophia Martin",
        role: "Marketing Specialist",
        text: "FIRAAQ completely changed the way I feel about daily scents. 'Valencia Wild Grove' is fresh and energizing — I get compliments every single day!",
        rating: 5,
    },
    {
        name: "Daniel Cho",
        role: "UI/UX Designer",
        text: "I usually don't wear perfume, but 'Mentha Fresh Path' is so clean and light. It's perfect for my workdays — not too strong, just right.",
        rating: 5,
    },
    {
        name: "Mark Evans",
        role: "Photographer",
        text: "The packaging is beautiful, and the scent lasts incredibly long. 'Salvia Morning Root' gives a really earthy, confident vibe — highly recommended!",
        rating: 5,
    },
    {
        name: "Emily Johnson",
        role: "Fashion Blogger",
        text: "'Noxen Silent Sweet' is my go-to for evening events. It's bold yet elegant, and I love how it evolves throughout the night.",
        rating: 5,
    },
    {
        name: "Alex Rivera",
        role: "Creative Director",
        text: "The craftsmanship is exceptional. Each fragrance tells a story and the longing theme really resonates with my artistic soul.",
        rating: 5,
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

const cardVariants = {
    hidden: { 
        opacity: 0, 
        y: 80,
        scale: 0.9,
        rotateX: 15
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        transition: {
            duration: 0.8,
            ease: cubicBezier(0.23, 1, 0.32, 1)
        }
    }
};

const quoteVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
        scale: 1,
        rotate: 0,
        transition: {
            duration: 0.6,
            delay: 0.3,
            ease: easeOut
        }
    }
};

const starVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
        scale: 1,
        opacity: 1,
        transition: {
            delay: i * 0.1 + 0.5,
            duration: 0.4,
            ease: easeOut
        }
    })
};

const textVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            delay: 0.4,
            ease: easeInOut
        }
    }
};

const avatarVariants = {
    hidden: { scale: 0, x: -20 },
    visible: {
        scale: 1,
        x: 0,
        transition: {
            duration: 0.5,
            delay: 0.6,
            ease: easeOut
        }
    }
};

// Modern star rating component with animation
function StarRating({ rating, inView }: { rating: number; inView: boolean }) {
    return (
        <div className="flex items-center space-x-1 mb-6">
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    variants={starVariants}
                    custom={i}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    <Star
                        className={`w-5 h-5 transition-all duration-300 ${
                            i < rating 
                                ? "text-amber-400 fill-amber-400 drop-shadow-sm" 
                                : "text-gray-600"
                        }`}
                    />
                </motion.div>
            ))}
            <motion.span 
                className="text-sm text-gray-400 ml-3 font-medium"
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ delay: 0.8, duration: 0.4, ease: easeOut }}
            >
                ({rating}/5)
            </motion.span>
        </div>
    );
}

export default function TestimonialsGrid() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const controls = useAnimation();
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    return (
        <section 
            ref={ref}
            className="py-20 lg:py-32 w-full bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <motion.div 
                    className="absolute top-20 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                        x: [0, 50, 0],
                        y: [0, -30, 0]
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: easeInOut
                    }}
                />
                <motion.div 
                    className="absolute bottom-32 right-20 w-64 h-64 bg-orange-500/8 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.5, 0.2],
                        x: [0, -40, 0],
                        y: [0, 40, 0]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: easeInOut,
                        delay: 2
                    }}
                />
                <motion.div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-amber-500/5 to-orange-500/5 rounded-full blur-[100px]"
                    animate={{
                        rotate: [0, 360]
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
                animate={controls}
            >
                
                {/* Enhanced Section Badge */}
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
                        Customer Stories
                    </motion.div>
                </motion.div>

                {/* Enhanced Header */}
                <motion.div 
                    className="text-center mb-16"
                    variants={cardVariants}
                >
                    <motion.h2 
                        className="
                            text-4xl md:text-6xl lg:text-7xl 
                            font-bold tracking-tight text-white mb-6 leading-tight
                        "
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
                    >
                        What our customers
                        <br />
                        <motion.span 
                            className="text-transparent bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 bg-clip-text relative"
                            animate={{
                                backgroundPosition: ['0%', '100%', '0%'],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: easeInOut
                            }}
                        >
                            say about us
                        </motion.span>
                    </motion.h2>
                    
                    <motion.p 
                        className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: easeOut }}
                    >
                        Discover why thousands trust FIRAAQ for their signature scent and join our community of fragrance enthusiasts
                    </motion.p>
                </motion.div>

                {/* Enhanced Testimonials Grid */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={`${testimonial.name}-${index}`}
                            className="
                                group relative perspective-1000
                                bg-gray-900/50 backdrop-blur-md 
                                border border-gray-800/50
                                rounded-3xl p-8 
                                transition-all duration-500
                                hover:bg-gray-800/60 hover:border-amber-500/30
                                hover:shadow-2xl hover:shadow-amber-500/10
                            "
                            variants={cardVariants}
                            whileHover={{ 
                                y: -12,
                                rotateY: hoveredCard === index ? 2 : 0,
                                transition: { duration: 0.3, ease: easeOut }
                            }}
                            onHoverStart={() => setHoveredCard(index)}
                            onHoverEnd={() => setHoveredCard(null)}
                        >
                            {/* Animated Quote Icon */}
                            <motion.div 
                                className="
                                    absolute -top-4 -left-4
                                    w-10 h-10 rounded-full
                                    bg-gradient-to-r from-amber-500 to-orange-500
                                    flex items-center justify-center
                                    shadow-lg shadow-amber-500/30
                                "
                                variants={quoteVariants}
                                whileHover={{ 
                                    rotate: 15,
                                    scale: 1.1,
                                    transition: { duration: 0.2, ease: easeOut }
                                }}
                            >
                                <Quote className="w-5 h-5 text-black font-bold" />
                            </motion.div>

                            {/* Hover Glow Effect */}
                            <motion.div
                                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-500/5 to-orange-500/5"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: hoveredCard === index ? 1 : 0 }}
                                transition={{ duration: 0.3, ease: easeInOut }}
                            />

                            {/* Star Rating */}
                            <StarRating rating={testimonial.rating} inView={isInView} />

                            {/* Testimonial Text */}
                            <motion.blockquote 
                                className="
                                    mb-8 text-gray-300 leading-relaxed
                                    text-base lg:text-lg font-light
                                    transition-colors duration-300
                                    group-hover:text-gray-100
                                "
                                variants={textVariants}
                            >
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ 
                                        duration: 0.8, 
                                        delay: index * 0.1 + 0.7,
                                        ease: easeOut
                                    }}
                                >
                                    "{testimonial.text}"
                                </motion.span>
                            </motion.blockquote>

                            {/* Customer Info */}
                            <motion.div 
                                className="flex items-center space-x-4"
                                variants={avatarVariants}
                            >
                                {/* Enhanced Avatar */}
                                <motion.div 
                                    className="
                                        w-12 h-12 rounded-full
                                        bg-gradient-to-br from-amber-400 to-orange-500
                                        flex items-center justify-center
                                        text-black font-bold text-lg
                                        shadow-lg shadow-amber-500/30
                                        border-2 border-amber-400/30
                                    "
                                    whileHover={{ 
                                        scale: 1.1,
                                        rotate: 5,
                                        boxShadow: "0 10px 25px rgba(251, 191, 36, 0.4)",
                                        transition: { duration: 0.2, ease: easeOut }
                                    }}
                                >
                                    {testimonial.name.charAt(0)}
                                </motion.div>
                                
                                <div>
                                    <motion.div 
                                        className="font-semibold text-white text-base mb-1"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                        transition={{ 
                                            delay: index * 0.1 + 0.8,
                                            duration: 0.5,
                                            ease: easeOut
                                        }}
                                    >
                                        {testimonial.name}
                                    </motion.div>
                                    <motion.div 
                                        className="text-gray-400 text-sm font-medium"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                        transition={{ 
                                            delay: index * 0.1 + 0.9,
                                            duration: 0.5,
                                            ease: easeOut
                                        }}
                                    >
                                        {testimonial.role}
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    className="flex justify-center mt-20"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.8, delay: 1, ease: easeOut }}
                >
                    <motion.button
                        className="
                            group relative overflow-hidden
                            px-10 py-4 min-w-[280px]
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
                            Share Your Story
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
