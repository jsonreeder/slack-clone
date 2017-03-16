import { connect } from 'react-redux';
import { signOut } from '../../actions/session_actions';
import Messages from './messages';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

