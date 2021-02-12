import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import GameTile from './GameTile';

function ClubGames(props) {
  const { games } = props;
  const bulkGamesArray = Array.from(games);
  const { id } = useParams();
  const roundArray = [];

  bulkGamesArray.map(
    // eslint-disable-next-line array-callback-return
    (club) => {
      if (club.hteam === id || club.ateam === id) {
        roundArray.push(club);
      }
    },
  );

  return (
    roundArray.length > 0
      ? (
        <>
          <h2>{id}</h2>
          <div>
            {
            roundArray.map((game) => (
              <GameTile key={game.id} game={game} />
            ))
            }
          </div>
        </>
      )
      : <p>Loading  . . .</p>
  );
}

ClubGames.propTypes = {
  games: PropTypes.string.isRequired,
};

export default ClubGames;
