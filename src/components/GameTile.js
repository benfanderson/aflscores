/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import clubLogo from '../club_logo';
import gameWinner from '../game_winner';
import styles from '../../public/styles.css';

function GameTile(props) {
  const { game } = props;
  const gameTime = moment(game.date + game.tz).format('dddd, MMMM D h:mma');
  return (
    <div className={styles.gameTile}>
      <img src={clubLogo(game.hteam)} alt={`${game.hteam} logo`} />
      <div className={styles.gameInfo}>
        <p>{game.complete === 0 ? `${game.hteam} v ${game.ateam}` : game.complete < 100 ? `${game.hteam} ${game.hscore} ${game.ateam} ${game.hscore}` : gameWinner(game) }</p>
        <p>{game.venue}</p>
        <p>{game.complete === 0 ? `${gameTime}` : game.complete < 100 ? <span className={styles.live}>LIVE</span> : null}</p>
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
