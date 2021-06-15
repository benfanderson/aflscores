import React from 'react';
import styles from '../../public/styles.css';
import Footer from './footer';
import player from '../../public/images/player.png';

function Front() {
  return (
    <div className={styles.container}>
      <h1 className={styles.headline}>AFL Live scores 2021</h1>
      <a href="#/rounds">
        {' '}
        <img src={player} className={styles.frontImg} alt="Football player icon" />
      </a>
      <Footer />
    </div>
  );
}

export default Front;
