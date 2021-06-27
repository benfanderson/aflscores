import React from 'react';
// import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import '../../public/styles/styles.scss';
import GameTile from './GameTile';
import createTitle from '../create_title';
import Footer from './footer';

type GamesProp = { games:
  {date: string, tz: string, hteam: string, hgoals: number,
    hbehinds: number, hscore: number, ateam: string, agoals: number,
    abehinds: number, ascore: number, complete: number, venue: string,
    round: number, id: number
  }[]
}

function RoundGames(props: GamesProp) {
  const { games } = props;
  const bulkGamesArray = Array.from(games);
  const { URLid } = useParams<{URLid:string}>();
  const roundNumber = parseInt(URLid, 10);
  const roundArray: { date: string; tz: string; hteam: string; hgoals: number;
    hbehinds: number; hscore: number; ateam: string; agoals: number;
    abehinds: number; ascore: number; complete: number; venue: string; id: number
 }[] = [];

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
        <div id="container">
          <h2>{createTitle(roundNumber)}</h2>
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

// RoundGames.propTypes = {
//   games: PropTypes.string.isRequired,
// };

export default RoundGames;
