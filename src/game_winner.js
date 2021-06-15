import React from 'react';

const gameWinner = (game) => (game.hscore > game.ascore
  ? (
    <>
      <p>
        <strong>
          {game.hteam}
          {' '}
          {game.hgoals}
          .
          {game.hbehinds}
          {' '}
          {game.hscore}
          {' '}
        </strong>
      </p>
      <p>
        {' '}
        {game.ateam}
        {' '}
        {game.agoals}
        .
        {game.abehinds}
        {' '}
        {game.ascore}
      </p>
    </>
  )
  : (
    <>
      <p>
        <strong>
          {game.ateam}
          {' '}
          {game.agoals}
          .
          {game.abehinds}
          {' '}
          {game.ascore}
          {' '}
        </strong>
      </p>
      <p>
        {' '}
        {game.hteam}
        {' '}
        {game.hgoals}
        .
        {game.hbehinds}
        {' '}
        {game.hscore}
      </p>
    </>
  ));

export default gameWinner;
