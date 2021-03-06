import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../../public/styles.css';
import clubLogo from '../club_logo';

function Clubs() {
  const clubs = ['Adelaide', 'Brisbane Lions', 'Carlton', 'Collingwood', 'Essendon',
    'Fremantle', 'Geelong', 'Gold Coast', 'Greater Western Sydney', 'Hawthorn', 'Melbourne',
    'North Melbourne', 'Port Adelaide', 'Richmond', 'St Kilda', 'Sydney', 'West Coast', 'Western Bulldogs'];
  const history = useHistory();
  return (
    <div className={styles.container}>
      {clubs.map((club, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <button className={styles.littleButton} type="button" key={index} onClick={() => history.push(`/clubs/${club}`)}>
          <img src={clubLogo(club)} alt={`${club} logo`} />
          <p>{club}</p>
        </button>
      ))}
    </div>
  );
}

export default Clubs;
