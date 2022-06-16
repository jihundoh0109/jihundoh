import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import classes from './Layout.module.css';

function Layout({ children }) {
  return (
    <div className={classes.container}>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
