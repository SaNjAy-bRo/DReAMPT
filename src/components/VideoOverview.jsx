import React from 'react';
import Reveal from './Reveal';

const VideoOverview = () => {
  return (
    <section className="section-space">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal className="max-w-2xl">
            <p className="section-kicker">Integrated CAD/CAM Solutions</p>
            <h2 className="section-title">Experience Cimatron in Action</h2>
            <p className="section-copy">
              Explore how Cimatron's advanced software transforms complex mold and die shop workflows with a Right-First-Time approach. As an Authorised Reseller Cimatron, DReAMPT Mecha System brings you the technology, training, and strategic support to elevate your manufacturing capabilities.
            </p>
            <div className="mt-8 flex items-center gap-4">
               <a href="#contact" className="btn-primary">Connect With Us</a>
            </div>
          </Reveal>
          
          <Reveal className="relative overflow-hidden rounded-[20px] shadow-panel bg-brand-navy/5 border border-brand-line/50 p-2 sm:p-3">
             <div className="relative overflow-hidden rounded-[14px] bg-black aspect-video w-full shadow-inner ring-1 ring-white/10">
                 <iframe 
                   className="absolute inset-0 w-full h-full"
                   src="https://www.youtube.com/embed/_WuZUNnAzoY?si=ajPLb68YUrOE6o3x" 
                   title="Company Manufacturing Overview" 
                   frameBorder="0" 
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                   referrerPolicy="strict-origin-when-cross-origin" 
                   allowFullScreen
                 ></iframe>
             </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default VideoOverview;
