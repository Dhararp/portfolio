import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming & Database',
      skills: ['Python', 'SQL', 'C++', 'C', 'JAVA', 'PHP', 'DATA STRUCTURE', 'DBMS', 'JAVA SCRIPT', 'AI & MACHINE LEARNING', 'HTML 5', 'CSS']
    },
    {
      title: 'Data Science & ML',
      skills: ['Pandas', 'NumPy', 'Scikit-Learn', 'LLMs (OpenAI, Groq)']
    },
    {
      title: 'Tools & Frameworks',
      skills: ['Flask', 'Streamlit', 'Git / GitHub', 'Data Visualization']
    }
  ];

  return (
    <section id="skills" className="section container reveal">
      <h2 className="text-gradient">Technical Expertise</h2>
      <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', maxWidth: '600px', marginBottom: '2rem' }}>
        Core tools and technologies I use to build End-to-End AI and Data Science solutions.
      </p>

      <div className="skills-category-grid mt-4">
        {skillCategories.map((category, index) => (
          <div key={index} className="glass-panel">
            <h3>{category.title}</h3>
            <div className="skills-grid" style={{ marginTop: '1rem' }}>
              {category.skills.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
