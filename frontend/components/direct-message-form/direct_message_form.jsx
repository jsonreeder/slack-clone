import merge from 'lodash/merge';
import React from 'react';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';

class DirectMessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleCreateForum = this.handleCreateForum.bind(this);
    this.state = {
      selectedUsers: [],
      remainingUsers: [],
      filteredUsers: [],
      inputText: ""
    };
  }

  componentDidMount() {
    $('html,body').css('overflow','hidden');
    this.props.requestAllUsers();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.allUsers) {
      const usersWithoutCurrent = newProps.allUsers.filter(user => {
        if (user.username === this.props.currentUser.username) {
          return false;
        } else {
          return true;
        }
      });

      this.setState({
        remainingUsers: usersWithoutCurrent.map(user => user.username),
        filteredUsers: usersWithoutCurrent.map(user => user.username).sort()
      });
    }
  }

  generateForumTitle(currentUser, otherUsers) {
    const allUsers = [currentUser].concat(otherUsers).sort();
    return allUsers.join('-');
  }

  handleCreateForum() {
    return e => {
      e.preventDefault();
      const currentUser = this.props.currentUser.username;
      const otherUsers = this.state.selectedUsers;
      const forumTitle = this.generateForumTitle(currentUser, otherUsers);
      this.props.addDirectMessage(
        currentUser,
        otherUsers
      );
      hashHistory.push(`/messages/${forumTitle}`);
    };
  }

  usersIndexHeader() {
    return(
      <div className="channels-index-header">
        <div className="channels-index-nav">
          <ul className="escape">
            <Link to="/">
              <li id="x">&times;</li>
            </Link>
          </ul>
        </div>
        <h1>New Direct Message</h1>
      </div>
    );
  }

  selectUser(user) {
    return e => {
      this.setState({
        selectedUsers: this.state.selectedUsers.concat(user)
      });
      const userIndex = this.state.remainingUsers.indexOf(user);
      this.state.remainingUsers.splice(userIndex, 1);
      const filteredUserIndex = this.state.filteredUsers.indexOf(user);
      this.state.filteredUsers.splice(filteredUserIndex, 1);
    };
  }

  constrainUsersList() {
    return e => {
      this.setState({
        inputText: e.currentTarget.value
      });
      let query = RegExp(this.state.inputText);
      this.setState({
        filteredUsers: this.state.remainingUsers.filter(user => query.test(user))
      });
    };
  }

  selectedUsers() {
    let users;
    let message = <p className="direct-message-form-text">
        Start a conversation by selecting users below
    </p>;
    if (this.state.selectedUsers) {
      users = this.state.selectedUsers.map((user, idx) => (
        <li key={idx}>{user}</li>
      ));
      if (this.state.selectedUsers[0]) {
        message = "";
      }
    }
    return(
      <ul className="selected-users">
        {users}
        {message}
      </ul>
    );
  }

  directMessageForm() {
    return(
      <form className="direct-message-form">
        <div className="direct-message-form-input-container">
        {this.selectedUsers()}
        </div>
        <input
          type="submit"
          value="Go"
          className="small-button gray"
          onClick={this.handleCreateForum()}
        />
      </form>
    );
  }

  usersIndexBody() {
    let usersList;
    if (this.state.filteredUsers[0]) {
      usersList = <li>Success</li>;
      usersList = <ul className="channels-index-channels-list">
        {this.state.filteredUsers.map((user, idx) => (
          <li key={idx}
              onClick={this.selectUser(user)}
            >
              {user}
          </li>
         ))}
      </ul>;
    }

    return(
      <div className="channels-index-body">
        <h2>Users you can message</h2>
        {usersList}
      </div>
    );
  }

  render() {
    return(
      <div className="channels-index-container">
        <div className="channels-index-selector-container">
          {this.usersIndexHeader()}
          {this.directMessageForm()}
          {this.usersIndexBody()}
        </div>
      </div>
    );
  }
}

export default DirectMessageForm;
