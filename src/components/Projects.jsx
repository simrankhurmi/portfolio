import React from 'react';
import SectionHeading from './SectionHeading';
import { projects } from '../data/portfolioData';

const Projects = () => {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <SectionHeading
          label="Portfolio"
          title="Selected projects"
          description="Real applications I've built — from real-time collaboration tools to responsive landing pages."
        />

        <div className="projects__grid">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`project-card card ${project.featured ? 'project-card--featured' : ''}`}
            >
              {project.featured && <span className="project-card__badge">Featured</span>}

              <div className="project-card__icon" aria-hidden="true">
                <i className="fa-solid fa-layer-group" />
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-card__tech">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-card__links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--ghost btn--sm"
                >
                  <i className="fa-brands fa-github" aria-hidden="true" /> Code
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--primary btn--sm"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />{' '}
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
