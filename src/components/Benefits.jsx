import React from 'react';
import Reveal from './Reveal';

const Benefits = () => {
  return (
    <section className="section-space">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <p className="section-kicker">Platform Value</p>
          <h2 className="section-title">Why Cimatron</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <Reveal className="benefit-card">
            <div className="benefit-icon">01</div>
            <h3>Faster time-to-market</h3>
            <p>Shorten development cycles with integrated tooling workflows and fewer handoff delays.</p>
          </Reveal>
          <Reveal className="benefit-card">
            <div className="benefit-icon">02</div>
            <h3>First-time-right tooling workflows</h3>
            <p>Improve tooling confidence with more controlled design, validation, and manufacturing alignment.</p>
          </Reveal>
          <Reveal className="benefit-card">
            <div className="benefit-icon">03</div>
            <h3>Better automation and productivity</h3>
            <p>Streamline repeatable operations and reduce manual effort across engineering tasks.</p>
          </Reveal>
          <Reveal className="benefit-card">
            <div className="benefit-icon">04</div>
            <h3>Improved collaboration and data flow</h3>
            <p>Support cross-functional teams with clearer data access and workflow continuity.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
