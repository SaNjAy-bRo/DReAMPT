import React, { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';

const Counter = ({ endValue, suffix = '' }) => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setValue(endValue);
      return;
    }

    let hasAnimated = false;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || hasAnimated) return;
      hasAnimated = true;

      const duration = 1600;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        setValue(Math.floor(progress * endValue));

        if (progress < 1) {
          window.requestAnimationFrame(tick);
        } else {
          setValue(endValue);
        }
      };

      window.requestAnimationFrame(tick);
      observer.disconnect();
    }, { threshold: 0.5 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [endValue]);

  return <span ref={ref}>{value}{suffix}</span>;
};

const TrustStrip = () => {
  return (
    <section className="relative z-10 mt-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="trust-strip grid gap-4 rounded-[28px] border border-brand-line/80 bg-white/95 p-6 shadow-soft md:grid-cols-2 xl:grid-cols-4">
          <article className="trust-stat">
            <p className="trust-value"><Counter endValue={105} suffix="+" /></p>
            <p className="trust-label">Years of Combined Engineering Experience</p>
          </article>
          <article className="trust-stat">
            <p className="trust-value">100%</p>
            <p className="trust-label">Indian MSME</p>
          </article>
          <article className="trust-stat">
            <p className="trust-value">End-to-End</p>
            <p className="trust-label">Engineering Solutions</p>
          </article>
          <article className="trust-stat">
            <p className="trust-value">Strategic</p>
            <p className="trust-label">Industry Partnerships</p>
          </article>
        </Reveal>
      </div>
    </section>
  );
};

export default TrustStrip;
