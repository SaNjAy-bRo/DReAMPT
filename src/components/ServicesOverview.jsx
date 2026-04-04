import React from 'react';
import Reveal from './Reveal';

const ServicesOverview = () => {
  return (
    <section className="section-space services-overview-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-4xl">
          <p className="section-kicker">Our Services</p>
          <h2 className="section-title">Integrated Engineering Support</h2>
        </Reveal>

        <Reveal className="services-overview-grid mt-12">
          <article className="services-overview-card">
            <h3>Concept Design</h3>
            <p>Geometry Creation / Modelling</p>
          </article>
          <article className="services-overview-card">
            <h3>Finite Element Analysis</h3>
            <p>FEA &amp; Computational fluid dynamics (CFD)</p>
          </article>
          <article className="services-overview-card">
            <h3>Layout &amp; Manufacturing Drawings</h3>
            <p>Detailed engineering documentation for production readiness</p>
          </article>
          <article className="services-overview-card">
            <h3>Manufacturing</h3>
            <p>Prototypes &amp; Mass production</p>
          </article>
          <article className="services-overview-card">
            <h3>Pick &amp; Place and Autonomous Robots</h3>
            <p>Automation-focused systems for modern industrial workflows</p>
          </article>
          <article className="services-overview-card">
            <h3>Material Handling Equipment</h3>
            <p>Design and supply</p>
          </article>
        </Reveal>

        <Reveal className="mt-8">
          <a href="#services" className="text-link">Learn More</a>
        </Reveal>
      </div>
    </section>
  );
};

export default ServicesOverview;
