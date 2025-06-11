import React from 'react';
import './Projects.css'; // Make sure this CSS file has card styles
import ProjectImage1 from '../assets/328842-P9ZNA7-604.jpg';
import ProjectImage2 from '../assets/projectmanager_1.jpg';

// Then use:
<img src={ProjectImage1} alt="Project" />

const majorProjects = [
  {
    title: "College Login System (JWT)",
    description: "Role-based login system built with MERN stack and JWT authentication.",
    image: ProjectImage1
  },
  {
    title: "E-commerce Platform",
    description: "Full-featured MERN e-commerce site with product listings and user auth.",
    image: ProjectImage1
  },
  {
    title: "Exit Poll App",
    description: "Poll system using PHP backend and JS frontend to collect and show live results.",
    image: ProjectImage1
  },
  {
    title: "Dynamic Websites",
    description: "Developed multiple dynamic sites using Laravel and CodeIgniter.",
    image: ProjectImage1
  },
];

const miniProjects = [
  {
    title: "Weather App",
    description: "Fetches and displays live weather data via external API.",
    image: ProjectImage2
  },
  {
    title: "Movie API Fetcher",
    description: "Uses API to display movie details with search functionality.",
    image: ProjectImage2
  },
  {
    title: "Calculator",
    description: "Functional JavaScript calculator with a clean UI.",
    image: ProjectImage2
  },
  {
    title: "To-Do List",
    description: "CRUD operations with local state management in React.",
    image: ProjectImage2
  },
  {
    title: "API Card Fetcher",
    description: "Displays data cards dynamically from an API using async fetch.",
    image: ProjectImage2
  },
];

const Projects = () => {
  const renderProjectCards = (projects) =>
    projects.map((project, index) => (
      <div className="project-card" key={index}>
        <img src={project.image} alt={project.title} className="project-image" />
        <div className="project-info">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      </div>
    ));

  return (
    <div className="projects-container">
      <div className="projects-content">
        <h1 className="projects-title">My Projects</h1>

        <div className="projects-section">
          <h2 className="projects-subtitle">Major Projects</h2>
          <div className="project-cards">
            {renderProjectCards(majorProjects)}
          </div>
        </div>

        <div className="projects-section">
          <h2 className="projects-subtitle">Mini Projects</h2>
          <div className="project-cards">
            {renderProjectCards(miniProjects)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
