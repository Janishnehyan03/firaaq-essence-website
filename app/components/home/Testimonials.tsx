"use client";

import { Star } from "lucide-react";

// --- TypeScript Interface for type safety ---
interface Testimonial {
    name: string;
    role: string;
    text: string;
}

// Testimonials data (duplicate entry removed)
const testimonials: Testimonial[] = [
    {
        name: "Rina Lestari",
        role: "Wellness Coach",
        text: "I'm in love with the Botanica Collection. ‘Lavelle Quiet Bloom’ has this calming lavender touch that makes me feel grounded.",
    },
    {
        name: "Sophia Martin",
        role: "Marketing Specialist",
        text: "Mocko completely changed the way I feel about daily scents. 'Valencia Wild Grove' is fresh and energizing — I get compliments every day!",
    },
    {
        name: "Daniel Cho",
        role: "UI/UX Designer",
        text: "I usually don’t wear perfume, but ‘Mentha Fresh Path’ is so clean and light. It’s perfect for my workdays — not too strong, just right.",
    },
    {
        name: "Mark Evans",
        role: "Photographer",
        text: "The packaging is beautiful, and the scent lasts long. ‘Salvia Morning Root’ gives a really earthy, confident vibe — highly recommended!",
    },
    {
        name: "Emily Johnson",
        role: "Fashion Blogger",
        text: "‘Noxen Silent Sweet’ is my go-to for evening events. It’s bold yet elegant, and I love how it evolves throughout the night.",
    },
    {
        name: "Daniel Cho",
        role: "UI/UX Designer",
        text: "I usually don’t wear perfume, but ‘Mentha Fresh Path’ is so clean and light. It’s perfect for my workdays — not too strong, just right.",
    },
];

// Star rating component, now using lucide-react and brand theme
function StarRating() {
    return (
        <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    className="w-5 h-5 text-brand-accent fill-current"
                // Using fill-current to fill the SVG with the text color
                />
            ))}
        </div>
    );
}

export default function TestimonialsGrid() {
    return (
        // Section background now uses your brand theme
        <section className="py-20 lg:py-24 w-full bg-gradient-to-b from-brand-bg to-brand-secondary">
            <div className="max-w-6xl mx-auto px-4">
                {/* Badge is now themed */}
                <div className="flex justify-center mb-5">
                    <span className="bg-brand-bg-darker text-brand-primary px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
                        Testimonials
                    </span>
                </div>

                {/* Heading remains the same as it was already well-themed */}
                <h2 className="text-3xl md:text-5xl font-semibold text-center mb-12 text-brand-primary drop-shadow-sm">
                    What our customers say
                    <br />
                    about <span className="text-brand-accent">our products</span>
                </h2>

                {/* Grid layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <div
                            key={`${t.name}-${index}`} // More robust key
                            className="bg-brand-secondary/80 rounded-2xl shadow-lg border border-brand-bg-darker hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-7 backdrop-blur-sm"
                        >
                            <StarRating />
                            <blockquote className="mb-4 text-[1.05rem] font-medium text-brand-primary/90 leading-relaxed break-words italic">
                                "{t.text}"
                            </blockquote>
                            <div className="mt-6">
                                <div className="font-semibold text-brand-primary">{t.name}</div>
                                {/* Secondary text now uses a themed opacity for consistency */}
                                <div className="text-sm text-brand-primary/60">{t.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
