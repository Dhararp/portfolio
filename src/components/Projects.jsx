import React from 'react';
import { Github } from 'lucide-react';

const Projects = () => {
  const projectList = [
    {
      title: 'AI Pipeline Studio App',
      description: 'A platform to design and execute robust AI pipelines, supporting multi-LLM providers (OpenAI, Groq, Ollama) and featuring AST-based code validation for enhanced security.',
      tags: ['Python', 'AST Validation', 'GenAI']
    },
    {
      title: 'Customer Segmentation Analysis',
      description: 'A comprehensive data analysis script and web interface generating robust customer segments from complex datasets to drive business decisions.',
      tags: ['Pandas', 'Scikit-Learn', 'Data Analysis']
    },
    {
      title: 'SQL Database Agent App',
      description: 'An intelligent copilot that converses with SQL databases, translating natural language to queries and executing them seamlessly.',
      tags: ['Python', 'SQL', 'LLMs']
    },
    {
      title: 'Pandas Data Analyst App',
      description: 'An exploratory copilot app allowing users to interact with pandas dataframes using natural language, providing deeper data insights.',
      tags: ['Pandas', 'Streamlit', 'Data Science']
    }
  ];

  return (
    <section id="projects" className="container section">
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Featured <span className="text-gradient">Projects</span></h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px' }}>
          A showcase of my recent work in Data Science, AI applications, and Python-driven analytical tools.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {projectList.map((project, index) => (
          <div key={index} className="glass-panel" style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{project.title}</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1 }}>{project.description}</p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {project.tags.map((tag, i) => (
                <span key={i} style={{ fontSize: '0.85rem', padding: '0.3rem 0.8rem', background: 'rgba(99, 102, 241, 0.1)', color: 'var(--accent-primary)', borderRadius: '999px', border: '1px solid rgba(99, 102, 241, 0.2)' }}>
                  {tag}
                </span>
              ))}
            </div>
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                <Github size={16} /> Source Code
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
