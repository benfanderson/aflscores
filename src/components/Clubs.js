import React from 'react';
import { useHistory } from 'react-router-dom';
// import styles from '../../public/styles.css';
import '../../public/styles/styles.scss';
import clubLogo from '../club_logo';
import Footer from './footer';

function Clubs() {
  const clubs = ['Adelaide', 'Brisbane Lions', 'Carlton', 'Collingwood', 'Essendon',
    'Fremantle', 'Geelong', 'Gold Coast', 'Greater Western Sydney', 'Hawthorn', 'Melbourne',
    'North Melbourne', 'Port Adelaide', 'Richmond', 'St Kilda', 'Sydney', 'West Coast', 'Western Bulldogs'];
  const history = useHistory();
  return (
    <div id="container">
      <div id="buttonContainer">
        {clubs.map((club, index) => (
        // eslint-disable-next-line react/no-array-index-key
          <button type="button" key={index} onClick={() => history.push(`/clubs/${club}`)}>
            <img src={clubLogo(club)} alt={`${club} logo`} />
            <p>{club}</p>
          </button>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Clubs;
