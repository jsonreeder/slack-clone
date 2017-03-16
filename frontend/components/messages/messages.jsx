import React from 'react';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';

class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(newProps) {
    if (!newProps.currentUser) {
      hashHistory.push('/');
    }
  }

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
        <h1 className="forum-name">#general</h1>
      </div>
    );
  }

  render () {
    return(
      <div className="messages-container">
        {this.sidebar(this.props.currentUser.username, this.props.signOut)}
        {this.home()}
      </div>
    );
  }
}

export default Message;
