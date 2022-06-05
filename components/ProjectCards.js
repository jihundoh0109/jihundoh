import React from 'react';
import classes from './ProjectCards.module.css';
import ProjectCard from './ProjectCard';
import projects from '../data/projects.json';

function ProjectCards() {
  return (
    <div>
      <div className={classes.container}>
        <div className={classes['btn-scroll-left']}>
          <div className={`${classes['btn-scroll']} ${classes['left-up']}`} />
          <div className={`${classes['btn-scroll']} ${classes['left-down']}`} />
        </div>
        <div className={classes['btn-scroll-right']}>
          <div className={`${classes['btn-scroll']} ${classes['right-up']}`} />
          <div className={`${classes['btn-scroll']} ${classes['right-down']}`} />
        </div>
        <div className={classes['scroll-container']}>
          {projects.map((data) => (
            <div className={classes.projectcard}>
              <ProjectCard
                key={data.title}
                title={data.title}
                img={data.img}
                tools={data.tools}
                description={data.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
