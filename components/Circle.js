import React from 'react';
import classes from './Circle.module.css';

function Circle() {
  return (
    <div className={classes.container}>
      <div className={classes['circle-one']} />
      <div className={classes['circle-two']} />
      <div className={classes['circle-three']} />
    </div>
  );
}

export default Circle;
