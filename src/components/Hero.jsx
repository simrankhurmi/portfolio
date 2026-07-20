import React from 'react';
import { cv1 } from '../Gallery';
import { downloadCv, profile, stats } from '../data/portfolioData';

const Hero = () => {

  return (
    <section className="hero" id="home">
      <div className="hero__glow hero__glow--1" aria-hidden="true" />
      <div className="hero__glow hero__glow--2" aria-hidden="true" />

      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__eyebrow">Hello, I&apos;m</p>
          <h1 className="hero__title">
            {profile.name.split(' ')[0]}{' '}
            <span>{profile.name.split(' ').slice(1).join(' ')}</span>
          </h1>
          <h2 className="hero__role">{profile.title}</h2>
          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View Projects
            </a>
            <button type="button" className="btn btn--outline" onClick={downloadCv}>
              Download CV
            </button>
          </div>

          <div className="hero__stats">
            {stats.map((stat) => (
              <div key={stat.label} className="hero__stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__image-ring">
            <img src={cv1} alt={`${profile.name} portrait`} />
          </div>
          <div className="hero__badge">
            <i className="fa-solid fa-code" aria-hidden="true" />
            <div>
              <strong>Open to work</strong>
              <span>{profile.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
