import React from 'react';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';

class DirectMessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleCreateMembership = this.handleCreateMembership.bind(this);
  }

  componentDidMount() {
    this.props.requestAllForums();
    $('html,body').css('overflow','hidden');
    this.props.requestAllUsers();
  }

  handleCreateMembership(forumName) {
    return e => {
      this.props.createMembership(forumName);
      hashHistory.push(`/messages/${forumName}/details`);
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
        <h1>Direct Messages</h1>
      </div>
    );
  }

  directMessageForm() {
    return(
      <form className="direct-message-form">
        <div className="direct-message-form-input">
        <input
          type="text"
          placeholder="Start a conversation"
        />
        </div>
        <input
          type="submit"
          value="Go"
          className="small-button gray"
        />
      </form>
    );
  }

  usersIndexBody() {
    let usersList;
    if (this.props.allUsers) {
      usersList = <li>Success</li>;
      usersList = <ul className="channels-index-channels-list">
        {this.props.allUsers.map((user, idx) => (
          <li key={idx}
              onClick={this.handleCreateMembership(user.username)}
            >
              {user.username}
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
