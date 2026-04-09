import React from 'react';
import Reveal from '../components/Reveal';

const KeyBenefits = [
  {
    "icon": "/images/3/images/design-verification.png",
    "title": "Validate Early",
    "desc": "Detect potential defects like air traps and weld lines early in the design phase, reducing the need for expensive physical prototypes."
  },
  {
    "icon": "/images/3/images/improved-efficiency.png",
    "title": "Cycle Time Optimization",
    "desc": "Optimize cooling systems and gating to significantly reduce cycle times and improve production efficiency."
  },
  {
    "icon": "/images/3/images/accuracy.png",
    "title": "Quality Assurance",
    "desc": "Predict warpage and material shrinkage accurately to ensure final part dimensions meet strict quality standards."
  },
  {
    "icon": "/images/3/images/faster-delivery.png",
    "title": "First-Time-Right",
    "desc": "Achieve a faster time-to-market by ensuring the mold is right the first time, minimizing physical tryouts and rework."
  }
];

const GridFeatures = [
  {
    "img": "/images/3/images/cimatron-mold-01.jpg",
    "title": "Filling & Packing",
    "desc": "Simulate the entire injection process from start to finish. Analyze material flow, pressure distribution, and density to ensure uniform filling."
  },
  {
    "img": "/images/3/images/cimatron-mold-02.jpg",
    "title": "Cooling System Validation",
    "desc": "Analyze the effectiveness of cooling channels. Predict temperature distribution across the mold and identify hotspots before manufacturing."
  },
  {
    "img": "/images/3/images/cimatron-mold-03.jpg",
    "title": "Warpage Prediction",
    "desc": "Utilize advanced solvers to predict part deformation and warpage due to thermal stresses and material shrinkage."
  },
  {
    "img": "/images/3/images/cimatron-mold-04.jpg",
    "title": "Gate & Runner Optimization",
    "desc": "Automatically determine optimal gate locations and balance runners to ensure balanced filling across multiple cavities."
  }
];

const Capabilities = [
  {
    "img": "/images/3/images/cimatron-mold-05.jpg",
    "title": "Conformal Cooling Analysis",
    "desc": "Analyze complex cooling circuits, including 3D-printed conformal cooling, to maximize heat extraction and minimize cycle times."
  },
  {
    "img": "/images/3/images/cimatron-mold-06.jpg",
    "title": "Fiber Orientation Simulation",
    "desc": "Predict the alignment of short and long fibers in reinforced plastics, which is critical for understanding the mechanical strength and warping of the part."
  }
];

const AltairInspireMold = () => {
  return (
    <main className="pt-24 lg:pt-32 pb-0 bg-[#f9fafb]">
      
      {/* 1. Hero Header */}
      <section className="relative bg-[#eceff3] pt-24 pb-20 lg:pt-32 lg:pb-32 border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/3/images/video-gallery.jpg" alt="Background" className="w-full h-full object-cover opacity-[0.25] object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-800/40 to-transparent"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-[55%]">
            <Reveal>
              <h1 className="font-heading text-4xl font-extrabold leading-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl tracking-tight">
                Altair Inspire Mold
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <div className="w-20 h-1.5 bg-brand-orange mt-6 rounded-full shadow-sm"></div>
            </Reveal>
            <Reveal delay={200}>
              <h2 className="mt-8 text-2xl font-bold text-white drop-shadow-md lg:text-3xl">
                Advanced Injection Molding Simulation
              </h2>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-5 text-lg text-zinc-100 drop-shadow max-w-2xl font-medium leading-relaxed">
                Validate and optimize plastic injection mold designs with industry-leading simulation technology. Reduce defects, cycle times, and manufacturing costs.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-10 flex flex-wrap gap-5">
                <a href="/#contact" className="btn-primary shadow-[0_8px_20px_rgb(242,106,33,0.3)] hover:shadow-[0_12px_25px_rgb(242,106,33,0.4)] text-base px-8 py-4">
                  Request a Free Consultation
                </a>
              </div>
            </Reveal>
          </div>
          
          <div className="hidden lg:block w-full lg:w-[45%]">
            <Reveal delay={500} className="transform translate-x-4">
              <div className="rounded-2xl overflow-hidden shadow-[0_30px_60px_rgb(0,0,0,0.2)] border-[8px] border-white/90 bg-white">
                <img src="/images/3/images/video-gallery.jpg" alt="Interface" className="w-full h-auto aspect-[4/3] object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Key Benefits Section */}
      <section className="py-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-heading text-4xl font-extrabold text-[#162737]">Key Benefits</h2>
              <div className="w-12 h-1 bg-brand-orange mt-5 mx-auto rounded-full"></div>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {KeyBenefits.map((benefit, i) => (
              <Reveal key={i} delay={i * 100} className="bg-[#f07127] rounded-xl p-8 flex flex-col text-left shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="mb-8 w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <img src={benefit.icon} alt={benefit.title} className="w-8 h-8 object-contain filter invert brightness-0" />
                </div>
                <h3 className="font-heading font-extrabold text-xl mb-4 text-white leading-tight">{benefit.title}</h3>
                <p className="text-white/95 font-medium text-[0.9rem] leading-relaxed">
                  {benefit.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Tools Section */}
      <section className="py-24 bg-[#f8fbff] border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="font-heading text-4xl font-extrabold text-[#165A72] mb-6">Simulation & Validation Tools</h2>
              <p className="text-lg text-brand-slate font-medium">A powerful suite of analysis tools to ensure peak molding performance and part quality.</p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {GridFeatures.map((feature, i) => (
              <Reveal key={i} delay={(i % 2) * 100} className="group bg-white p-7 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-slate-200 transition-all flex flex-col h-full">
                <div className="w-full aspect-[2/1] rounded-xl overflow-hidden bg-slate-50 mb-6 relative">
                  <img src={feature.img} alt={feature.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 border border-black/5 rounded-xl pointer-events-none"></div>
                </div>
                <h4 className="font-heading font-extrabold text-[1.35rem] text-[#165A72] mb-3 group-hover:text-brand-orange transition-colors">{feature.title}</h4>
                <p className="text-[#475569] text-[0.95rem] font-medium leading-relaxed flex-grow">{feature.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Advanced Capabilities - Zig-Zag */}
      <section className="py-32 bg-white relative overflow-hidden border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-24">
              <h2 className="font-heading text-4xl sm:text-[2.5rem] font-extrabold text-brand-ink mb-6">Advanced Processing Capabilities</h2>
              <div className="w-16 h-1.5 bg-brand-orange mx-auto mb-8 rounded-full"></div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-32">
            {Capabilities.map((feature, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}>
                  <div className="w-full lg:w-1/2">
                    <Reveal delay={100} className="relative group">
                      <div className={`absolute inset-0 bg-brand-orange/10 transform rounded-[2rem] transition-transform duration-500 group-hover:translate-y-4 ${isEven ? 'translate-x-4 translate-y-4 group-hover:translate-x-6' : '-translate-x-4 translate-y-4 group-hover:-translate-x-6'}`}></div>
                      <div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-8 border-white bg-slate-100 aspect-video z-10">
                         <img src={feature.img} alt={feature.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      </div>
                    </Reveal>
                  </div>
                  
                  <div className="w-full lg:w-1/2">
                    <Reveal delay={200}>
                      <div className="flex flex-col max-w-lg mx-auto lg:mx-0">
                        <div className="w-12 h-1.5 bg-brand-orange mb-8 rounded-full"></div>
                        <h3 className="font-heading text-3xl sm:text-[2.5rem] font-extrabold text-[#165A72] mb-6 leading-tight">{feature.title}</h3>
                        <p className="text-lg text-slate-600 font-medium leading-relaxed">{feature.desc}</p>
                      </div>
                    </Reveal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </main>
  );
};

export default AltairInspireMold;
