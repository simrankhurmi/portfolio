import React from 'react';
import { profile } from '../data/portfolioData';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          &copy; {year} {profile.name}. Built with React.
        </p>
        <div className="footer__links">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fa-brands fa-github" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin" />
          </a>
          <a href="#home" aria-label="Back to top">
            <i className="fa-solid fa-arrow-up" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
