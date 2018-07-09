import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import NewGame from './components/NewGame';
import Game from './components/Game';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/newgame" component={NewGame} />
        <Route exact path="/game/:otherplayerid" component={Game} />
      </Switch>
    );
  }
}

export default App;
