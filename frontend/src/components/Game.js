import React, { Component } from 'react';
import logo from '../images/werge-logo.png';
import './Game.css';

export default class Game extends Component {
  render() {
    return(
        <div className="game">
          <img className='werge-logo' src={logo} />
        </div>
      );
  }
}