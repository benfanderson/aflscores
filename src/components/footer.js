import React from 'react';
import styles from '../../public/styles.css';

function Footer() {
  return (
    <>
      <hr />
      <p className={styles.footer}>
        Data for these matches is provided by
        {' '}
        <a href="https://api.squiggle.com.au/">Squiggle&apos;s AFL API</a>
        .
      </p>
      <hr />
    </>
  );
}

export default Footer;
