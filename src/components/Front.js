import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../../public/styles.css';
import Footer from './footer';

function Front() {
  const history = useHistory();

  return (
    <div className={styles.container}>
      <button className={styles.littleButton} type="button" onClick={() => history.push('rounds')}>Games by round</button>
      <button className={styles.littleButton} type="button" onClick={() => history.push('clubs')}>Games by club</button>
      <Footer />
    </div>
  );
}

export default Front;
