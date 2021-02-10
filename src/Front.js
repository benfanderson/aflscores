import React from 'react';
import { useHistory } from 'react-router-dom';

function Front() {
  const history = useHistory();

  return (
    <div>
      <button type="button" onClick={() => history.push('rounds')}>Games by round</button>
      <button type="button" onClick={() => history.push('clubs')}>Games by club</button>
    </div>
  );
}

export default Front;
