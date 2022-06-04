import React from 'react';
import classes from './ProjectCards.module.css';
import ProjectCard from './ProjectCard';
import projects from '../data/projects.json';

function ProjectCards() {
  const projectListThreeAtATime = Array.from({ length: Math.ceil(projects.length / 3) }, (v, i) =>
    projects.slice(i * 3, i * 3 + 3));

  const panel = (data, index) => (
    <li>
      <ProjectCard
        title={data[index].title}
        img={data[index].img}
        tools={data[index].tools}
        description={data[index].description}
      />
    </li>
  );

  return (
    <div className={classes.container} id="container">
      {projectListThreeAtATime.map((data) =>
        data.length === 3 ? <ul>{panel(data, 0)}{panel(data, 1)}{panel(data, 2)}</ul>
          : data.length === 2 ? <ul>{panel(data, 0)}{panel(data, 1)}</ul>
            : data.length === 1 ? <ul>{panel(data, 0)}</ul>
              : null)}
    </div>
  );
}

export default ProjectCards;
