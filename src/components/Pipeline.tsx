import { pipelineNodes } from '@/data/services';

export default function Pipeline() {
  return (
    <section id="workflow" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 geo-grid-fine opacity-30" />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full radial-spot" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-silver/70">
            // Section 05 — The Pipeline
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-titanium sm:text-4xl text-balance">
            A four-step workflow track
          </h2>
          <p className="mt-4 text-silver">
            From first diagnostic to sovereign support — every phase is instrumented, documented,
            and built for zero-downtime delivery.
          </p>
        </div>

        {/* track */}
        <div className="mt-16 grid gap-px bg-line lg:grid-cols-4">
          {pipelineNodes.map((node, i) => (
            <div
              key={node.id}
              style={{ animationDelay: `${i * 100}ms` }}
              className="group relative bg-canvas-900 p-8 transition-all duration-300 hover:bg-canvas-800 animate-fade-up"
            >
              {/* node marker */}
              <div className="relative mb-6 flex h-12 w-12 items-center justify-center">
                <span className="absolute inset-0 border border-line transition-all duration-300 group-hover:border-titanium" />
                {/* diamond accent */}
                <span className="absolute inset-2 rotate-45 border border-line-dim transition-all duration-300 group-hover:border-titanium/50" />
                <span className="relative font-mono text-sm font-bold text-silver transition-colors duration-300 group-hover:text-titanium">
                  {node.index}
                </span>
              </div>

              <h3 className="font-display text-base font-semibold text-titanium">
                {node.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-silver">{node.description}</p>

              {/* connector path (desktop) */}
              {i < pipelineNodes.length - 1 && (
                <span className="pointer-events-none absolute right-0 top-[3.25rem] hidden h-px w-px lg:block">
                  <span className="absolute right-0 top-0 h-px w-[calc(100%+1px)] -translate-y-1/2 translate-x-full bg-line transition-colors duration-300 group-hover:bg-titanium/40" />
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
