import { connect } from 'react-redux';

import { signOut } from '../../actions/session_actions';
import {
  requestAllForums,
  requestSingleForum
} from '../../actions/forum_actions';
import { requestAllUsers } from '../../actions/user_actions';
import Messages from './messages';

const mapStateToProps = ({ session, forum, users }) => ({
  currentUser: session.currentUser,
  forum,
  users
});

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut()),
  requestAllForums: () => dispatch(requestAllForums()),
  requestSingleForum: name => dispatch(requestSingleForum(name)),
  requestAllUsers: users => dispatch(requestAllUsers(users))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

