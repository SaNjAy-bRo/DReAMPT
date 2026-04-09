import React from 'react';
import Reveal from '../components/Reveal';

const KeyBenefits = [
  {
    "icon": "/images/3/images/data-import.png",
    "title": "Seamless data import",
    "desc": "Accelerate the import of customer CAD geometry in all standard formats and begin jobs in seconds."
  },
  {
    "icon": "/images/3/images/accurate-quote.png",
    "title": "Accurate quoting",
    "desc": "Powerful parting and cavity design capabilities help moldmakers quickly identify important details that affect how jobs will be performed."
  },
  {
    "icon": "/images/3/images/specialized-design-tools.png",
    "title": "Flexible design tools",
    "desc": "Hybrid CAD tools simplify the creation of complex surfaces and the healing and stitching of geometry, and ensure designers always have the right tools for the job."
  },
  {
    "icon": "/images/3/images/cnc-programming.png",
    "title": "Powerful CNC programming",
    "desc": "Safe and efficient CNC programming capabilities include specialized machining strategies for 2.5-5-axis machining, advanced toolpath simulation tools, and post-processor support."
  }
];
const GridFeatures = [
  {
    "img": "/images/3/images/cimatron-mold-01.jpg",
    "title": "Hybrid CAD tools",
    "desc": "The system’s hybrid CAD functionality simplifies the creation of complex surfaces and the healing and stitching of geometry, as well as working with non-stitched models and poor-quality data. Features dedicated to design for manufacturing optimize machining by enabling users to add surfaces and contours, cap holes and slots, extend surfaces, and apply drafts and rounds."
  },
  {
    "img": "/images/3/images/cimatron-mold-02.jpg",
    "title": "Parting design",
    "desc": "Cimatron provides the industry’s fastest and most accurate tool for parting and cavity design, helping moldmakers quickly get started on jobs. The system’s dedicated analysis tools for identifying undercuts, checking geometry, and verifying part surfaces help ensure flawless parting while increasing confidence in design. Cimatron’s dedicated moldmaking tools help easily generate geometry for cores, cavities, lifters, sliders, and more for even the most complex molds."
  },
  {
    "img": "/images/3/images/cimatron-mold-03.jpg",
    "title": "Preliminary design",
    "desc": "Preliminary 3D designs help moldmakers evaluate production strategies and secure customer approval. With Cimatron, users can design molds of any size and surface complexity and manage any mold layout — including multi-cavity and family molds. Powerful visualization tools simplify the placement of mold components like plates, sliders, lifters, inserts, and other catalog parts, as well as cooling, ejection, and runner systems."
  },
  {
    "img": "/images/3/images/cimatron-mold-04.jpg",
    "title": "Mold base design",
    "desc": "Cimatron makes it possible to load entire sets of mold base plates from commercial catalogs in just minutes. Moldmakers can work efficiently with non-standard mold bases using a dynamic mold-base template that includes all components — plates, sliders, and more. Component dimensions can be instantly modified and parts replaced in the mold base at any point in the design process."
  },
  {
    "img": "/images/3/images/cimatron-mold-05.jpg",
    "title": "Core, cavity, and sliders",
    "desc": "Cimatron automation streamlines the rapid design of primary mold components, such as the core, cavity, and sliders. Engineering changes can be easily implemented throughout the process because associativity with initial parting work in maintained."
  },
  {
    "img": "/images/3/images/cimatron-mold-06.jpg",
    "title": "Runner systems",
    "desc": "Flexible engineering tools simplify runner design and enable moldmakers to choose the design method that works best for them. Runners can be sketched in 2D and automatically converted to 3D models, complete with the addition of sprue bushings. Non-planar runners can also be designed in 3D with a mechanism that helps avoid undercuts."
  },
  {
    "img": "/images/3/images/cimatron-mold-07.jpg",
    "title": "Cooling systems",
    "desc": "A variety of design, analysis, and verification tools make it easier than ever to design even the most complex cooling systems. Tools developed for cooling system design simplify the placement of channels and components like plugs, connectors, baffles, nipples, and more. Cimatron identifies interference with waterlines and alerts users when cooling channels are positioned too closely to other key components."
  },
  {
    "img": "/images/3/images/cimatron-mold-08.jpg",
    "title": "Conformal cooling",
    "desc": "Ideal for additive manufacturing applications, conformal cooling channels can dramatically reduce injection cycle time. Cimatron’s dedicated toolset for fast conformal cooling design helps moldmakers design even the most complex channels using hybrid tools for working with meshes, surfaces, solids, and wireframes. The software also calculates technical offsets for post-printing, subtractive operations."
  },
  {
    "img": "/images/3/images/cimatron-mold-09.jpg",
    "title": "Catalog parts",
    "desc": "Browse a large selection of current commercial catalog libraries to find the perfect components and enjoy the freedom to create your own personalized catalogs. Cimatron allows users to automatically adapt catalog parts or sub-assemblies to main-assembly dimensions and existing design features, such as punch-hole dimensions."
  },
  {
    "img": "/images/3/images/cimatron-mold-10.jpg",
    "title": "Lifters and inserts",
    "desc": "Cimatron helps accelerate the engineering process with dedicated tools for lifter and insert design. Lifters found in commercial or user-defined catalogs can be placed in designs using a single operation. To ensure an optimal result, even the most complex lifters can be automatically cut while previewing the mold faces. The simplified creation of cavity and core pockets enable wire EDM and milling operations to begin on the first day of design."
  },
  {
    "img": "/images/3/images/cimatron-mold-11.jpg",
    "title": "Injection systems",
    "desc": "Tools for ejection-system design simplify an inherently complex engineering process, as hundreds of ejectors from commercial and user-defined catalogs can be added in a single step. Cimatron can pinpoint ideal ejector locations, analyze how the plates that ejectors will intersect, and automatically manage trimming."
  },
  {
    "img": "/images/3/images/cimatron-mold-12.jpg",
    "title": "Post-printing operations",
    "desc": "Cimatron makes it easy to design and manufacture fixtures to mount printed inserts with local technical offsets in mind. The system’s 2.5-axis to 5-axis milling and drilling capabilities can be performed to finish part holes and high-accuracy surfaces, while tiny and intricate details can be completed with the software’s electrode (EDM) functions."
  }
];
const Capabilities = [
  {
    "img": "/images/3/images/cimatron-mold-13.jpg",
    "title": "Managing design changes",
    "desc": "Change is a constant in moldmaking, which is why it’s important to have a system that efficiently analyzes, implements, verifies, tracks, and manage engineering change orders, or ECOs. Cimatron’s ECO management tools make it easy to automatically replace existing geometry with ECO geometry, identify customer changes, and see the impact of the new geometry on mold components."
  },
  {
    "img": "/images/3/images/cimatron-mold-14.jpg",
    "title": "Motion analysis and collision detection",
    "desc": "Designs can be quickly validated using fully integrated measurement, analysis, and collision detection capabilities. Analysis tools for wall thickness, body integrity, draft angle and direction make it easy to identify and correct problems. Powerful simulation applied to tool kinematics helps locate and identify collisions and eliminate design errors."
  },
  {
    "img": "/images/3/images/cimatron-mold-15.jpg",
    "title": "Drawings",
    "desc": "Cimatron’s comprehensive array of drawing tools enable the generation of drawings with the information needed to order components, guide shop floor operators, ensure quality, and provide customer documentation. Drafting views can be defined during the modeling process and quickly converted to drawings. The ability to create and reuse drawing templates that incorporate customer specifications increases efficiency by reducing repetitive tasks."
  },
  {
    "img": "/images/3/images/cimatron-mold-16.jpg",
    "title": "Safe and efficient CNC programming",
    "desc": "Graphics that compare remaining stock to the solid model enable users to preview the results of applying specific parameters to various operations. Gouge and collision detection capabilities, along with an embedded material removal simulator and color-coded deviation map help manufacturers machine with confidence. Templates or machining sequences can be reused for the same or different projects to increase programming efficiency and standardize best practices."
  },
  {
    "img": "/images/3/images/cimatron-mold-17.jpg",
    "title": "Optimized roughing",
    "desc": "Quick and efficient high-volume milling operations can be performed using specialized machining strategies and continuously updated 3D stock models. Cimatron generates toolpath that takes advantage of constant tool load, trochoidal milling technique, advanced cleaning between passes, efficient roughing between layers, and state-of-the-art ridge removal."
  },
  {
    "img": "/images/3/images/cimatron-mold-18.jpg",
    "title": "Flawless finishing",
    "desc": "The software provides a robust set of 3- to 5-axis-optimized machining strategies, including adaptive Z layers, true spiral motions, all-rounded motions, flow-line machining, rest machining, slope-controlled finishing, optimized cleaning between passes, and much more. Machining strategies can automatically be adapted to achieve exceptional, polish-free surface quality by analyzing local slopes."
  },
  {
    "img": "/images/3/images/cimatron-mold-19.jpg",
    "title": "5-axis machining",
    "desc": "Specialized machining strategies support a variety of cutters, including lollipop tools, and slot mill and tapered cutters. The software supports positioning and continuous milling for full control over tilt and lead angles, and provides gouge and collision checks of the tool shank and holder. Toolpath verification and post-processor-based simulation help eliminate tryouts for reduced scrap."
  },
  {
    "img": "/images/3/images/cimatron-mold-20.jpg",
    "title": "Plate machining and drilling",
    "desc": "Cimatron’s drilling capabilities and powerful pocket and profile milling strategies streamline the efficient machining of flawless mold plates. Time devoted to programming drilling operations can be cut by up to 90% using the software’s ability to automatically assign drilling sequences to hundreds of holes in just seconds. Two-axis and 4-axis wire EDM machining operations can be easily programmed for optimal CNC performance using a built-in database of EDM machines."
  },
  {
    "img": "/images/3/images/cimatron-mold-21.jpg",
    "title": "Electrode production",
    "desc": "Create electrodes easily and in record time using hybrid electrode design of surfaces and solids covering the entire design process. Ensure an error-free burning process, with quick definition of spark gaps, 2D or 3D orbiting, and rough offsets."
  },
  {
    "img": "/images/3/images/cimatron-mold-22.jpg",
    "title": "Advanced micro milling",
    "desc": "A pioneer in the field of micro milling, Cimatron offers dedicated micro-machining strategies for the cost-effective manufacturing of molds for very small, high-precision parts. The system is capable of producing superb surface quality with tolerances as tight as 0.0001mm using cutting tools with diameters as small as 0.1 mm."
  },
  {
    "img": "/images/3/images/cimatron-mold-23.jpg",
    "title": "Simulation and post-processor support",
    "desc": "Cimatron’s color-coded display makes it easy to view cutting processes and their results prior to machining and analyze remaining material. The system’s advanced G-code simulation of machine kinematics and machining operations includes the checking of tool shanks and holders against parts. A comprehensive library of post processors for any 3-axis and 5-axis machine tools, as well as all leading controllers, ensures that CNC machinery will be safely and efficiently programmed."
  },
  {
    "img": "/images/3/images/cimatron-mold-24.jpg",
    "title": "NC setup and tool-table reports",
    "desc": "NC setup and tool-table reports can be automatically generated as CNC programs are posted. Cimatron makes it easy to generate custom reports that include company logo, machine time, machine limits, and other user-specific data and parameters for use on the shop floor. G-code output sessions can be captured for enhanced milling control, as well as use in for future jobs."
  }
];

const MoldDesign = () => {
  return (
    <main className="pt-24 lg:pt-32 pb-0 bg-[#f9fafb]">
      
      {/* 1. Hero Header */}
      <section className="relative bg-[#eceff3] pt-24 pb-20 lg:pt-32 lg:pb-32 border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/3/images/cimatron-cad-cam-solution-overview.jpg" alt="Background" className="w-full h-full object-cover opacity-[0.25] object-center" />
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
                Increase efficiency from design to manufacturing 
              </h2>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-5 text-lg text-zinc-100 drop-shadow max-w-2xl font-medium leading-relaxed">
                Cimatron Mold is an integrated CAD/CAM software solution developed to help moldmakers design and produce molds of any size and complexity from a single, seamless interface.
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
                <img src="/images/3/images/cimatron-cad-cam-solution-overview.jpg" alt="Interface" className="w-full h-auto aspect-[4/3] object-cover" />
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

export default MoldDesign;
