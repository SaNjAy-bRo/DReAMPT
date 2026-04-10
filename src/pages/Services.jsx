import React from 'react';
import Reveal from '../components/Reveal';

const Services = () => {
  const serviceCategories = [
    {
      title: "Concept Design",
      subtitle: "Geometry Creation / Modelling",
      description: "Transforming abstract ideas into precise digital reality. We specialize in complex geometry creation, 3D modeling, and surface engineering to build a solid foundation for your product lifecycle.",
      image: "/images/services/concept-design.png",
      capabilities: ["3D CAD Modelling", "Surface Design", "Reverse Engineering", "Product Visualization"]
    },
    {
      title: "Design Validation",
      subtitle: "Finite Element Analysis (FEA) & CFD",
      description: "Rigorous testing within digital environments. We use advanced FEA for structural integrity and CFD for fluid dynamics to ensure your designs perform flawlessly under real-world conditions.",
      image: "/images/services/fea-cfd.png",
      capabilities: ["Stress & Strain Analysis", "Flow Simulation", "Thermal Analysis", "Vibration Testing"]
    },
    {
      title: "Layout & Manufacturing Drawings",
      subtitle: "Detailed Documentation",
      description: "Bridging the gap between design and the shop floor. We provide comprehensive manufacturing layouts, GD&T application, and detailed 2D drawings that ensure zero-error production.",
      image: "/images/3/images/cimatron-die-09.jpg",
      capabilities: ["2D Detailing", "GD&T Documentation", "Assembly Layouts", "BOM Generation"]
    },
    {
      title: "Manufacturing Solutions",
      subtitle: "Prototypes & Mass Production",
      description: "Turning designs into physical excellence. Our manufacturing support covers everything from rapid prototyping for validation to high-volume mass production strategies.",
      image: "/images/products/altair-mold-feature.png",
      capabilities: ["CNC Programming", "Tooling Design", "Process Optimization", "Quality Control"]
    },
    {
      title: "Research & Development",
      subtitle: "Innovation & New Product Development",
      description: "We continually drive innovation through dedicated R&D activities, helping clients develop cutting-edge solutions that stay ahead of market trends.",
      image: "/images/services/services-hero.png",
      capabilities: ["NPD Workflows", "Protocol Testing", "Material Research", "Innovation Consulting"]
    },
    {
      title: "Industrial Automation",
      subtitle: "Pick & Place and Autonomous Robots",
      description: "Modernizing industrial workflows through robotics. We design and implement pick-and-place systems and autonomous robotic solutions that drive efficiency.",
      image: "/images/services/robotics.png",
      capabilities: ["Robotic Cell Design", "Pick & Place Systems", "PLC / HMI Integration", "System Automation"]
    },
    {
      title: "Specialized Engineering",
      subtitle: "Material Handling & Reverse Engineering",
      description: "Design and supply of critical industrial equipment. We also provide high-fidelity reverse engineering services for legacy component restoration.",
      image: "/images/3/images/cimatron-die-01.jpg",
      capabilities: ["Conveyors & Racks", "Load Analysis", "Legacy Modeling", "Part Restoration"]
    },
    {
      title: "Workforce & Commissioning",
      subtitle: "Professional Engineering Services",
      description: "We provide workforce provision services for high-demand engineering projects and handle integrated commissioning to ensure systems are site-ready.",
      image: "/images/factory-hero.png",
      capabilities: ["Engineering Manpower", "On-site Integration", "System Commissioning", "Technical Training"]
    }
  ];

  const testingList = [
    "EMI / EMC", "BURN IN TEST", "RANDOM VIBRATION", "THERMAL CYCLING", 
    "LOW TEMPERATURE TEST", "HIGH TEMPERATURE TEST", "ACCELERATION", "SHOCK", 
    "BUMP", "ALTITUDE", "MOLD GROWTH", "CORROSION", "TROPICAL EXPOSURE"
  ];

  return (
    <main className="services-page pt-20 bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#1a2d3e] py-24 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/services/services-hero.png" 
            alt="Engineering Services" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a2d3e]/60 via-[#1a2d3e]/40 to-[#1a2d3e]"></div>
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

      {/* Services Grid Section */}
      <section id="explore" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {serviceCategories.map((service, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-1/2">
                  <Reveal className="relative group">
                    <div className="absolute -inset-4 rounded-3xl bg-slate-50 transition-all duration-500 group-hover:bg-brand-orange/5 group-hover:scale-105"></div>
                    <div className="relative overflow-hidden rounded-2xl shadow-xl border border-slate-200 aspect-[4/3] bg-slate-100">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </Reveal>
                </div>

                <div className="w-full lg:w-1/2">
                  <Reveal delay={200}>
                    <div className="flex flex-col items-start">
                      <h2 className="mb-2 font-heading text-3xl font-bold text-slate-900 sm:text-4xl leading-tight">
                        {service.title}
                      </h2>
                      <p className="mb-6 font-bold text-brand-orange uppercase tracking-wider text-sm">
                        {service.subtitle}
                      </p>
                      <p className="mb-8 text-lg leading-relaxed text-slate-600 font-medium">
                        {service.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-x-8 gap-y-4 w-full border-t border-slate-100 pt-8">
                        {service.capabilities.map((cap, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className="h-1.5 w-1.5 rounded-full bg-brand-orange"></div>
                            <span className="text-sm font-extrabold text-[#1a2d3e] uppercase">{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testing Services Section */}
      <section className="py-24 bg-[#f8fafc] border-y border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-orange/[0.02] -skew-x-12 transform translate-x-1/2"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
              <div className="max-w-2xl">
                <p className="section-kicker">Validation & Reliability</p>
                <h2 className="section-title text-[#1a2d3e] mt-2">Testing Services</h2>
                <p className="mt-4 text-lg text-slate-600 font-medium leading-relaxed">
                  We provide a non-comprehensive but continually updated list of testing entries to ensure your products meet the most stringent global standards.
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

      {/* CTA section */}
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
