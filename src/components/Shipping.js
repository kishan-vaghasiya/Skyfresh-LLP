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
          <h2 className="section-title">Our Products & Quality Commitment</h2>
          <p className="section-subtitle">Premium dehydrated vegetables, spices and processed food — fresh, hygienic and export-ready</p>
        </div>
        
        <div className="shipping-content">
          <ScrollAnimation animation="fade-in-left" delay={0.1}>
            <div className="shipping-info">
              <h3>Premium Product Offerings</h3>
              <p>We specialize in dehydrated vegetables, spices, nut products and pulsed ingredients — examples include Dehydrated Red & White Onion, Dehydrated Garlic, Turmeric & Chili powders, Kesar Mango Pulp and export-grade peanut products.</p>

              <div className="shipping-features">
                <ScrollAnimation animation="fade-in-up" delay={0.3}>
                  <div className="feature-item">
                    <div className="feature-icon">🌿</div>
                    <div className="feature-text">
                      <h4>Farm-to-Factory Freshness</h4>
                      <p>Sourced locally from Gujarat farms and processed to retain aroma and nutrients.</p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="fade-in-up" delay={0.4}>
                  <div className="feature-item">
                    <div className="feature-icon">✔️</div>
                    <div className="feature-text">
                      <h4>Export-Grade Quality</h4>
                      <p>Strict quality checks, commercial A-grade and packaging options to meet buyer specifications.</p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="fade-in-up" delay={0.5}>
                  <div className="feature-item">
                    <div className="feature-icon">📦</div>
                    <div className="feature-text">
                      <h4>Flexible Packaging</h4>
                      <p>From 1 kg retail jars to 20–50 kg bulk packs — customized packing for processors and brands.</p>
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
