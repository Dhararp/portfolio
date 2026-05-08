import React from 'react';
import { ArrowRight, Github, Linkedin, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="container section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '10rem', flexWrap: 'wrap' }}>
      <div style={{ flex: '1 1 500px', paddingRight: '2rem', marginBottom: '3rem' }} className="animate-fade-in">
        <h2 style={{ fontSize: '1.25rem', color: 'var(--accent-secondary)', marginBottom: '1rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>
          Hello, I'm
        </h2>
        <h1 style={{ fontSize: '4.5rem', marginBottom: '1rem', lineHeight: 1.1 }}>
          Dhara <br/>
          <span className="text-gradient">Prajapati</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '600px' }}>
          Building intelligent and data-driven solutions for complex challenges. — from exploratory data analysis to robust machine learning pipelines. I design and engineer Python-based applications that combine advanced algorithms, clean architecture, and experiences that create meaningful insights.
        </p>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
          <a href="#projects" className="btn btn-primary">
            View My Work <ArrowRight size={20} />
          </a>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://github.com/Dhararp" target="_blank" rel="noreferrer" style={{ padding: '0.8rem', background: 'var(--surface-color)', borderRadius: '50%', border: '1px solid var(--surface-border)', display: 'flex' }}>
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/dhara-prajapati-3089132b1/" target="_blank" rel="noreferrer" style={{ padding: '0.8rem', background: 'var(--surface-color)', borderRadius: '50%', border: '1px solid var(--surface-border)', display: 'flex' }}>
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }} className="animate-fade-in delay-2">
        <div style={{ position: 'relative', width: '350px', height: '350px' }}>
          {/* Decorative glowing background */}
          <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '120%', height: '120%', background: 'radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)', opacity: 0.15, filter: 'blur(40px)', zIndex: 0, borderRadius: '50%' }}></div>
          
          <div style={{ width: '100%', height: '100%', borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', background: 'var(--surface-color)', border: '2px solid rgba(168, 85, 247, 0.4)', overflow: 'hidden', position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
            <span style={{ color: 'var(--text-secondary)' }}>[ Your Photo Here ]</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
