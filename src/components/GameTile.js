import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import clubLogo from '../club_logo';
import gameWinner from '../game_winner';
// import styles from '../../public/styles.css';
import '../../public/styles/styles.scss';

function GameTile(props) {
  const { game } = props;
  const gameTime = moment(game.date + game.tz).format('dddd, MMMM D h:mma');
  return (
    <div className="game">
      <img src={clubLogo(game.hteam)} alt={`${game.hteam} logo`} />
      <div className="game--info">
        {game.complete === 0 ? (
          <p>
            {game.hteam}
            {' '}
            v
            {' '}
            {game.ateam}
          </p>
        ) : game.complete < 100 ? (
          <p>
            {game.hteam}
            {' '}
            {game.hgoals}
            .
            {game.hbehinds}
            {' '}
            {game.hscore}
            {' '}
            {game.ateam}
            {' '}
            {game.agoals}
            .$
            {game.abehinds}
            {' '}
            {game.ascore}
          </p>
        ) : <>{gameWinner(game)}</> }
        <p>{game.venue}</p>
        <p>{game.complete === 0 ? `${gameTime}` : game.complete < 100 ? <span className="live">LIVE</span> : null}</p>
      </div>
      <img src={clubLogo(game.ateam)} alt={`${game.ateam} logo`} />
    </div>
  );
}

GameTile.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  game: PropTypes.object.isRequired,
};

export default GameTile;
