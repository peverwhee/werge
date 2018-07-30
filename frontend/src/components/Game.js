import React, { Component } from 'react';
import logo from '../images/werge-logo.png';
import './Game.css';
import UserDisplay from './UserDisplay';

export default class Game extends Component {
  render() {
    return(
        <div className="game">
          <img className='werge-logo' src={logo} />
          <div className = "user-information">
            <UserDisplay picturePosition="left" userId={this.props.match.params.otherplayerid}></UserDisplay>
            <UserDisplay picturePosition="right" userId={localStorage.getItem("myUserId")}></UserDisplay>
          </div>
        </div>
      );
  }
}