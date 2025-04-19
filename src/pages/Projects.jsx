// Hemalkumar Patel 8966689

import React from 'react';
import '../css/Projects.css';

const projects = [
  {
    id: 1,
    title: 'E-commerce Website',
    description: 'A full-stack e-commerce platform with React frontend and Node.js backend.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: 'ecommerce.jpeg'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity app for managing tasks with drag-and-drop functionality.',
    technologies: ['React', 'Redux', 'Firebase'],
    image: 'taskapp.jpeg'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Real-time weather information with 5-day forecast using weather API.',
    technologies: ['JavaScript', 'API Integration', 'CSS3'],
    image: 'weather.jpeg'
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website built with React and React Router.',
    technologies: ['React', 'React Router', 'CSS3'],
    image: 'portfolio.jpeg'
  }
];

const Projects = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={../assets/${project.image}} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href="#" className="demo-link">Live Demo</a>
                <a href="#" className="code-link">View Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;