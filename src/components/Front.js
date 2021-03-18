import React from 'react';
// import { useHistory } from 'react-router-dom';
import styles from '../../public/styles.css';
import Footer from './footer';
import player from '../../public/images/player.png';
// import football from '../../public/images/football.svg';

function Front() {
  // const history = useHistory();

  return (
    <div className={styles.container}>
      <h1>AFL Live scores 2021</h1>
      <img src={player} className={styles.buttonImg} alt="Football player icon" />
      {/* <div className={styles.bigButtonContainer}>
        <button className={styles.bigButton} type="button" onClick={() => history.push('rounds')}>
          <p>Games by round</p>
          <img src={football} className={styles.buttonImg} alt="Football icon" />
        </button>
        <button className={styles.bigButton} type="button" onClick={() => history.push('clubs')}>
          <p>Games by club</p>
          <img src={player} className={styles.buttonImg} alt="Football player icon" />
        </button>
      </div> */}
      <Footer />
    </div>
  );
}

export default Front;
