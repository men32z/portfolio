import React from 'react';
import Project from './Project';
import projectsData from '../projectsData';

function Projects() {
  const projects = projectsData.map(x => <Project key={x.id} data={x} />);
  return (
    <section className="row" id="projectsSection">
      <div className="section-title">
        <h2>Projects</h2>
      </div>
      {projects}
    </section>
  );
}

export default Projects;
