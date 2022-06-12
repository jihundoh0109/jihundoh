import React from 'react';
import Image from 'next/image';
import Button from './Button';
import classes from './Home.module.css';

import github from '../public/github-logo.png';
import linkedin from '../public/linkedin-logo.png';
import email from '../public/email-logo.png';
import doh from '../public/doh.jpg';

function Home() {
  return (
    <div className={classes.container}>
      <div className={classes['col-one']}>
        <h1 className={classes.name}>James Doh</h1>
        <h3 className={classes.subtitle}>Full Stack Developer</h3>
        <hr className={classes.line} />
        <div className={classes.buttons}>
          {/* github button */}
          <Button url="https://github.com/jihundoh0109" img={github} buttonClass="github-button" logoClass="github-logo" buttonText="jihundoh0109" />
          {/* linkedin button */}
          <Button url="https://www.linkedin.com/in/jihun-doh/" img={linkedin} buttonClass="linkedin-button" logoClass="linkedin-logo" buttonText="jihundoh" />
          {/* email button */}
          <Button url="mailto: dohj0109@seas.upenn.edu" img={email} buttonClass="email-button" logoClass="email-logo" buttonText="email" />
        </div>
      </div>
      <div className={classes['col-two']}>
        <Image
          className={classes.headshot}
          src={doh}
          alt="doh"
          layout="fill"
        />
      </div>
    </div>
  );
}

export default Home;
