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
    this.props.requestAllUsers();
  }

  // Parents
  sidebar (username, signOut) {
    return(
      <div className="sidebar-container">
        {this.userInfo(username, signOut)}
        {this.channelsIndex()}
        {this.usersIndex()}
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

  channelsIndex () {
    let channels;
    if (this.props.forum.forums) {
      channels = (
        this.props.forum.forums.map((forum, idx) => (
          <li key={idx}>
            <Link to={`/messages/${forum.name}`}>
              # {forum.name}
            </Link>
          </li>
        ))
      );
    }

    return(
      <div className="channels-list">
        <h2>Channels</h2>
        <ul>
          {channels}
        </ul>
      </div>
    );
  }

  usersIndex () {
    let users;
    if (this.props.users.allUsers) {
      const allUsers = this.props.users.allUsers;
      users = <ul>
        {allUsers.map(user => (
          <li>@ {user.username}</li>
         ))}
      </ul>;
    }

    return (
      <div className="users-index">
        <h2>Users</h2>
        <ul>
          {users}
        </ul>
      </div>
    )
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
    return(
      <ul className="forum-detail">
        <li>{this.forumAbout()}</li>
        <li>{this.forumMembers()}</li>
      </ul>
    );
  }

  // Forum Detail

  forumAbout () {
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
      <div className="forum-about">
        {title}
        {topic}
      </div>
    );
  }

  forumMembers () {
    const title = <h1>Members</h1>;
    const members = <ul>
      <li>@example member</li>
    </ul>;

    return(
      <div className="forum-members">
        {title}
        {members}
      </div>
    );
  }

  // Message

  messageHistory () {
    let greeting;
    if (this.props.forum.currentForum) {
      greeting = <p className="forum-greeting">
        {this.props.forum.currentForum.greeting}
      </p>;
    }

    return(
      <div className="message-history">
        {greeting}
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
