import React, { Component } from 'react';
import './Login.css';
import logo from '../images/werge-logo.png';

class Login extends Component {
  render() {
    return (
      <div className="login">
        <img className="logo" src={logo} />
        <form className="login-form">
          <input type="text" name="username" placeholder="username" />
          <input type="password" name="password" placeholder="password" />
          <button className="button">Log In</button>
        </form>
      </div>
    )
  }
}

export default Login;