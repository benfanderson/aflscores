import React from 'react';
// import styles from '../../public/styles.css';
import '../../public/styles.scss';

function Footer() {
  return (
    <>
      <hr />
      <p id="footer">
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
