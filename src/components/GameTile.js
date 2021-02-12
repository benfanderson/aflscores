import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

function GameTile(props) {
  const { game } = props;
  const gameTime = moment(game.date + game.tz).format('dddd, MMMM D h:mma');
  return (
    <div className="gameTile">
      {game.hteam}
      {' '}
      {game.hscore}
      {' '}
      v
      {' '}
      {game.ateam}
      {' '}
      {game.ascore}
      {' '}
      at
      {' '}
      {game.venue}
      {' '}
      on
      {' '}
      {gameTime}
    </div>
  );
}

GameTile.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  game: PropTypes.object.isRequired,
};

export default GameTile;
