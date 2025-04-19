// Jonty Chritian - 8942095

import React from 'react';
import '../css/Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to My Portfolio</h1>
          <p>I'm a web developer passionate about creating amazing user experiences.</p>
          <button className="cta-button">View My Work</button>
        </div>
      </section>
      
      <section className="skills">
        <h2>My Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Frontend</h3>
            <p>React, JavaScript, HTML5, CSS3</p>
          </div>
          <div className="skill-card">
            <h3>Backend</h3>
            <p>Node.js, Express, MongoDB</p>
          </div>
          <div className="skill-card">
            <h3>Tools</h3>
            <p>Git, VS Code, Figma</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;