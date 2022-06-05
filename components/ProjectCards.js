import React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { LeftArrow, RightArrow } from './Arrows';
import classes from './ProjectCards.module.css';
import ProjectCard from './ProjectCard';
import projects from '../data/projects.json';

function ProjectCards() {
  return (
    <div>
      <div className={classes.container}>
        <ScrollMenu
          LeftArrow={LeftArrow}
          RightArrow={RightArrow}
          className={classes['scroll-bar']}
        >
          {projects.map((data) => (
            <ProjectCard
              className={classes.project}
              key={data.title}
              itemId={data.title}
              title={data.title}
              img={data.img}
              tools={data.tools}
              description={data.description}
            />
          ))}
        </ScrollMenu>
      </div>
    </div>
  );
}

export default ProjectCards;
