import React from 'react';
import Reveal from '../components/Reveal';

const CaseStudies = () => {
  const cases = [
    {
      id: 1,
      title: "Electronic Enclosure – Design, Prototype & Testing",
      category: "Aerospace / Defense",
      scope: "To design and build an ElectroMechanical enclosure with Sensitive Electronics as per MIL standards. This includes testing as per MIL standards and producing the required number of prototypes within tight time-lines.",
      inputs: [
        "Interface CAD models/ Documents",
        "Electronics BOM including the LCD",
        "Recommended material properties",
        "MIL Standard testing specifications"
      ],
      approach: [
        "Building the Concepts",
        "PDR, CDR and DDR Concept reviews",
        "EMI gasket design",
        "SCM finalization (Electronics/Machining)",
        "Quality testing for integration"
      ],
      challenges: [
        "High level space limitation (tight interfacing)",
        "Stringent weight requirements",
        "Micron level tolerance for mounting",
        "Very demanding thermal management"
      ],
      results: [
        "Achieved in 3 design cycles",
        "Thermal & Vibration Tests completed within 2 prototypes",
        "Repeatable volume production established",
        "Budget constraints met comfortably"
      ],
      image: "/images/case_study_enclosure.png"
    },
    {
      id: 10,
      title: "10 Manipulator Assembly for NDT",
      category: "Industrial Automation",
      scope: "Supply of a manipulator system which carries the NDT test equipment. status: Project in Progress.",
      inputs: [
        "NDT Test Equipment Dimensions",
        "Operational Load Factors",
        "HMI Requirements"
      ],
      approach: [
        "8-motion system development",
        "PLC and HMI based control system",
        "Control electronics selection",
        "WPF-based HMI Software architecture",
        "EtherCAT & TCP/IP integration"
      ],
      challenges: [
        "Complex motion synchronization (8 axes)",
        "Automated task sequencing",
        "Real-time data handling"
      ],
      results: [
        "Integration of WPF/IPC architecture",
        "Scalable modular software ready",
        "Successful hardware interfacing"
      ],
      image: "/images/services/robotics.png"
    }
  ];

  return (
    <main className="case-studies-page pt-20 bg-[#f8fafc]">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#1a2d3e] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/hero-bg.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="section-kicker text-brand-orange">Engineering Impact</p>
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-6">Technical <span className="text-brand-orange">Case Studies</span></h1>
            <p className="max-w-3xl mx-auto text-xl text-slate-300 font-medium leading-relaxed">
              Deep dives into how we solve complex engineering challenges through precision design, thermal management, and advanced automation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {cases.map((cs, idx) => (
              <div key={cs.id} className="flex flex-col lg:flex-row gap-16">
                {/* Left: Metadata & Image */}
                <div className="w-full lg:w-5/12">
                  <Reveal>
                    <div className="sticky top-32">
                      <div className="mb-6 flex items-center gap-4">
                        <span className="px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-widest border border-brand-orange/20">
                          Case Study {cs.id}
                        </span>
                        <span className="text-slate-400 font-bold text-xs uppercase tracking-widest">{cs.category}</span>
                      </div>
                      <h2 className="text-3xl font-extrabold text-slate-900 mb-8 leading-tight">{cs.title}</h2>
                      <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3]">
                        <img src={cs.image} alt={cs.title} className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </Reveal>
                </div>

                {/* Right: Technical Details */}
                <div className="flex-1">
                  <Reveal delay={200}>
                    <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 space-y-12">
                      {/* Scope */}
                      <div>
                        <h3 className="text-lg font-extrabold text-[#1a2d3e] uppercase tracking-wider mb-4 border-l-4 border-brand-orange pl-4">Project Scope</h3>
                        <p className="text-slate-600 font-medium leading-relaxed text-lg">{cs.scope}</p>
                      </div>

                      {/* Content Grid */}
                      <div className="grid md:grid-cols-2 gap-10">
                        <div>
                          <h4 className="text-sm font-extrabold text-slate-400 uppercase tracking-widest mb-6">Inputs Provided</h4>
                          <ul className="space-y-3">
                            {cs.inputs.map((item, i) => (
                              <li key={i} className="flex items-center gap-3 text-slate-700 font-bold text-sm italic">
                                <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-extrabold text-slate-400 uppercase tracking-widest mb-6">Our Approach</h4>
                          <ul className="space-y-3">
                            {cs.approach.map((item, i) => (
                              <li key={i} className="flex items-center gap-3 text-slate-700 font-bold text-sm italic">
                                <span className="text-brand-orange">✓</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Challenges & Results */}
                      <div className="pt-10 border-t border-slate-50 grid md:grid-cols-2 gap-10">
                        <div className="bg-slate-50 p-6 rounded-2xl">
                          <h4 className="text-sm font-extrabold text-red-500 uppercase tracking-widest mb-4">Key Challenges</h4>
                          <ul className="space-y-2">
                            {cs.challenges.map((item, i) => (
                              <li key={i} className="text-slate-600 text-sm font-bold leading-tight flex gap-2">
                                <span className="shrink-0">•</span> {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-green-50/50 p-6 rounded-2xl border border-green-100">
                          <h4 className="text-sm font-extrabold text-green-600 uppercase tracking-widest mb-4">Results</h4>
                          <ul className="space-y-2">
                            {cs.results.map((item, i) => (
                              <li key={i} className="text-slate-700 text-sm font-extrabold leading-tight flex gap-2">
                                <span className="text-green-500 shrink-0">✓</span> {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Note */}
       <section className="py-24 bg-white border-t border-slate-100">
          <div className="mx-auto max-w-4xl px-4 text-center">
             <Reveal>
                <div className="inline-block p-2 px-6 rounded-full bg-brand-orange/10 text-brand-orange font-bold text-sm mb-6">
                   Satisfaction Achieved with Repeat Orders
                </div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Expertise is not accidental — it's engineered.</h2>
                <p className="text-lg text-slate-600 font-medium">
                   Our case studies represent just a fraction of the problems we solve daily. Every project is a testament to our "Right-First-Time" philosophy.
                </p>
             </Reveal>
          </div>
       </section>
    </main>
  );
};

export default CaseStudies;
