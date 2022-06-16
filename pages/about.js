import React from 'react';
import Head from 'next/head';
import Main from '../components/About/Main';

function About() {
  return (
    <div>
      <Head>
        <title>Jihun Doh | About</title>
        <meta name="keywords" content="CS, James Doh, Jihun Doh, Web Dev, Full Stack, Frontend, Backend, Developer, React, NextJS, About" />
        {/* todo */}
        <meta name="description" content="" />
        <meta name="author" content="Jihun Doh" />
      </Head>
      <Main />
    </div>
  );
}

export default About;
