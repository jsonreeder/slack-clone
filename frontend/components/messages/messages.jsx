import React from 'react';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';

class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  // Lifecycle methods
  componentWillReceiveProps(newProps) {
    if (!newProps.currentUser) {
      hashHistory.push('/');
    }
  }

  // Parents
  sidebar (username, signOut) {
    return(
      <div className="sidebar-container">
        {this.userInfo(username, signOut)}
      </div>
    );
  }

  home () {
    return(
      <div className="home-container">
        {this.forumHeader()}
        {this.forumBody()}
      </div>
    );
  }

  // Children

  // Sidebar
  userInfo (username, signOut) {
    const formattedName = username[0].toUpperCase() + username.slice(1);
    return(
      <ul className="user-info">
        <li className="name">{formattedName}</li>
        <li>@{username}</li>
        <li><button onClick={signOut}>Sign out</button></li>
      </ul>
    );
  }

  // Home
  forumHeader () {
    return(
      <div className="forum-header">
        <h1 className="forum-name">#general</h1>
      </div>
    );
  }

  forumBody () {
    return(
      <div className="forum-body">
        <p>
          Forum Body
        </p>
        {this.forumDetail()}
      </div>
    );
  }

  forumDetail () {
    return(
      <div className="forum-detail">
        <h1>About #general</h1>
      </div>
    );
  }

  // Render
  render () {
    if (!this.props.currentUser) {
      return(
        <div></div>
      );
    } else {
      return(
        <div className="messages-container">
          {this.sidebar(this.props.currentUser.username, this.props.signOut)}
          {this.home()}
        </div>
      );
    }
  }
}

export default Message;
