import React, { Component } from 'react';
import CurrentGames from './CurrentGames'
import {NavLink} from 'react-router-dom';
import logo from '../images/werge-logo.png'
import User from '../models/user'
import "./NewGame.css"
import "./general.css"

class NewGame extends Component {
  constructor() {
    super();
    this.setState({
      users:[]
    });
    this.handleClickUser = this.handleClickUser.bind(this);
  }
  componentWillMount() {
    this.setState({
      users:[
        new User(0, "tambchop"),
        new User(1, "peverwhee")]
    })
  }
  handleClickUser(userid) {
    this.props.history.push("/game/"+userid);
  }
  render() {
    let usernames = [];
    for (let i =0; i<this.state.users.length; i++) {
      const user = this.state.users[i];
      usernames.push(
        <button 
          className="main-button" 
          key={user.id}
          onClick={this.handleClickUser.bind(this, user.id)}> 
          {user.username} 
        </button>
      );
    }
    return (
      <div className="new-game">
        <img className='werge-logo' src={logo} />
          <div className='users-area'>
            {usernames}
          </div>
      </div>
    );
  }
}
export default NewGame;