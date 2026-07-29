import { pillars } from '@/data/services';

export default function Pillars() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full radial-spot" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-silver/70">
            // Value Core
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-titanium sm:text-4xl text-balance">
            Four high-performance pillars
          </h2>
          <p className="mt-4 text-silver">
            Every engagement is anchored to the same engineering non-negotiables.
          </p>
        </div>

        <div className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <article
                key={p.id}
                style={{ animationDelay: `${i * 80}ms` }}
                className="group relative bg-canvas-900 p-7 transition-all duration-300 hover:bg-canvas-800 animate-fade-up"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center border border-line text-silver transition-all duration-300 group-hover:border-titanium group-hover:text-titanium">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <span className="font-mono text-xs font-semibold tracking-[0.2em] text-silver/40">
                    {p.index}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-base font-semibold text-titanium">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-silver">{p.description}</p>

                {/* hover accent line */}
                <span className="mt-6 block h-px w-0 bg-titanium transition-all duration-500 group-hover:w-full" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
