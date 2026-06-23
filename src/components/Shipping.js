import React, { useState, useEffect } from 'react';
import './Shipping.css';
import ScrollAnimation from './ScrollAnimation';

const Shipping = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="shipping" className="shipping-section">
      <div className="container">
        <div className={`section-header ${isLoaded ? 'fade-in-up' : ''}`}>
          <h2 className="section-title">Global Shipping & Export</h2>
          <p className="section-subtitle">Reliable sea freight to destinations worldwide</p>
        </div>
        
        <div className="shipping-content">
          <ScrollAnimation animation="fade-in-left" delay={0.1}>
            <div className="shipping-info">
              <h3>Sea Container Shipping</h3>
              <p>We use modern sea containers to ensure your products reach their destination safely and efficiently.</p>
              
              <div className="shipping-features">
                
                <ScrollAnimation animation="fade-in-up" delay={0.3}>
                  <div className="feature-item">
                    <div className="feature-icon">🌡️</div>
                    <div className="feature-text">
                      <h4>Temperature Controlled</h4>
                      <p>Maintains optimal conditions for food products</p>
                    </div>
                  </div>
                </ScrollAnimation>
                
                <ScrollAnimation animation="fade-in-up" delay={0.4}>
                  <div className="feature-item">
                    <div className="feature-icon">📦</div>
                    <div className="feature-text">
                      <h4>Secure Packaging</h4>
                      <p>Protective packaging for long journeys</p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-in-right" delay={0.2}>
            <div className="shipping-visual">
              <div className="container-ship">
                <div className="ship-body">
                  <div className="ship-deck"></div>
                  <div className="ship-containers">
                    <div className="container-box container-1">
                      <div className="container-door"></div>
                      <div className="container-label">SkyFresh</div>
                    </div>
                    <div className="container-box container-2">
                      <div className="container-door"></div>
                      <div className="container-label">FOOD</div>
                    </div>
                    <div className="container-box container-3">
                      <div className="container-door"></div>
                      <div className="container-label">EXPORT</div>
                    </div>
                  </div>
                </div>
                <div className="ship-waves">
                  <div className="wave wave-1"></div>
                  <div className="wave wave-2"></div>
                  <div className="wave wave-3"></div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
        
        <div className={`flags-section ${isLoaded ? 'fade-in-up' : ''}`}>
          <h3>We Export To</h3>
          <div className="flags-grid">
            <div className="flag-item">
              <div className="flag flag-indonesia">🇮🇩</div>
              <span>Indonesia</span>
            </div>
            <div className="flag-item">
              <div className="flag flag-malaysia">🇲🇾</div>
              <span>Malaysia</span>
            </div>
            <div className="flag-item">
              <div className="flag flag-philippines">🇵🇭</div>
              <span>Philippines</span>
            </div>
            <div className="flag-item">
              <div className="flag flag-qatar">🇶🇦</div>
              <span>Qatar</span>
            </div>
            <div className="flag-item">
              <div className="flag flag-russia">🇷🇺</div>
              <span>Russia</span>
            </div>
            <div className="flag-item">
              <div className="flag flag-uae">🇦🇪</div>
              <span>Dubai</span>
            </div>
            <div className="flag-item">
              <div className="flag flag-singapore">🇸🇬</div>
              <span>Singapore</span>
            </div>
            <div className="flag-item">
              <div className="flag flag-sri-lanka">🇱🇰</div>
              <span>Sri Lanka</span>
            </div>
            <div className="flag-item">
              <div className="flag flag-japan">🇯🇵</div>
              <span>Tokyo</span>
            </div>
            <div className="flag-item">
              <div className="flag flag-vietnam">🇻🇳</div>
              <span>Vietnam</span>
            </div>
            <div className="flag-item">
              <div className="flag flag-thailand">🇹🇭</div>
              <span>Thailand</span>
            </div>
            <div className="flag-item">
              <div className="flag flag-switzerland">🇨🇭</div>
              <span>Switzerland</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shipping;
