import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { CONTACT_EMAIL, profile } from '../data/portfolioData';

const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch(FORMSUBMIT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio inquiry from ${form.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
        return;
      }

      setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <SectionHeading
          label="Contact"
          title="Let's work together"
          description="Have a project in mind or want to connect? Send a message — I'll get back to you."
        />

        <div className="contact__grid">
          <div className="contact__info card">
            <h3>Get in touch</h3>
            <p>
              I&apos;m available for freelance work, full-time roles, and collaboration on
              interesting web projects.
            </p>

            <div className="contact__channels">
              <a href={`mailto:${profile.email}`} className="contact__channel">
                <i className="fa-solid fa-envelope" aria-hidden="true" />
                <div>
                  <strong>Email</strong>
                  <span>{profile.email}</span>
                </div>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__channel"
              >
                <i className="fa-brands fa-linkedin" aria-hidden="true" />
                <div>
                  <strong>LinkedIn</strong>
                  <span>Connect professionally</span>
                </div>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__channel"
              >
                <i className="fa-brands fa-github" aria-hidden="true" />
                <div>
                  <strong>GitHub</strong>
                  <span>View my code</span>
                </div>
              </a>
              <div className="contact__channel">
                <i className="fa-solid fa-location-dot" aria-hidden="true" />
                <div>
                  <strong>Location</strong>
                  <span>{profile.location}</span>
                </div>
              </div>
            </div>
          </div>

          <form className="contact__form card" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                disabled={status === 'sending'}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                disabled={status === 'sending'}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={handleChange}
                disabled={status === 'sending'}
              />
            </div>
            <button
              type="submit"
              className="btn btn--primary btn--full"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && (
              <p className="form-success">
                Message sent successfully! I&apos;ll reply to your email soon.
              </p>
            )}
            {status === 'error' && (
              <p className="form-error">
                Something went wrong. Please try again or email me directly at{' '}
                <a href={`mailto:${profile.email}`}>{profile.email}</a>.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
