import React, { Component } from 'react';
import logo from './logo.svg';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <h1 className="Home-title">Werge</h1>
        </header>
        <p className="Home-intro">
          To get started, edit <code>src/Home.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
export default Home;