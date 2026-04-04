import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="footer-shell">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-t border-white/10 py-14 lg:grid-cols-[1.15fr_0.85fr_0.85fr_0.85fr_1fr]">
          <div>
            <img src="/images/DReAMPT_lightlogo.png" alt="DReAMPT Mecha System Pvt. Ltd. logo" className="h-14 w-auto" />
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
              DReAMPT Mecha System Pvt. Ltd. is an Authorised Reseller of Cimatron, delivering engineering and
              industrial technology support with a structured, practical approach.
            </p>
          </div>

          <div>
            <h3 className="footer-title">Quick Links</h3>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#products">Products</a>
              <a href="#services">Services</a>
              <a href="#resources">Resources</a>
            </div>
          </div>

          <div>
            <h3 className="footer-title">Products</h3>
            <div className="footer-links">
              <a href="#products">Mold Design</a>
              <a href="#products">Die Design</a>
              <a href="#products">NC Programming</a>
              <a href="#products">Cimatron CAD</a>
              <a href="#products">Cimatron CAD-AI</a>
            </div>
          </div>

          <div>
            <h3 className="footer-title">Services</h3>
            <div className="footer-links">
              <a href="#services">Design Engineering</a>
              <a href="#services">Design Validation</a>
              <a href="#services">Manufacturing</a>
              <a href="#services">Automation</a>
              <a href="#services">Testing</a>
            </div>
          </div>

          <div id="resources">
            <h3 className="footer-title">Contact</h3>
            <div className="footer-links">
              <a href="mailto:info@dreampt.example">info@dreampt.example</a>
              <a href="tel:+910000000000">+91 00000 00000</a>
              <p>No. 1, 3rd Main, 2nd Stage, Yeshwantapura Industrial Suburb, Goraguntepalya, J.B. Kaval, Bengaluru – 560022, Karnataka, India</p>
              <a href="#contact">Request a Demo</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-sm text-slate-400">
          Copyright © 2026 DReAMPT Mecha System Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
