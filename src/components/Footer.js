import React from 'react';
import './Footer.css';
import { imgPath } from '../assets';
import { PRODUCT_CATALOG, CATEGORIES } from '../data/productCatalog';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src={imgPath.logo1} alt="SkyfreshDehydration" className="footer-logo-img" />
            </div>
            <p className="footer-description">
              Leading exporter of premium food pr'oducts to 12+ countries worldwide. 
              Quality, reliability, and excellence in every shipment. 
            </p>
            <div className="social-links">
              <button className="social-link" aria-label="Facebook">
                <span className="social-icon">📘</span>
              </button>
              <button className="social-link" aria-label="LinkedIn">
                <span className="social-icon">💼</span>
              </button>
              <button className="social-link" aria-label="Instagram">
                <span className="social-icon">📷</span>
              </button>
              <button className="social-link" aria-label="Twitter">
                <span className="social-icon">🐦</span>
              </button>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#shipping">Shipping</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Products</h3>
            <div className="product-columns">
              {
                // Build a small list: top 4 product titles and categories to keep footer compact
              }
              <ul className="footer-links">
                {Object.entries(PRODUCT_CATALOG).slice(0, 4).map(([id, p]) => (
                  <li key={id}><a href="#products">{p.title}</a></li>
                ))}
                <li><a href="#products" className="view-all">View all products ({Object.keys(PRODUCT_CATALOG).length})</a></li>
              </ul>

              <ul className="footer-links">
                {CATEGORIES.map((c) => (
                  <li key={c.id}><a href={`#products`} data-category={c.id}>{c.emoji} {c.label}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 SkyfreshDehydration. All rights reserved</p>
          <p>Made with ❤️ for global food excellence</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
