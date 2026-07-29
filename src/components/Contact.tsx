import { useState, type FormEvent } from 'react';
import { Send, Check, AlertCircle, User, Mail, Building2, Phone } from 'lucide-react';
import { serviceCategories } from '@/data/services';

interface FormState {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
}

const EMPTY: FormState = { name: '', email: '', company: '', phone: '', service: '' };

export default function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = 'Operator name is required';
    if (!form.email.trim()) {
      e.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Enter a valid email address';
    }
    if (!form.company.trim()) e.company = 'Corporate node is required';
    if (!form.phone.trim()) {
      e.phone = 'Contact line is required';
    } else if (!/^[\d\s+()-]{7,}$/.test(form.phone)) {
      e.phone = 'Enter a valid phone number';
    }
    if (!form.service) e.service = 'Select a service pillar';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const update = (field: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const reset = () => {
    setForm(EMPTY);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full radial-spot" />
        <div className="absolute inset-0 geo-grid-fine opacity-20" />
      </div>

      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-silver/70">
            // Section 07 — Telemetry & Contact Node
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-titanium sm:text-4xl text-balance">
            Transmit a briefing request
          </h2>
          <p className="mt-4 text-silver">
            Send your operational parameters. Our engineers will decode them and respond within one
            business day.
          </p>
        </div>

        <div className="relative mt-12 border border-line bg-canvas-800 p-8 sm:p-10">
          {/* corner ticks */}
          <span className="absolute -left-px -top-px h-2 w-2 border-l border-t border-titanium/60" />
          <span className="absolute -right-px -top-px h-2 w-2 border-r border-t border-titanium/60" />
          <span className="absolute -bottom-px -left-px h-2 w-2 border-b border-l border-titanium/60" />
          <span className="absolute -bottom-px -right-px h-2 w-2 border-b border-r border-titanium/60" />

          {submitted ? (
            <div className="flex flex-col items-center py-8 text-center animate-fade-in">
              <div className="relative flex h-16 w-16 items-center justify-center border border-titanium">
                <span className="absolute inset-0 animate-pulse-soft bg-titanium/5" />
                <Check className="relative h-8 w-8 text-titanium" strokeWidth={2} />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-titanium">
                Transmission Successful
              </h3>
              <p className="mt-3 max-w-md text-silver">
                Our engineers will contact you shortly. A confirmation has been queued for{' '}
                <span className="text-titanium">{form.email}</span> regarding{' '}
                <span className="text-titanium">{form.service}</span>.
              </p>
              <button
                onClick={reset}
                className="mt-8 border border-line px-5 py-2.5 text-sm font-semibold text-silver transition-all duration-300 hover:border-titanium hover:text-titanium"
              >
                Transmit another briefing
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Operator Name" icon={User} error={errors.name}>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full bg-transparent text-sm text-titanium placeholder-silver/40 focus:outline-none"
                  />
                </Field>
                <Field label="Email" icon={Mail} error={errors.email}>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    placeholder="jane@company.com"
                    className="w-full bg-transparent text-sm text-titanium placeholder-silver/40 focus:outline-none"
                  />
                </Field>
                <Field label="Corporate Node (Company)" icon={Building2} error={errors.company}>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => update('company', e.target.value)}
                    placeholder="Acme Holdings"
                    className="w-full bg-transparent text-sm text-titanium placeholder-silver/40 focus:outline-none"
                  />
                </Field>
                <Field label="Contact Line (Phone)" icon={Phone} error={errors.phone}>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    placeholder="+254 706 143 819"
                    className="w-full bg-transparent text-sm text-titanium placeholder-silver/40 focus:outline-none"
                  />
                </Field>
              </div>

              {/* service selector */}
              <div>
                <label className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-silver">
                  Custom Service Selector
                </label>
                <div className="grid gap-px border border-line bg-line sm:grid-cols-3">
                  {serviceCategories.map((c) => {
                    const selected = form.service === c.label;
                    return (
                      <button
                        type="button"
                        key={c.id}
                        onClick={() => update('service', c.label)}
                        className={`p-4 text-left text-xs font-medium transition-all duration-300 ${
                          selected
                            ? 'bg-titanium text-canvas-900'
                            : 'bg-canvas-900 text-silver hover:bg-canvas-800 hover:text-titanium'
                        }`}
                      >
                        <span className={`font-mono text-[10px] uppercase tracking-wider ${selected ? 'text-canvas-900/60' : 'text-silver/50'}`}>
                          {c.short}
                        </span>
                        <p className="mt-1 leading-snug">{c.label}</p>
                      </button>
                    );
                  })}
                </div>
                {errors.service && <ErrorNote message={errors.service} />}
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 bg-titanium px-6 py-4 text-sm font-semibold text-canvas-900 transition-all duration-300 hover:bg-silver"
              >
                Transmit Briefing Request
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  icon: Icon,
  error,
  children,
}: {
  label: string;
  icon: typeof User;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-silver">
        {label}
      </label>
      <div
        className={`flex items-center gap-2.5 border bg-canvas-900 px-4 py-3 transition-all duration-300 ${
          error ? 'border-red-500/50' : 'border-line focus-within:border-titanium'
        }`}
      >
        <Icon className="h-4 w-4 flex-none text-silver" />
        {children}
      </div>
      {error && <ErrorNote message={error} />}
    </div>
  );
}

function ErrorNote({ message }: { message: string }) {
  return (
    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
      <AlertCircle className="h-3.5 w-3.5" />
      {message}
    </p>
  );
}
