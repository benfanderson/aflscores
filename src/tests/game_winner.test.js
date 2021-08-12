import React from 'react';
import gameWinner from '../game_winner';

describe('gameWinner fucntion', () => {
  it('should display home team first if their final score is greater than the away team', () => {
    expect(gameWinner({
      roundname: 'Round 1', date: '2021-03-20 16:35:00', hgoals: 15, winner: 'Adelaide', ascore: 91, ateamid: 7, hteam: 'Adelaide', abehinds: 13, venue: 'Adelaide Oval', tz: '+11:00', hteamid: 1, ateam: 'Geelong', is_final: 0, hbehinds: 13, winnerteamid: 1, is_grand_final: 0, year: 2021, updated: '2021-03-20 19:40:04', complete: 100, id: 6243, localtime: '2021-03-20 16:05:00', agoals: 13, hscore: 103, round: 1,
    })).toEqual(
      <>
        <p>
          <strong>
            Adelaide
            {' '}
            {15}
            .
            {13}
            {' '}
            {103}
          </strong>
        </p>
        <p>
          Geelong
          {' '}
          {13}
          .
          {13}
          {' '}
          {91}
        </p>
      </>,
    );
  });
  it('should display away team first if their final score is greater than the home team', () => {
    expect(gameWinner({
      roundname: 'Round 1', ascore: 125, winner: 'Sydney', hgoals: 14, date: '2021-03-20 19:45:00', abehinds: 11, hteam: 'Brisbane Lions', ateamid: 16, venue: 'Gabba', hbehinds: 10, winnerteamid: 16, tz: '+11:00', ateam: 'Sydney', is_final: 0, hteamid: 2, year: 2021, updated: '2021-03-20 22:40:03', is_grand_final: 0, complete: 100, hscore: 94, agoals: 19, round: 1, localtime: '2021-03-20 18:45:00', id: 6245,
    })).toEqual(
      <>
        <p>
          <strong>
            Sydney
            {' '}
            {19}
            .
            {11}
            {' '}
            {125}
          </strong>
        </p>
        <p>
          Brisbane Lions
          {' '}
          {14}
          .
          {10}
          {' '}
          {94}
        </p>
      </>,
    );
  });
});
