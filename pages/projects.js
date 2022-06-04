import React from 'react';
import Head from 'next/head';
import ProjectCards from '../components/ProjectCards';

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
      <ProjectCards />
    </div>
  );
}

export default Projects;
