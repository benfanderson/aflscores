import React from 'react';
import '../../public/styles/styles.scss';

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
