import React from 'react';
import Head from 'next/head';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects.json';

function Projects() {
  return (
    <div>
      <Head>
        <title>Jihun Doh | Projects</title>
        <meta name="keywords" content="CS, James Doh, Jihun Doh, Web Dev, Full Stack, Frontend, Backend, Developer, React, NextJS, Projects" />
        {/* todo */}
        <meta name="description" content="" />
        <meta name="author" content="Jihun Doh" />
      </Head>
      <div>
        {projects.map((data) => (
          <ProjectCard
            title={data.title}
            img={data.img}
            tools={data.tools}
            description={data.description}
            key={data.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
