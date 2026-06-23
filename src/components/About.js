import React, { useState, useEffect } from 'react';
import './About.css';
import ScrollAnimation from './ScrollAnimation';

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className={`section-header ${ isLoaded ? 'fade-in-up' : ''}`}>
          <h2 className="section-title">About Skyfresh Dehydration</h2>
          <p className="section-subtitle">Your trusted partner in premium food exports</p>
        </div>
       <div className="about-content">
  
  <ScrollAnimation animation="fade-in-left" delay={0.1}>
    <div className="about-left">
      <h3>2+ Years of Excellence in Food Export</h3>
      <p>
        Based in Ahemdabad, Gujarat, we specialize in exporting premium quality onion powder, 
        garlic powder, and food chips to over 12 countries worldwide. Our commitment to 
        quality, reliability, and customer satisfaction has made us a trusted partner 
        for 1000+ clients globally.
      </p>
    </div>
  </ScrollAnimation>

  <ScrollAnimation animation="fade-in-right" delay={0.2}>
    <div className="about-right">
      <div className="about-values">
        <h4>Our Core Values</h4>

        <div className="values-grid">
          <div className="value-item">
            <div className="value-icon">🌱</div>
            <h5>Quality First</h5>
            <p>100% natural, premium quality products with no preservatives</p>
          </div>

          <div className="value-item">
            <div className="value-icon">🤝</div>
            <h5>Trust & Reliability</h5>
            <p>Consistent delivery and transparent business practices</p>
          </div>

          <div className="value-item">
            <div className="value-icon">🌍</div>
            <h5>Global Reach</h5>
            <p>Exporting to 50+ countries with efficient logistics</p>
          </div>

          <div className="value-item">
            <div className="value-icon">⚡</div>
            <h5>Innovation</h5>
            <p>Continuous improvement in processes and product quality</p>
          </div>
        </div>
      </div>
    </div>
  </ScrollAnimation>
</div>
</div>
</section>
  );
};

export default About;
