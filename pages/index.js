import React from 'react';
import Head from 'next/head';
import Home from '../components/Home';

function Main() {
  return (
    <div>
      <Head>
        <title>Jihun Doh | Home</title>
        <meta name="keywords" content="CS, James Doh, Jihun Doh, Web Dev, Full Stack, Frontend, Backend, Developer, React, NextJS" />
        {/* todo */}
        <meta name="description" content="" />
        <meta name="author" content="Jihun Doh" />
      </Head>
      <Home />
    </div>
  );
}

export default Main;
