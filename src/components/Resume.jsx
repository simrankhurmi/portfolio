import React from 'react';
import SectionHeading from './SectionHeading';
import { CV_VIEW_URL, downloadCv, education, experience, skillTags } from '../data/portfolioData';

const Resume = () => {

  return (
    <section className="section resume" id="resume">
      <div className="container">
        <SectionHeading
          label="Resume"
          title="Experience & background"
          description="A snapshot of my professional journey. Download the full CV for complete details."
        />

        <div className="resume__actions">
          <button type="button" className="btn btn--primary" onClick={downloadCv}>
            <i className="fa-solid fa-download" aria-hidden="true" /> Download Full CV
          </button>
          <a
            href={CV_VIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
          >
            <i className="fa-solid fa-eye" aria-hidden="true" /> View CV Online
          </a>
        </div>

        <div className="resume__grid">
          <div className="resume__column">
            <h3 className="resume__heading">
              <i className="fa-solid fa-briefcase" aria-hidden="true" /> Experience
            </h3>
            <div className="timeline">
              {experience.map((item) => (
                <article key={item.role} className="timeline__item card">
                  <div className="timeline__period">{item.period}</div>
                  <h4>{item.role}</h4>
                  <p className="timeline__company">{item.company}</p>
                  <ul>
                    {item.highlights.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <div className="resume__column">
            <h3 className="resume__heading">
              <i className="fa-solid fa-graduation-cap" aria-hidden="true" /> Education
            </h3>
            <div className="timeline">
              {education.map((item) => (
                <article key={item.degree} className="timeline__item card">
                  <div className="timeline__period">{item.period}</div>
                  <h4>{item.degree}</h4>
                  <p className="timeline__company">{item.school}</p>
                  <p>{item.note}</p>
                </article>
              ))}
            </div>

            <h3 className="resume__heading resume__heading--spaced">
              <i className="fa-solid fa-wrench" aria-hidden="true" /> Core Skills
            </h3>
            <div className="resume__skills card">
              <div className="tag-list">
                {skillTags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
