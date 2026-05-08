import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="container section" style={{ paddingBottom: '2rem' }}>
      <div className="glass-panel" style={{ textAlign: 'center', padding: '4rem 2rem', background: 'linear-gradient(180deg, var(--surface-color) 0%, rgba(99, 102, 241, 0.05) 100%)' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Let's <span className="text-gradient">Connect</span></h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
          Have a data science project, an AI collaboration, or a new opportunity? I'd love to hear from you.
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}>
            <Mail color="var(--accent-secondary)" />
            <span>dhararp19@gmail.com</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}>
            <MapPin color="var(--accent-tertiary)" />
            <span>Available for remote work</span>
          </div>
        </div>
        
        <div style={{ marginTop: '3rem' }}>
          <a href="mailto:dhararp19@gmail.com" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
            Get In Touch
          </a>
        </div>
      </div>
      
      <footer style={{ textAlign: 'center', marginTop: '4rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        <p>&copy; {new Date().getFullYear()} Dhara Rajeshbhai Prajapati. Designed with React & Vite.</p>
      </footer>
    </section>
  );
};

export default Contact;
