import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';

import ComposeMessage from './compose_message';

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
    }

    if (this.props.params.forumName !== newProps.params.forumName) {
      this.props.requestSingleForum(newProps.params.forumName);
    }
  }

  componentDidMount() {
    $('html,body').css('overflow','hidden');
    this.props.requestAllUsers();
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    const node = ReactDOM.findDOMNode(this.messagesEnd);
    if (node) {
      node.scrollIntoView({behavior: "smooth"});
    }
  }

  // Parents
  sidebar (username, signOut) {
    const sidebarBody = <div className="sidebar-body">
      {this.channelsJoined()}
      {this.directMessagesJoined()}
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
      <Link onClick={this.props.signOut}>
        <ul className="sidebar-header">
          <li className="name">{title}</li>
          <li>
              <i className="fa fa-sign-out" aria-hidden="true"></i>
          </li>
        </ul>
      </Link>
    );
  }

  channelsJoined () {
    let channels;
    if (this.props.currentUser.channels) {
      channels = (
        this.props.currentUser.channels.map((channel, idx) => (
          <Link
            to={`/messages/${channel.name}/details`}
            key={idx}
          >
            <li># {channel.name}</li>
          </Link>
        ))
      );
    }

    return(
      <div className="channels-list">
        <Link to="/browse">
          <h2>Channels</h2>
        </Link>
        <ul>
          {channels}
        </ul>
      </div>
    );
  }

  modifiedName (original, currentUsername) {
    return original.replace(currentUsername, '')
                   .replace(/^-|-$/, '')
                   .replace('--', '-');
  }

  directMessagesJoined () {
    let directMessages;
    if (this.props.currentUser.directMessages) {
      directMessages = (
        this.props.currentUser.directMessages.map((directMessage, idx) => (
          <Link
            to={`/messages/${directMessage.name}/details`}
            key={idx}
          >
            <li>
              @ {this.modifiedName(directMessage.name, this.props.currentUser.username)}
            </li>
          </Link>
        ))
      );
    }

    return(
      <div className="direct-messages-list">
        <Link to="/direct_message">
          <h2>Direct Messages</h2>
        </Link>
        <ul>
          {directMessages}
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
          <li>{this.props.forum.currentForum.members.length}</li>
          <li id="sub-header-topic">{`${this.props.forum.currentForum.topic}`}</li>
        </ul>
      </div>;
    }

    return(
      <ul className="forum-header">
        <li>{title}</li>
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

  // Message History


  singleMessage ({body, username, createdAt}, idx) {
    const date = new Date(createdAt);
    const hours24 = date.getHours();
    const hours12 = (hours24<13 ? hours24 : hours24 % 12);
    const amPm = (hours24<12 ? 'AM' : 'PM');
    const minutes = date.getMinutes();
    const minutesPadded = (minutes>9 ? '' : '0') + minutes;
    const time = `${hours12}:${minutesPadded} ${amPm}`;

    return(
      <div key={idx} className="single-message-container">
        <div className="single-message-header">
          <div className="sender">
            {username}
          </div>
          <div className="time">
            {time}
          </div>
        </div>
        <div className="single-message-content">
          {body}
        </div>
      </div>
    );
  }

  messageHistory (history)  {
    let messageHistory = [];
    if (history) {
      messageHistory = history;
    }

    return(
      <div
        id="message-history-container"
        className="message-history-container"
      >
        <div ref={(el) => { this.messagesEnd = el; }}></div>
        {
          messageHistory.map((message, idx) => (
            this.singleMessage(message, idx)
          ))
        }
      </div>
    );
  }

  messageContainer () {
    let history;
    let currentForum;
    if (this.props.forum.currentForum) {
      history = this.props.forum.currentForum.messages;
      currentForum = this.props.forum.currentForum;
    }

    return(
      <div className="message-container">
        {this.messageHistory(history)}
        <ComposeMessage
          currentForum={currentForum}
          createMessage={this.props.createMessage}
          currentUser={this.props.currentUser}
        />
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
