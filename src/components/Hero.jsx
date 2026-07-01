import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  
  useEffect(() => {
    const titles = ["Full-Stack AI Engineer", "Data Scientist", "Python Developer"];
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    function typeEffect() {
      const currentTitle = titles[titleIndex];

      if (isDeleting) {
        setTypedText(currentTitle.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setTypedText(currentTitle.substring(0, charIndex + 1));
        charIndex++;
      }

      let typeSpeed = isDeleting ? 40 : 80;

      if (!isDeleting && charIndex === currentTitle.length) {
        typeSpeed = 2000; // Pause at end
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        typeSpeed = 500; // Pause before new word
      }

      timeoutId = setTimeout(typeEffect, typeSpeed);
    }

    timeoutId = setTimeout(typeEffect, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  const resumePath = window.location.protocol === 'file:' ? './public/resume.pdf' : './resume.pdf';

  return (
    <section className="hero container reveal hero-asymmetrical" id="hero">
      <div className="hero-left">
        <h1 className="animate-fade-in" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', marginBottom: '0.5rem' }}>
          Hi, I'm <span className="text-gradient">Dhara Prajapati</span><br />
          <span 
            style={{ 
              fontSize: '0.8em', 
              color: 'var(--text-primary)', 
              borderRight: '2px solid var(--accent-primary)', 
              paddingRight: '5px' 
            }}
          >
            {typedText}
          </span>
        </h1>

        <div className="hero-stats-row animate-fade-in delay-1" style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--surface-border)', padding: '0.5rem 1rem', borderRadius: '999px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontWeight: 700, color: 'var(--accent-secondary)' }}>4+</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Projects Completed</span>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--surface-border)', padding: '0.5rem 1rem', borderRadius: '999px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontWeight: 700, color: 'var(--accent-secondary)' }}>B.Tech</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Computer Eng.</span>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <p className="animate-fade-in delay-1 mb-4" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
          Building intelligent and data-driven solutions for complex challenges. — from exploratory data analysis to robust machine learning pipelines. I design and engineer Python-based applications that combine advanced algorithms, clean architecture, and experiences that create meaningful insights.
        </p>
        <div className="hero-btns animate-fade-in delay-2" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href={resumePath} target="_blank" rel="noreferrer" download className="btn btn-secondary">Download Resume</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
