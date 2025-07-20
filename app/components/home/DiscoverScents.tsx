'use client';
import Image from "next/image";

const products = [
    {
        name: "Soléne Morning Ray",
        description: "Warmth of sunrise, subtle femininity",
        price: 120,
        image: "/images/perfume1.jpg",
    },
    {
        name: "Noxen Silent Sweet",
        description: "Strong, moody, sweet",
        price: 110,
        image: "/images/perfume2.jpg",
    },
    {
        name: "Salvia Morning Fresh",
        description: "Fresh, Strong, Masculine",
        price: 150,
        oldPrice: 175,
        image: "/images/signature.jpg",
    },
    {
        name: "Noxen Silent",
        description: "",
        price: 99,
        image: "/images/floral.jpg",
    },
    {
        name: "Essence Gold Dust",
        description: "",
        price: 129,
        image: "/images/oud.jpg",
    },
    {
        name: "Botanica Soft Lilac",
        description: "",
        price: 84,
        oldPrice: 100,
        image: "/images/limited.jpg",
    },
];

export default function DiscoverScents() {
    return (
        <section className="w-full max-w-6xl mx-auto pt-16 pb-20 px-2 sm:px-6  rounded-2xl shadow-inner">
            <h2 className="text-3xl md:text-5xl font-semibold text-center mb-12 text-brand-primary animate-fade-in-up">
                We know you love lots of <br />
                <span className="text-brand-accent">discover them now</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                {products.map((product) => (
                    <div
                        key={product.name}
                        className="group relative rounded-2xl overflow-hidden min-h-[420px] flex items-end shadow-lg transition hover:shadow-2xl cursor-pointer bg-brand-primary/90"
                    >
                        {/* Product Image as background */}
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover object-center absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-105"
                            sizes="(min-width: 1024px) 33vw, 100vw"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-brand-primary/30 to-transparent z-10 transition-all duration-500 group-hover:from-brand-primary/60" />

                        {/* Card Content */}
                        <div className="relative z-20 w-full p-5 text-brand-secondary transition-all duration-500 translate-y-0 group-hover:-translate-y-2">
                            <div className="text-lg font-semibold drop-shadow">{product.name}</div>
                            {product.description && (
                                <div className="text-sm text-brand-secondary/80 mt-1">{product.description}</div>
                            )}
                            <div className="mt-2 flex items-center gap-2">
                                <span className="text-brand-accent font-bold text-base">
                                    ${product.price.toFixed(2)}
                                </span>
                                {product.oldPrice && (
                                    <span className="line-through text-sm text-brand-secondary/60">
                                        ${product.oldPrice.toFixed(2)}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
