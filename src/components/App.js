import React, { useState, useEffect } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import socketIOClient from 'socket.io-client';
import Front from './Front';
import RoundGames from './RoundGames';
import ClubGames from './ClubGames';
import Rounds from './Rounds';
import Clubs from './Clubs';
import Navbar from './Navbar';
import '../../public/styles/_base.scss';

const ENDPOINT = 'https://afl-server.herokuapp.com/';

function App() {
  const [liveScores, setLiveScores] = useState('');

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
          <Route path="/rounds/:id"><RoundGames games={liveScores} /></Route>
          <Route path="/clubs/:id"><ClubGames games={liveScores} /></Route>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
