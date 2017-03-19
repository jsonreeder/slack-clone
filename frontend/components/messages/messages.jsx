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
    const sidebarBody = <div className="sidebar-body">
      {this.channelsJoined()}
      {this.usersIndex()}
    </div>;

    return(
      <div className="sidebar-container">
        {this.sidebarHeader()}
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
  sidebarHeader () {
    let title;
    let username;
    if (this.props.currentUser) {
      username = this.props.currentUser.username;
      title = <div>
        <h1>{username[0].toUpperCase() + username.slice(1)}</h1>
        <ul className="sub-header">
          <li>@{username}</li>
        </ul>
      </div>;
    }

    return(
      <ul className="sidebar-header">
        <li className="name">{title}</li>
        <li>
          <Link onClick={this.props.signOut}>
            <i className="fa fa-sign-out" aria-hidden="true"></i>
          </Link>
        </li>
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
    let detailsLinks;
    if (this.props.forum.currentForum) {
      title = <div>
        <h1>#{this.props.forum.currentForum.name}</h1>
        <ul className="sub-header">
          <li>2</li>
          <li>Description</li>
        </ul>
      </div>;
      detailsLinks = <Link
          to={`/messages/${this.props.forum.currentForum.name}/details`}
        >
          <i className="fa fa-columns" aria-hidden="true"></i>
      </Link>;
    }

    return(
      <ul className="forum-header">
        <li>{title}</li>
        <li>{detailsLinks}</li>
      </ul>
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
