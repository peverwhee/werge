import React, { Component } from 'react';
import './Login.css';
import logo from '../images/werge-logo.png';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {username:'', password:''};
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    // add authentication
    localStorage.setItem('username', this.state.username);
    this.props.history.push('/');
  }
  handleUsernameChange(e) {
    this.setState({username:e.target.value});
  }
  handlePasswordChange(e) {
    this.setState({password:e.target.value});
  }
  render() {
    return (
      <div className="login">
        <img className="logo" src={logo} />
        <form className="login-form" onSubmit={this.handleSubmit}>
          <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleUsernameChange}/>
          <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handlePasswordChange}/>
          <button className="button">Log In</button>
        </form>
      </div>
    )
  }
}

export default Login;