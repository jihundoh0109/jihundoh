import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classes from './Navigation.module.css';
import icon from '../public/temp.png';

// navigation bar
function Navigation() {
  const [toggleClicked, setToggleClicked] = useState(false);

  const onToggleBar = () => {
    setToggleClicked(!toggleClicked);
  };

  return (
    <nav className={classes.navbar}>
      <Image src={icon} alt="image" width="40px" height="40px" />
      <ul className={toggleClicked ? classes.collapsemenu : classes.menu} id="menu">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/">Projects</Link>
        </li>
        <li>
          <Link href="/">Resumé</Link>
        </li>
      </ul>
      <svg
        className={classes.toggle}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        onClick={onToggleBar}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </nav>
  );
}

export default Navigation;
