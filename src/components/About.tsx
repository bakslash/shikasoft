import { Users, Zap, ShieldCheck, Code2 } from 'lucide-react';

const PILLARS = [
  {
    icon: Users,
    title: 'Skilled team',
    desc: 'Our developers and designers rank in the top 2% of talent in the region. We aim to build beautiful products.'
  },
  {
    icon: Zap,
    title: 'Agile approach',
    desc: 'From idea to launch, we take a systematic approach to problem solving for quick results and pragmatic delivery.'
  },
  {
    icon: Code2,
    title: 'High quality code',
    desc: 'No code goes untested. Code reviews ensure that both our teams and clients can sleep easy without worry.'
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise secure',
    desc: 'We treat every codebase as infrastructure — governed, observable, and built to outlast the contracts.'
  }
];

export default function About() {
  return (
    <section id="about" className="bg-canvas-900 py-24 text-titanium">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Who We Are Header */}
        <div className="max-w-3xl">
          <h2 className="font-display text-4xl font-bold tracking-tight text-titanium sm:text-5xl">
            Who we are
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-silver">
            We are a full-stack team of developers and designers based in Nairobi and working all over Africa. 
            We use a state-of-the-art technology stack to build enterprise software, automation platforms, and data ecosystems. <strong className="text-titanium">Fast!</strong>
          </p>
        </div>

        {/* 4 Simple Pillars */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="flex flex-col">
                <div className="mb-4 flex h-12 w-12 items-center justify-center bg-accent/10 text-accent">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-titanium">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-silver">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}