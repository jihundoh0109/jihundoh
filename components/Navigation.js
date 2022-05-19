import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classes from './Navigation.module.css';
import icon from '../public/favicon.ico';

// navigation bar
function Navigation() {
  const [menuIconClicked, setMenuIconClicked] = useState(false);
  const [lightModeClicked, setLightModeClicked] = useState(false);

  // when user clicks menu icon (for screen size < 600px)
  const onMenuIconClick = () => {
    setMenuIconClicked(!menuIconClicked);
  };

  // when user clicks on toggle switch to change theme (dark/light mode)
  const onLightModeClicked = () => {
    setLightModeClicked(!lightModeClicked);
  };

  return (
    <nav className={menuIconClicked ? classes.collapseNavbar : classes.navbar}>
      <a href="/" className={classes.logo}>
        <Image src={icon} alt="image" width="40px" height="40px" />
      </a>
      <ul className={menuIconClicked ? classes.collapsemenu : classes.menu} id="menu">
        <li>
          <Link href="/">
            <a>
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>
              About
            </a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a>
              Projects
            </a>
          </Link>
        </li>
        <li>
          <Link href="/resume">
            <a>
              Resumé
            </a>
          </Link>
        </li>
      </ul>
      <div className={classes['toggle-icon']} onClick={onMenuIconClick}>
        <hr className={menuIconClicked ? classes['clicked-first-line'] : classes['first-line']} />
        <hr className={menuIconClicked ? classes['clicked-second-line'] : classes['second-line']} />
      </div>
    </nav>
  );
}

export default Navigation;
