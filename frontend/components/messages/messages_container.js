import { connect } from 'react-redux';

import { signOut } from '../../actions/session_actions';
import {
  requestAllForums,
  requestSingleForum
} from '../../actions/forum_actions';
import Messages from './messages';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut()),
  requestAllForums: () => dispatch(requestAllForums()),
  requestSingleForum: name => dispatch(requestSingleForum(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

