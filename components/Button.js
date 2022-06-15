import React from 'react';
import Script from 'next/script';
import Link from 'next/link';
import classes from './Button.module.css';

function Button({
  url,
  logo,
  buttonClass,
  buttonText,
}) {
  return (
    <>
      <Script src="https://kit.fontawesome.com/4a122d335f.js" strategy="lazyOnload" />
      <Link href={url} passHref>
        <a target="_blank" rel="noreferrer" className={classes[buttonClass]}>
          <button>
            <div className={classes['image-wrapper']}>
              {logo}
              <span>{buttonText}</span>
            </div>
          </button>
        </a>
      </Link>
    </>
  );
}

export default Button;
