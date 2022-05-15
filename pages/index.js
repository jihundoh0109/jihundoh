import React from 'react';

import classes from '../styles/Home.module.css';

function Home() {
  return (
    <div>
      <div className={classes.row}>
        <h1 className={classes.name}>Jihun Doh</h1>
        <h3 className={classes.subtitle}>Full Stack Developer</h3>
        <hr className={classes.line} />
        <div>
          <button>a</button>
          <button>a</button>
          <button>a</button>
        </div>
      </div>
      <div className={classes.row}>
        2
      </div>
    </div>
  );
}

export default Home;
