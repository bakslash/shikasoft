import { useState, type FormEvent } from 'react';
import { Send, Check, AlertCircle, User, Mail, Phone, Loader2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(ev.currentTarget);
    formData.append('access_key', 'f37f22fd-452a-4d09-b32d-f3a3129b40c1');
    formData.append('subject', 'New Contact Inquiry — Shika Soft Solutions');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.message || 'Failed to send message. Please try again.');
      }
    } catch {
      setError('Network error. Please try again or email us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 bg-canvas-800 border-t border-line">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Side: Quick Chat (ZegeTech Style) */}
          <div className="flex flex-col justify-center">
            <span className="font-sans text-sm font-semibold uppercase tracking-wider text-accent mb-4">
              Want to have a quick chat?
            </span>
            <h2 className="font-display text-4xl font-bold text-titanium mb-6">
              We are only a phone call away.
            </h2>
            <p className="text-silver mb-8 leading-relaxed">
              Whether you have a detailed brief or just a rough idea, our team is ready to listen. Let's build something great together.
            </p>
            
            <div className="space-y-4">
              <a href="tel:+254706143819" className="flex items-center gap-4 text-lg font-semibold text-titanium hover:text-accent transition-colors">
                <div className="flex h-12 w-12 items-center justify-center bg-white border border-line text-accent">
                  <Phone className="h-5 w-5" />
                </div>
                +254 706 143 819
              </a>
              <a href="mailto:hello@shikasoftsolutions.co.ke" className="flex items-center gap-4 text-lg font-semibold text-titanium hover:text-accent transition-colors">
                <div className="flex h-12 w-12 items-center justify-center bg-white border border-line text-accent">
                  <Mail className="h-5 w-5" />
                </div>
                hello@shikasoftsolutions.co.ke
              </a>
            </div>
          </div>

          {/* Right Side: Simple Form */}
          <div className="bg-white p-8 sm:p-10 border border-line shadow-xl">
            {submitted ? (
              <div className="flex flex-col items-center py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center bg-accent/10 rounded-full mb-6">
                  <Check className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-display text-2xl font-bold text-titanium mb-2">Message Sent!</h3>
                <p className="text-silver">We'll get back to you within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="checkbox" name="botcheck" className="hidden" />
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-titanium">Your Name</label>
                  <input type="text" name="name" required placeholder="Jane Doe" className="w-full border border-line bg-canvas-900 px-4 py-3 text-titanium placeholder-silver/50 focus:border-accent focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-titanium">Email Address</label>
                  <input type="email" name="email" required placeholder="jane@company.com" className="w-full border border-line bg-canvas-900 px-4 py-3 text-titanium placeholder-silver/50 focus:border-accent focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-titanium">How can we help?</label>
                  <textarea name="message" rows={4} required placeholder="Tell us about your project..." className="w-full border border-line bg-canvas-900 px-4 py-3 text-titanium placeholder-silver/50 focus:border-accent focus:outline-none transition-colors resize-none" />
                </div>

                {error && (
                  <div className="flex items-center gap-2 text-sm text-red-500">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <button type="submit" disabled={loading} className="flex w-full items-center justify-center gap-2 bg-accent px-6 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-accent-hover disabled:opacity-70">
                  {loading ? (
                    <>
                      Sending...
                      <Loader2 className="h-4 w-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}