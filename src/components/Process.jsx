import React from 'react';
import Reveal from './Reveal';

const Process = () => {
  return (
    <section className="section-space">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <p className="section-kicker">Delivery Framework</p>
          <h2 className="section-title">From Design to Delivery</h2>
        </Reveal>
        <Reveal className="process-wrap mt-12">
          <div className="process-line"></div>
          <article className="process-step">
            <span>01</span>
            <h3>Consultation</h3>
            <p>Understand process requirements, design scope, and project goals.</p>
          </article>
          <article className="process-step">
            <span>02</span>
            <h3>Product Selection</h3>
            <p>Match the right Cimatron solution to tooling and manufacturing needs.</p>
          </article>
          <article className="process-step">
            <span>03</span>
            <h3>Engineering Support</h3>
            <p>Provide workflow guidance, validation input, and practical implementation planning.</p>
          </article>
          <article className="process-step">
            <span>04</span>
            <h3>Implementation</h3>
            <p>Enable deployment with structured onboarding and solution alignment.</p>
          </article>
          <article className="process-step">
            <span>05</span>
            <h3>Ongoing Assistance</h3>
            <p>Maintain continuity with responsive support and evolving engineering needs.</p>
          </article>
        </Reveal>
      </div>
    </section>
  );
};

export default Process;
