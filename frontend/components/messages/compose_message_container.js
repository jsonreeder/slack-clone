import { connect } from 'react-redux';

import { createMessage } from '../../actions/message_actions';
import ComposeMessage from './compose_message';

const mapStateToProps = ({ forum, session }) => ({
  currentForum: forum,
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createMessage: message => dispatch(createMessage(message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComposeMessage);
