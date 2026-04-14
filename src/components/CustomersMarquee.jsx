import React from 'react';
import Reveal from './Reveal';

const CustomersMarquee = () => {
  const logos = [
    { num: 10, ext: 'jpg' },
    { num: 3, ext: 'jpg' },
    { num: 4, ext: 'jpg' },
    { num: 6, ext: 'jpg' },
    { num: 7, ext: 'jpg' },
    { num: 11, ext: 'jpg' },
    { num: 20, ext: 'jpg' },
    { num: 9, ext: 'jpg' },
    { num: 14, ext: 'jpg' },
    { num: 23, ext: 'png' },
    { num: 24, ext: 'png' },
    { num: 25, ext: 'png' },
    { num: 26, ext: 'png' },
    { num: 27, ext: 'png' },
    { num: 28, ext: 'png' },
    { num: 29, ext: 'png' },
  ];

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
              {logos.map(({ num, ext }) => (
                <div key={`original-${num}`} className="customer-logo-tile">
                  <img src={`/images/clients/logo ${num}.${ext}`} alt={`Client ${num} logo`} />
                </div>
              ))}
              
              {/* Duplicate set for seamless infinite loop */}
              {logos.map(({ num, ext }) => (
                <div key={`copy-${num}`} className="customer-logo-tile" aria-hidden="true">
                  <img src={`/images/clients/logo ${num}.${ext}`} alt="" />
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
