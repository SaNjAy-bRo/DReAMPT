import React from 'react';
import Reveal from '../components/Reveal';
import AboutSnapshot from '../components/AboutSnapshot';
import TrustStrip from '../components/TrustStrip';

const About = () => {
  return (
    <main className="pb-0 bg-[#f9fafb]">
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="relative bg-[#162737] pt-36 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.png"
            alt="Engineering Background"
            className="w-full h-full object-cover opacity-20 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#162737]/90 via-[#162737]/75 to-[#162737]"></div>
          {/* subtle grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.6) 1px,transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Badge + Heading + Subtext */}
          <div className="text-center mb-16">
            <Reveal>
              <p className="inline-block mb-5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-brand-orange border border-brand-orange/30 bg-brand-orange/10">
                About Us
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-heading text-4xl font-extrabold leading-tight text-white drop-shadow-lg sm:text-5xl lg:text-7xl tracking-tight max-w-5xl">
                Driving Innovation Through{' '}
                <span className="text-brand-orange">Engineering Excellence</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <div className="w-20 h-1.5 bg-brand-orange mt-6 rounded-full shadow-sm mx-auto" />
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-8 text-xl text-slate-300 max-w-3xl font-medium leading-relaxed mx-auto">
                We provide a unified approach to product development — connecting concept, design,
                manufacturing, and automation to deliver world-class mechatronics solutions.
              </p>
            </Reveal>
          </div>

          {/* Stats box — sits inside hero at the bottom */}
          <Reveal delay={320} className="w-full">
            <div className="bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.15)] border border-slate-100/60 px-8 py-8 flex flex-col md:flex-row justify-between gap-8 md:gap-4">
              {[
                { value: '105+', label: 'Years of Combined Engineering Experience' },
                { value: '100%', label: 'Indian MSME' },
                { value: 'End-to-End', label: 'Engineering Solutions' },
                { value: 'Strategic', label: 'Industry Partnerships' },
              ].map((stat, i) => (
                <div key={i} className="flex-1">
                  <p className="text-[#121f2d] text-3xl sm:text-4xl font-extrabold font-heading tracking-tight mb-1">
                    {stat.value}
                  </p>
                  <p className="text-[#64748b] text-sm font-medium leading-relaxed max-w-[180px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>



      {/* ── Our Mission ───────────────────────────────────────────── */}
      <section className="py-28 bg-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            {/* Text */}
            <div className="w-full lg:w-1/2">
              <Reveal>
                <p className="section-kicker">Who We Are</p>
                <h2 className="font-heading text-4xl font-extrabold text-[#165A72] mt-3 mb-6 leading-tight">
                  Our Mission &amp; Vision
                </h2>
                <div className="w-12 h-1.5 bg-brand-orange mb-8 rounded-full" />
                <p className="text-lg text-[#475569] font-medium leading-relaxed mb-6">
                  To deliver <strong className="text-brand-ink font-bold">Right-First-Time</strong>{' '}
                  engineering solutions by leveraging deep industry expertise, advanced technology,
                  and strategic partnerships. We strive to be the definitive engineering support
                  system for our clients — guiding them from early concepts to final implementation.
                </p>
                <p className="text-lg text-[#475569] font-medium leading-relaxed">
                  Based in <strong className="text-brand-ink font-bold">Pune, India</strong>, we
                  have established ourselves as a trusted partner for manufacturing organisations
                  worldwide, helping them optimise workflows and achieve precision at scale.
                </p>
              </Reveal>
            </div>

            {/* Logo card */}
            <div className="w-full lg:w-1/2">
              <Reveal delay={200}>
                <div className="relative group">
                  <div className="absolute -inset-2 rounded-[2rem] bg-brand-orange/10 transition-all duration-500 group-hover:scale-105 group-hover:bg-brand-orange/15" />
                  <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-slate-100 bg-[#f8fbff] aspect-video flex items-center justify-center p-12">
                    <img
                      src="/images/DReAMPT_darklogo.png"
                      alt="DReAMPT Mecha System Pvt. Ltd."
                      className="w-[75%] h-auto object-contain drop-shadow-sm"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── About Snapshot (3 cards) ───────────────────────────────── */}
      <div className="bg-[#f9fafb]">
        <AboutSnapshot />
      </div>

      {/* ── Core Expertise ────────────────────────────────────────── */}
      <section className="py-28 bg-[#162737] relative overflow-hidden">
        {/* faint grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.8) 1px,transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-brand-orange text-xs font-bold uppercase tracking-[0.2em] mb-4">
                Our Capabilities
              </p>
              <h2 className="font-heading text-4xl font-extrabold text-white">Our Core Expertise</h2>
              <div className="w-12 h-1.5 bg-brand-orange mt-5 mx-auto rounded-full" />
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Design & Engineering',
                icon: (
                  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-brand-orange" aria-hidden="true">
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25ZM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83Z" />
                  </svg>
                ),
                body: 'From mold design and die design to electrode creation and NC programming — robust CAD/CAM solutions powered by industry-leading Cimatron software.',
              },
              {
                title: 'Simulation & Analysis',
                icon: (
                  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-brand-orange" aria-hidden="true">
                    <path d="M9 4h6v2H9V4ZM7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm0 2v16h10V4H7Zm2 3h6v2H9V7Zm0 4h6v2H9v-2Zm0 4h4v2H9v-2Z" />
                  </svg>
                ),
                body: 'Validating designs using Altair Inspire Mold and Inspire Form CAE tools, ensuring structural integrity and manufacturability before production begins.',
              },
              {
                title: 'Implementation Support',
                icon: (
                  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-brand-orange" aria-hidden="true">
                    <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm-7 14-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9Z" />
                  </svg>
                ),
                body: 'End-to-end guidance including DFM evaluations, manufacturing support, and advanced automation scripting to refine and accelerate production workflows.',
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="group bg-slate-800/50 hover:bg-slate-700/60 rounded-2xl p-8 border border-white/5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl h-full flex flex-col">
                  <div className="w-14 h-14 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="font-heading font-extrabold text-white text-xl mb-4 group-hover:text-brand-orange transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/70 font-medium leading-relaxed flex-grow">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
