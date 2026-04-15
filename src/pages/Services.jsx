import React from 'react';
import Reveal from '../components/Reveal';

const Services = () => {
  /* ──────────────── DReAMPT acronym letters ──────────────── */
  const acronymLetters = [
    { letter: 'D',  word: 'Design',                id: 'design',              color: '#f26a21' },
    { letter: 'Re', word: 'Reverse Engineering',    id: 'reverse-engineering', color: '#2b6cb0' },
    { letter: 'A',  word: 'Analysis (FEA, CFD)',    id: 'analysis',            color: '#169c7d' },
    { letter: 'M',  word: 'Manufacturing',          id: 'manufacturing',       color: '#8b5cf6' },
    { letter: 'P',  word: 'Prototyping',            id: 'prototyping',         color: '#e84393' },
    { letter: 'T',  word: 'Testing',                id: 'testing',             color: '#d85a1a' },
  ];

  /* ──────────────── Detailed service sections ──────────────── */
  const serviceDetails = [
    {
      id: 'design',
      letter: 'D',
      title: 'Design',
      subtitle: 'Geometry Creation / 3D Modelling / Concept Design',
      description:
        'Transforming abstract ideas into precise digital reality. We specialize in complex geometry creation, 3D modelling, and surface engineering to build a solid foundation for your product lifecycle — from electronic enclosures to aero-structure components.',
      image: '/images/services/concept-design.png',
      capabilities: [
        '3D CAD Modelling',
        'Electronic Enclosures',
        'Surface Design',
        'Product Visualization',
        'Layout & Manufacturing Drawings',
        'GD&T Documentation',
      ],
      accent: '#f26a21',
    },
    {
      id: 'reverse-engineering',
      letter: 'Re',
      title: 'Reverse Engineering',
      subtitle: 'Legacy Component Restoration & Digital Twin',
      description:
        'High-fidelity reverse engineering services for legacy component restoration and digital twin creation. We convert physical parts into accurate 3D CAD models using advanced scanning and measurement techniques.',
      image: '/images/3/images/cimatron-die-01.jpg',
      capabilities: [
        '3D Scanning & Point Cloud',
        'Legacy Part Modelling',
        'Part Restoration',
        'Digital Twin Creation',
        'Dimensional Inspection',
        'CAD Comparison Reports',
      ],
      accent: '#2b6cb0',
    },
    {
      id: 'analysis',
      letter: 'A',
      title: 'Analysis (FEA, CFD)',
      subtitle: 'Finite Element Analysis & Computational Fluid Dynamics',
      description:
        'Rigorous testing within digital environments. We use advanced FEA for structural integrity and CFD for fluid dynamics to ensure your designs perform flawlessly under real-world conditions before a single prototype is built.',
      image: '/images/services/fea-cfd.png',
      capabilities: [
        'Stress & Strain Analysis',
        'Bird Impact Simulation',
        'Drop Test Analysis',
        'Aero-structure Justification',
        'Thermal Analysis',
        'Vibration & Modal Analysis',
      ],
      accent: '#169c7d',
    },
    {
      id: 'manufacturing',
      letter: 'M',
      title: 'Manufacturing',
      subtitle: 'CNC Programming, Tooling & Production Support',
      description:
        'Turning designs into physical excellence. Our manufacturing support covers CNC programming, mold and die design, industrial automation, and comprehensive production workflows for precision-engineered components.',
      image: '/images/products/altair-mold-feature.png',
      capabilities: [
        'CNC Programming',
        'Mold & Die Design',
        'Industrial Automation',
        'Robotic Cell Design',
        'Control Panels & Consoles',
        'Quality Control',
      ],
      accent: '#8b5cf6',
    },
    {
      id: 'prototyping',
      letter: 'P',
      title: 'Prototyping',
      subtitle: 'Rapid Prototyping & New Product Development',
      description:
        'From rapid prototyping for design validation to new product development workflows. We deliver functional prototypes that bridge the gap between concept and market-ready products through iterative refinement.',
      image: '/images/services/services-hero.png',
      capabilities: [
        'Rapid Prototyping',
        'NPD Workflows',
        'Functional Validation',
        'Material Selection',
        'Innovation Consulting',
        'Design Iteration',
      ],
      accent: '#e84393',
    },
    {
      id: 'testing',
      letter: 'T',
      title: 'Testing',
      subtitle: 'Environmental, Vibration & Compliance Testing',
      description:
        'Comprehensive testing services ensuring your products meet the most stringent global standards. From EMI/EMC to environmental stress screening — our NABL-certified test facilities deliver reliable, accredited results.',
      image: '/images/hero-bg.png',
      capabilities: [
        'EMI / EMC Testing',
        'Random Vibration',
        'Thermal Cycling',
        'Burn-in Test',
        'Shock & Bump Test',
        'Altitude & Corrosion',
      ],
      accent: '#d85a1a',
    },
  ];

  const testingList = [
    'EMI / EMC', 'BURN IN TEST', 'RANDOM VIBRATION', 'THERMAL CYCLING',
    'LOW TEMPERATURE TEST', 'HIGH TEMPERATURE TEST', 'ACCELERATION', 'SHOCK',
    'BUMP', 'ALTITUDE', 'MOLD GROWTH', 'CORROSION', 'TROPICAL EXPOSURE',
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main className="services-page pt-20 bg-white">

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#1a2d3e] py-24 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/services/services-hero.png"
            alt="Engineering Services"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a2d3e]/60 via-[#1a2d3e]/40 to-[#1a2d3e]" />
        </div>

        <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="mb-6 inline-block rounded-full bg-brand-orange/20 px-4 py-1.5 text-sm font-bold tracking-widest text-brand-orange uppercase border border-brand-orange/30">
              Our Capabilities
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mb-8 font-heading text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              Precision <span className="text-brand-orange">Engineering</span> Services
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-300 sm:text-2xl font-medium">
              A comprehensive technical support system from concept design to final implementation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════ DReAMPT ACRONYM SECTION ═══════════ */}
      <section className="dreampt-acronym-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <p className="section-kicker justify-center">What We Stand For</p>
              <h2 className="section-title mt-3">
                What Does <span className="text-brand-orange">DReAMPT</span> Mean?
              </h2>
              <p className="section-copy mx-auto max-w-2xl">
                Every letter represents a core engineering discipline we master — click any to explore.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="dreampt-letters-grid">
              {acronymLetters.map((item, i) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="dreampt-letter-card group"
                  style={{ '--accent': item.color }}
                >
                  <div className="dreampt-letter-circle">
                    <span>{item.letter}</span>
                  </div>

                  <div className="dreampt-letter-divider" />

                  <p className="dreampt-letter-word">{item.word}</p>

                  <div className="dreampt-letter-arrow">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 5v14M19 12l-7 7-7-7"/>
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════ DETAILED SERVICE SECTIONS ═══════════ */}
      <section className="py-8 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-0">
            {serviceDetails.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="service-detail-block scroll-mt-28"
                style={{ '--service-accent': service.accent }}
              >
                <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

                  {/* Image */}
                  <div className="w-full lg:w-1/2">
                    <Reveal className="relative group">
                      <div className="service-image-glow" />
                      <div className="relative overflow-hidden rounded-2xl shadow-xl border border-slate-200 aspect-[4/3] bg-slate-100">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Letter badge overlay */}
                        <div
                          className="absolute top-4 left-4 w-14 h-14 rounded-xl flex items-center justify-center text-white font-heading text-xl font-extrabold shadow-lg"
                          style={{ background: service.accent }}
                        >
                          {service.letter}
                        </div>
                      </div>
                    </Reveal>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-1/2">
                    <Reveal delay={200}>
                      <div className="flex flex-col items-start">
                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-heading text-base font-extrabold"
                            style={{ background: service.accent }}
                          >
                            {service.letter}
                          </div>
                          <div
                            className="h-px flex-1 min-w-[40px]"
                            style={{ background: `linear-gradient(90deg, ${service.accent}, transparent)` }}
                          />
                        </div>

                        <h2 className="mb-2 font-heading text-3xl font-bold text-slate-900 sm:text-4xl leading-tight">
                          {service.title}
                        </h2>
                        <p
                          className="mb-6 font-bold uppercase tracking-wider text-sm"
                          style={{ color: service.accent }}
                        >
                          {service.subtitle}
                        </p>
                        <p className="mb-8 text-lg leading-relaxed text-slate-600 font-medium">
                          {service.description}
                        </p>

                        <div className="grid grid-cols-2 gap-x-8 gap-y-4 w-full border-t border-slate-100 pt-8">
                          {service.capabilities.map((cap, i) => (
                            <div key={i} className="flex items-center gap-3">
                              <div
                                className="h-2 w-2 rounded-full flex-shrink-0"
                                style={{ background: service.accent }}
                              />
                              <span className="text-sm font-extrabold text-[#1a2d3e] uppercase">{cap}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ TESTING DEEP-DIVE (under Testing section) ═══════════ */}
      <section className="py-24 bg-[#f8fafc] border-y border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-orange/[0.02] -skew-x-12 transform translate-x-1/2" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
              <div className="max-w-2xl">
                <p className="section-kicker">Validation & Reliability</p>
                <h2 className="section-title text-[#1a2d3e] mt-2">Complete Testing Portfolio</h2>
                <p className="mt-4 text-lg text-slate-600 font-medium leading-relaxed">
                  Our continually updated list of testing capabilities ensures your products meet the most stringent global standards.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0">
                  <img src="/images/services/robotics.png" alt="NABL Logo Placeholder" className="w-12 h-12 object-contain grayscale" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Accreditation</p>
                  <p className="text-slate-900 font-extrabold">NABL Certified Testing</p>
                  <p className="text-xs text-slate-500 font-medium">Govt. of India Recognized</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {testingList.map((test, i) => (
                <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4 group hover:border-brand-orange/40 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-brand-orange font-bold text-xs group-hover:bg-brand-orange group-hover:text-white transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <span className="font-extrabold text-[#1a2d3e] text-sm uppercase tracking-wide">{test}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════ MANUFACTURING DEEP-DIVE ═══════════ */}
      <section className="mfg-deepdive-section">
        {/* decorative background elements */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-[#8b5cf6]/[0.03] skew-x-12 transform -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[#8b5cf6]/[0.04] blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <div className="text-center mb-16">
              <p className="section-kicker justify-center" style={{ color: '#8b5cf6' }}>Production & Fabrication</p>
              <h2 className="section-title text-[#1a2d3e] mt-3">
                Manufacturing <span style={{ color: '#8b5cf6' }}>Capabilities</span>
              </h2>
              <p className="section-copy mx-auto max-w-2xl">
                End-to-end manufacturing solutions — from precision CNC machining to serial production runs, we deliver quality at every stage.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="mfg-cards-grid">
              {/* Electromechanical Components */}
              <div className="mfg-card group">
                <div className="mfg-card-icon" style={{ background: 'linear-gradient(135deg, #8b5cf6, #a78bfa)' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
                  </svg>
                </div>
                <h3 className="mfg-card-title">Electromechanical Components</h3>
                <p className="mfg-card-desc">
                  Design and manufacturing of precision electromechanical assemblies — integrating electrical and mechanical systems for rugged, reliable performance.
                </p>
                <ul className="mfg-card-list">
                  <li>Sensor Assemblies</li>
                  <li>Actuator Integration</li>
                  <li>Control System Housings</li>
                  <li>Cable Harness Systems</li>
                </ul>
              </div>

              {/* Enclosures */}
              <div className="mfg-card group">
                <div className="mfg-card-icon" style={{ background: 'linear-gradient(135deg, #2b6cb0, #4299e1)' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="18" rx="3"/>
                    <path d="M2 9h20M9 21V9"/>
                  </svg>
                </div>
                <h3 className="mfg-card-title">Enclosures</h3>
                <p className="mfg-card-desc">
                  Custom enclosure design and fabrication for electronics, industrial controls, and field-deploy equipment — IP-rated and built to specification.
                </p>
                <ul className="mfg-card-list">
                  <li>Electronic Enclosures</li>
                  <li>Industrial Control Panels</li>
                  <li>Ergonomic Consoles</li>
                  <li>IP-Rated Housings</li>
                </ul>
              </div>

              {/* Aluminium Milling */}
              <div className="mfg-card group">
                <div className="mfg-card-icon" style={{ background: 'linear-gradient(135deg, #169c7d, #38b2ac)' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                  </svg>
                </div>
                <h3 className="mfg-card-title">Aluminium Milling</h3>
                <p className="mfg-card-desc">
                  High-precision CNC milling of aluminium components — from complex aerospace parts to custom industrial fixtures with tight tolerances.
                </p>
                <ul className="mfg-card-list">
                  <li>3-Axis & 5-Axis CNC</li>
                  <li>Aerospace-grade Precision</li>
                  <li>Surface Finishing</li>
                  <li>Tight Tolerance Machining</li>
                </ul>
              </div>

              {/* Sheetmetal Punching */}
              <div className="mfg-card group">
                <div className="mfg-card-icon" style={{ background: 'linear-gradient(135deg, #f26a21, #ff8d41)' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <path d="M3 9h18M9 3v18"/>
                  </svg>
                </div>
                <h3 className="mfg-card-title">Sheetmetal Punching</h3>
                <p className="mfg-card-desc">
                  CNC turret punching and laser cutting for sheet metal fabrication — delivering high-volume, repeatable production with speed and accuracy.
                </p>
                <ul className="mfg-card-list">
                  <li>CNC Turret Punching</li>
                  <li>Laser Cutting</li>
                  <li>Bending & Forming</li>
                  <li>Powder Coating</li>
                </ul>
              </div>

              {/* Prototyping & Serial Production */}
              <div className="mfg-card mfg-card-wide group">
                <div className="mfg-card-icon" style={{ background: 'linear-gradient(135deg, #e84393, #fd79a8)' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                    <polyline points="2 17 12 22 22 17"/>
                    <polyline points="2 12 12 17 22 12"/>
                  </svg>
                </div>
                <h3 className="mfg-card-title">Prototyping & Serial Production</h3>
                <p className="mfg-card-desc">
                  From single proof-of-concept prototypes to high-volume serial production. We manage the complete manufacturing lifecycle with rigorous quality control at every stage — ensuring your products transition seamlessly from lab to market.
                </p>
                <ul className="mfg-card-list">
                  <li>Rapid Prototyping</li>
                  <li>Pilot Batch Runs</li>
                  <li>Mass Production</li>
                  <li>Quality Assurance</li>
                  <li>Assembly & Integration</li>
                  <li>Supply Chain Management</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="bg-[#1a2d3e] py-24 relative overflow-hidden text-white">
        <div className="mx-auto max-w-5xl px-4 text-center relative z-10">
          <Reveal>
            <h2 className="text-4xl font-extrabold mb-8 capitalize">Ready for your "First Time Right" solution?</h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Partner with a team that has managed complex projects for global giants like ISRO, DRDO, and BEL.
            </p>
            <a href="/contact" className="inline-block bg-brand-orange hover:bg-brand-orange/90 text-white font-extrabold text-xl px-12 py-5 rounded-xl shadow-2xl transition-all hover:-translate-y-1">
              Consult an Expert
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default Services;
