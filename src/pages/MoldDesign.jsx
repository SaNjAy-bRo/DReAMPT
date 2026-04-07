import React from 'react';
import Reveal from '../components/Reveal';

const toolCategories = [
  {
    title: "Design & Parting",
    description: "Start custom mold designs with hybrid CAD flexibility.",
    features: [
      { title: "Hybrid CAD tools", desc: "The system's hybrid CAD functionality simplifies the creation of complex surfaces and the healing and stitching of geometry, as well as working with non-solid models. Dedicated resources developed to design for manufacturing optimize machining by enabling users to cap surfaces and contours, cap holes and slots, extend surfaces, and apply drafts and rounds.", img: "/images/products/tools/cimatron-mold-01.jpg" },
      { title: "Parting design", desc: "Cimatron provides the industry's fastest and most accurate tool for parting and cavity design, helping moldmakers quickly get started on jobs. The system includes automatic tools for identifying undercuts, checking geometry, and handling part surfaces.", img: "/images/products/tools/cimatron-mold-02.jpg" },
      { title: "Preliminary design", desc: "Preliminary design allows accurate production strategies at the very beginning of the quotation process. It handles mold complexity including multi-cavity and family molds. Powerful simulation tools clearly display the amount of mold components.", img: "/images/products/tools/cimatron-mold-03.jpg" },
      { title: "Managing design changes", desc: "Changes constantly occur in moldmaking, which is why it's important to have a system that efficiently tracks, updates, analyzes, and maintains engineering management on ECOs. Cimatron's ECO management tools automatically scan and replace the existing geometry with ECO geometry.", img: "/images/products/tools/cimatron-mold-13.jpg" }
    ]
  },
  {
    title: "Mold Base & Components",
    description: "Engineer the core frame and automated mechanical parts.",
    features: [
      { title: "Mold base design", desc: "Cimatron makes it possible to browse through an almost complete native dimension and standard catalogs from major vendors (HASCO, DME, MEUSBURGER, etc.). Choose standard catalogs for mold base components, insert, base plates that include all standard components.", img: "/images/products/tools/cimatron-mold-04.jpg" },
      { title: "Catalog parts", desc: "Access a large selection of current commercial catalog libraries to find the correct components and grab the geometry to create intelligent customized catalogs. Cimatron allows users to automatically adjust catalog parts or sub-assemblies to make assembly dimensions.", img: "/images/products/tools/cimatron-mold-09.jpg" },
      { title: "Core, cavity, and sliders", desc: "Cimatron's automated tools make it simple to easily design custom components such as cores, cavity, and sliders. Engineering changes are automatically implemented throughout all related parts so users can completely update tracking instantly without errors.", img: "/images/products/tools/cimatron-mold-05.jpg" },
      { title: "Lifters and inserts", desc: "Cimatron helps accelerate the engineering process with dedicated tools for lifter and insert design. Any standard commercial or custom-built lifter sweeps can be placed in design using easily an intelligent system that interacts effectively with the most complex structure.", img: "/images/products/tools/cimatron-mold-10.jpg" }
    ]
  },
  {
    title: "Cooling & Delivery",
    description: "Optimize thermal layouts, flow, and extraction mechanics.",
    features: [
      { title: "Runner systems", desc: "Flexible easy-to-use tools completely design and create multi-cavity runners dynamically, reducing design time to hours. Runners can be sketched in 2D and accurately projected onto 3D models, complete with the addition of sprue, bushings, and gates.", img: "/images/products/tools/cimatron-mold-06.jpg" },
      { title: "Cooling systems", desc: "A variety of design and validation tools make the layout of channels and intelligent design completely effortlessly even on the most complex cooling systems. Dedicated for cooling system design handles the placement of channels and components like plugs and baffles.", img: "/images/products/tools/cimatron-mold-07.jpg" },
      { title: "Conformal cooling", desc: "Ideal for additive manufacturing applications, conformal cooling channels can dramatically reduce injection cycle times. Cimatron's dedicated tools for designing and refining conform cooling channels give even the most complex channels hybrid CAD flexibility.", img: "/images/products/tools/cimatron-mold-08.jpg" },
      { title: "Ejection systems", desc: "Tools handle the complex engineering process up to thousands of ejectors from commercial and user-defined catalogs can be added in a single step. Cimatron can automatically place precisely, cut to the length required, and manage trimming.", img: "/images/products/tools/cimatron-mold-11.jpg" }
    ]
  },
  {
    title: "Analysis & Post-processing",
    description: "Validate kinematics and finalize additive hybrid manufacturing.",
    features: [
      { title: "Motion analysis and collision detection", desc: "Designers can efficiently validate tooling with integrated motion analysis tools and collision detection designed to simulate complete mold opening, closing, and ejection sequences accurately while identifying interference problems.", img: "/images/products/tools/cimatron-mold-14.jpg" },
      { title: "Post-printing operations", desc: "Cimatron makes it easy to design and manufacture fixtures to mount printed inserts that will undergo additional milling. The intelligent software utilizes the part's topology exactly defining features to finish, while subtractive milling increases precision.", img: "/images/products/tools/cimatron-mold-12.jpg" }
    ]
  }
];

const manufacturingTools = [
  { title: "Roughing", desc: "Maximize material removal rates while protecting cutting tools with volumetric high-efficiency roughing strategies.", img: "/images/products/tools/cimatron-mold-17.jpg" },
  { title: "3-axis to 5-axis CNC programming", desc: "Deliver exceptional surface quality with intelligent finishing toolpaths supporting complete 3-axis to simultaneous 5-axis motion.", img: "/images/products/tools/cimatron-mold-19.jpg" },
  { title: "Automated machining", desc: "Standardize production by automating the programming of repetitive features like holes, pockets, and cooling channels.", img: "/images/products/tools/cimatron-mold-20.jpg" },
  { title: "Electrode design & manufacturing", desc: "Streamline EDM processes from automated electrode extraction and burning sheet creation to direct CNC programming.", img: "/images/products/tools/cimatron-mold-21.jpg" },
  { title: "Micro milling", desc: "Achieve precision finishes for intricate, microscopic details utilizing specialized high-speed micro milling strategies.", img: "/images/products/tools/cimatron-mold-22.jpg" },
  { title: "Wire EDM", desc: "Generate precise 2-to-4 axis wire EDM toolpaths directly from the 3D geometry for ejector pins, inserts, and die components.", img: "/images/products/tools/cimatron-mold-23.jpg" }
];

const MoldDesign = () => {
  return (
    <main className="pt-24 lg:pt-32 pb-0 bg-[#f9fafb]">
      
      {/* 1. Refined Hero Header */}
      <section className="relative bg-[#eceff3] pt-24 pb-20 lg:pt-32 lg:pb-32 border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/products/mold-design.jpg" alt="Mold Design Background" className="w-full h-full object-cover opacity-[0.25] object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-800/40 to-transparent"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-[55%]">
            <Reveal>
              <h1 className="font-heading text-4xl font-extrabold leading-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl tracking-tight">
                Cimatron Mold Design
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <div className="w-20 h-1.5 bg-brand-orange mt-6 rounded-full shadow-sm"></div>
            </Reveal>
            <Reveal delay={200}>
              <h2 className="mt-8 text-2xl font-bold text-white drop-shadow-md lg:text-3xl">
                End-to-End Mold Design to Manufacturing
              </h2>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-5 text-lg text-zinc-100 drop-shadow max-w-2xl font-medium leading-relaxed">
                Cimatron software provides a complete, easy-to-use CAD/CAM solution for moldmakers to deliver high-quality tools of any complexity. Increase your competitiveness, win more jobs, and compress delivery times.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-10 flex flex-wrap gap-5">
                <a href="/#contact" className="btn-primary shadow-[0_8px_20px_rgb(242,106,33,0.3)] hover:shadow-[0_12px_25px_rgb(242,106,33,0.4)] text-base px-8 py-4">
                  Request a Free Consultation
                </a>
                <a href="#" className="btn-secondary bg-white text-brand-ink font-bold border-transparent shadow-[0_8px_20px_rgb(0,0,0,0.08)] hover:bg-slate-50 hover:text-[#165A72] text-base px-8 py-4">
                  Download Brochure
                </a>
              </div>
            </Reveal>
          </div>
          
          <div className="hidden lg:block w-full lg:w-[45%]">
            <Reveal delay={500} className="transform translate-x-4">
              <div className="rounded-2xl overflow-hidden shadow-[0_30px_60px_rgb(0,0,0,0.2)] border-[8px] border-white/90 bg-white">
                <img src="/images/products/mold-design.jpg" alt="Cimatron Mold Design Interface" className="w-full h-auto aspect-[4/3] object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Key Benefits Section - Redesigned to match new image layout */}
      <section className="py-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-heading text-4xl font-extrabold text-[#162737]">Key Benefits</h2>
              <div className="w-12 h-1 bg-brand-orange mt-5 mx-auto rounded-full"></div>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { 
                title: "Seamless data import", 
                desc: "Accelerate the import of customer CAD geometry in all standard formats and begin jobs in seconds.", 
                icon: "/images/products/tools/data-import.png"
              },
              { 
                title: "Accurate quoting", 
                desc: "Powerful parting and cavity design capabilities help moldmakers quickly identify important details.", 
                icon: "/images/products/tools/accurate-quote.png"
              },
              { 
                title: "Flexible design tools", 
                desc: "Hybrid CAD tools simplify the creation of complex surfaces and the healing and stitching of geometry.", 
                icon: "/images/products/tools/specialized-design-tools.png"
              },
              { 
                title: "Powerful CNC programming", 
                desc: "Safe and efficient CNC programming capabilities include specialized machining strategies securely.", 
                icon: "/images/products/tools/cnc-programming.png"
              }
            ].map((benefit, i) => (
              <Reveal key={i} delay={i * 100} className="bg-[#f07127] rounded-xl p-8 flex flex-col text-left shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
                {/* Embedded semi-transparent box for icon */}
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

      {/* 3. Categorized Dedicated Tools Section */}
      <section className="py-24 bg-[#f8fbff] border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="font-heading text-4xl font-extrabold text-[#165A72] mb-6">Tools dedicated to mold design</h2>
              <p className="text-lg text-brand-slate font-medium">A comprehensive suite of heavily specialized tools structured perfectly around your entire mold making workflow.</p>
            </div>
          </Reveal>

          <div className="space-y-24">
            {toolCategories.map((category, catIndex) => (
              <div key={catIndex} className="relative">
                <Reveal>
                  <div className="flex items-center gap-5 mb-12 border-b border-slate-200 pb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#165A72] to-[#1a718f] text-white flex items-center justify-center font-black text-xl shadow-md">{catIndex + 1}</div>
                    <div>
                      <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-brand-ink">{category.title}</h3>
                      <p className="text-brand-slate text-base mt-1 font-medium">{category.description}</p>
                    </div>
                  </div>
                </Reveal>
                
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                  {category.features.map((feature, i) => (
                    <Reveal key={i} delay={(i % 2) * 100} className="group bg-white p-7 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-slate-200 transition-all flex flex-col h-full">
                      <div className="w-full aspect-[2/1] rounded-xl overflow-hidden bg-slate-50 mb-6 relative">
                        {/* High-quality placeholder */}
                        <img 
                          src={feature.img} 
                          alt={feature.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 border border-black/5 rounded-xl pointer-events-none"></div>
                      </div>
                      <h4 className="font-heading font-extrabold text-[1.35rem] text-[#165A72] mb-3 group-hover:text-brand-orange transition-colors">{feature.title}</h4>
                      <p className="text-[#475569] text-[0.95rem] font-medium leading-relaxed flex-grow">{feature.desc}</p>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Manufacturing with Cimatron Capabilities - Zig-Zag Layout */}
      <section className="py-32 bg-white relative overflow-hidden border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-24">
              <h2 className="font-heading text-4xl sm:text-[2.5rem] font-extrabold text-brand-ink mb-6">Manufacturing with Cimatron capabilities</h2>
              <div className="w-16 h-1.5 bg-brand-orange mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-brand-slate font-medium">Seamlessly transition from complex design directly to flawless manufacturing with integrated CNC functionality.</p>
            </div>
          </Reveal>

          <div className="flex flex-col gap-32">
            {manufacturingTools.map((feature, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}>
                  
                  {/* Image Presentation */}
                  <div className="w-full lg:w-1/2">
                    <Reveal delay={100} className="relative group">
                      <div className={`absolute inset-0 bg-brand-orange/10 transform rounded-[2rem] transition-transform duration-500 group-hover:translate-y-4 ${isEven ? 'translate-x-4 translate-y-4 group-hover:translate-x-6' : '-translate-x-4 translate-y-4 group-hover:-translate-x-6'}`}></div>
                      <div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-8 border-white bg-slate-100 aspect-video z-10">
                         <img 
                          src={feature.img} 
                          alt={feature.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    </Reveal>
                  </div>
                  
                  {/* Text Content */}
                  <div className="w-full lg:w-1/2">
                    <Reveal delay={200}>
                      <div className="flex flex-col max-w-lg mx-auto lg:mx-0">
                        <div className="w-12 h-1.5 bg-brand-orange mb-8 rounded-full"></div>
                        <h3 className="font-heading text-3xl sm:text-[2.5rem] font-extrabold text-[#165A72] mb-6 leading-tight">{feature.title}</h3>
                        <p className="text-lg text-slate-600 font-medium leading-relaxed">{feature.desc}</p>
                        
                        <ul className="mt-8 space-y-4">
                          <li className="flex items-center text-brand-slate font-medium text-lg">
                            <div className="w-10 h-10 rounded-xl bg-[#f8fbff] text-[#165A72] border border-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                            Integrated CAD/CAM workflow
                          </li>
                          <li className="flex items-center text-brand-slate font-medium text-lg">
                             <div className="w-10 h-10 rounded-xl bg-[#f8fbff] text-[#165A72] border border-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                            Maximum precision output
                          </li>
                        </ul>
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

export default MoldDesign;
