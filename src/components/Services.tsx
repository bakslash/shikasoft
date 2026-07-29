import { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Check, X, ArrowRight } from 'lucide-react';
import { serviceCategories } from '@/data/services';

const TABS = serviceCategories;

interface ConsultationState {
  open: boolean;
  serviceTitle: string;
}

export default function Services() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const [consultation, setConsultation] = useState<ConsultationState>({ open: false, serviceTitle: '' });
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const category = TABS[active];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative scroll-mt-24 py-24 sm:py-32"
      aria-labelledby="services-heading"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full radial-spot" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* header */}
        <div className={`max-w-3xl ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-silver/70">
            // Section 04 — Services Portfolio
          </span>
          <h2
            id="services-heading"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-titanium sm:text-4xl text-balance"
          >
            Comprehensive Enterprise Services Portfolio
          </h2>
          <p className="mt-5 text-silver">
            Nine disciplines across three practice areas — each delivered by specialist teams,
            governed by enterprise-grade controls, and engineered for measurable outcomes.
          </p>
        </div>

        {/* tabs */}
        <div
          className={`mt-12 flex flex-col gap-px border border-line bg-line sm:flex-row ${visible ? 'animate-fade-up' : 'opacity-0'}`}
          role="tablist"
          aria-label="Service categories"
        >
          {TABS.map((tab, i) => {
            const isActive = i === active;
            return (
              <button
                key={tab.id}
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                onClick={() => setActive(i)}
                className={`group relative flex-1 px-5 py-5 text-left transition-all duration-300 ${
                  isActive ? 'bg-canvas-800' : 'bg-canvas-900 hover:bg-canvas-800'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono text-[11px] font-semibold uppercase tracking-[0.18em] ${
                      isActive ? 'text-titanium' : 'text-silver/60'
                    }`}
                  >
                    {tab.short}
                  </span>
                  <span
                    className={`font-mono text-[10px] ${
                      isActive ? 'text-titanium' : 'text-silver/40'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <p
                  className={`mt-2 font-display text-sm font-semibold leading-snug ${
                    isActive ? 'text-titanium' : 'text-silver group-hover:text-titanium'
                  }`}
                >
                  {tab.label}
                </p>
                {/* active indicator */}
                <span
                  className={`absolute bottom-0 left-0 h-px bg-titanium transition-all duration-500 ${
                    isActive ? 'w-full' : 'w-0'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* panel */}
        <div
          key={category.id}
          id={`panel-${category.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${category.id}`}
          className="mt-px animate-fade-in"
        >
          <div className="mb-8 flex items-center gap-3 pt-8">
            <span className="h-px flex-1 bg-line" />
            <p className="text-sm italic text-silver">{category.tagline}</p>
            <span className="h-px flex-1 bg-line" />
          </div>

          <div className="grid gap-px bg-line lg:grid-cols-3">
            {category.items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.id}
                  style={{ animationDelay: `${idx * 80}ms` }}
                  className="group relative flex flex-col bg-canvas-900 p-7 transition-all duration-300 hover:bg-canvas-800 animate-fade-up"
                >
                  {/* icon */}
                  <div className="relative mb-6 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center border border-line text-silver transition-all duration-300 group-hover:border-titanium group-hover:text-titanium">
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <span className="font-mono text-xs font-semibold tracking-[0.2em] text-silver/30">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="relative font-display text-lg font-semibold text-titanium">
                    {item.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-silver">
                    {item.description}
                  </p>

                  <ul className="relative mt-5 space-y-2.5">
                    {item.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm text-silver">
                        <span className="mt-1.5 h-1 w-1 flex-none bg-titanium" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="relative mt-7 flex-1" />
                  <button
                    type="button"
                    onClick={() => setConsultation({ open: true, serviceTitle: item.title })}
                    className="group/btn relative inline-flex items-center justify-between gap-2 border border-line px-4 py-3 text-sm font-semibold text-silver transition-all duration-300 hover:border-titanium hover:text-titanium"
                  >
                    Request Consultation
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </article>
              );
            })}
          </div>
        </div>

        <p className={`mt-10 text-center font-mono text-xs text-silver/50 ${visible ? 'animate-fade-in' : 'opacity-0'}`}>
          Every engagement begins with a no-obligation discovery consultation.
        </p>
      </div>

      {/* Consultation modal */}
      {consultation.open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setConsultation((c) => ({ ...c, open: false }))}
        >
          <div className="absolute inset-0 bg-canvas-900/85 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-md border border-line bg-canvas-800 p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* corner ticks */}
            <span className="absolute -left-px -top-px h-2 w-2 border-l border-t border-titanium" />
            <span className="absolute -right-px -top-px h-2 w-2 border-r border-t border-titanium" />
            <span className="absolute -bottom-px -left-px h-2 w-2 border-b border-l border-titanium" />
            <span className="absolute -bottom-px -right-px h-2 w-2 border-b border-r border-titanium" />

            <button
              onClick={() => setConsultation((c) => ({ ...c, open: false }))}
              className="absolute right-4 top-4 text-silver transition-colors hover:text-titanium"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <span className="font-mono text-xs uppercase tracking-[0.2em] text-silver/70">
              // Consultation Request
            </span>
            <h3 className="mt-3 font-display text-2xl font-bold text-titanium">
              {consultation.serviceTitle}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-silver">
              Our engineering team will reach out within one business day to scope your requirements
              and map a tailored delivery plan.
            </p>

            <div className="mt-6 space-y-px border border-line bg-line">
              <div className="bg-canvas-800 px-4 py-3 text-sm text-silver">
                <span className="text-titanium">Service:</span> {consultation.serviceTitle}
              </div>
              <div className="bg-canvas-800 px-4 py-3 text-sm text-silver">
                <span className="text-titanium">Response:</span> Within 1 business day
              </div>
            </div>

            <a
              href="#contact"
              onClick={() => setConsultation((c) => ({ ...c, open: false }))}
              className="mt-6 flex w-full items-center justify-center gap-2 bg-titanium px-4 py-3 text-sm font-semibold text-canvas-900 transition-all duration-300 hover:bg-silver"
            >
              Continue to Contact Node
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
