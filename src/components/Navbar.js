import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { imgPath } from '../assets';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle navigation to in-page anchors with smooth scrolling.
  const handleNavClick = (e) => {
    // If the link is a normal anchor to an id (e.g. #about), smoothly scroll to it.
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Update the URL hash without jumping
        if (window.history && window.history.pushState) {
          window.history.pushState(null, '', href);
        } else {
          window.location.hash = href;
        }
      }
    }
    // Close mobile menu after click (if open)
    closeMobileMenu();
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container"> 
          <div className="nav-logo">
            <img src={imgPath.logo1} alt="SkyfreshDehydration" className="logo" />
          </div>
          <div className="nav-menu">
            <a href="#home" className="nav-link" onClick={handleNavClick}>Home</a>
            <a href="#about" className="nav-link" onClick={handleNavClick}>About</a>
            <a href="#certifications" className="nav-link" onClick={handleNavClick}>Quality</a>
            <a href="#products" className="nav-link" onClick={handleNavClick}>Products</a>
            <a href="#shipping" className="nav-link" onClick={handleNavClick}>Shipping</a>
            <a href="#contact" className="nav-link" onClick={handleNavClick}>Contact</a>
            {/* <a href="/brochure.pdf" download className="nav-link" onClick={closeMobileMenu}>Download Brochure</a> */}
          </div>
          <div 
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <a href="#home" className="nav-link" onClick={handleNavClick}>Home</a>
        <a href="#about" className="nav-link" onClick={handleNavClick}>About</a>
        <a href="#certifications" className="nav-link" onClick={handleNavClick}>Quality</a>
        <a href="#products" className="nav-link" onClick={handleNavClick}>Products</a>
        <a href="#shipping" className="nav-link" onClick={handleNavClick}>Shipping</a>
        <a href="#contact" className="nav-link" onClick={handleNavClick}>Contact</a>
        {/* <a href="/brochure.pdf" download className="nav-link" onClick={closeMobileMenu}>Download Brochure</a> */}
      </div>
    </>
  );
};

export default Navbar;
