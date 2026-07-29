import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'Services', href: '#services' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-canvas-900/90 transition-all duration-300 ${
        scrolled ? 'border-b border-line backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* logo */}
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center border border-line">
            <span className="font-display text-base font-bold text-titanium">S</span>
          </span>
          <span className="font-display text-base font-bold tracking-[0.2em] text-titanium">
            SHIKA SOFT
          </span>
        </a>

        {/* center links */}
        <div className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-silver transition-all duration-300 hover:text-titanium"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* right cluster */}
        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex items-center gap-2 border border-line px-2.5 py-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-pulse-soft rounded-full bg-emerald-400" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-emerald-300">
              SYS_STATUS: ACTIVE
            </span>
          </div>

          <a
            href="tel:+254706143819"
            className="flex items-center gap-1.5 text-xs font-medium text-silver transition-colors hover:text-titanium"
          >
            <Phone className="h-3.5 w-3.5" />
            +254 706 143 819
          </a>

          <a
            href="#contact"
            className="border border-titanium px-4 py-2 text-sm font-semibold text-titanium transition-all duration-300 hover:bg-titanium hover:text-canvas-900"
          >
            Initiate Brief
          </a>
        </div>

        {/* mobile toggle */}
        <button
          className="text-silver lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-canvas-900 px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-silver hover:text-titanium"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-300">
                SYS_STATUS: ACTIVE
              </span>
              <span className="text-xs text-silver">+254 706 143 819</span>
            </div>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 border border-titanium px-4 py-2 text-center text-sm font-semibold text-titanium"
            >
              Initiate Brief
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
