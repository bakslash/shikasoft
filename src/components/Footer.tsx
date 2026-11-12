import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="flex h-8 w-8 items-center justify-center border border-white/20">
                <span className="font-display text-base font-bold text-white">S</span>
              </span>
              <span className="font-display text-lg font-bold tracking-widest text-white">
                SHIKA SOFT
              </span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-stone-400">
              Elite IT engineering and SaaS solutions for startups, mid-market, and modern enterprises. We turn complex problems into beautiful, fast software.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="https://instagram.com/shika_soft/" target="_blank" rel="noreferrer" className="text-stone-400 hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com/shika_soft/" target="_blank" rel="noreferrer" className="text-stone-400 hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#workflow" className="hover:text-accent transition-colors">Our Process</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" /> +254 706 143 819
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" /> 
                <a href="mailto:hello@shikasoftsolutions.co.ke" className="hover:text-accent">hello@shikasoftsolutions.co.ke</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" /> Nairobi, Kenya
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-stone-500">
          © {new Date().getFullYear()} Shika Soft Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}