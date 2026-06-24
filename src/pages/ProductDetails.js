import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getProductById } from '../data/productCatalog';
import './ProductDetails.css';

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = getProductById(productId);
  const [activeVariant, setActiveVariant] = useState(0);
  const [heroRef, heroInView] = useInView(0.05);
  const [gridRef, gridInView] = useInView(0.08);

  useEffect(() => { window.scrollTo(0, 0); setActiveVariant(0); }, [productId]);

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="pd-page">
          <div className="pd-not-found">
            <span className="pd-not-found-icon">📦</span>
            <h2>Product Not Found</h2>
            <p>The product you are looking for is not available.</p>
            <button type="button" onClick={() => navigate('/')} className="pd-btn pd-btn-primary">Back to Home</button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const variant = product.variants[activeVariant];

  return (
    <>
      <Navbar />

      <div className="pd-page">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section ref={heroRef} className={`pd-hero ${heroInView ? 'pd-hero--visible' : ''}`}>
          <div className="pd-hero-bg" aria-hidden="true" />
          <div className="pd-hero-inner">

            <button type="button" className="pd-back" onClick={() => { navigate('/'); setTimeout(() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>
              ← Back to Products
            </button>

            <div className="pd-hero-layout">
              {/* Text */}
              <div className="pd-hero-text">
                <p className="pd-hero-eyebrow">Product Range · Gujarat, India</p>
                <h1 className="pd-hero-title">{product.title}</h1>
                <p className="pd-hero-tagline">{product.tagline}</p>
                <div className="pd-hero-chips">
                  <span className="pd-chip">{product.variants.length} variant{product.variants.length > 1 ? 's' : ''}</span>
                  <span className="pd-chip">Export Grade</span>
                  <span className="pd-chip">A-Quality</span>
                </div>

                {/* Variant selector */}
                {product.variants.length > 1 && (
                  <div className="pd-variant-tabs">
                    {product.variants.map((v, i) => (
                      <button
                        key={v.id}
                        className={`pd-vtab ${i === activeVariant ? 'pd-vtab--active' : ''}`}
                        onClick={() => setActiveVariant(i)}
                      >
                        {v.type}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Hero Image */}
              <div className="pd-hero-visual">
                <div className="pd-hero-ring">
                  <img
                    key={variant.image}
                    src={variant.image || product.heroImage}
                    alt={variant.name}
                    className="pd-hero-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Active Variant Specs ──────────────────────────────────────── */}
        <section className="pd-spotlight">
          <div className="pd-spotlight-inner">
            <div className="pd-spotlight-card">
              <div className="pd-spotlight-img-wrap">
                <img src={variant.image || product.heroImage} alt={variant.name} className="pd-spotlight-img" />
              </div>
              <div className="pd-spotlight-info">
                <span className="pd-spotlight-badge">{variant.type}</span>
                <h2 className="pd-spotlight-name">{variant.name}</h2>
                <div className="pd-specs-list">
                  {variant.specs.map((s) => (
                    <div key={s.label} className="pd-spec-row">
                      <span className="pd-spec-label">{s.label}</span>
                      <span className="pd-spec-value">{s.value}</span>
                    </div>
                  ))}
                </div>
                <div className="pd-grade-pill">
                  <span className="pd-grade-dot" />
                  Export Grade · A Quality
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── All Variants Grid ─────────────────────────────────────────── */}
        {product.variants.length > 1 && (
          <section ref={gridRef} className={`pd-variants ${gridInView ? 'pd-variants--visible' : ''}`}>
            <div className="pd-variants-inner">
              <header className="pd-section-header">
                <h2>All Available Forms</h2>
                <p>Each cut and mesh size is packed for bulk export — click to view specifications.</p>
              </header>

              <div className="pd-grid">
                {product.variants.map((v, index) => (
                  <article
                    key={v.id}
                    className={`pd-card ${index === activeVariant ? 'pd-card--active' : ''}`}
                    style={{ animationDelay: `${index * 0.07}s` }}
                    onClick={() => setActiveVariant(index)}
                  >
                    <div className="pd-card-accent" aria-hidden="true" />
                    <header className="pd-card-header">
                      <span className="pd-card-index">{String(index + 1).padStart(2, '0')}</span>
                      <span className="pd-card-badge">{v.type}</span>
                    </header>
                    <div className="pd-card-media">
                      <div className="pd-card-media-bg" aria-hidden="true" />
                      <div className="pd-card-media-frame">
                        <img src={v.image || product.heroImage} alt={v.name} className="pd-card-image" loading="lazy" />
                      </div>
                    </div>
                    <div className="pd-card-content">
                      <h3 className="pd-card-title">{v.name}</h3>
                      <div className="pd-card-divider" aria-hidden="true" />
                      <div className="pd-specs-box">
                        {v.specs.map((spec) => (
                          <div key={spec.label} className="pd-spec-item">
                            <span className="pd-spec-icon" aria-hidden="true" />
                            <div className="pd-spec-text">
                              <span className="pd-spec-label">{spec.label}</span>
                              <span className="pd-spec-value">{spec.value}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <footer className="pd-card-footer">
                        <span className="pd-grade-pill"><span className="pd-grade-dot" aria-hidden="true" />Export Grade · A Quality</span>
                      </footer>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <div className="pd-cta">
          <p>Need custom mesh, packing, or bulk pricing?</p>
          <button type="button" className="pd-btn pd-btn-primary"
            onClick={() => { navigate('/'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 150); }}>
            Contact Us for Quote
          </button>
        </div>

      </div>

      <Footer />
    </>
  );
};

export default ProductDetails;
