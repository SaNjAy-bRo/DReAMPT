import React from 'react';
import Reveal from '../components/Reveal';
import AboutSnapshot from '../components/AboutSnapshot';

const About = () => {
  return (
    <main className="pb-0 bg-[#f8fafc]">
      {/* ── Hero section ───────────────────────────────────────────── */}
      <section className="relative bg-[#1a2d3e] pt-36 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.png"
            alt="Industrial Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a2d3e]/90 via-[#1a2d3e]/75 to-[#1a2d3e]"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-brand-orange border border-brand-orange/30 bg-brand-orange/10">
              ORGANIZATION: DMS20230001
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-heading text-4xl font-extrabold text-white sm:text-5xl lg:text-7xl tracking-tight max-w-5xl mx-auto leading-[1.1]">
              A Unified Approach to <br />
              <span className="text-brand-orange">Product Development & Engineering</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <div className="w-24 h-1.5 bg-brand-orange mt-8 mx-auto rounded-full" />
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-10 text-xl text-slate-300 max-w-3xl font-medium leading-relaxed mx-auto">
              DReAMPT: Design, Rapid Prototyping, Engineering, Analysis, Manufacturing, Prototype, and Testing. 
              Connecting every stage of the lifecycle with precision and industrial mastery.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Introduction Summary ─────────────────────────────────── */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <Reveal>
                <p className="section-kicker">Introduction</p>
                <h2 className="section-title text-[#1a2d3e] mt-2 mb-6">Expertise from Concept to Realization</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
                  DReAMPT Mecha System Pvt. Ltd. brings together a team of engineers with <span className="text-brand-orange font-bold">105+ years of collective industry experience</span> in design and analysis.
                </p>
                <ul className="space-y-4">
                  {[
                    'Backed by strategic partnerships with leading experts',
                    'Proudly a 100% Indian MSME under the Make in India initiative',
                    'Expertise across mechanics, automation, manufacturing, and testing'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 font-semibold">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-brand-orange shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <div className="lg:w-1/2">
              <Reveal delay={200}>
                <div className="relative p-1 rounded-3xl bg-gradient-to-tr from-brand-orange/20 to-transparent">
                  <div className="relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 aspect-video flex items-center justify-center">
                    <img src="/images/DReAMPT_darklogo.png" alt="Company Logo" className="w-2/3 opacity-90" />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Organization Ethos (Mission/Vision Grid) ─────────────── */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <p className="section-kicker">Organization Ethos</p>
              <h2 className="section-title text-[#1a2d3e]">Our Core Foundations</h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission */}
            <Reveal delay={100}>
              <div className="bg-white p-10 rounded-3xl border border-brand-orange/10 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
                <h3 className="text-2xl font-bold text-brand-orange mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center text-sm">01</span>
                  Our Mission
                </h3>
                <p className="text-lg text-slate-700 font-medium leading-[1.8]">
                  "To provide faultless and error free engineering at a mutually agreed upon nominal cost. <br />
                  <span className="text-brand-orange italic font-bold">Once a customer always a customer.</span>"
                </p>
              </div>
            </Reveal>

            {/* Vision */}
            <Reveal delay={200}>
              <div className="bg-white p-10 rounded-3xl border border-blue-500/10 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
                <h3 className="text-2xl font-bold text-blue-600 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-sm">02</span>
                  Our Vision
                </h3>
                <p className="text-lg text-slate-700 font-medium leading-[1.8]">
                  "To be a world class company, relevant to current market trends, with a working culture of Creativity, Innovation, Quality, Technology & Ecology, focusing on development, growth and expansion."
                </p>
              </div>
            </Reveal>

            {/* Values */}
            <Reveal delay={300}>
              <div className="bg-white p-10 rounded-3xl border border-purple-500/10 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
                <h3 className="text-2xl font-bold text-purple-600 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-sm">03</span>
                  Our Values
                </h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-slate-600 font-semibold text-sm">
                  {['Teamwork', 'Quality', 'Integrity', 'Respect', 'Mutual Trust', 'Safety & Reliability', 'Employee First', 'Customer Always'].map((v, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      {v}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Goals */}
            <Reveal delay={400}>
              <div className="bg-white p-10 rounded-3xl border border-green-500/10 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
                <h3 className="text-2xl font-bold text-green-600 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-sm">04</span>
                  Our Goals
                </h3>
                <ul className="space-y-3 text-slate-700 font-bold">
                  <li className="flex items-center gap-2 italic">Customer satisfaction</li>
                  <li className="flex items-center gap-2 italic">Delivery within committed time</li>
                  <li className="flex items-center gap-2 italic">No rework ; First time right</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Leadership Team ───────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-20">
              <p className="section-kicker">The Minds Behind DReAMPT</p>
              <h2 className="section-title text-[#1a2d3e]">Our Technical Leadership</h2>
              <div className="w-20 h-1 bg-brand-orange mx-auto mt-6" />
            </div>
          </Reveal>

          <div className="space-y-24">
            {/* MANI S M */}
            <LeaderProfile 
              name="MANI S M"
              role="Chief Technology Officer"
              image="/images/about/mani s m.jpg"
              bio={`After having passed out B.E from U.V.C.E, Bangalore University and M.E from Indian Institute of Science, with specialization in Machine Design in both degree, joined D&E of Bharat Electronics Limited (BEL, Bangalore); where involved in design and analysis of Electronic Equipment.`}
              details={[
                'Established the MCAD department at BEL, replacement of drafting boards with 3D modelling.',
                'Extensively involved in Mil-specified test procedures for electronic equipment.',
                '33+ Years of combined experience with 23 years at BEL and 10+ years at Versabyte Data System.',
                'Handled more than hundred complex problems in design and analysis of Electronic equipments.'
              ]}
              reverse={false}
            />

            {/* KARTHIK SRINIVASAN */}
            <LeaderProfile 
              name="KARTHIK SRINIVASAN"
              role="Chief Operating Officer"
              image="/images/about/karthik srinivasan.jpg"
              bio={`Mr. Karthik is a Mechanical engineer with 15+ years of experience in the use of Finite Element Analysis for product design in multiple domains such as Aerospace, Aero-engines, Automobile, Medical & Industrial equipment.`}
              details={[
                'Masters degree in Machine Design from BMSCE, Basavangudi, Bangalore.',
                'Aerospace experience spans A350, A330, 787, 747, and C27J Spartan programs.',
                'Expertise in standards including Mil 810G, IP, API, HSB, BDM, and ASTM.',
                'Experienced in implementation of ISO 9001:2008, AS9100 Rev C, and CMMI.'
              ]}
              reverse={true}
            />

            {/* HARSHA KORLUR */}
            <LeaderProfile 
              name="HARSHA KORLUR"
              role="Managing Director"
              image="/images/about/harsha korlur.jpg"
              bio={`Mr. Harsha Korlur has sound knowledge of Electro-Mechanical Product Design & Development process. Since 2020, his focus has been "Building the Systems from Concepts to Commissioning" for reputed organizations like BEL, ISRO, DRDO, and GTRE.`}
              details={[
                'M-Tech from BMSCE (2004) and B.E in Mechanical Engineering (2001).',
                'Strength & Stability validations through FEA and Hand Calculation co-relating with Test.',
                'Expertise in BIW, APU\'s, RPDU\'s, LRU\'s, TEC\'s, and sensors structural integrity.',
                'Execution of projects for Boeing, Airbus, Rolls Royce, and Pratt & Whitney programs.'
              ]}
              reverse={false}
            />
          </div>
        </div>
      </section>

      {/* ── Team Expertise Summary ────────────────────────────────── */}
      <section className="py-24 bg-[#1a2d3e] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/factory-hero.png" alt="" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                Throughout their extensive careers, our team of experts has contributed to projects spanning various critical areas.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <div className="grid grid-cols-2 gap-y-4 text-slate-300 font-medium">
                {[
                  'Mechanical Engineering',
                  'Electrical & Electronics',
                  'Civil Engineering',
                  'Production Management',
                  'Total Quality Management',
                  'Supply Chain Management',
                  'Logistics & Marketing',
                  'Integration & Commissioning'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-brand-orange" />
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
};

const LeaderProfile = ({ name, role, image, bio, details, reverse }) => (
  <Reveal>
    <div className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      <div className="w-full lg:w-1/3 shrink-0">
        <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
          <img src={image} alt={name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent hidden lg:block" />
          <div className="absolute bottom-6 left-6 right-6 hidden lg:block">
            <h3 className="text-2xl font-bold text-white">{name}</h3>
            <p className="text-brand-orange font-semibold">{role}</p>
          </div>
        </div>
        <div className="mt-6 lg:hidden text-center">
           <h3 className="text-2xl font-bold text-slate-900">{name}</h3>
           <p className="text-brand-orange font-bold text-lg">{role}</p>
        </div>
      </div>
      <div className="flex-1">
        <p className="text-lg text-slate-700 font-semibold leading-relaxed mb-6">
          {bio}
        </p>
        <ul className="grid gap-3">
          {details.map((point, i) => (
            <li key={i} className="flex items-start gap-4">
              <div className="mt-2 w-5 h-5 rounded bg-brand-orange/10 flex items-center justify-center shrink-0">
                 <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-brand-orange">
                   <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                 </svg>
              </div>
              <span className="text-slate-600 font-medium leading-[1.6]">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Reveal>
);

export default About;
