import React from 'react';
import classes from './ProjectCards.module.css';
import ProjectCard from './ProjectCard';
import projects from '../data/projects.json';

function ProjectCards() {
  const projectListThreeAtATime = Array.from({ length: Math.ceil(projects.length / 3) }, (v, i) =>
    projects.slice(i * 3, i * 3 + 3));

  const panel = (data, index, className) => (
    <li className={classes[className]}>
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
        data.length === 3 ? <ul>{panel(data, 0, 'end-3-l')}{panel(data, 1, 'middle')}{panel(data, 2, 'end-3-r')}</ul>
          : data.length === 2 ? <ul>{panel(data, 0, 'end-2-l')}{panel(data, 1, 'end-2-r')}</ul>
            : data.length === 1 ? <ul>{panel(data, 0, 'end-1')}</ul>
              : null)}
    </div>
  );
}

export default ProjectCards;
