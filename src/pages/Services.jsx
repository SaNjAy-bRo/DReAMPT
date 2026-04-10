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
      image: "/images/3/images/cimatron-die-09.jpg", // Reusing an existing high-quality drawing image
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
      title: "Industrial Automation",
      subtitle: "Pick & Place and Autonomous Robots",
      description: "Modernizing industrial workflows through robotics. We design and implement pick-and-place systems and autonomous robotic solutions that drive efficiency and reduce operational costs.",
      image: "/images/services/robotics.png",
      capabilities: ["Robotic Cell Design", "Pick & Place Systems", "Mobile Robotics", "System Integration"]
    },
    {
      title: "Material Handling",
      subtitle: "Equipment Design and Supply",
      description: "Optimizing the flow of goods. We design and supply specialized material handling equipment tailored to your facility's unique logistical and production requirements.",
      image: "/images/3/images/cimatron-die-01.jpg",
      capabilities: ["Conveyor Systems", "Storage Solutions", "Custom Pallets/Racks", "Load Analysis"]
    }
  ];

  return (
    <main className="services-page pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-brand-navy py-24 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/services/services-hero.png" 
            alt="Engineering Services" 
            className="w-full h-full object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/60 via-brand-navy/40 to-brand-navy"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="mb-6 inline-block rounded-full bg-brand-orange/20 px-4 py-1.5 text-sm font-bold tracking-widest text-brand-orange uppercase border border-brand-orange/30">
              Our Capabilities
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mb-8 font-heading text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              Integrated Engineering <span className="text-brand-orange">Support</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-300 sm:text-2xl italic font-medium">
              "The only place where you'll get the perfect solution for all your industry needs."
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-12 flex items-center justify-center gap-6">
              <a href="#explore" className="btn-primary px-8 py-4 text-lg">Explore Services</a>
              <a href="/contact" className="btn-secondary on-dark px-8 py-4 text-lg">Get in Touch</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="explore" className="py-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {serviceCategories.map((service, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Visual Side */}
                <div className="w-full lg:w-1/2">
                  <Reveal className="relative group">
                    <div className="absolute -inset-4 rounded-3xl bg-brand-mist transition-all duration-500 group-hover:bg-brand-orange/5 group-hover:scale-105"></div>
                    <div className="relative overflow-hidden rounded-2xl shadow-panel border border-brand-line/50 aspect-[4/3] bg-brand-navy/5">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                    </div>
                  </Reveal>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <Reveal delay={200}>
                    <div className="flex flex-col items-start">
                      <div className="mb-4 inline-flex items-center gap-3">
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange text-white font-extrabold text-xl shadow-[0_8px_20px_rgba(242,106,33,0.3)]">
                          {index + 1}
                        </span>
                        <div className="h-0.5 w-12 bg-brand-orange/30"></div>
                      </div>
                      <h2 className="mb-2 font-heading text-3xl font-bold text-brand-ink sm:text-4xl leading-tight">
                        {service.title}
                      </h2>
                      <p className="mb-6 font-semibold text-brand-orange uppercase tracking-wider text-sm">
                        {service.subtitle}
                      </p>
                      <p className="mb-8 text-lg leading-relaxed text-brand-slate font-medium">
                        {service.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 w-full">
                        {service.capabilities.map((cap, i) => (
                          <div key={i} className="flex items-center gap-2 group/item">
                            <div className="h-1.5 w-1.5 rounded-full bg-brand-orange transition-all duration-300 group-hover/item:scale-150"></div>
                            <span className="text-sm font-bold text-brand-navy/80">{cap}</span>
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

      {/* CTA Section */}
      <section className="bg-brand-mist py-24">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <Reveal>
            <h2 className="font-heading text-4xl font-bold text-brand-ink mb-6">Ready to Optimize Your Engineering Workflow?</h2>
            <p className="text-xl text-brand-slate mb-10 max-w-2xl mx-auto">
              Our 105+ years of collective experience are at your disposal. Let's build the future together.
            </p>
            <a href="/contact" className="btn-primary text-xl px-12 py-5 shadow-2xl">
              Start Your Project Today
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default Services;
