import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../../public/styles.css';

function Rounds() {
  const rounds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
    12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  const history = useHistory();

  return (
    <div className={styles.buttonContainer}>
      {rounds.map((round) => (
        <button className={styles.littleButton} type="button" key={round} onClick={() => history.push(`/rounds/${round}`)}>
          {`Round ${round}`}
        </button>
      ))}
    </div>
  );
}

export default Rounds;
