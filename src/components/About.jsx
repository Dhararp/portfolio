import React from 'react';
import { Database, BrainCircuit, TerminalSquare } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: <TerminalSquare color="var(--accent-primary)" size={32}/>, title: 'Python Programming', desc: 'Proficient in developing scripts, building AI data science pipelines, and intelligent applications.' },
    { icon: <Database color="var(--accent-secondary)" size={32}/>, title: 'Data Analysis', desc: 'Experienced with exploratory data analysis, pandas frameworks, and generating actionable customer segments.' },
    { icon: <BrainCircuit color="var(--accent-tertiary)" size={32}/>, title: 'Machine Learning', desc: 'Familiar with AI pipelines, implementing AST-based code validation, and connecting multi-LLM providers.' }
  ];

  return (
    <section id="about" className="container section">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="animate-fade-in">
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>My <span className="text-gradient">Expertise</span></h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
          Hello, I'm Dhara Prajapati, a B.Tech Computer Engineering student with hands-on experience in Data Science and Machine Learning. I have a strong foundation in building intelligent applications, data pipelines, and analytical tools. Proficient in technologies such as Python, Pandas, Scikit-Learn, and LLM integrations, with a focus on developing scalable, efficient, and data-driven solutions. Experienced in working on diverse projects including recommendation systems, customer segmentation, and exploratory copilots, applying best practices in data handling and performance optimization. Passionate about problem-solving, continuous learning, and exploring cutting-edge AI technologies to create impactful digital products.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {skills.map((skill, index) => (
          <div key={index} className={`glass-panel delay-${index + 1}`}>
            <div style={{ marginBottom: '1.5rem', background: 'rgba(255,255,255,0.05)', display: 'inline-block', padding: '1rem', borderRadius: '12px' }}>
              {skill.icon}
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{skill.title}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
