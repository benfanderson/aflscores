import React from 'react';

const gameWinner = (game: { hscore: number; ascore: number; hteam: string; hgoals: number;
  hbehinds: number; ateam: string; agoals: number; abehinds: number; }) => (
  game.hscore === game.ascore ? (
    <p>
      <>
        <p>
          {game.hteam}
          {' '}
          {game.hgoals}
          .
          {game.hbehinds}
          {' '}
          {game.hscore}
          {' '}
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
    </p>

  ) : game.hscore > game.ascore
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
    )
);

export default gameWinner;
