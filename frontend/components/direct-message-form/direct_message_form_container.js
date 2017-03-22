import { connect } from 'react-redux';

import { requestAllUsers } from '../../actions/user_actions';
import { addDirectMessage } from '../../actions/session_actions';

import DirectMessageForm from './direct_message_form';

const mapStateToProps = ({ session, users }) => ({
  currentUser: session.currentUser,
  allUsers: users.allUsers
});

const mapDispatchToProps = dispatch => ({
  requestAllUsers: users => dispatch(requestAllUsers(users)),
  addDirectMessage: (currentUser, otherUsers) => dispatch(addDirectMessage(currentUser, otherUsers))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectMessageForm);
