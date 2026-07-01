import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = `New Portfolio Message from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    window.location.href = `mailto:dhararp19@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <section id="contact" className="section container reveal" style={{ borderTop: '1px solid var(--surface-border)', marginTop: '4rem' }}>
      <div className="contact-two-col">
        <div className="contact-info">
          <h2 className="text-gradient" style={{ marginBottom: '1rem' }}>Let's Connect</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Have a data science project, an AI collaboration, or a new opportunity? I'd love to hear from you.
          </p>

          <div className="contact-method">
            <span>✉️</span> dhararp19@gmail.com
          </div>
          <div className="contact-method">
            <span>📍</span> Nadiad, Gujarat, India
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem' }}>
            <a href="https://github.com/Dhararp" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>GitHub</a>
            <a href="https://www.linkedin.com/in/dhara-prajapati-3089132b1/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>LinkedIn</a>
          </div>
        </div>

        <div className="contact-form glass-panel">
          <form id="contact-form" onSubmit={handleSubmit}>
            <input 
              type="text" 
              id="name" 
              placeholder="Your Name" 
              required 
              value={formData.name}
              onChange={handleChange}
            />
            <input 
              type="email" 
              id="email" 
              placeholder="Your Email" 
              required 
              value={formData.email}
              onChange={handleChange}
            />
            <textarea 
              id="message" 
              placeholder="Your Message" 
              required 
              value={formData.message}
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center' }}>Send Message</button>
          </form>
        </div>
      </div>

      <p style={{ color: 'rgba(255,255,255,0.3)', marginTop: '4rem', textAlign: 'center', fontSize: '0.9rem' }}>
        &copy; {new Date().getFullYear()} Dhara Prajapati. All rights reserved.
      </p>
    </section>
  );
};

export default Contact;
