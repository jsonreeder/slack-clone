import { connect } from 'react-redux';

import ComposeMessage from './compose_message';

const mapStateToProps = ({ forum }) => ({
  currentForum: forum.currentForum
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComposeMessage);
