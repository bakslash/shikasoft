import { ArrowRight } from 'lucide-react';

const CASES = [
  {
    title: 'Tier-1 Bank Automation',
    category: 'Banking & RPA',
    desc: 'Reduced reconciliation time by 80% using custom robotic process automation and auto-remediation playbooks.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Logistics Data Platform',
    category: 'Enterprise Data',
    desc: 'Replaced legacy ERP with a high-throughput data lakehouse, saving 40% on cloud costs and unifying 7 regional branches.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'SaaS Onboarding Portal',
    category: 'Product Design',
    desc: 'Designed and shipped a human-centric automation dashboard requiring minimal operator learning curves.',
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

export default function CaseStudies() {
  return (
    <section id="work" className="bg-white py-24 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mb-16">
          <h2 className="font-display text-4xl font-bold tracking-tight text-silver">
            Case Studies
          </h2>
          <p className="mt-4 text-lg text-silver">
            See how we help businesses across Africa build amazing products.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {CASES.map((c, i) => (
            <a key={i} href="#contact" className="group flex flex-col">
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-video mb-6 bg-canvas-800">
                <img 
                  src={c.image} 
                  alt={c.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <span className="text-xs font-bold uppercase tracking-wider text-accent mb-2">
                {c.category}
              </span>
              <h3 className="font-display text-xl font-bold text-titanium group-hover:text-accent transition-colors">
                {c.title}
              </h3>
              <p className="mt-2 text-sm text-silver leading-relaxed">
                {c.desc}
              </p>
              <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-titanium group-hover:text-accent transition-colors">
                Read Case Study <ArrowRight className="h-4 w-4" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}