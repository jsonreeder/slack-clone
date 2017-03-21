import { connect } from 'react-redux';

import { requestAllForums, createForum } from '../../actions/forum_actions';
import { requestAllUsers } from '../../actions/user_actions';

import DirectMessageForm from './direct_message_form';

const mapStateToProps = ({ session, users }) => ({
  currentUser: session.currentUser,
  allUsers: users.allUsers
});

const mapDispatchToProps = dispatch => ({
  requestAllUsers: users => dispatch(requestAllUsers(users)),
  createForum: (currentUser, otherUsers) => dispatch(createForum(currentUser, otherUsers))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectMessageForm);
