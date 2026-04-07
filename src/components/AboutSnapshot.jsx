import React from 'react';
import Reveal from './Reveal';

const AboutSnapshot = () => {
  return (
    <section id="about" className="section-space relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="about-header max-w-5xl">
          <p className="section-kicker">About DReAMPT Mecha System Pvt. Ltd.</p>
          <h2 className="section-title">A Unified Approach to Product Development &amp; Engineering</h2>
          <p className="section-copy">
            DReAMPT Mecha System Pvt. Ltd. offers comprehensive engineering support from concept to final
            implementation, with expertise in design, analysis, manufacturing, automation, and testing.
          </p>
        </Reveal>

        <Reveal className="about-content mt-12">
          <div className="about-card-grid">
            <article className="about-feature-card about-feature-card-image">
              <img src="/images/about-card-1.svg" alt="" className="about-card-bg" />
              <h3>Strategic partnerships with industry experts</h3>
            </article>

            <article className="about-feature-card about-feature-card-image">
              <img src="/images/about-card-2.svg" alt="" className="about-card-bg" />
              <h3>Right-First-Time engineering approach</h3>
            </article>

            <article className="about-feature-card about-feature-card-image">
              <img src="/images/about-card-3.svg" alt="" className="about-card-bg" />
              <h3>Trusted support across engineering workflows</h3>
            </article>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AboutSnapshot;
