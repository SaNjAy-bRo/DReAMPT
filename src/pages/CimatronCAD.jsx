import React from 'react';
import Reveal from '../components/Reveal';

const KeyBenefits = [
  {
    "icon": "/images/3/images/specialized-design-tools.png",
    "title": "Specialized design tools",
    "desc": "Choose the best technique for the job from among hybrid solid and surface modeling tools."
  },
  {
    "icon": "/images/3/images/design-verification.png",
    "title": "Design verification",
    "desc": "Eliminate error at the design stage with a range of tools that verify the integrity of in-progress designs."
  },
  {
    "icon": "/images/3/images/design-to-production.png",
    "title": "Design to production",
    "desc": "Use analysis and editing tools to quickly prepare part designs for efficient CNC programming."
  }
];
const GridFeatures = [
  {
    "img": "/images/3/images/cimatron-cad-02.jpg",
    "title": "Streamlined workflow",
    "desc": "CIMATRON CAD makes it easy to work with 3D CAD data in all standard file formats and offers direct translators for OEM CAD data, including vital product manufacturing information (PMI). Designers can take advantage of model-based definition (MBD) capabilities to add PMI and geometric dimensions and tolerance (GD&T) data for streamlined production. Native Cimatron don’t require data translation and can be efficiently shared with customers."
  },
  {
    "img": "/images/3/images/cimatron-cad-03.jpg",
    "title": "Advanced modeling",
    "desc": "Hybrid solid and surface modeling capabilities increase efficiency and flexibility by enabling designers to choose the tools that work best for them — and for the job. Functions for working with solid models include direct modeling capabilities that simplify the creation of holes, ribs, rounds, chamfers, and tapers. Changes can be applied at any time during the design process using hybrid, history-based, and direct modeling tools."
  },
  {
    "img": "/images/3/images/cimatron-cad-04.jpg",
    "title": "Robust surfacing and assembly",
    "desc": "Cimatron includes powerful tools for surfacing, wireframe creation, and editing. To simplify the design of complex assemblies, designers can source supplier components from a range of catalogs, add them to designs, and easily duplicate components."
  }
];
const Capabilities = [
  {
    "img": "/images/3/images/cimatron-cad-06.jpg",
    "title": "Associative drawings",
    "desc": "With a click of the mouse, 2D drawings that are associative with bills of materials (BOMs) can be automatically created from 3D parts and assemblies."
  },
  {
    "img": "/images/3/images/cimatron-cad-011.jpg",
    "title": "Transition to manufacturing",
    "desc": "Prepare part designs for efficient CNC programming using analysis and editing tools that accelerate the transition to production. Draft angles can be applied and relevant areas capped before sending jobs to the shop floor."
  }
];

const CimatronCAD = () => {
  return (
    <main className="pt-24 lg:pt-32 pb-0 bg-[#f9fafb]">
      
      {/* 1. Hero Header */}
      <section className="relative bg-[#eceff3] pt-24 pb-20 lg:pt-32 lg:pb-32 border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/3/images/cimatron-cad-hero.jpg" alt="Background" className="w-full h-full object-cover opacity-[0.25] object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-800/40 to-transparent"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-[55%]">
            <Reveal>
              <h1 className="font-heading text-4xl font-extrabold leading-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl tracking-tight">
                Cimatron CAD
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <div className="w-20 h-1.5 bg-brand-orange mt-6 rounded-full shadow-sm"></div>
            </Reveal>
            <Reveal delay={200}>
              <h2 className="mt-8 text-2xl font-bold text-white drop-shadow-md lg:text-3xl">
                Improve efficiency, flexibility, and quality in design 
              </h2>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-5 text-lg text-zinc-100 drop-shadow max-w-2xl font-medium leading-relaxed">
                Cimatron CAD provides a flexible 3D parametric hybrid modeling environment that integrates history-based and direct edit design tools, enhancing productivity with exceptional design flexibility.
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
                <img src="/images/3/images/cimatron-cad-hero.jpg" alt="Interface" className="w-full h-auto aspect-[4/3] object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Key Benefits Section */}
      {KeyBenefits.length > 0 && (
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
      )}

      {/* 3. Core Tools Section */}
      {GridFeatures.length > 0 && (
      <section className="py-24 bg-[#f8fbff] border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="font-heading text-4xl font-extrabold text-[#165A72] mb-6">Core Production Tools</h2>
              <p className="text-lg text-brand-slate font-medium">A specialized toolset structurally bridging the gap between digital modeling and precise physical manufacturing.</p>
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
      )}

      {/* 4. Advanced Capabilities - Zig-Zag */}
      {Capabilities.length > 0 && (
      <section className="py-32 bg-white relative overflow-hidden border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-24">
              <h2 className="font-heading text-4xl sm:text-[2.5rem] font-extrabold text-brand-ink mb-6">Advanced Engineering Capabilities</h2>
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
      )}

    </main>
  );
};

export default CimatronCAD;
