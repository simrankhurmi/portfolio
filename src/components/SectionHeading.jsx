import React from 'react';

const SectionHeading = ({ label, title, description }) => {
  return (
    <div className="section-heading">
      <span className="section-label">{label}</span>
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-desc">{description}</p>}
    </div>
  );
};

export default SectionHeading;
