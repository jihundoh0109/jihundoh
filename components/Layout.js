import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import classes from './Layout.module.css';
import Circle from './Circle';

function Layout({ children }) {
  return (
    <div style={{ position: 'relative' }}>
      {/* <Circle /> */}
      <div className={classes.body}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
