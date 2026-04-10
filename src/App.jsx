import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import MoldDesign from './pages/MoldDesign';
import DieDesign from './pages/DieDesign';
import ElectrodesDesign from './pages/ElectrodesDesign';
import NCProgramming from './pages/NCProgramming';
import CimatronViewer from './pages/CimatronViewer';
import CimatronCAD from './pages/CimatronCAD';
import CimatronCADAI from './pages/CimatronCADAI';
import CimatronDieQuote from './pages/CimatronDieQuote';
import AltairInspireMold from './pages/AltairInspireMold';
import AltairInspireForm from './pages/AltairInspireForm';
import CaseStudies from './pages/CaseStudies';
import './index.css';

const App = () => {
  return (
    <div className="page-shell relative overflow-hidden bg-white font-body text-brand-slate antialiased selection:bg-brand-orange/15">
      <div className="site-grid"></div>
      
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/mold-design" element={<MoldDesign />} />
        <Route path="/products/die-design" element={<DieDesign />} />
        <Route path="/products/electrodes-design" element={<ElectrodesDesign />} />
        <Route path="/products/nc-programming" element={<NCProgramming />} />
        <Route path="/products/cimatron-viewer" element={<CimatronViewer />} />
        <Route path="/products/cimatron-cad" element={<CimatronCAD />} />
        <Route path="/products/cimatron-cad-ai" element={<CimatronCADAI />} />
        <Route path="/products/cimatron-diequote" element={<CimatronDieQuote />} />
        <Route path="/products/altair-inspire-mold" element={<AltairInspireMold />} />
        <Route path="/products/altair-inspire-form" element={<AltairInspireForm />} />
      </Routes>
      
      <Footer />
    </div>
  );
};

export default App;
