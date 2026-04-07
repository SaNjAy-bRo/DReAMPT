import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 16);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', isMobileMenuOpen);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('[data-dropdown]')) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleDropdown = (name, e) => {
    e.preventDefault();
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header id="site-header" ref={headerRef} className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isSticky ? 'is-sticky' : ''}`}>
      <div className="topbar-shell">
        <div className="flex items-center justify-between gap-4 px-6 py-2 lg:px-8">
          <div className="flex items-center gap-3">
            <img src="/images/Cimatron_Portrait_logo_black.png" alt="Cimatron logo" className="h-7 w-auto" />
            <p className="truncate text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
              Authorised Reseller
            </p>
          </div>
          <div className="flex items-center gap-2">
            <a href="https://www.linkedin.com/company/dreampt-mecha-system-pvt-ltd/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2 2 0 1 0 5.3 7a2 2 0 0 0-.05-4ZM20.44 12.48c0-3.45-1.84-5.05-4.3-5.05a3.74 3.74 0 0 0-3.38 1.86V8.5H9.38c.04.52 0 11.5 0 11.5h3.38v-6.42c0-.34.03-.68.13-.92.27-.68.9-1.39 1.96-1.39 1.38 0 1.93 1.05 1.93 2.59V20h3.38v-7.52Z" />
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                <path d="M13.5 21v-8.1h2.73l.41-3.16H13.5V7.72c0-.91.25-1.53 1.56-1.53h1.67V3.37c-.29-.04-1.27-.12-2.41-.12-2.39 0-4.02 1.46-4.02 4.14v2.34H7.59v3.16h2.71V21h3.2Z" />
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                <path d="M7.75 3h8.5A4.75 4.75 0 0 1 21 7.75v8.5A4.75 4.75 0 0 1 16.25 21h-8.5A4.75 4.75 0 0 1 3 16.25v-8.5A4.75 4.75 0 0 1 7.75 3Zm0 1.5A3.25 3.25 0 0 0 4.5 7.75v8.5a3.25 3.25 0 0 0 3.25 3.25h8.5a3.25 3.25 0 0 0 3.25-3.25v-8.5A3.25 3.25 0 0 0 16.25 4.5h-8.5Zm8.88 1.13a1.12 1.12 0 1 1 0 2.24 1.12 1.12 0 0 1 0-2.24ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className={`header-shell flex items-center justify-between border-b border-slate-200/80 bg-white px-6 py-4 transition-all duration-300 lg:px-8 ${isSticky ? 'scrolled' : ''}`}>
          <a href="/#home" className="flex items-center gap-3" aria-label="DReAMPT Mecha System Pvt. Ltd. home">
            <img src="/images/DReAMPT_darklogo.png" alt="DReAMPT Mecha System Pvt. Ltd. logo" className="h-11 w-auto sm:h-12" />
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            <a className="nav-link" href="/#home">Home</a>
            <a className="nav-link" href="/#about">About</a>

            <div 
              className={`nav-dropdown group relative ${openDropdown === 'products' ? 'open' : ''}`} 
              data-dropdown="products"
              onMouseEnter={() => setOpenDropdown('products')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="nav-link flex items-center gap-2" type="button" onClick={(e) => toggleDropdown('products', e)} aria-expanded={openDropdown === 'products'}>
                Products <span className="dropdown-arrow">+</span>
              </button>
              <div className="dropdown-panel" role="menu">
                <Link to="/products/mold-design" role="menuitem" onClick={() => setOpenDropdown(null)}>Mold Design</Link>
                <a href="/#products" role="menuitem">Die Design</a>
                <a href="/#products" role="menuitem">Electrodes Design</a>
                <a href="/#products" role="menuitem">NC Programming</a>
                <a href="/#products" role="menuitem">Cimatron Viewer</a>
                <a href="/#products" role="menuitem">Cimatron CAD</a>
                <a href="/#products" role="menuitem">Cimatron CAD-AI</a>
                <a href="/#products" role="menuitem">Cimatron DieQuote</a>
                <a href="/#products" role="menuitem">Altair Inspire Form</a>
                <a href="/#products" role="menuitem">Altair Inspire Mold</a>
              </div>
            </div>

            <a className="nav-link" href="/#services">Services</a>

            <div 
              className={`nav-dropdown group relative ${openDropdown === 'resources' ? 'open' : ''}`} 
              data-dropdown="resources"
              onMouseEnter={() => setOpenDropdown('resources')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="nav-link flex items-center gap-2" type="button" onClick={(e) => toggleDropdown('resources', e)} aria-expanded={openDropdown === 'resources'}>
                Resources <span className="dropdown-arrow">+</span>
              </button>
              <div className="dropdown-panel" role="menu">
                <a href="/#resources" role="menuitem">Blog</a>
                <a href="/#resources" role="menuitem">News &amp; Events</a>
                <a href="/#resources" role="menuitem">Case Study</a>
              </div>
            </div>

            <a className="nav-link" href="/#contact">Contact</a>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href="/#contact" className="btn-primary">Request a Free Consultation</a>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <button
              id="mobile-menu-toggle"
              className={`mobile-toggle lg:hidden ${isMobileMenuOpen ? 'active' : ''}`}
              type="button"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>

        <div id="mobile-menu" className="mobile-menu border-b border-slate-200/80 bg-white p-5 shadow-soft lg:hidden" hidden={!isMobileMenuOpen}>
          <div className="space-y-2">
            <a className="mobile-link" href="/#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a className="mobile-link" href="/#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>

            <details className="mobile-accordion">
              <summary>Products <span className="dropdown-arrow">+</span></summary>
              <div className="mobile-submenu" onClick={() => setIsMobileMenuOpen(false)}>
                <Link to="/products/mold-design" onClick={() => setIsMobileMenuOpen(false)}>Mold Design</Link>
                <a href="/#products">Die Design</a>
                <a href="/#products">Electrodes Design</a>
                <a href="/#products">NC Programming</a>
                <a href="/#products">Cimatron Viewer</a>
                <a href="/#products">Cimatron CAD</a>
                <a href="/#products">Cimatron CAD-AI</a>
                <a href="/#products">Cimatron DieQuote</a>
                <a href="/#products">Altair Inspire Form</a>
                <a href="/#products">Altair Inspire Mold</a>
              </div>
            </details>

            <a className="mobile-link" href="/#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>

            <details className="mobile-accordion">
              <summary>Resources <span className="dropdown-arrow">+</span></summary>
              <div className="mobile-submenu" onClick={() => setIsMobileMenuOpen(false)}>
                <a href="/#resources">Blog</a>
                <a href="/#resources">News &amp; Events</a>
                <a href="/#resources">Case Study</a>
              </div>
            </details>

            <a className="mobile-link" href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          </div>

          <div className="mt-5">
            <a href="/#contact" className="btn-primary w-full justify-center text-center" onClick={() => setIsMobileMenuOpen(false)}>Request a Free Consultation</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
