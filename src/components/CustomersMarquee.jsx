import React from 'react';
import Reveal from './Reveal';

const CustomersMarquee = () => {
  const logos = Array.from({ length: 22 }, (_, i) => i + 1);

  return (
    <section className="customers-section relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="customers-panel">
          <div className="customers-heading">
            <p className="section-kicker">Our Customers</p>
          </div>

          <div className="customers-marquee">
            <div className="customers-track">
              {/* Original set */}
              {logos.map((num) => (
                <div key={`original-${num}`} className="customer-logo-tile">
                  <img src={`/images/clients/logo ${num}.jpg`} alt={`Client ${num} logo`} />
                </div>
              ))}
              
              {/* Duplicate set for seamless infinite loop */}
              {logos.map((num) => (
                <div key={`copy-${num}`} className="customer-logo-tile" aria-hidden="true">
                  <img src={`/images/clients/logo ${num}.jpg`} alt="" />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CustomersMarquee;
