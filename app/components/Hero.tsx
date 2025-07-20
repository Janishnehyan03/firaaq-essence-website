import Title from './Title';
import Button from './Button';

export default function Hero() {
    return (
        <section className="relative z-20 flex flex-col items-center justify-center px-6 py-12 text-center min-h-screen">
            <div className="max-w-3xl animate-fade-in-up pt-24">
                <Title>
                    Amazing scent that reflects <span className="text-brand-accent">character</span>
                </Title>
                <p className="mt-6 text-lg md:text-xl text-brand-primary/80 max-w-lg mx-auto font-sans">
                    Mocko delivers distinctive fragrances with an elegant, modern touch – made for those who stand out.
                </p>
                <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                    <Button>
                        Discover collection
                    </Button>
                    <Button variant="outline">
                        Contact us
                    </Button>
                </div>
            </div>
        </section>
    );
}