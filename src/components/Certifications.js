import React, { useState, useEffect, useRef } from 'react';
import './Certifications.css';

const qualityCards = [
  {
    icon: '🌱',
    title: 'Direct Farmer Sourcing',
    desc: 'Our deep network with farmers ensures fresh, consistent quality and competitive pricing at every harvest.',
  },
  {
    icon: '📦',
    title: 'Wide Product Range',
    desc: 'Spices, rice, edible oils, ghee, fruits, vegetables, and groundnut — one source for all your agro needs.',
  },
  {
    icon: '🔬',
    title: 'Strict Quality Control',
    desc: 'Every batch inspected for purity, weight, and export readiness before it leaves our facility.',
  },
  {
    icon: '📄',
    title: 'Export Documentation',
    desc: 'International trade expertise ensures smooth documentation and hassle-free customs clearance.',
  },
  {
    icon: '🛡️',
    title: 'Safe Hygienic Packaging',
    desc: 'High-grade materials preserve freshness and protect integrity throughout international shipping.',
  },
  {
    icon: '🌍',
    title: 'Global Market Commitment',
    desc: 'Proudly exporting Indian agricultural excellence to buyers across the globe, every season.',
  },
];

const differentiators = [
  { title: 'Fast Turnaround', desc: 'Harvest to shipment with reliable timelines for every order', tag: 'On Time' },
  { title: 'Modern Processing', desc: 'Advanced dehydration systems, low waste, high yield', tag: 'Premium' },
  { title: 'Batch Verification', desc: 'Purity, weight and export readiness checked every time', tag: 'Verified' },
  { title: 'International Standards', desc: 'Prepared to meet global buyer preferences and regulations', tag: 'Global' },
];

const metrics = [
  { id: 'm1', target: 99.8, suffix: '%', label: 'Quality Pass Rate', display: '99.8%' },
  { id: 'm2', target: 100, suffix: '%', label: 'Lab Tested', display: '100%' },
  { id: 'm3', target: 100, suffix: '%', label: 'Natural Products', display: '100%' },
  { id: 'm4', target: 0, suffix: '%', label: 'Preservatives', display: '0%' },
];

function useCountUp(target, duration = 1200, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    if (target === 0) { setValue(0); return; }
    let current = 0;
    const steps = Math.ceil(duration / 16);
    const increment = target / steps;
    const timer = setInterval(() => {
      current = Math.min(current + increment, target);
      setValue(parseFloat(current.toFixed(1)));
      if (current >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [start, target, duration]);
  return value;
}

const MetricItem = ({ metric, animate }) => {
  const val = useCountUp(metric.target, 1300, animate);
  return (
    <div className="qs-metric">
      <div className="qs-metric-val">
        {animate ? `${val}%` : metric.display}
      </div>
      <div className="qs-metric-lbl">{metric.label}</div>
    </div>
  );
};

const Certifications = () => {
  const [metricsVisible, setMetricsVisible] = useState(false);
  const metricsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setMetricsVisible(true); },
      { threshold: 0.3 }
    );
    if (metricsRef.current) observer.observe(metricsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="quality" className="qs-section">
      {/* Stamp decoration */}
      <div className="qs-stamp" aria-hidden="true">
        <div className="qs-stamp-inner">Export<br />Ready</div>
      </div>

      <div className="qs-container">
        {/* Header */}
        <p className="qs-eyebrow">Established — Ahemdabad, Gujarat, India</p>
        <h2 className="qs-headline">
          Our Quality<br /><span className="qs-headline-accent">Promise</span>
        </h2>
        <p className="qs-subtitle">
          Trusted sourcing. Premium processing. Export-ready freshness — from farm to global market.
        </p>
        <div className="qs-accent-bar" aria-hidden="true">
          <span /><span /><span />
        </div>

        {/* 6-card standards grid */}
        <div className="qs-cards-grid">
          {qualityCards.map((card) => (
            <div className="qs-card" key={card.title}>
              <div className="qs-card-icon" aria-hidden="true">{card.icon}</div>
              <h4>{card.title}</h4>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="qs-divider" aria-hidden="true">
          <span>QUALITY STANDARDS</span>
        </div>

        {/* Bottom row */}
        <div className="qs-bottom-row">
          {/* Metrics panel */}
          <div className="qs-metrics-panel" ref={metricsRef}>
            <h3>By the numbers</h3>
            <div className="qs-metrics-grid">
              {metrics.map((m) => (
                <MetricItem key={m.id} metric={m} animate={metricsVisible} />
              ))}
            </div>
          </div>

          {/* Differentiators panel */}
          <div className="qs-apart-panel">
            <p className="qs-apart-eyebrow">What sets us apart</p>
            <div className="qs-badge-list">
              {differentiators.map((d) => (
                <div className="qs-badge" key={d.title}>
                  <div className="qs-badge-dot" aria-hidden="true" />
                  <div className="qs-badge-info">
                    <h5>{d.title}</h5>
                    <p>{d.desc}</p>
                  </div>
                  <div className="qs-badge-tag">{d.tag}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
