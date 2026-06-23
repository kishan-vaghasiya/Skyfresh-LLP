import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES, getProductsByCategory } from '../data/productCatalog';
import { imgPath, resolveImage } from '../assets/index.js';
import './Products.css';

function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  // keep a stable reference to options so the effect doesn't need options
  // in its dependency array (prevents unnecessary re-subscribes and
  // satisfies the react-hooks/exhaustive-deps rule).
  const optionsRef = useRef(options);
  optionsRef.current = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold: 0.08, ...optionsRef.current });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function getCategoryMeta(categoryId) {
  return CATEGORIES.find((cat) => cat.id === categoryId) || { label: 'Product', emoji: '🌿' };
}

function ProductCard({ product, index }) {
  const navigate = useNavigate();
  const [ref, inView] = useInView();
  const heroSrc =
    resolveImage(product.heroImage)
    || resolveImage(product.variants?.[0]?.image)
    || resolveImage(imgPath[product.imageKey]);
  const category = getCategoryMeta(product.category);
  const variantCount = product.variants?.length || 0;

  const goToProduct = () => navigate(`/product/${product.id}`);

  return (
    <article
      ref={ref}
      className={`product-card ${inView ? 'pc-visible' : ''}`}
      style={{ transitionDelay: `${(index % 9) * 55}ms` }}
      onClick={goToProduct}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goToProduct(); } }}
      aria-label={`View ${product.title}`}
    >
      <div className="product-image-container">
        <img src={heroSrc} alt={product.title} className="product-image" loading="lazy" />
        <div className="product-image-overlay">
          <span className="pc-view-label">View Details →</span>
        </div>
        <span className="product-category-badge">
          <span className="product-category-emoji" aria-hidden="true">{category.emoji}</span>
          {category.label}
        </span>
      </div>

      <div className="product-info">
        <div className="product-details">
          <h3 className="product-name">{product.title}</h3>
          <p className="product-tagline">{product.tagline}</p>
        </div>

        <div className="product-card-footer">
          {variantCount > 0 && (
            <span className="product-variant-count">
              {variantCount} {variantCount === 1 ? 'form' : 'forms'} available
            </span>
          )}
          <button
            type="button"
            className="learn-more-btn"
            onClick={(e) => { e.stopPropagation(); goToProduct(); }}
          >
            Learn More
          </button>
        </div>
      </div>
    </article>
  );
}

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [animKey, setAnimKey] = useState(0);
  const [headerRef, headerInView] = useInView();
  const [showAll, setShowAll] = useState(false);

  const products = getProductsByCategory(activeCategory);
  const activeMeta = getCategoryMeta(activeCategory);

  const handleCategoryChange = (id) => {
    setActiveCategory(id);
    setAnimKey((k) => k + 1);
    setShowAll(false);
  };

  const visibleProducts = showAll ? products : products.slice(0, 6);

  return (
    <section id="products" className="products-section">
      <div className="products-section-bg" aria-hidden="true" />

      <div className="container products-container">
        <div ref={headerRef} className={`products-header ${headerInView ? 'products-header--visible' : ''}`}>
          <p className="products-eyebrow">Export Quality · Gujarat, India</p>
          <h2 className="products-title">Our Premium Products</h2>
          <p className="products-subtitle">
            Dehydrated vegetables, spices, pulses &amp; more — exported to 12+ countries worldwide
          </p>
        </div>

        <div className="products-toolbar">
          <div className="category-tabs-scroll">
            <div className="category-tabs" role="tablist" aria-label="Product categories">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === cat.id}
                  className={`cat-tab ${activeCategory === cat.id ? 'cat-tab--active' : ''}`}
                  onClick={() => handleCategoryChange(cat.id)}
                >
                  <span className="cat-emoji" aria-hidden="true">{cat.emoji}</span>
                  <span className="cat-label">{cat.label}</span>
                </button>
              ))}
            </div>
          </div>

          <p className="products-count" aria-live="polite">
            <span className="products-count-number">{visibleProducts.length}</span>
            {visibleProducts.length === 1 ? ' product' : ' products'}
            <span className="products-count-separator"> of </span>
            <span className="products-count-number-total">{products.length}</span>
            {activeCategory !== 'all' && (
              <span className="products-count-category"> in {activeMeta.label}</span>
            )}
          </p>
        </div>

        <div key={animKey} className="products-grid">
          {visibleProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {products.length > 6 && (
          <div className="products-toggle-wrap">
            <button
              type="button"
              className="products-toggle-btn"
              onClick={() => setShowAll((s) => !s)}
            >
              {showAll ? 'Hide products' : 'Show all products'}
            </button>
          </div>
        )}

        {products.length === 0 && (
          <div className="no-products">No products in this category yet.</div>
        )}
      </div>
    </section>
  );
};

export default Products;
