import { connect } from 'react-redux';

import { createMessage } from '../../actions/message_actions';
import ComposeMessage from './compose_message';

const mapStateToProps = ({ forum }) => ({
  currentForum: forum.currentForum
});

const mapDispatchToProps = dispatch => ({
  createMessage: message => dispatch(createMessage(message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComposeMessage);
