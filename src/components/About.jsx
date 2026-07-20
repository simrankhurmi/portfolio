import React from 'react';
import SectionHeading from './SectionHeading';
import { profile, skillTags, skills } from '../data/portfolioData';

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container">
        <SectionHeading
          label="About Me"
          title="Developer who codes & communicates"
          description="I combine technical execution with clear client communication to deliver products that work well and feel great to use."
        />

        <div className="about__grid">
          <div className="about__intro card">
            <p>{profile.bio}</p>
            <div className="about__meta">
              <div>
                <i className="fa-solid fa-location-dot" aria-hidden="true" />
                <span>{profile.location}</span>
              </div>
              <div>
                <i className="fa-solid fa-briefcase" aria-hidden="true" />
                <span>2+ years client-facing experience</span>
              </div>
            </div>
          </div>

          <div className="about__tags card">
            <h3>Tech Stack</h3>
            <div className="tag-list">
              {skillTags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.category} className="skills-group card">
              <h3>{group.category}</h3>
              <ul>
                {group.items.map((skill) => (
                  <li key={skill.name}>
                    <div className="skill-row">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-bar__fill"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
