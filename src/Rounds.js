import React from 'react';
import { useHistory } from 'react-router-dom';

function Rounds() {
  const rounds = new Array(23);
  const history = useHistory();

  return (
    <div>
      {rounds.map((round, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <button type="button" key={index} onClick={() => history.push(`/rounds/${round}`)}>
          {' '}
          Round
          {round}
        </button>
      ))}
    </div>
  );
}

export default Rounds;
