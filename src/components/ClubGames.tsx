import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import GameTile from './GameTile';
import '../../public/styles/styles.scss';
import createTitle from '../create_title';
import Footer from './footer';

type GamesProp = { games:  {date: string, tz: string, hteam: string, hgoals: number, hbehinds: number, hscore: number, ateam: string, agoals: number, abehinds: number, ascore: number, complete: number, venue: string, round: number, id: number}[]}

function ClubGames(props: GamesProp) {
  const { games } = props;
  const bulkGamesArray = Array.from(games);
  const { URLid } = useParams<{URLid:string}>();
  const roundArray: { date: string; tz: string; hteam: string; hgoals: number; hbehinds: number; hscore: number; ateam: string; agoals: number; abehinds: number; ascore: number; complete: number; venue: string; id: number }[] = [];

  bulkGamesArray.map(
    // eslint-disable-next-line array-callback-return
    (club) => {
      if (club.hteam === URLid || club.ateam === URLid) {
        roundArray.push(club);
      }
    },
  );

  return (

    roundArray.length > 0
      ? (
        <div id="container">
          <h2>{createTitle(URLid)}</h2>
          <div id="gamesContainer">
            {
              roundArray.map((game) => (
                <GameTile key={game.id} game={game} />
              ))
              }
          </div>
          <Footer />
        </div>
      )
      : <p>Loading  . . .</p>
  );
}

ClubGames.propTypes = {
  games: PropTypes.string.isRequired,
};

export default ClubGames;
