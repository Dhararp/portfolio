import React, { useState, useEffect } from 'react';
import { Code2 } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 50,
      padding: '1.5rem 2rem', transition: 'all 0.3s ease',
      background: scrolled ? 'var(--glass-bg)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--surface-border)' : 'none',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'Outfit', fontWeight: 700, fontSize: '1.5rem' }}>
        <Code2 color="var(--accent-primary)" />
        <span>Dhara<span className="text-gradient">.</span></span>
      </div>
      <div style={{ display: 'flex', gap: '2rem', fontWeight: 500 }}>
        <a href="#about" style={{ opacity: 0.8 }} onMouseOver={e => e.target.style.opacity = 1} onMouseOut={e => e.target.style.opacity = 0.8}>About</a>
        <a href="#projects" style={{ opacity: 0.8 }} onMouseOver={e => e.target.style.opacity = 1} onMouseOut={e => e.target.style.opacity = 0.8}>Projects</a>
        <a href="#contact" style={{ opacity: 0.8 }} onMouseOver={e => e.target.style.opacity = 1} onMouseOut={e => e.target.style.opacity = 0.8}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
