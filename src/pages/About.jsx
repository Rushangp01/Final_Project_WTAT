// Harshkumar Patel 8901714 

import React from 'react';
import '../css/About.css';

const About = () => {
  return (
    <div className="about">
      <section className="about-section">
        <div className="about-content">
          <h1>About Me</h1>
          <p>
            Hello! I'm a passionate web developer with experience in building modern web applications.
            I specialize in React, JavaScript, and responsive design principles.
          </p>
          <p>
            My journey in web development started 3 years ago when I built my first website.
            Since then, I've worked on various projects that have helped me grow my skills.
          </p>
          <p>
            When I'm not coding, you can find me hiking, reading tech blogs, or experimenting with new recipes in the kitchen.
          </p>
        </div>
        <div className="about-image">
          <img src="/assets/profile.jpeg" alt="Profile" />
        </div>
      </section>
      
      <section className="education">
        <h2>Education & Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h3>Bachelor's in Computer Science</h3>
            <p>University of Technology, 2018-2022</p>
          </div>
          <div className="timeline-item">
            <h3>Web Developer Intern</h3>
            <p>Tech Solutions Inc., Summer 2021</p>
          </div>
          <div className="timeline-item">
            <h3>Frontend Developer</h3>
            <p>Digital Creations, 2022-Present</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;