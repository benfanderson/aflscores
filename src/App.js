import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import socketIOClient from 'socket.io-client';
import Front from './Front';
import RoundGames from './RoundGames';
import ClubGames from './ClubGames';
import Rounds from './Rounds';
import Clubs from './Clubs';

const ENDPOINT = 'http://127.0.0.1:4001';

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
      <Switch>
        <Route exact path="/">
          {' '}
          <Front />
        </Route>
        <Route exact path="/rounds">
          {' '}
          <Rounds />
          {' '}
        </Route>
        <Route exact path="/clubs">
          {' '}
          <Clubs />
          {' '}
        </Route>
        <Route path="/rounds/:id"><RoundGames games={liveScores} /></Route>
        <Route path="/clubs/:id"><ClubGames games={liveScores} /></Route>
      </Switch>
    </>

  );
}

export default App;
