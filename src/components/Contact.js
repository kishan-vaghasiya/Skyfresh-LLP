import React from 'react';
import './Contact.css';
import ScrollAnimation from './ScrollAnimation';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">

        <div className="section-header">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">We’re here to assist with all your export needs</p>
        </div>

        <ScrollAnimation animation="fade-in-up">
          <div className="contact-row">

            <div className="contact-card-premium">
              <div className="card-icon-badge">👥</div>
              <h3>Contact Person</h3>
              <p>Kishan: +91 70968 80152</p>
              <p>Harsh: +91 70419 00308</p>
            </div>

            <div className="contact-card-premium">
              <div className="card-icon-badge">📧</div>
              <h3>Email</h3>
              <p>skyfreshdehydration@gmail.com</p>
            </div>

            <div className="contact-card-premium">
              <div className="card-icon-badge">📍</div>
              <h3>Address</h3>
              <p>Ahmedabad</p>
              <p>Gujarat, India</p>
            </div>

            <div className="contact-card-premium">
              <div className="card-icon-badge">🌍</div>
              <h3>Global Reach</h3>
              <p>12+ Countries</p>
              <p>Worldwide Shipping</p>
            </div>

          </div>
        </ScrollAnimation>

      </div>
    </section>
  );
};

export default Contact;
