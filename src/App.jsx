import React, { useState, useEffect, useMemo } from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ResumeModal from './components/ResumeModal';

function App() {
  const [isLightMode, setIsLightMode] = useState(() => {
    return localStorage.getItem('theme') === 'light';
  });
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Dynamic cache-busting timestamp forces browser to fetch the new 1-page PDF
  const resumePath = useMemo(() => {
    const timestamp = Date.now();
    return window.location.protocol === 'file:' 
      ? `./public/Resume.pdf?t=${timestamp}` 
      : `./Resume.pdf?t=${timestamp}`;
  }, []);

  useEffect(() => {
    const body = document.body;
    if (isLightMode) {
      body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    } else {
      body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    }
  }, [isLightMode]);

  return (
    <div className="app-container">
      <BackgroundCanvas isLightMode={isLightMode} />
      <Navbar 
        isLightMode={isLightMode} 
        setIsLightMode={setIsLightMode} 
        onOpenResume={() => setIsResumeOpen(true)}
        resumePath={resumePath}
      />
      <main>
        <Hero 
          onOpenResume={() => setIsResumeOpen(true)} 
          resumePath={resumePath}
        />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
        resumePath={resumePath} 
      />
    </div>
  );
}

export default App;
