import React from 'react';
import Reveal from './Reveal';

const Products = () => {
  return (
    <section id="products" className="section-space products-section-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <p className="section-kicker text-white/70">Authorised Reseller Portfolio</p>
          <h2 className="section-title text-white">Cimatron Products</h2>
          <p className="section-copy text-slate-300">
            Explore integrated CAD/CAM solutions for tooling, design, manufacturing, CNC, EDM, and engineering
            collaboration.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <Reveal className="product-card">
            <div className="product-media">
              <img src="/images/products/mold-design.jpg" alt="Mold Design product visual" className="product-media-img" />
              <h3>Mold Design</h3>
            </div>
            <a href="#contact" className="text-link">View Product</a>
          </Reveal>
          <Reveal className="product-card">
            <div className="product-media">
              <img src="/images/products/die-design.jpg" alt="Die Design product visual" className="product-media-img" />
              <h3>Die Design</h3>
            </div>
            <a href="#contact" className="text-link">View Product</a>
          </Reveal>
          <Reveal className="product-card">
            <div className="product-media">
              <img src="/images/products/electrodes-design.jpg" alt="Electrodes Design product visual" className="product-media-img" />
              <h3>Electrodes Design</h3>
            </div>
            <a href="#contact" className="text-link">View Product</a>
          </Reveal>
          <Reveal className="product-card">
            <div className="product-media">
              <img src="/images/products/nc-programming.jpg" alt="NC Programming product visual" className="product-media-img" />
              <h3>NC Programming</h3>
            </div>
            <a href="#contact" className="text-link">View Product</a>
          </Reveal>
          <Reveal className="product-card">
            <div className="product-media">
              <img src="/images/products/cimatron-viewer.jpg" alt="Cimatron Viewer product visual" className="product-media-img" />
              <h3>Cimatron Viewer</h3>
            </div>
            <a href="#contact" className="text-link">View Product</a>
          </Reveal>
          <Reveal className="product-card">
            <div className="product-media">
              <img src="/images/products/cimatron-cad.png" alt="Cimatron CAD product visual" className="product-media-img" />
              <h3>Cimatron CAD</h3>
            </div>
            <a href="#contact" className="text-link">View Product</a>
          </Reveal>
          <Reveal className="product-card">
            <div className="product-media">
              <img src="/images/products/cimatron-cad-ai.jpg" alt="Cimatron CAD-AI product visual" className="product-media-img" />
              <h3>Cimatron CAD-AI</h3>
            </div>
            <a href="#contact" className="text-link">View Product</a>
          </Reveal>
          <Reveal className="product-card">
            <div className="product-media">
              <img src="/images/products/cimatron-diequote.jpg" alt="Cimatron DieQuote product visual" className="product-media-img" />
              <h3>Cimatron DieQuote</h3>
            </div>
            <a href="#contact" className="text-link">View Product</a>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Products;
