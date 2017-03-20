import { connect } from 'react-redux';

import { requestAllForums } from '../../actions/forum_actions';
import ChannelsIndex from './channels_index.jsx';

const mapStateToProps = ({ forum, session }) => ({
  currentForum: session.currentUser,
  forum
});

const mapDispatchToProps = dispatch => ({
  requestAllForums: () => dispatch(requestAllForums())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelsIndex);
