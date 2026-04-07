import React from 'react';
import Reveal from './Reveal';

const FinalCTA = () => {
  return (
    <section className="cta-section-compact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="cta-panel">
          <div className="cta-orbit cta-orbit-one"></div>
          <div className="cta-orbit cta-orbit-two"></div>
          <div className="cta-grid relative z-10">
            <div className="max-w-3xl">
              <p className="section-kicker text-white/70">Next Step</p>
              <h2 className="section-title text-white">Looking for the Right CAD/CAM Solutions?</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Partner with DReAMPT for expert engineering guidance and seamless technical support.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#contact" className="btn-primary justify-center">Request a Free Consultation</a>
                <a href="#products" className="btn-secondary on-dark justify-center">Explore Products</a>
              </div>
            </div>

            <div className="cta-side-panel">
              <div className="cta-side-item">
                <span>01</span>
                <p>Product guidance aligned to tooling and manufacturing needs</p>
              </div>
              <div className="cta-side-item">
                <span>02</span>
                <p>Implementation-focused support from evaluation to rollout</p>
              </div>
              <div className="cta-side-item">
                <span>03</span>
                <p>Authorised access to Cimatron expertise through DReAMPT</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default FinalCTA;
