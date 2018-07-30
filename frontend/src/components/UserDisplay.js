import React, { Component } from 'react';
import pupGabePicture from '../images/pupGabe.jpg';
import kitCourtPicture from '../images/kitCourt.jpg';
import './UserDisplay.css';

class UserDisplay extends Component {
  constructor(props) {
    super(props);
  }

  loadData() {
    // will call DB for username, profile picture
    if(this.props.userId === '0') {
      this.setState({
        profilePictureName: pupGabePicture,
        username: "tambchop"
      });
    }
    else {
      this.setState({
        profilePictureName: kitCourtPicture,
        username: "peverwhee"
      });
    }
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    if (!this.state) {
      return(null);
    }
    const profilePicture =
      <img className="profile-picture" src={this.state.profilePictureName}/>;
    const username = 
      <span className="username-text"> {this.state.username} </span>;
    return this.props.picturePosition==="left" ? (
        <div className="user-display">
          {profilePicture}
          {username}
        </div>
      ) : (
        <div className="user-display">
          {username}
          {profilePicture}
        </div>
      );
  }
}

export default UserDisplay;