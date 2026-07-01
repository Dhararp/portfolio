import React from 'react';

const About = () => {
  return (
    <section id="about" className="section container reveal">
      <div className="about-two-col">
        <div className="about-left">
          <div className="glass-panel about-info-card">
            <div className="about-icon" style={{ fontSize: '2rem', marginBottom: '0' }}>🎓</div>
            <h3>Education</h3>
            <p style={{ marginBottom: '0.8rem', lineHeight: '1.4' }}>
              <strong>B.Tech Computer Engineering</strong><br />
              <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>2024 - 2027</span><br />
              <span style={{ color: 'var(--accent-primary)', fontWeight: 500 }}>CGPA: 7.82</span>
            </p>
            <p style={{ lineHeight: '1.4' }}>
              <strong>Diploma Computer Engineering</strong><br />
              <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>2021 - 2024</span><br />
              <span style={{ color: 'var(--accent-primary)', fontWeight: 500 }}>CGPA: 6.65</span>
            </p>
          </div>
          <div className="glass-panel about-info-card mt-4">
            <div className="about-icon" style={{ fontSize: '2rem', marginBottom: '0' }}>📍</div>
            <h3>Location</h3>
            <p>Nadiad, Gujarat, India</p>
          </div>
        </div>

        <div className="about-right">
          <h2 className="text-gradient mb-4">Who I Am</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Hello I'm Dhara Prajapati , A final year B.Tech Computer Engineering student at Madhuben & Bhanubhai Patel
            Institute of Technology, CVMU with hands-on experience in full stack AI engineer, Python developer and Data
            Scientist. Proficient in technologies such as Python, AI & ML, Vite, javscriptxml with a focus on developing
            scalable, efficient, and user-centric solutions.
            <br /><br />
            Experienced in working on diverse projects including machine learning-based systems, Data analysis or data
            analytics based project Passionate debugging complex issues and optimizing algorithms for performance.
            Specializing in Python for backend logic, data pipelines, and intelligent systems continuous learning, and
            exploring new technologies to create impactful digital products.
          </p>
          <div className="certifications">
            <h3>Certifications & Training</h3>
            <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
              <li>
                <a href="https://www.linkedin.com/feed/update/urn:li:activity:7450030439102119936/" target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'underline', textUnderlineOffset: '4px', color: 'inherit', display: 'block' }}>
                  AWS Academy Graduate - Cloud Foundations - Training Badge
                </a>
              </li>
              <li style={{ marginTop: '0.8rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.3rem' }}>AWS Cloud Foundations Trained</strong>
                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem' }}>
                  <a href="https://www.linkedin.com/feed/update/urn:li:activity:7443623765214941184/" target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline', textUnderlineOffset: '4px', color: 'var(--accent-primary)' }}>LinkedIn</a>
                  <a href="https://www.credly.com/badges/a077fd5a-45fe-4d7b-a4df-3f51cbae53b6/linked_in?t=tclxw9"
                    target="_blank" rel="noopener noreferrer"
                    style={{ textDecoration: 'underline', textUnderlineOffset: '4px', color: 'var(--accent-primary)' }}>Credly Badge</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
