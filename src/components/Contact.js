import React, { useState } from 'react';
import './Contact.css';
import ScrollAnimation from './ScrollAnimation';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID  = 'service_oa48jg9';
const EMAILJS_TEMPLATE_ID = 'template_dfo762i';
const EMAILJS_PUBLIC_KEY  = 'sipUT_mY7AzjA7DVz';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ type: 'error', message: 'Please fill name, email and message.' });
      return false;
    }
    const emailRe = /\S+@\S+\.\S+/;
    if (!emailRe.test(form.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email.' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });
    if (!validate()) return;

    setLoading(true);

    const templateParams = {
      from_name:  form.name,
      from_email: form.email,
      phone:      form.phone || 'Not provided',
      subject:    form.subject || 'General Inquiry',
      message:    form.message,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      setStatus({
        type: 'success',
        message: '✅ Thanks! Your message has been received. We will get back to you shortly!',
      });
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus({
        type: 'error',
        message: '❌ Something went wrong. Please email us at export.skyfresh@gmail.com',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">

        <div className="section-header">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">We're here to assist with all your export needs</p>
        </div>

        <ScrollAnimation animation="fade-in-up">
          <div className="contact-wrapper">

            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-grid">

                  <div className="form-field">
                    <label htmlFor="name">Name *</label>
                    <input
                      id="name" name="name"
                      value={form.name} onChange={handleChange}
                      placeholder="Your full name"
                      disabled={loading}
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="email">Email *</label>
                    <input
                      id="email" name="email" type="email"
                      value={form.email} onChange={handleChange}
                      placeholder="you@company.com"
                      disabled={loading}
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="phone">Phone</label>
                    <input
                      id="phone" name="phone"
                      value={form.phone} onChange={handleChange}
                      placeholder="+91 1234567890"
                      disabled={loading}
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="subject">Subject</label>
                    <select
                      id="subject" name="subject"
                      value={form.subject} onChange={handleChange}
                      disabled={loading}
                    >
                      <option value="">Choose a subject</option>
                      <option>General Inquiry</option>
                      <option>Export / Bulk Orders</option>
                    </select>
                  </div>
                </div>

                <div className="form-field full">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message" name="message"
                    value={form.message} onChange={handleChange}
                    rows="5"
                    placeholder="Write your message here"
                    disabled={loading}
                  />
                </div>

                {status.message && (
                  <div className={`form-status ${status.type}`}>
                    {status.message}
                  </div>
                )}

                <div className="form-actions">
                  <button type="submit" className="btn-primary" disabled={loading}>
                    {loading ? '⏳ Sending...' : 'Send Message'}
                  </button>
                  <a className="btn-ghost" href="mailto:export.skyfresh@gmail.com">
                    Email Us
                  </a>
                </div>
              </form>
            </div>

            <aside className="contact-cards">
              <div className="card">
                <div className="card-icon">👥</div>
                <div className="card-body">
                  <h4>Contact Persons</h4>
                  <a href="tel:+917096880152">+91 70968 80152</a>
                  <a href="tel:+917041900308">+91 70419 00308</a>
                </div>
              </div>
              <div className="card">
                <div className="card-icon">📧</div>
                <div className="card-body">
                  <h4>Email</h4>
                  <a href="mailto:export.skyfresh@gmail.com">export.skyfresh@gmail.com</a>
                </div>
              </div>
              <div className="card">
                <div className="card-icon">📍</div>
                <div className="card-body">
                  <h4>Address</h4>
                  <p>Ahmedabad, Gujarat, India</p>
                </div>
              </div>
              <div className="card">
                <div className="card-icon">🌍</div>
                <div className="card-body">
                  <h4>Global Reach</h4>
                  <p>12+ Countries • Worldwide Shipping</p>
                </div>
              </div>
            </aside>

          </div>
        </ScrollAnimation>

      </div>
    </section>
  );
};

export default Contact;