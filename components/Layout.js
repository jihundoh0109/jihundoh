import React from 'react';
import Navigation from './Navigation';

function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
