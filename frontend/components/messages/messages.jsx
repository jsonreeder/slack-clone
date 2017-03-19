import React from 'react';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.children = this.props.children;
    this.detailsShown = false;
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
    $('html,body').css('overflow','hidden');
    this.props.requestAllForums();
    this.props.requestSingleForum(this.props.params.forumName);
    this.props.requestAllUsers();
  }

  // Parents
  sidebar (username, signOut) {
    const sidebarHeader = <div className="sidebar-header">
      {this.userInfo(username, signOut)}
    </div>;

    const sidebarBody = <div className="sidebar-body">
      {this.channelsJoined()}
      {this.usersIndex()}
    </div>;

    return(
      <div className="sidebar-container">
        {sidebarHeader}
        <div className="sidebar-filler"></div>
        {sidebarBody}
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

  channelsJoined () {
    let channels;
    if (this.props.currentUser.forums) {
      channels = (
        this.props.currentUser.forums.map((forum, idx) => (
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
        {allUsers.map((user, idx) => (
          <li key={idx}>@ {user.username}</li>
         ))}
      </ul>;
    }

    return (
      <div className="users-index">
        <h2>Direct Messages</h2>
        <ul>
          {users}
        </ul>
      </div>
    );
  }

  // Home

  forumHeader () {
    let title;
    if (this.props.forum.currentForum) {
      title = <h1 className="forum-name">
        #{this.props.forum.currentForum.name}
        <Link
          to={`/messages/${this.props.forum.currentForum.name}/details`}
        > [details] </Link>
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
        {this.children}
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
