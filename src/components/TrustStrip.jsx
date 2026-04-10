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
    <section className="relative z-10 -mt-10 mb-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="stats-ref-container overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-xl md:p-12">
          <div className="grid grid-cols-1 divide-y divide-slate-100 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            
            <article className="stats-ref-item px-6 py-8 sm:py-4 flex flex-col items-center text-center">
              <p className="stats-ref-value text-5xl font-extrabold tracking-tight text-slate-900 leading-none mb-4 md:text-6xl">
                <Counter endValue={6000} suffix="+" />
              </p>
              <p className="stats-ref-label text-sm font-semibold uppercase tracking-wider text-slate-500 max-w-[180px]">
                Hours of Curated Learning
              </p>
            </article>

            <article className="stats-ref-item px-6 py-8 sm:py-4 flex flex-col items-center text-center">
              <p className="stats-ref-value text-5xl font-extrabold tracking-tight text-slate-900 leading-none mb-4 md:text-6xl">
                <Counter endValue={1250} suffix="+" />
              </p>
              <p className="stats-ref-label text-sm font-semibold uppercase tracking-wider text-slate-500 max-w-[180px]">
                Industry Experts to Customize Training
              </p>
            </article>

            <article className="stats-ref-item px-6 py-8 sm:py-4 flex flex-col items-center text-center">
              <p className="stats-ref-value text-5xl font-extrabold tracking-tight text-slate-900 leading-none mb-4 md:text-6xl">
                <Counter endValue={80} />
              </p>
              <p className="stats-ref-label text-sm font-semibold uppercase tracking-wider text-slate-500 max-w-[180px]">
                Net Promoter Score Across All Touch Points
              </p>
            </article>

            <article className="stats-ref-item px-6 py-8 sm:py-4 flex flex-col items-center text-center border-b-0">
              <p className="stats-ref-value text-5xl font-extrabold tracking-tight text-slate-900 leading-none mb-4 md:text-6xl">
                <Counter endValue={10000} suffix="+" />
              </p>
              <p className="stats-ref-label text-sm font-semibold uppercase tracking-wider text-slate-500 max-w-[180px]">
                Engineers Up-skilled Across Domains
              </p>
            </article>

          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default TrustStrip;
