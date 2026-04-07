import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import MoldDesign from './pages/MoldDesign'; // We will create this next
import './index.css';

const App = () => {
  return (
    <div className="page-shell relative overflow-hidden bg-white font-body text-brand-slate antialiased selection:bg-brand-orange/15">
      <div className="site-grid"></div>
      
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/mold-design" element={<MoldDesign />} />
      </Routes>
      
      <Footer />
    </div>
  );
};

export default App;
