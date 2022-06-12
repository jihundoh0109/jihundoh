import React from 'react';
import classes from './Footer.module.css';

function Footer() {
  return (
    <div className={classes.footer}>
      built with
      {' '}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://nextjs.org/"
        className={classes.link}
      >
        Next.js
      </a>
      {' '}
      by James Doh © 2022
    </div>
  );
}

export default Footer;
