import { connect } from 'react-redux';

import { requestSingleForum } from '../../../actions/forum_actions';
import ForumDetails from './forum_details';

const mapStateToProps = ({ forum }) => ({
  currentForum: forum.currentForum
});

const mapDispatchToProps = dispatch => ({
  requestSingleForum: name => dispatch(requestSingleForum(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForumDetails);
