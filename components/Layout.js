import React from 'react';
import Script from 'next/script';
import Navigation from './Navigation';
import Footer from './Footer';
import classes from './Layout.module.css';

function Layout({ children }) {
  return (
    <>
      <Script src="https://kit.fontawesome.com/4a122d335f.js" strategy="lazyOnload" />
      <div className={classes.body}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
