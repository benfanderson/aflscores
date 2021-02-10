import React from 'react';
import PropTypes from 'prop-types';

function GameTile(props) {
  const { game } = props;
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
      {game.date}
    </div>
  );
}

GameTile.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  game: PropTypes.object.isRequired,
};

export default GameTile;
