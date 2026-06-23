import React, { useState, useEffect, useCallback } from 'react';
import './Testimonials.css';
import ScrollAnimation from './ScrollAnimation';

const Testimonials = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "Global Food Distributors, USA",
      country: "🇺🇸 United States",
      product: "Onion Powder",
      rating: 5,
      text: "SkyFresh Dehydration has been our trusted partner for over 5 years. Their onion powder quality is consistently excellent, and their delivery is always on time. Highly recommended!",
      image: "👩‍💼"
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "Asian Spice Co., Singapore",
      country: "🇸🇬 Singapore",
      product: "Garlic Powder",
      rating: 5,
      text: "The garlic powder from SkyFresh is of premium quality. We've been importing from them for 3 years and never had any quality issues. Great customer service too!",
      image: "👨‍💼"
    },
    {
      id: 3,
      name: "Emma Thompson",
      company: "European Food Imports, UK",
      country: "🇬🇧 United Kingdom",
      product: "Premium Chips",
      rating: 5,
      text: "Outstanding quality and service! Their premium chips are a hit with our customers. The packaging is excellent and the taste is consistently great. Will continue to work with them.",
      image: "👩‍💼"
    },
    {
      id: 4,
      name: "Ahmed Hassan",
      company: "Middle East Food Trading, UAE",
      country: "🇦🇪 UAE",
      product: "All Products",
      rating: 5,
      text: "SkyFresh Dehydration is our go-to supplier for all food products. Their quality standards are unmatched, and they understand the Middle Eastern market requirements perfectly.",
      image: "👨‍💼"
    },
    {
      id: 5,
      name: "Lisa Rodriguez",
      company: "Latin American Foods, Mexico",
      country: "🇲🇽 Mexico",
      product: "Onion & Garlic Powder",
      rating: 5,
      text: "Excellent partnership! Their products meet all our quality requirements and their team is very professional. The export documentation process is smooth and efficient.",
      image: "👩‍💼"
    },
    {
      id: 6,
      name: "David Kim",
      company: "Pacific Food Solutions, Australia",
      country: "🇦🇺 Australia",
      product: "Premium Chips",
      rating: 5,
      text: "We've been working with SkyFresh for 4 years now. Their premium chips are popular in the Australian market. Great quality, competitive pricing, and reliable delivery.",
      image: "👨‍💼"
    }
  ];

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className={`section-header ${isLoaded ? 'fade-in-up' : ''}`}>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Trusted by 1000+ clients across 50+ countries worldwide</p>
        </div>

        <div className="testimonials-content">
          <ScrollAnimation animation="fade-in-up" delay={0.1}>
            <div className="testimonial-carousel">
              <div className="testimonial-card">
                <div className="testimonial-header">
                  <div className="client-info">
                    <div className="client-avatar">{testimonials[currentTestimonial].image}</div>
                    <div className="client-details">
                      <h4>{testimonials[currentTestimonial].name}</h4>
                      <p className="client-company">{testimonials[currentTestimonial].company}</p>
                      <p className="client-country">{testimonials[currentTestimonial].country}</p>
                    </div>
                  </div>
                  <div className="product-badge">
                    <span className="product-icon">📦</span>
                    <span>{testimonials[currentTestimonial].product}</span>
                  </div>
                </div>
                
                <div className="testimonial-rating">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <span key={i} className="star">⭐</span>
                  ))}
                </div>
                
                <blockquote className="testimonial-text">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
              </div>
              
              <div className="carousel-controls">
                <button className="carousel-btn prev" onClick={prevTestimonial}>
                  <span>‹</span>
                </button>
                <div className="carousel-dots">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                      onClick={() => setCurrentTestimonial(index)}
                    />
                  ))}
                </div>
                <button className="carousel-btn next" onClick={nextTestimonial}>
                  <span>›</span>
                </button>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-in-up" delay={0.2}>
            <div className="testimonials-stats">
              <div className="stat-item">
                <div className="stat-icon">⭐</div>
                <div className="stat-number">4.9/5</div>
                <div className="stat-label">Average Rating</div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">👥</div>
                <div className="stat-number">1000+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">🌍</div>
                <div className="stat-number">50+</div>
                <div className="stat-label">Countries</div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">🔄</div>
                <div className="stat-number">95%</div>
                <div className="stat-label">Repeat Orders</div>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation animation="fade-in-up" delay={0.3}>
          <div className="client-logos">
            <h3>Trusted by Leading Companies</h3>
            <div className="logos-grid">
              <div className="logo-item">
                <div className="logo-placeholder">Global Food Distributors</div>
                <span>USA</span>
              </div>
              <div className="logo-item">
                <div className="logo-placeholder">Asian Spice Co.</div>
                <span>Singapore</span>
              </div>
              <div className="logo-item">
                <div className="logo-placeholder">European Food Imports</div>
                <span>UK</span>
              </div>
              <div className="logo-item">
                <div className="logo-placeholder">Middle East Food Trading</div>
                <span>UAE</span>
              </div>
              <div className="logo-item">
                <div className="logo-placeholder">Latin American Foods</div>
                <span>Mexico</span>
              </div>
              <div className="logo-item">
                <div className="logo-placeholder">Pacific Food Solutions</div>
                <span>Australia</span>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Testimonials;
