import React from 'react';
import { useHistory } from 'react-router-dom';

function Clubs() {
  const clubs = ['Adelaide', 'Brisbane Lions', 'Carlton', 'Collingwood', 'Essendon', 'Fremantle', 'Geelong', 'Gold Coast', 'Greater Western Sydney', 'Hawthorn', 'Melbourne', 'North Melbourne', 'Port Adelaide', 'Richmond', 'St Kilda', 'Sydney', 'West Coast', 'Western Bulldogs'];
  const history = useHistory();
  return (
    <div>
      {clubs.map((club, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <button type="button" key={index} onClick={() => history.push(`/clubs/${club}`)}>{club}</button>
      ))}
    </div>
  );
}

export default Clubs;
