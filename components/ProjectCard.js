import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import classes from './ProjectCard.module.css';

function ProjectCard({
  title,
  img,
  tools,
  description,
  url,
}) {
  return (
    <Link href={url} passHref>
      <a target={url === 'http://localhost:3000' ? '_self' : '_blank'} rel="noreferrer">
        <div className={classes.card}>
          <div className={classes.container}>
            <h2 className={classes.title}>{title}</h2>
            <Image
              className={classes.image}
              src={img}
              alt="project image"
              width={330}
              height={200}
            />
            <span className={classes.tools}>{tools}</span>
            <p className={classes.description}>{description}</p>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default ProjectCard;
