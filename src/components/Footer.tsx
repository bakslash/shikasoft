import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-line bg-canvas-900">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center border border-line">
                <span className="font-display text-base font-bold text-titanium">S</span>
              </span>
              <span className="font-display text-base font-bold tracking-[0.2em] text-titanium">
                SHIKA SOFT
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-silver">
              Shika Soft Solutions — elite IT engineering and SaaS solutions for startups,
              mid-market, and modern enterprises seeking workflow automation, custom systems
              integration, and comprehensive digital transformation.
            </p>
            <div className="mt-6 flex gap-px border border-line bg-line">
              {[
                { Icon: Instagram, href: 'https://instagram.com/shika_soft/', label: 'Instagram' },
                { Icon: Facebook, href: 'https://facebook.com/shika_soft/', label: 'Facebook' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center bg-canvas-900 text-silver transition-all duration-300 hover:bg-canvas-800 hover:text-titanium"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-silver">
              Practice
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-silver">
              <li><a href="#services" className="transition-colors hover:text-titanium">Data & Automation</a></li>
              <li><a href="#services" className="transition-colors hover:text-titanium">Core Infrastructure</a></li>
              <li><a href="#services" className="transition-colors hover:text-titanium">Transformation</a></li>
              <li><a href="#services" className="transition-colors hover:text-titanium">Cyber Security</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-silver">
              Contact Node
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-silver">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-silver/70" /> +254 706 143 819
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-silver/70" /> hello@shikasoft.co.ke
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-silver/70" /> Nairobi · Remote-first
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 sm:flex-row">
          <p className="font-mono text-xs text-silver/50">
            © {new Date().getFullYear()} Shika Soft Solutions. All rights reserved.
          </p>
          <p className="font-mono text-xs text-silver/50">
            Built for the enterprise · SYS_STATUS: ACTIVE
          </p>
        </div>
      </div>
    </footer>
  );
}
