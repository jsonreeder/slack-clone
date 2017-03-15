import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const join = user => dispatch => (
  APIUtil.join(user)
    .then(newUser => dispatch(receiveCurrentUser(newUser)))
);

export const signIn = user => dispatch => (
  APIUtil.signIn(user)
    .then(signedInUser => dispatch(receiveCurrentUser(signedInUser)))
);

export const signOut = () => dispatch => (
  APIUtil.signOut()
    .then(signedOutUser => dispatch(receiveCurrentUser(null)))
);

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});
