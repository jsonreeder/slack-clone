import { connect } from 'react-redux';

import { requestAllForums, createForum } from '../../actions/forum_actions';
import { requestAllUsers } from '../../actions/user_actions';
import { updateDirectMessages } from '../../actions/session_actions';
import { addDirectMessage } from '../../actions/session_actions';

import DirectMessageForm from './direct_message_form';

const mapStateToProps = ({ session, users }) => ({
  currentUser: session.currentUser,
  allUsers: users.allUsers
});

const mapDispatchToProps = dispatch => ({
  requestAllForums: forums => dispatch(requestAllForums(forums)),
  requestAllUsers: users => dispatch(requestAllUsers(users)),
  createForum: (currentUser, otherUsers) => dispatch(createForum(currentUser, otherUsers)),
  updateDirectMessages: user => dispatch(updateDirectMessages(user)),
  addDirectMessage: (currentUser, otherUsers) => dispatch(addDirectMessage(currentUser, otherUsers))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectMessageForm);
