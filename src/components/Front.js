import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../../public/styles.css';

function Front() {
  const history = useHistory();

  return (
    <div className={styles.container}>
      <button type="button" onClick={() => history.push('rounds')}>Games by round</button>
      <button type="button" onClick={() => history.push('clubs')}>Games by club</button>
    </div>
  );
}

export default Front;
