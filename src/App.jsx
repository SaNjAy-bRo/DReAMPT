import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CustomersMarquee from './components/CustomersMarquee';
import AboutSnapshot from './components/AboutSnapshot';
import TrustStrip from './components/TrustStrip';
import Benefits from './components/Benefits';
import Products from './components/Products';
import ServicesOverview from './components/ServicesOverview';
import EngineeringServices from './components/EngineeringServices';
import Process from './components/Process';
import Industries from './components/Industries';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import './index.css';

const App = () => {
  return (
    <div className="page-shell relative overflow-hidden bg-white font-body text-brand-slate antialiased selection:bg-brand-orange/15">
      <div className="site-grid"></div>
      
      <Header />
      
      <main id="home">
        <HeroSection />
        <CustomersMarquee />
        <AboutSnapshot />
        <TrustStrip />
        <Benefits />
        <Products />
        <ServicesOverview />
        <EngineeringServices />
        <Process />
        <Industries />
        <FinalCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
