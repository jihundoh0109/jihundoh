import Image from 'next/image';
import React from 'react';
import classes from './ProjectCard.module.css';

function ProjectCard({
  title,
  img,
  tools,
  description,
}) {
  return (
    <div className={classes.card}>
      <h2 className={classes.title}>{title}</h2>
      <Image src={img} alt="project image" width={300} height={100} />
      <span>{tools}</span>
      <p>{description}</p>
    </div>
  );
}

export default ProjectCard;
