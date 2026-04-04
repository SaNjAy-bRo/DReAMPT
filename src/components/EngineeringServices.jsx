import React from 'react';
import Reveal from './Reveal';

const EngineeringServices = () => {
  return (
    <section id="services" className="section-space section-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-full">
          <p className="section-kicker text-white/70">Engineering Capabilities</p>
          <h2 className="section-title text-white">End-to-End Engineering Services</h2>
        </Reveal>
        <div className="service-list mt-12">
          <Reveal className="service-row">
            <span>01</span>
            <h3>Design Engineering</h3>
            <p>Concept creation, 3D modeling, detailing, and development support</p>
          </Reveal>
          <Reveal className="service-row">
            <span>02</span>
            <h3>Design Validation</h3>
            <p>FEA, CFD, simulation, and performance evaluation</p>
          </Reveal>
          <Reveal className="service-row">
            <span>03</span>
            <h3>Manufacturing</h3>
            <p>Precision components, fabrication, and production support</p>
          </Reveal>
          <Reveal className="service-row">
            <span>04</span>
            <h3>Automation</h3>
            <p>Process control, robotics, and factory automation solutions</p>
          </Reveal>
          <Reveal className="service-row">
            <span>05</span>
            <h3>Testing</h3>
            <p>Physical validation and standards-based testing support</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default EngineeringServices;
