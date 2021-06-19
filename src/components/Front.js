import React from 'react';
// import styles from '../../public/styles.css';
import '../../public/styles/styles.scss';
import Footer from './footer';
import player from '../../public/images/player.png';

function Front() {
  return (
    <div id="container">
      <h1 id="headline">AFL Live scores 2021</h1>
      <a href="#/rounds">
        <img src={player} id="frontImg" alt="Football player icon" />
      </a>
      <Footer />
    </div>
  );
}

export default Front;
