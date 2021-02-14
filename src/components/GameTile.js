import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import clubLogo from '../club_logo';

function GameTile(props) {
  const { game } = props;
  const gameTime = moment(game.date + game.tz).format('dddd, MMMM D h:mma');
  return (
    <div className="gameTile">
      <img src={clubLogo(game.hteam)} alt={`${game.hteam} logo`} />
      <p>
        {game.hteam}
        {' '}
        {game.hscore}
        {' '}
        v
        {' '}
        {game.ateam}
        {' '}
        {game.ascore}
      </p>
      <img src={clubLogo(game.ateam)} alt={`${game.ateam} logo`} />
      <p>
        {' '}
        at
        {' '}
        {game.venue}
        {' '}
        on
        {' '}
        {gameTime}
      </p>
    </div>
  );
}

GameTile.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  game: PropTypes.object.isRequired,
};

export default GameTile;
