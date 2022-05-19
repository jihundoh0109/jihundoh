import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classes from '../styles/Home.module.css';
import github from '../public/github-logo.png';
import linkedin from '../public/linkedin-logo.png';
import email from '../public/email-logo.png';
import doh from '../public/doh.jpg';

function Home() {
  return (
    <div className={classes.container}>
      <div className={classes['col-one']}>
        <h1 className={classes.name}>Jihun Doh</h1>
        <h3 className={classes.subtitle}>Full Stack Developer</h3>
        <hr className={classes.line} />
        <div className={classes.buttons}>
          {/* github button */}
          <Link href="https://github.com/jihundoh0109" passHref className={classes.link}>
            <a target="_blank" rel="noreferrer">
              <button className={classes['github-button']}>
                <div className={classes['image-wrapper']}>
                  <Image className={classes['github-logo']} src={github} alt="github-logo" width="25px" height="25px" />
                  <span>jihundoh0109</span>
                </div>
              </button>
            </a>
          </Link>
          {/* linkedin button */}
          <Link href="https://www.linkedin.com/in/jihun-doh/" passHref className={classes.link}>
            <a target="_blank" rel="noreferrer">
              <button className={classes['linkedin-button']}>
                <div className={classes['image-wrapper']}>
                  <Image src={linkedin} alt="linkedin-logo" width="25px" height="25px" />
                  <span>jihundoh</span>
                </div>
              </button>
            </a>
          </Link>
          {/* email button */}
          <Link href="mailto: dohj0109@seas.upenn.edu" passHref className={classes.link}>
            <a>
              <button className={classes['email-button']}>
                <div className={classes['image-wrapper']}>
                  <Image src={email} alt="email-logo" width="25px" height="25px" />
                  <span>email</span>
                </div>
              </button>
            </a>
          </Link>
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
