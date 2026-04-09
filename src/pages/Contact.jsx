import React, { useState } from 'react';
import Reveal from '../components/Reveal';

const ContactInfo = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-brand-orange" aria-hidden="true">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
      </svg>
    ),
    label: 'Visit Us',
    value: 'Pune, Maharashtra, India',
    sub: 'Headquarters',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-brand-orange" aria-hidden="true">
        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
      </svg>
    ),
    label: 'Email Us',
    value: 'info@dreampt.in',
    sub: 'We respond within 24 hours',
    href: 'mailto:info@dreampt.in',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-brand-orange" aria-hidden="true">
        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8Z" />
      </svg>
    ),
    label: 'Call Us',
    value: '+91 80000 00000',
    sub: 'Mon – Sat, 9am – 6pm IST',
    href: 'tel:+918000000000',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-brand-orange" aria-hidden="true">
        <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2 2 0 1 0 5.3 7a2 2 0 0 0-.05-4ZM20.44 12.48c0-3.45-1.84-5.05-4.3-5.05a3.74 3.74 0 0 0-3.38 1.86V8.5H9.38c.04.52 0 11.5 0 11.5h3.38v-6.42c0-.34.03-.68.13-.92.27-.68.9-1.39 1.96-1.39 1.38 0 1.93 1.05 1.93 2.59V20h3.38v-7.52Z" />
      </svg>
    ),
    label: 'LinkedIn',
    value: 'DReAMPT Mecha System',
    sub: 'Connect with us',
    href: 'https://www.linkedin.com/company/dreampt-mecha-system-pvt-ltd/',
  },
];

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  };

  return (
    <main className="pb-0 bg-[#f9fafb]">
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="relative bg-[#162737] pt-40 pb-24 lg:pt-48 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.png"
            alt="Contact background"
            className="w-full h-full object-cover opacity-20 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#162737]/90 via-[#162737]/75 to-[#162737]" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.6) 1px,transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <Reveal>
            <p className="inline-block mb-5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-brand-orange border border-brand-orange/30 bg-brand-orange/10">
              Get In Touch
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl tracking-tight max-w-4xl">
              Let's Build Something{' '}
              <span className="text-brand-orange">Exceptional</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <div className="w-20 h-1.5 bg-brand-orange mt-6 rounded-full shadow-sm mx-auto" />
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 text-xl text-slate-300 max-w-3xl font-medium leading-relaxed">
              Whether you need CAD/CAM software solutions, engineering services, or a free
              consultation — our team is ready to help you achieve precision at scale.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Main Content ──────────────────────────────────────────── */}
      <section className="bg-[#f9fafb] py-20 pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px] items-start">

            {/* ── Contact Form ──────────────────────────────────── */}
            <Reveal>
              <div className="bg-white rounded-[1.5rem] shadow-[0_8px_40px_rgba(0,0,0,0.07)] border border-slate-100 p-8 sm:p-10">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-16 gap-6">
                    <div className="w-20 h-20 rounded-full bg-green-50 border border-green-100 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-10 h-10 fill-green-500" aria-hidden="true">
                        <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17Z" />
                      </svg>
                    </div>
                    <h3 className="font-heading text-2xl font-extrabold text-brand-ink">
                      Message Received!
                    </h3>
                    <p className="text-[#475569] font-medium leading-relaxed max-w-sm">
                      Thank you for reaching out. Our team will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name:'',company:'',email:'',phone:'',interest:'',message:'' }); }}
                      className="btn-primary mt-2"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h2 className="font-heading text-2xl font-extrabold text-brand-ink mb-2">
                        Request a Free Consultation
                      </h2>
                      <p className="text-[#64748b] font-medium text-sm">
                        Fill in the form and a DReAMPT expert will be in touch shortly.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-brand-ink mb-2">
                            Full Name <span className="text-brand-orange">*</span>
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="John Smith"
                            className="w-full rounded-xl border border-slate-200 bg-[#f8fafc] px-4 py-3 text-sm font-medium text-brand-ink placeholder-slate-400 outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20"
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-semibold text-brand-ink mb-2">
                            Company Name
                          </label>
                          <input
                            id="company"
                            name="company"
                            type="text"
                            value={form.company}
                            onChange={handleChange}
                            placeholder="Acme Engineering Ltd."
                            className="w-full rounded-xl border border-slate-200 bg-[#f8fafc] px-4 py-3 text-sm font-medium text-brand-ink placeholder-slate-400 outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-brand-ink mb-2">
                            Work Email <span className="text-brand-orange">*</span>
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            placeholder="john@company.com"
                            className="w-full rounded-xl border border-slate-200 bg-[#f8fafc] px-4 py-3 text-sm font-medium text-brand-ink placeholder-slate-400 outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-semibold text-brand-ink mb-2">
                            Phone Number
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+91 00000 00000"
                            className="w-full rounded-xl border border-slate-200 bg-[#f8fafc] px-4 py-3 text-sm font-medium text-brand-ink placeholder-slate-400 outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="interest" className="block text-sm font-semibold text-brand-ink mb-2">
                          Area of Interest
                        </label>
                        <select
                          id="interest"
                          name="interest"
                          value={form.interest}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-slate-200 bg-[#f8fafc] px-4 py-3 text-sm font-medium text-brand-ink outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 appearance-none"
                        >
                          <option value="">Select a topic…</option>
                          <option>Cimatron Software (Mold / Die / CAD)</option>
                          <option>Altair Inspire Mold / Form</option>
                          <option>NC Programming</option>
                          <option>Engineering Services</option>
                          <option>Software Licensing &amp; Reseller</option>
                          <option>Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-brand-ink mb-2">
                          Message <span className="text-brand-orange">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          required
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project or questions…"
                          className="w-full rounded-xl border border-slate-200 bg-[#f8fafc] px-4 py-3 text-sm font-medium text-brand-ink placeholder-slate-400 outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 resize-none"
                        />
                      </div>

                      <button
                        id="contact-submit"
                        type="submit"
                        disabled={loading}
                        className="btn-primary w-full justify-center py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden"
                      >
                        {loading ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a10 10 0 100 10h-2a8 8 0 01-8-8Z" />
                            </svg>
                            Sending…
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2 .01 7Z" />
                            </svg>
                            Send Message
                          </span>
                        )}
                      </button>

                      <p className="text-center text-xs text-[#94a3b8] font-medium pt-1">
                        By submitting, you agree to our privacy policy. We never share your data.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </Reveal>

            {/* ── Info Panel ────────────────────────────────────── */}
            <div className="flex flex-col gap-6">
              {ContactInfo.map((item, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 p-6 flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#94a3b8] mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          className="font-heading font-extrabold text-brand-ink text-lg leading-tight hover:text-brand-orange transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-heading font-extrabold text-brand-ink text-lg leading-tight">
                          {item.value}
                        </p>
                      )}
                      <p className="text-sm text-[#64748b] font-medium mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                </Reveal>
              ))}

              {/* Cimatron authorised badge */}
              <Reveal delay={350}>
                <div className="bg-[#162737] rounded-2xl p-6 flex flex-col items-center text-center gap-4 border border-white/5">
                  <img
                    src="/images/Cimatron_Portrait_logo_white.png"
                    alt="Cimatron Authorised Reseller"
                    className="h-16 w-auto object-contain"
                  />
                  <p className="text-white/70 text-sm font-medium leading-relaxed">
                    DReAMPT Mecha System Pvt. Ltd. is an{' '}
                    <strong className="text-brand-orange font-bold">Authorised Reseller</strong> of
                    Cimatron software in India — delivering both licensing and technical support.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
