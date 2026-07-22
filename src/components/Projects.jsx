/import React from 'react';

const Projects = () => {
  const projectList = [
    {
      title: 'AI Pipeline Studio App',
      description: 'A platform to design and execute robust AI pipelines, supporting multi-LLM providers (OpenAI, Groq, Ollama) and featuring AST-based code validation for enhanced security.',
      tags: ['Python', 'AST Validation', 'GenAI'],
      link: 'https://github.com/Dhararp'
    },
    {
      title: 'Movie Recommendation System',
      description: 'A machine learning-based web application built with Flask and Python that suggests similar movies based on user selections. Features include MySQL integration for tracking search history and dynamic Matplotlib regression graphs to visualize search trends, combining recommendation logic with powerful data visualization.',
      tags: ['Machine Learning', 'Flask', 'Data Analysis', 'Matplotlib'],
      link: 'https://github.com/Dhararp'
    },
    {
      title: 'Customer Segmentation Analysis',
      description: 'An advanced machine learning-based customer segmentation system designed to help businesses uncover actionable insights. It analyzes complex customer behavior datasets using K-Means clustering algorithms and presents findings through an interactive Streamlit dashboard.',
      tags: ['Pandas', 'Scikit-Learn', 'Streamlit', 'Data Visualization'],
      link: 'https://github.com/Dhararp'
    },
    {
      title: 'SQL Database Agent App',
      description: 'An intelligent copilot that converses with SQL databases, translating natural language to queries and executing them seamlessly.',
      tags: ['Python', 'SQL', 'LLMs'],
      link: 'https://github.com/Dhararp'
    },
    {
      title: 'Pandas Data Analyst App',
      description: 'An exploratory copilot app allowing users to interact with pandas dataframes using natural language, providing deeper data insights.',
      tags: ['Pandas', 'Streamlit', 'Data Science'],
      link: 'https://github.com/Dhararp'
    },
    {
      title: 'Smoke Signals: Texas Analysis',
      description: 'A comprehensive, data-driven analysis of active tobacco and e-cigarette retailers across Texas. Built using robust Python data-handling libraries to extract, clean, and visualize high-volume geographic data. The project identifies key retail trends, spatial distributions, and permit issuance velocities.',
      tags: ['Data analysis', 'Matplotlib', 'Seaborn', 'Pandas'],
      link: 'https://github.com/Dhararp'
    }
  ];

  return (
    <section id="projects" className="section container reveal">
      <h2 className="text-gradient" style={{ marginBottom: '3rem' }}>Featured Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => {
          const projectNum = String(index + 1).padStart(2, '0');
          return (
            <div key={index} className="glass-panel project-card">
              <div className="project-header">
                <span className="project-number">{projectNum}</span>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">↗</a>
              </div>
              <h3>{project.title}</h3>
              <p style={{ flexGrow: 1 }}>{project.description}</p>
              <div className="skills-grid" style={{ marginTop: '1rem', marginBottom: 0 }}>
                {project.tags.map((tag, i) => (
                  <span key={i} className="skill-tag" style={{ fontSize: '0.8rem', padding: '0.3rem 0.8rem' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
