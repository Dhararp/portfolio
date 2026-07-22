import React from 'react';
import { X, Download, ExternalLink } from 'lucide-react';

const ResumeModal = ({ isOpen, onClose, resumePath }) => {
  if (!isOpen) return null;

  const activePath = resumePath || (
    window.location.protocol === 'file:' 
      ? `./public/Resume.pdf?t=${Date.now()}` 
      : `./Resume.pdf?t=${Date.now()}`
  );

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(8px)',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem'
      }}
      onClick={onClose}
    >
      <div 
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '900px',
          height: '85vh',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid var(--surface-border)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
          background: 'var(--surface-color, #1e1e24)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div style={{
          padding: '1rem 1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid var(--surface-border)',
          background: 'rgba(255, 255, 255, 0.03)'
        }}>
          <h3 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--text-primary)' }}>
            Dhara Prajapati — Resume (1-Page PDF)
          </h3>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <a 
              href={activePath} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary" 
              style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <ExternalLink size={15} /> Open Fullpage
            </a>
            <a 
              href={activePath} 
              target="_blank"
              rel="noopener noreferrer"
              download="Dhara_Prajapati_Resume.pdf" 
              className="btn btn-primary" 
              style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <Download size={15} /> Download PDF
            </a>
            <button 
              onClick={onClose}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                padding: '0.4rem',
                display: 'flex',
                alignItems: 'center',
                justify.content: 'center',
                borderRadius: '50%',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              <X size={22} />
            </button>
          </div>
        </div>

        {/* Modal Content - PDF Frame */}
        <div style={{ flex: 1, width: '100%', background: '#525659' }}>
          <iframe 
            src={activePath} 
            title="Dhara Prajapati Resume" 
            style={{ width: '100%', height: '100%', border: 'none' }}
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
