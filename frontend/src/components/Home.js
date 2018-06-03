import React, { Component } from 'react';
import './Home.css';
import CurrentGames from './CurrentGames'
import {NavLink} from 'react-router-dom';
import logo from '../images/werge-logo.png'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <img className='home-logo' src={logo} />
        <CurrentGames></CurrentGames>
        <div className="button-area">
          <NavLink to="/newgame">
            <button className="main-button new-game-button">New Game</button>
          </NavLink>
          <NavLink to="/history">
            <button className="main-button history-button">Game History</button>
          </NavLink>
          <NavLink to="/login">
            <button className="main-button log-out-button">Log Out</button>
          </NavLink>
        </div>
      </div>
    );
  }
}
export default Home;