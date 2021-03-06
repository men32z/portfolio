import React from 'react';

function Project({
  // eslint-disable-next-line
  data: {
    // eslint-disable-next-line
    title, img, description, tags, demo, repo,
  },
}) {
  return (
    <div className="project">
      <img className="d-none d-md-block" src={img} alt="" />
      <div className="project-background d-none d-md-block" />
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="skills">
          {
            // eslint-disable-next-line
            tags.map(x => (
              <span key={x}>
                {' '}
                {x}
                {' '}
              </span>
            ))
          }
        </div>
        <div className="project-links">
          {!demo ? '' : (
            <a target="_BLANK" href={demo} rel="noopener noreferrer">
              Live Demo
              <img src="/images/link.svg" alt="" />
            </a>
          )}
          <a target="_BLANK" href={repo} className="secondary" rel="noopener noreferrer">
            <img src="/images/github.svg" alt="" />
            View Source
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
