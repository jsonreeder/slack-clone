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
    } else if (this.props.params.forumName !== newProps.params.forumName) {
      this.props.requestSingleForum(newProps.params.forumName);
    }
  }

  componentDidMount() {
    this.props.requestAllForums();
    this.props.requestSingleForum(this.props.params.forumName);
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
    let title;
    if (this.props.forum.currentForum) {
      title = <h1 className="forum-name">
        #{this.props.forum.currentForum.name}
      </h1>;
    }

    return(
      <div className="forum-header">
        {title}
      </div>
    );
  }

  forumBody () {
    return(
      <div className="forum-body">
        {this.messageContainer()}
        {this.forumDetail()}
      </div>
    );
  }

  messageContainer () {
    return(
      <div className="message-container">
        {this.messageHistory()}
        {this.compose()}
      </div>
    );
  }

  forumDetail () {
    let title;
    let topic;
    if (this.props.forum.currentForum) {
      title = <h1 className="forum-title">
          About #{this.props.forum.currentForum.name}
        </h1>;
      topic = <div className="forum-topic">
          {this.props.forum.currentForum.topic}
        </div>;
    }

    return(
      <div className="forum-detail">
        {title}
        {topic}
      </div>
    );
  }

  // Message

  messageHistory () {
    return(
      <div className="message-history">
        MessageHistory
      </div>
    );
  }

  compose () {
    return(
      <div className="compose">
        Message #general (coming soon)
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
