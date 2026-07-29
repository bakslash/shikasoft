import { Cpu, Network, ShieldCheck } from 'lucide-react';

const STATS = [
  { label: 'Systems Deployed', value: '120+' },
  { label: 'Avg. Uptime', value: '99.97%' },
  { label: 'Engineers', value: '40+' },
  { label: 'Regions Served', value: '7' },
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[15%] top-1/4 h-[320px] w-[400px] rounded-full radial-spot" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* visual terminal block */}
          <div className="relative">
            <div className="relative border border-line bg-canvas-800">
              {/* corner ticks */}
              <span className="absolute -left-px -top-px h-2 w-2 border-l border-t border-titanium/60" />
              <span className="absolute -right-px -top-px h-2 w-2 border-r border-t border-titanium/60" />
              <span className="absolute -bottom-px -left-px h-2 w-2 border-b border-l border-titanium/60" />
              <span className="absolute -bottom-px -right-px h-2 w-2 border-b border-r border-titanium/60" />

              {/* terminal header */}
              <div className="flex items-center gap-2 border-b border-line px-4 py-3">
                <span className="h-2 w-2 rounded-full bg-silver/40" />
                <span className="h-2 w-2 rounded-full bg-silver/40" />
                <span className="h-2 w-2 rounded-full bg-silver/40" />
                <span className="ml-3 font-mono text-xs text-silver/70">shika-soft@forge:~$</span>
              </div>
              {/* terminal body */}
              <div className="space-y-2 p-6 font-mono text-xs leading-relaxed sm:text-sm">
                <p className="text-silver">
                  <span className="text-titanium">$</span> init --project "enterprise-modernisation"
                </p>
                <p className="text-silver/80">{'>'} Scanning legacy dependencies...</p>
                <p className="text-silver/80">{'>'} Mapping data flow graphs...</p>
                <p className="text-silver/80">{'>'} Generating API contract layer...</p>
                <p className="text-silver">
                  <span className="text-titanium">{'>'}</span> Deploying microservices to cloud mesh...
                </p>
                <p className="text-titanium">
                  [system] zero-downtime migration complete · uptime 99.99%
                </p>
                <p className="text-silver">
                  <span className="text-titanium">$</span> <span className="animate-pulse-soft">_</span>
                </p>
              </div>
            </div>

            {/* floating chips */}
            <div className="pointer-events-none absolute -right-3 -top-3 flex items-center gap-2 border border-line bg-canvas-900 px-3 py-2">
              <Cpu className="h-4 w-4 text-silver" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-silver">AI Core</span>
            </div>
            <div className="pointer-events-none absolute -bottom-3 -left-3 flex items-center gap-2 border border-line bg-canvas-900 px-3 py-2">
              <Network className="h-4 w-4 text-silver" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-silver">API Mesh</span>
            </div>
          </div>

          {/* copy */}
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-silver/70">
              // Section 06 — About the Forge
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-titanium sm:text-4xl text-balance">
              Sovereign engineering for frictionless ecosystems
            </h2>
            <div className="mt-6 space-y-4 text-silver leading-relaxed">
              <p>
                Shika Soft Solutions exists to convert archaic, high-friction paper trails and
                siloed legacy systems into frictionless software ecosystems. We treat every
                codebase as infrastructure — governed, observable, and built to outlast the
                contracts that commissioned it.
              </p>
              <p>
                Our engineers embed with your teams, instrument the bottlenecks others miss, and
                ship architecture that scales without rewrites. From regional compliance to
                enterprise security audits, the non-negotiables are baked in from the first commit.
              </p>
            </div>

            {/* stats */}
            <div className="mt-10 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="bg-canvas-900 p-4">
                  <p className="font-display text-2xl font-bold text-titanium">{s.value}</p>
                  <p className="mt-1 text-xs text-silver">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm text-silver">
              <ShieldCheck className="h-4 w-4 text-titanium" />
              <span>ISO-aligned · Zero-trust by default · Audit-ready delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
