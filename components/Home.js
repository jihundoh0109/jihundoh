import React from 'react';
import Image from 'next/image';
import Button from './Button';
import classes from './Home.module.css';
import doh from '../public/doh.jpg';

function Home() {
  const githubLogo = () => (
    <i className="fa-brands fa-github fa-xl" />
  );

  const linkedinLogo = () => (
    <i className="fa-brands fa-linkedin fa-xl" />
  );

  const emailLogo = () => (
    <i className="fa-solid fa-envelope fa-xl" />
  );

  return (
    <div className={classes.container}>
      <div className={classes['col-one']}>
        <h1 className={classes.name}>James Doh</h1>
        <h3 className={classes.subtitle}>Full Stack Developer</h3>
        <hr className={classes.line} />
        <div className={classes.buttons}>
          {/* github button */}
          <Button url="https://github.com/jihundoh0109" logo={githubLogo()} buttonClass="github-button" buttonText="jihundoh0109" />
          {/* linkedin button */}
          <Button url="https://www.linkedin.com/in/jihun-doh/" logo={linkedinLogo()} buttonClass="linkedin-button" buttonText="jihundoh" />
          {/* email button */}
          <Button url="mailto: dohj0109@seas.upenn.edu" logo={emailLogo()} buttonClass="email-button" buttonText="email" />
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
