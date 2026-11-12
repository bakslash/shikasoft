import { useEffect, useState } from 'react';
import { Menu, X, Phone, ChevronDown, Smartphone, Code2, Zap, BarChart3 } from 'lucide-react';

const LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Our Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

// Updated with descriptions and icons
const SERVICES = [
  { 
    label: 'Web & Mobile Apps', 
    desc: 'Beautiful, responsive apps for iOS, Android & Web.',
    href: '#services',
    icon: Smartphone
  },
  { 
    label: 'Custom Software Dev', 
    desc: 'Tailor-made systems built to fit your business perfectly.',
    href: '#services',
    icon: Code2
  },
  { 
    label: 'Workflow Automation', 
    desc: 'Automate repetitive tasks and save hundreds of hours.',
    href: '#services',
    icon: Zap
  },
  { 
    label: 'Data & Analytics', 
    desc: 'Turn your raw data into actionable business insights.',
    href: '#services',
    icon: BarChart3
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white/95 transition-all duration-300 ${
        scrolled ? 'border-b border-line shadow-sm backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* logo */}
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center border border-titanium bg-titanium">
            <span className="font-display text-base font-bold text-white">S</span>
          </span>
          <span className="font-display text-base font-bold tracking-widest text-titanium">
            SHIKA SOFT
          </span>
        </a>

        {/* center links */}
        <div className="hidden items-center gap-8 lg:flex">
          <a href="#top" className="text-sm font-semibold text-silver transition-all duration-300 hover:text-accent">Home</a>
          <a href="#about" className="text-sm font-semibold text-silver transition-all duration-300 hover:text-accent">About</a>

          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-sm font-semibold text-silver transition-all duration-300 hover:text-accent focus:outline-none"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Desktop Dropdown Menu */}
            {servicesOpen && (
              <div className="absolute left-1/2 top-full w-[320px] -translate-x-1/2 pt-4">
                <div className="overflow-hidden border border-line bg-white shadow-xl">
                  <div className="flex flex-col py-2">
                    {SERVICES.map((s) => {
                      const Icon = s.icon;
                      return (
                        <a
                          key={s.label}
                          href={s.href}
                          className="group flex items-start gap-4 px-5 py-3 transition-colors hover:bg-canvas-800"
                          onClick={() => setServicesOpen(false)}
                        >
                          <div className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-sm bg-canvas-800 text-silver transition-colors group-hover:bg-accent group-hover:text-white">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-titanium group-hover:text-accent">
                              {s.label}
                            </p>
                            <p className="mt-1 text-xs leading-relaxed text-silver">
                              {s.desc}
                            </p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

          <a href="#work" className="text-sm font-semibold text-silver transition-all duration-300 hover:text-accent">Our Work</a>
          <a href="#contact" className="text-sm font-semibold text-silver transition-all duration-300 hover:text-accent">Contact</a>
        </div>

        {/* right cluster */}
        <div className="hidden items-center gap-6 lg:flex">
          <a
            href="tel:+254706143819"
            className="flex items-center gap-1.5 text-sm font-semibold text-silver transition-colors hover:text-accent"
          >
            <Phone className="h-4 w-4" />
            +254 706 143 819
          </a>

          <a
            href="#contact"
            className="bg-accent px-6 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:bg-accent-hover hover:shadow-md"
          >
            Start your project
          </a>
        </div>

        {/* mobile toggle */}
        <button
          className="text-titanium lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute w-full border-t border-line bg-white px-6 py-6 shadow-lg lg:hidden">
          <div className="flex flex-col gap-4">
            <a href="#top" onClick={() => setOpen(false)} className="text-base font-semibold text-titanium hover:text-accent">Home</a>
            <a href="#about" onClick={() => setOpen(false)} className="text-base font-semibold text-titanium hover:text-accent">About</a>
            
            {/* Mobile Services Dropdown */}
            <div className="flex flex-col">
              <button 
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between text-base font-semibold text-titanium hover:text-accent"
              >
                Services
                <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {mobileServicesOpen && (
                <div className="mt-4 flex flex-col gap-5 border-l-2 border-line pl-4">
                  {SERVICES.map((s) => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={s.label}
                        href={s.href}
                        onClick={() => setOpen(false)}
                        className="group flex flex-col gap-1"
                      >
                        <div className="flex items-center gap-2">
                          <Icon className="h-4 w-4 text-accent" />
                          <span className="text-sm font-bold text-titanium">{s.label}</span>
                        </div>
                        <p className="text-xs text-silver">{s.desc}</p>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            <a href="#work" onClick={() => setOpen(false)} className="text-base font-semibold text-titanium hover:text-accent">Our Work</a>
            <a href="#contact" onClick={() => setOpen(false)} className="text-base font-semibold text-titanium hover:text-accent">Contact</a>

            <div className="mt-2 flex items-center gap-3 border-t border-line pt-4">
              <Phone className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-titanium">+254 706 143 819</span>
            </div>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 bg-accent px-4 py-3 text-center text-sm font-bold text-white"
            >
              Start your project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}