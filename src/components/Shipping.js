import React, { useState, useEffect, useRef } from 'react';
import './Shipping.css';

const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
};

const features = [
  {
    icon: '🌿',
    iconBg: 'fi-green',
    title: 'Farm-to-Factory Freshness',
    desc: 'Sourced locally from Gujarat farms — processed to retain natural aroma and nutrients.',
  },
  {
    icon: '✔️',
    iconBg: 'fi-amber',
    title: 'Export-Grade Quality',
    desc: 'Strict quality checks, A-grade commercial packing to meet every buyer specification.',
  },
  {
    icon: '📦',
    iconBg: 'fi-teal',
    title: 'Flexible Packaging',
    desc: 'From 1 kg retail jars to 20–50 kg bulk packs — custom options for processors & brands.',
  },
];

const products = [
  'Dehydrated Red Onion',
  'Dehydrated White Onion',
  'Dehydrated Garlic',
  'Turmeric Powder',
  'Chili Powder',
  'Kesar Mango Pulp',
  'Export Peanuts',
  'Pulse Ingredients',
];

const destinations = [
  { flag: '🇮🇩', name: 'Indonesia' },
  { flag: '🇲🇾', name: 'Malaysia' },
  { flag: '🇵🇭', name: 'Philippines' },
  { flag: '🇶🇦', name: 'Qatar' },
  { flag: '🇦🇪', name: 'Dubai' },
  { flag: '🇸🇬', name: 'Singapore' },
  { flag: '🇱🇰', name: 'Sri Lanka' },
  { flag: '🇯🇵', name: 'Japan' },
  { flag: '🇻🇳', name: 'Vietnam' },
  { flag: '🇹🇭', name: 'Thailand' },
  { flag: '🇷🇺', name: 'Russia' },
  { flag: '🇨🇭', name: 'Switzerland' },
];

const Shipping = () => {
  const [headerRef, headerIn] = useInView();
  const [featRef, featIn] = useInView();
  const [shipRef, shipIn] = useInView();
  const [flagRef, flagIn] = useInView();
  const [prodRef, prodIn] = useInView();
  return (
    <section id="global-reach" className="shipping-section">
      <div className="container">

        <div ref={headerRef} className={`s-header ${headerIn ? 'anim-up' : 'pre-anim'}`}>
          <span className="s-eyebrow">Indian Origin · Export Ready</span>
          <h2 className="s-title">Premium Products &amp;<br />Quality Commitment</h2>
          <p className="s-subtitle">
            Dehydrated vegetables, spices &amp; processed foods — farm‑fresh,
            hygienic and export‑ready worldwide.
          </p>
        </div>

        <div ref={featRef} className="s-features">
          {features.map((f, i) => (
            <div
              key={i}
              className={`s-fcard ${featIn ? 'anim-up' : 'pre-anim'}`}
              style={{ animationDelay: `${0.1 + i * 0.12}s` }}
            >
              <div className={`s-ficon ${f.iconBg}`}>{f.icon}</div>
              <div className="s-ftext">
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Ship Visual ── */}
        <div ref={shipRef} className={`s-visual ${shipIn ? 'anim-up' : 'pre-anim'}`} style={{ animationDelay: '0.1s' }}>
          <svg
            className="ship-svg"
            viewBox="0 0 520 200"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Animated cargo ship graphic"
            role="img"
          >
            <defs>
              <linearGradient id="waveG" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7dbb63" />
                <stop offset="100%" stopColor="#9FE1CB" />
              </linearGradient>
              <linearGradient id="hullG" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#34495e" />
                <stop offset="100%" stopColor="#2c3e50" />
              </linearGradient>
            </defs>

            {/* Waves */}
            <path d="M0,155 Q65,142 130,155 Q195,168 260,155 Q325,142 390,155 Q455,168 520,155 L520,200 L0,200 Z" fill="url(#waveG)" opacity="0.55">
              <animateTransform attributeName="transform" type="translate" values="0,0;15,0;0,0" dur="3s" repeatCount="indefinite" />
            </path>
            <path d="M0,165 Q65,152 130,165 Q195,178 260,165 Q325,152 390,165 Q455,178 520,165 L520,200 L0,200 Z" fill="url(#waveG)" opacity="0.35">
              <animateTransform attributeName="transform" type="translate" values="15,0;0,0;15,0" dur="2.5s" repeatCount="indefinite" />
            </path>

            {/* Hull */}
            <rect x="60" y="148" width="400" height="42" rx="8" fill="url(#hullG)" />
            <rect x="80" y="140" width="360" height="14" rx="5" fill="#4a5e6e" />

            {/* Mast */}
            <line x1="255" y1="140" x2="255" y2="60" stroke="#888" strokeWidth="2.5" />
            <rect x="225" y="55" width="60" height="10" rx="3" fill="#f4c430" opacity="0.8" />

            {/* Container 1 – yellow */}
            <rect x="100" y="80" width="85" height="65" rx="5" fill="#f4c430">
              <animateTransform attributeName="transform" type="translate" values="0,0;0,-6;0,0" dur="3s" repeatCount="indefinite" />
            </rect>
            <rect x="110" y="90" width="65" height="45" rx="3" fill="rgba(255,255,255,0.18)" />
            <text x="142" y="136" textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">SkyFresh</text>

            {/* Container 2 – green */}
            <rect x="200" y="72" width="85" height="73" rx="5" fill="#2d6a4f">
              <animateTransform attributeName="transform" type="translate" values="0,-4;0,3;0,-4" dur="3.3s" repeatCount="indefinite" />
            </rect>
            <rect x="210" y="82" width="65" height="53" rx="3" fill="rgba(255,255,255,0.15)" />
            <text x="242" y="136" textAnchor="middle" fontSize="9" fill="#9FE1CB" fontWeight="bold">FOOD</text>

            {/* Container 3 – teal */}
            <rect x="300" y="85" width="85" height="60" rx="5" fill="#0F6E56">
              <animateTransform attributeName="transform" type="translate" values="0,-2;0,5;0,-2" dur="2.8s" repeatCount="indefinite" />
            </rect>
            <rect x="310" y="95" width="65" height="40" rx="3" fill="rgba(255,255,255,0.15)" />
            <text x="342" y="136" textAnchor="middle" fontSize="9" fill="#9FE1CB" fontWeight="bold">EXPORT</text>
          </svg>

          {/* Stats row */}
          <div className="s-stats">
            <div className="s-stat">
              <span className="sv">12+</span>
              <span className="sl">Countries</span>
            </div>
            <div className="s-stat">
              <span className="sv">A‑Grade</span>
              <span className="sl">Quality</span>
            </div>
            <div className="s-stat">
              <span className="sv">50 kg</span>
              <span className="sl">Max Bulk Pack</span>
            </div>
          </div>
        </div>

        {/* ── Product Range ── */}
        <div ref={prodRef} className={`s-products ${prodIn ? 'anim-up' : 'pre-anim'}`} style={{ animationDelay: '0.1s' }}>
          <p className="s-prod-label">Our product range</p>
          <div className="s-prod-tags">
            {products.map((p, i) => (
              <span key={i} className="s-tag">✔ {p}</span>
            ))}
          </div>
        </div>

        {/* ── Flags ── */}
        <div ref={flagRef} className={`s-flags ${flagIn ? 'anim-up' : 'pre-anim'}`} style={{ animationDelay: '0.05s' }}>
          <h3 className="s-flags-title">We export to</h3>
          <div className="s-flags-grid">
            {destinations.map((d, i) => (
              <div
                key={i}
                className="s-flag-card"
                style={{ animationDelay: `${0.05 + i * 0.04}s` }}
              >
                <span className="s-flag-emoji">{d.flag}</span>
                <span className="s-flag-name">{d.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Shipping;
