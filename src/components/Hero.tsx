import { ArrowRight, BookOpen } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* geometric grid backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 geo-grid radial-fade opacity-70" />
        <div className="absolute inset-0 ortho-grid radial-fade-top opacity-40" />
        {/* concentrated radial highlight behind content */}
        <div className="absolute left-[20%] top-1/2 h-[500px] w-[700px] -translate-y-1/2 rounded-full radial-spot" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* logo node / S emblem */}
          <div className="mb-8 animate-fade-up">
            <div className="relative inline-flex h-16 w-16 items-center justify-center border border-line">
              <span className="font-display text-3xl font-bold text-titanium">S</span>
              {/* corner ticks */}
              <span className="absolute -left-px -top-px h-2 w-2 border-l border-t border-line-bright" />
              <span className="absolute -right-px -top-px h-2 w-2 border-r border-t border-line-bright" />
              <span className="absolute -bottom-px -left-px h-2 w-2 border-b border-l border-line-bright" />
              <span className="absolute -bottom-px -right-px h-2 w-2 border-b border-r border-line-bright" />
            </div>
          </div>

          {/* main header */}
          <h1
            className="font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-titanium sm:text-5xl lg:text-6xl text-balance animate-fade-up"
            style={{ animationDelay: '80ms' }}
          >
             Shika soft Engineering Your Software Future
          </h1>

          {/* sub-tagline */}
          <p
            className="mt-6 max-w-xl text-base leading-relaxed text-silver lg:text-lg animate-fade-up"
            style={{ animationDelay: '160ms' }}
          >
            Building High Performance Enterprise Systems & Integrated Data Platforms 
          </p>

          {/* CTA suite */}
          <div
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center animate-fade-up"
            style={{ animationDelay: '240ms' }}
          >
            <a
              href="#services"
              className="group inline-flex items-center gap-2 bg-titanium px-6 py-3.5 text-sm font-semibold text-canvas-900 transition-all duration-300 hover:bg-silver"
            >
              Deploy Solutions
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#workflow"
              className="inline-flex items-center gap-2 border border-line px-6 py-3.5 text-sm font-semibold text-silver transition-all duration-300 hover:border-titanium hover:text-titanium"
            >
              <BookOpen className="h-4 w-4" />
              Technical Documentation
            </a>
          </div>

          {/* technical note */}
          <div
            className="mt-12 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-silver/60 animate-fade-up"
            style={{ animationDelay: '320ms' }}
          >
            <span className="h-px w-8 bg-line" />
            Enterprise Engineering · Systems Automation · Digital Transformation
          </div>
        </div>
      </div>
    </section>
  );
}
