import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-dark">
      
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Shika Soft Team" 
          className="h-full w-full object-cover opacity-40"
        />
        {/* Dark Overlay to make text readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent" />
      </div>

      {/* TEXT CONTENT */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
        <h1 className="font-display text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl text-balance">
          Develop amazing products. <span className="text-accent">Fast.</span>
        </h1>
        
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-stone-300 sm:text-xl">
          Unlock your business technology potential. We are a full-stack team of developers and designers based in Nairobi, working all over Africa.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 bg-accent px-8 py-4 text-base font-bold text-white shadow-lg transition-all duration-300 hover:bg-accent-hover hover:-translate-y-0.5"
          >
            Start your project
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}