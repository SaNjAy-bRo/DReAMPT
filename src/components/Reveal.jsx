import React, { useEffect, useRef, useState } from 'react';

const Reveal = ({ children, className = '', tag: Tag = 'div', style = {} }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.14, rootMargin: '0px 0px -60px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal-up ${isVisible ? 'is-visible' : ''} ${className}`} style={style}>
      {children}
    </Tag>
  );
};

export default Reveal;
