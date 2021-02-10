import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import GameTile from './GameTile';

function RoundGames(props) {
  const { games } = props;
  const bulkGamesArray = Array.from(games);
  const { id } = useParams();
  const roundNumber = parseInt(id, 10);
  const roundArray = [];

  bulkGamesArray.map(
    // eslint-disable-next-line array-callback-return
    (round) => {
      if (round.round === roundNumber) {
        roundArray.push(round);
      }
    },
  );

  return (
    roundArray.length > 0
      ? (
        <>
          <h2>
            Round
            {roundNumber}
          </h2>
          <div>
            {
            roundArray.map((game, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <GameTile key={index} game={game} />
            ))
            }
          </div>
        </>
      )
      : <p>Loading  . . .</p>
  );
}

RoundGames.propTypes = {
  games: PropTypes.string.isRequired,
};

export default RoundGames;
