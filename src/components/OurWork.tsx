import { ArrowRight } from 'lucide-react';

export default function OurWork() {
  return (
    <section id="work" className="relative bg-white py-24 border-t border-line overflow-hidden">
      
      {/* Subtle Background Image (ZegeTech Style) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Team working" 
          className="h-full w-full object-cover opacity-[0.03] grayscale"
        />
        {/* Gradient overlay to ensure text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="max-w-4xl">
          <h2 className="font-display text-4xl font-bold tracking-tight text-titanium sm:text-5xl">
            Our Work
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-silver">
            Our approach involves working with you to understand the vision for your ideas in order to build well-placed and thought-out products through a well-defined process from idea to launch.
          </p>
        </div>

        <div className="mt-16 max-w-4xl">
          <h3 className="font-display text-2xl font-bold text-titanium">
            We build platforms
          </h3>
          
          {/* Process Flow - Clean and Minimal */}
          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-3 font-mono text-sm font-bold uppercase tracking-widest text-accent">
            <span>Idea</span>
            <span className="text-line-bright/50">·</span>
            <span>Scope</span>
            <span className="text-line-bright/50">·</span>
            <span>Discovery</span>
            <span className="text-line-bright/50">·</span>
            <span>Design</span>
            <span className="text-line-bright/50">·</span>
            <span>Develop</span>
            <span className="text-line-bright/50">·</span>
            <span>Pilot</span>
            <span className="text-line-bright/50">·</span>
            <span>Launch</span>
            <span className="text-line-bright/50">·</span>
            <span>Grow</span>
            <span className="text-line-bright/50">·</span>
            <span className="text-titanium">PROFIT!</span>
          </div>

          <p className="mt-8 text-lg leading-relaxed text-silver">
            We develop products from idea to launch. We use agile principles in taking the idea through sprints, building prototypes and running proof-of-concepts, deploying to staging environments for piloting within record time and thereafter go on to launch. 
            <br/><br/>
            We then provide support, training and consultancy to the technology and business teams. We help you innovate by working with you to build bold innovative products that can plug into your business to harness new opportunities and expand your horizon.
          </p>

          <div className="mt-10">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 bg-accent px-8 py-4 text-base font-bold text-white shadow-lg transition-all duration-300 hover:bg-accent-hover hover:-translate-y-0.5"
            >
              Let's build your idea
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}