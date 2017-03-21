import { connect } from 'react-redux';

import { requestAllForums, createForum } from '../../actions/forum_actions';
import { requestAllUsers } from '../../actions/user_actions';
import { createMembership } from '../../actions/membership_actions';

import DirectMessageForm from './direct_message_form';

const mapStateToProps = ({ forum, session, users }) => ({
  currentUser: session.currentUser,
  forum,
  allUsers: users.allUsers
});

const mapDispatchToProps = dispatch => ({
  requestAllForums: () => dispatch(requestAllForums()),
  requestAllUsers: users => dispatch(requestAllUsers(users)),
  createMembership: forumName => dispatch(createMembership(forumName)),
  createForum: (currentUser, otherUsers) => dispatch(createForum(currentUser, otherUsers))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectMessageForm);
