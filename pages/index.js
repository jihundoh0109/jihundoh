import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classes from '../styles/Home.module.css';
import github from '../public/github-logo.png';
import linkedin from '../public/linkedin-logo.png';
import email from '../public/email-logo.png';

function Home() {
  return (
    <div>
      <div className={classes.col}>
        <h1 className={classes.name}>Jihun Doh</h1>
        <h3 className={classes.subtitle}>Full Stack Developer</h3>
        <hr className={classes.line} />
        <div className={classes.buttons}>
          {/* github button */}
          <Link href="https://github.com/jihundoh0109" passHref className={classes.link}>
            <button className={classes['github-button']}>
              <div className={classes['image-wrapper']}>
                <Image className={classes['github-logo']} src={github} alt="github-logo" width="20px" height="20px" />
                <span className={classes['github-text']}>jihundoh0109</span>
              </div>
            </button>
          </Link>
          {/* linkedin button */}
          <Link href="https://www.linkedin.com/in/jihun-doh/" passHref className={classes.link}>
            <button className={classes['linkedin-button']}>
              <div className={classes['image-wrapper']}>
                <Image src={linkedin} alt="linkedin-logo" width="20px" height="20px" />
                <span className={classes['linkedin-text']}>jihundoh</span>
              </div>
            </button>
          </Link>
          {/* email button */}
          <Link href="mailto: dohj0109@seas.upenn.edu" passHref className={classes.link}>
            <button className={classes['email-button']}>
              <div className={classes['image-wrapper']}>
                <Image src={email} alt="email-logo" width="20px" height="20px" />
                <span className={classes['email-text']}>email</span>
              </div>
            </button>
          </Link>
        </div>
      </div>
      <div className={classes.col}>
        2
      </div>
    </div>
  );
}

export default Home;
