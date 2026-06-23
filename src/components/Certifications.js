import React, { useState, useEffect } from 'react';
import './Certifications.css';
import ScrollAnimation from './ScrollAnimation';

const Certifications = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <div className={`section-header ${isLoaded ? 'fade-in-up' : ''}`}>
          <h2 className="section-title">Quality & Certifications</h2>
          <p className="section-subtitle">Committed to the highest standards of quality and safety</p>
        </div>

        <div className="certifications-content">
          <ScrollAnimation animation="fade-in-left" delay={0.1}>
            <div className="quality-standards">
              <h3>Our Quality Standards</h3>
              <div className="standards-grid">
                <div className="standard-item">
                  <div className="standard-icon">🏭</div>
                  <h4>ISO 22000:2018</h4>
                  <p>Food Safety Management System certified facility ensuring highest food safety standards</p>
                </div>
                <div className="standard-item">
                  <div className="standard-icon">🌱</div>
                  <h4>Organic Certified</h4>
                  <p>100% natural, organic products with no artificial preservatives or chemicals</p>
                </div>
                <div className="standard-item">
                  <div className="standard-icon">🔬</div>
                  <h4>Lab Tested</h4>
                  <p>Every batch tested in certified laboratories for quality, purity, and safety</p>
                </div>
                <div className="standard-item">
                  <div className="standard-icon">📋</div>
                  <h4>HACCP Compliant</h4>
                  <p>Hazard Analysis Critical Control Points implementation for food safety</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-in-right" delay={0.2}>
            <div className="certifications-visual">
              <div className="cert-badges">
                <h4>Our Certifications</h4>
                <div className="badges-grid">
                  <div className="cert-badge">
                    <div className="badge-icon">🏆</div>
                    <h5>ISO 22000:2018</h5>
                    <p>Food Safety Management</p>
                    <div className="badge-status">Certified</div>
                  </div>
                  <div className="cert-badge">
                    <div className="badge-icon">🌿</div>
                    <h5>Organic Certified</h5>
                    <p>100% Natural Products</p>
                    <div className="badge-status">Certified</div>
                  </div>
                  <div className="cert-badge">
                    <div className="badge-icon">🔒</div>
                    <h5>HACCP</h5>
                    <p>Food Safety System</p>
                    <div className="badge-status">Compliant</div>
                  </div>
                  <div className="cert-badge">
                    <div className="badge-icon">🌍</div>
                    <h5>Export License</h5>
                    <p>Government Approved</p>
                    <div className="badge-status">Licensed</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation animation="fade-in-up" delay={0.3}>
          <div className="quality-metrics">
            <h3>Quality Metrics</h3>
            <div className="metrics-grid">
              <div className="metric-item">
                <div className="metric-icon">✅</div>
                <div className="metric-value">99.8%</div>
                <div className="metric-label">Quality Pass Rate</div>
              </div>
              <div className="metric-item">
                <div className="metric-icon">🔬</div>
                <div className="metric-value">100%</div>
                <div className="metric-label">Lab Tested</div>
              </div>
              <div className="metric-item">
                <div className="metric-icon">🌱</div>
                <div className="metric-value">100%</div>
                <div className="metric-label">Natural Products</div>
              </div>
              <div className="metric-item">
                <div className="metric-icon">🚫</div>
                <div className="metric-value">0%</div>
                <div className="metric-label">Preservatives</div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Certifications;
