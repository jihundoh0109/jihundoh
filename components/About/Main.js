import React from 'react';
import Image from 'next/image';
import doh from '../../public/doh.jpg';
import classes from './Main.module.css';

function Main() {
  return (
    <div className={classes.container}>
      <Image
        className={classes.headshot}
        src={doh}
        alt="doh"
        width={300}
        height={300}
      />
      <p className={classes.summary}>
        Yo! My name is James, and I am a rising junior from South Korea
        studying Computer Science and Cognitive Science at the
        <br />
        <a
          className={classes['penn-link']}
          href="https://www.upenn.edu/"
          target="_blank"
          rel="noreferrer"
        >
          University of Pennsylvania
        </a>
        .
        <br />
        Keep scrolling to learn more about me!
      </p>
    </div>
  );
}

export default Main;
