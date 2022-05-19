import React from 'react';
import Head from 'next/head';
import Home from '../components/Home';
import Circle from '../components/Circle';

function Main() {
  return (
    <>
      <Head>
        <title>Jihun Doh | Home</title>
      </Head>
      <Home />
      <Circle />
    </>
  );
}

export default Main;
