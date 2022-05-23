import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classes from './Button.module.css';

function Button({
  url,
  img,
  buttonClass,
  logoClass,
  buttonText,
}) {
  return (
    <Link href={url} passHref>
      <a target="_blank" rel="noreferrer">
        <button className={classes[buttonClass]}>
          <div className={classes['image-wrapper']}>
            <Image className={classes[logoClass]} src={img} alt={logoClass} width="25px" height="25px" />
            <span>{buttonText}</span>
          </div>
        </button>
      </a>
    </Link>
  );
}

export default Button;
