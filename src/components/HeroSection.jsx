import React from 'react';
import Reveal from './Reveal';

const HeroSection = () => {
  return (
    <section className="hero-section relative pt-44 sm:pt-48">
      <div className="hero-inner mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="hero-copy mx-auto max-w-5xl py-16 text-center sm:py-20">
          <div className="hero-intro-stack">
            <div className="hero-reseller-mark">
              <img
                src="/images/Cimatron_Landscape_logo_white.png"
                alt="Cimatron logo"
                className="h-8 w-auto sm:h-9"
              />
              <p className="hero-reseller-text">Authorised Reseller of Cimatron</p>
            </div>

            <p className="hero-eyebrow">A Unified Approach to Product Development &amp; Engineering</p>
          </div>

          <h1 className="mx-auto mt-8 max-w-4xl font-heading text-4xl font-bold leading-tight text-white sm:text-5xl xl:text-6xl">
            Built on Experience. Delivered with Precision.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
            We brings together 105+ years of collective engineering experience to deliver end-to-end
            solutions from concept to realization.
          </p>

          <div className="hero-highlights mt-8 grid gap-4 sm:grid-cols-2">
            <div className="trust-chip">
              <span className="trust-chip-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                  <path d="M9.55 16.4 5.7 12.55l1.4-1.4 2.45 2.45 7.35-7.35 1.4 1.4-8.75 8.75Z"/>
                </svg>
              </span>
              <div className="trust-chip-copy">
                <p className="trust-chip-title">One-stop engineering</p>
                <p className="trust-chip-text">Concept to design to manufacturing</p>
              </div>
            </div>
            <div className="trust-chip">
              <span className="trust-chip-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                  <path d="M9.55 16.4 5.7 12.55l1.4-1.4 2.45 2.45 7.35-7.35 1.4 1.4-8.75 8.75Z"/>
                </svg>
              </span>
              <div className="trust-chip-copy">
                <p className="trust-chip-title">Strategic partnerships</p>
                <p className="trust-chip-text">Backed by trusted industry partners</p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#contact" className="btn-primary hero-btn justify-center">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                <path d="M4 5.75A1.75 1.75 0 0 1 5.75 4h12.5A1.75 1.75 0 0 1 20 5.75v12.5A1.75 1.75 0 0 1 18.25 20H5.75A1.75 1.75 0 0 1 4 18.25V5.75Zm2.75-.25a.75.75 0 0 0-.75.75v11.5c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75V6.25a.75.75 0 0 0-.75-.75H6.75ZM8 9.25A.75.75 0 0 1 8.75 8.5h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 8 9.25Zm0 5.5A.75.75 0 0 1 8.75 14h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z"/>
              </svg>
              Request a Demo
            </a>
            <a href="#products" className="btn-secondary on-dark hero-btn justify-center">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                <path d="M3.75 5A1.75 1.75 0 0 0 2 6.75v10.5C2 18.216 2.784 19 3.75 19h16.5A1.75 1.75 0 0 0 22 17.25V6.75A1.75 1.75 0 0 0 20.25 5H3.75Zm0 1.5h16.5a.25.25 0 0 1 .25.25v10.5a.25.25 0 0 1-.25.25H3.75a.25.25 0 0 1-.25-.25V6.75a.25.25 0 0 1 .25-.25Zm3 2.25A.75.75 0 0 1 7.5 8h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm0 3.5a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm0 3.5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Z"/>
              </svg>
              Explore Products
            </a>
          </div>

        </Reveal>
      </div>
    </section>
  );
};

export default HeroSection;
