import React, { useState, useEffect } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import socketIOClient from 'socket.io-client';
import Front from './Front';
import RoundGames from './RoundGames';
import ClubGames from './ClubGames';
import Rounds from './Rounds';
import Clubs from './Clubs';
import Navbar from './Navbar';
import '../../public/styles/_base.scss';

// type GamesProp = { games:
//   {date: string, tz: string, hteam: string, hgoals: number,
//     hbehinds: number, hscore: number, ateam: string, agoals: number,
//     abehinds: number, ascore: number, complete: number, venue: string,
//     round: number, id: number
//   }[]
// }

const ENDPOINT = 'https://afl-server.herokuapp.com/';

function App() {
  const [liveScores, setLiveScores] = useState([]);

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on('liveScores', (data) => {
      setLiveScores(data);
    });
  }, []);

  return (
    <>
      <HashRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Front />
          </Route>
          <Route exact path="/rounds">
            <Rounds />
          </Route>
          <Route exact path="/clubs">
            <Clubs />
          </Route>
          <Route path="/rounds/:URLid"><RoundGames games={liveScores} /></Route>
          <Route path="/clubs/:URLid"><ClubGames games={liveScores} /></Route>
        </Switch>
      </HashRouter>
    </>
  );
}

export default hot(App);
