import React from 'react';
import Reveal from '../components/Reveal';

const KeyBenefits = [
  {
    "icon": "/images/3/images/data-import.png",
    "title": "Seamless data import",
    "desc": "Start jobs in seconds with automatic data validation and accurate conversion from all standard file formats. Flexible design tools make it easy to work with stitched, non-stitched, or poor-quality models."
  },
  {
    "icon": "/images/3/images/accurate-quote.png",
    "title": "Fast and accurate quotes",
    "desc": "Generate accurate bids by factoring in materials, machining time, processes, labor, and overhead. Detailed cost estimates also identify design issues, optimize production processes, and reveal opportunities for savings."
  },
  {
    "icon": "/images/3/images/die-design.png",
    "title": "Die design and layout",
    "desc": "Streamline the design of transfer and progressive dies with powerful tools for blank design, strip layout, and forming. Real-time simulation and analysis help eliminate trial and error while ensuring efficiency and accuracy."
  },
  {
    "icon": "/images/3/images/cad-cam-integration.png",
    "title": "CAD/CAM integration",
    "desc": "Leverage full hybrid CAD capabilities with specialized machining strategies for roughing, finishing, drilling, and 5-axis die making. Simulation, collision detection, and post-processor support ensure high-quality results and shop-floor efficiency."
  }
];
const GridFeatures = [
  {
    "img": "/images/3/images/cimatron-die-01.jpg",
    "title": "Rapid data import",
    "desc": "Automatic data validation and accurate conversion from all standard file formats accelerates the import of customer data, making it possible to start a job in just seconds. Flexible design tools simplify the healing and stitching of data, as well as working with non-stitched models and data of poor quality."
  },
  {
    "img": "/images/3/images/cimatron-die-02.jpg",
    "title": "Comprehensive quoting",
    "desc": "The inclusion of vital factors like material costs, machining time, manufacturing processes, component complexity, labor rates, and overhead costs means companies can generate bids that truly reflect the work they perform. Stamping die professionals benefit from detailed estimations that identify potential design issues, help optimize production processes, and highlight opportunities to cut costs."
  },
  {
    "img": "/images/3/images/cimatron-die-03.jpg",
    "title": "Blank design and forming",
    "desc": "Boost productivity by automatically transferring information created during the forming phase to the design environment. Eliminate shop floor trial and error with tools that imitate elements used to shape parts and ensure optimal material usage with nesting capabilities for transfer dies. Powerful solid, surface, and wireframe functions enable toolmakers to choose techniques that best fit their needs, while analysis tools ensure problems are solved early in design."
  },
  {
    "img": "/images/3/images/cimatron-die-04.jpg",
    "title": "Die layout",
    "desc": "Increase design efficiency with an environment that streamlines the strip design of transfer and progressive dies. Designers have the freedom to easily determine number of stations, pitch, strip width, blank location and angle, distance between rows, and other nesting parameters. Changes can be made on the fly and viewed using real-time simulation and validation."
  },
  {
    "img": "/images/3/images/cimatron-die-05.jpg",
    "title": "Die set design",
    "desc": "A complete, existing die set — pre-fitted with plates, guiding components, and fasteners — can be fully adapted to a project’s requirements and loaded in just seconds. User-defined and commercial catalog parts can be included in the die base, and their dimensions easily adjusted. Component dimensions can be easily adjusted to suit the project at any point in the design process using the die setup table."
  },
  {
    "img": "/images/3/images/cimatron-die-06.jpg",
    "title": "Punch/matrix design",
    "desc": "Simplify and accelerate punch creation with advanced surface and solid modeling tools dedicated to die making. Trimming punches can be designed in a single click by defining contours, and predefined offsets for positioning punches make it easy to automatically cut through plates. Cut design time with automated tools for the rapid creation of forming and bending punches and cutting objects."
  },
  {
    "img": "/images/3/images/cimatron-die-07.jpg",
    "title": "Catalog parts",
    "desc": "Browse through a comprehensive selection of current commercial catalog libraries to find the perfect part. Catalog parts and sub-assemblies can be easily integrated into assemblies and automatically sized to match the dimensions of the main assembly, as well as critical design specifications like punch hole dimensions."
  },
  {
    "img": "/images/3/images/cimatron-die-08.jpg",
    "title": "Collision detection and motion analysis",
    "desc": "Validate designs as you go using integrated collision detection and motion simulation capabilities. Visualize vertical axis movements, analyze kinematics, and catch interferences early to eliminate costly errors."
  },
  {
    "img": "/images/3/images/cimatron-die-09.jpg",
    "title": "Drawing",
    "desc": "Generate drawings with all the information needed to order components, communicate clearly with shop-floor staff, ensure quality, and provide customer documentation. Easily visualize jobs with powerful drafting options for die drawings while saving time with the automated placement of center lines, coordinate labels, and more. Drawing templates that incorporate customer specifications can be created and reused for greater efficiency."
  }
];
const Capabilities = [
  {
    "img": "/images/3/images/cimatron-die-10.jpg",
    "title": "Integrated CAD capabilities",
    "desc": "Full hybrid CAD capabilities enable die designers to combine wireframe, surface, and solid modeling functions in the CNC programming environment. Machining can be optimized using dedicated CAD tools for adding surfaces and contours, capping holes and slots, extending surfaces, and applying drafts and rounds."
  },
  {
    "img": "/images/3/images/cimatron-die-11.jpg",
    "title": "Efficient roughing",
    "desc": "Rapidly remove material while extending tool life with machining strategies dedicated to safe and efficient roughing. Specialized toolpath for high-speed milling (HSM) operations ensure constant tool load while leveraging trochoidal milling technique, state-of-the-art ridge removal, and more. Automatically updated stock prevents tool shank and holder collisions throughout roughing and re-roughing operations."
  },
  {
    "img": "/images/3/images/cimatron-die-12.jpg",
    "title": "High-quality finishing",
    "desc": "Choose from a rich set of 3- to 5-axis optimized machining strategies to safely and efficiently achieve superior surface quality. Integrated analysis of local slopes enables the software to automatically adapt machining strategies for the production of flawless, polish-free surface quality."
  },
  {
    "img": "/images/3/images/cimatron-die-13.jpg",
    "title": "5-axis capabilities for die making",
    "desc": "Full 5-axis machining capabilities reduce setup time, shorten machining time, and increase accuracy and quality. Specialized 5-axis machining strategies support a comprehensive range of cutting tools, including tapered cutters, lollipop tools, and slot mill cutters. Toolpath can be verified with simulation that includes machine kinematics, material removal, and remaining stock, and based on proven post processors."
  },
  {
    "img": "/images/3/images/cimatron-die-14.jpg",
    "title": "Plate machining and drilling",
    "desc": "Generate efficient toolpath for plate machining, including robust pocket and profile milling options. Create and reuse flexible sequences to program hundreds of drill holes in seconds and cut programming time by 90%. To ensure that operations remain collision free, comprehensive interference analyses include the part, remaining stock, and clamps."
  },
  {
    "img": "/images/3/images/cimatron-die-15.jpg",
    "title": "Simulation and post-processor support",
    "desc": "A color-coded display makes it easy to view cutting processes and their results prior to machining and analyze remaining material. The system’s advanced G-code simulation of machine kinematics and machining operations includes the checking of tool shanks and holders against parts. A comprehensive library of post processors for any 3-axis and 5-axis machine tools, as well as all leading controllers, ensures that CNC machinery will be safely and efficiently programmed."
  },
  {
    "img": "/images/3/images/cimatron-die-16.jpg",
    "title": "NC setup and tool table reports",
    "desc": "NC setup and tool-table reports can be automatically generated as CNC programs are posted. Cimatron makes it easy to generate custom reports that include company logo, machine time, machine limits, and other user-specific data and parameters for use on the shop floor. G-code output sessions can be captured for enhanced milling control, as well as use in for future jobs."
  },
  {
    "img": "/images/3/images/cimatron-die-17.jpg",
    "title": "Wire EDM programming",
    "desc": "Efficiently program wire EDM machinery and ensure optimal performance with an integrated database of EDM machines. Customizable process templates can be created and reused for greater productivity help reduce error and streamline workflows while ensuring quality."
  }
];

const DieDesign = () => {
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
                Cimatron Die Design
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <div className="w-20 h-1.5 bg-brand-orange mt-6 rounded-full shadow-sm"></div>
            </Reveal>
            <Reveal delay={200}>
              <h2 className="mt-8 text-2xl font-bold text-white drop-shadow-md lg:text-3xl">
                Cimatron Die
              </h2>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-5 text-lg text-zinc-100 drop-shadow max-w-2xl font-medium leading-relaxed">
                Cimatron Die integrated CAD/CAM software help toolmakers save time and improve quality even when producing the most complex dies.
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

export default DieDesign;
