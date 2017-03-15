import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const join = user => dispatch => (
  APIUtil.join(user)
    .then(newUser => dispatch(receiveCurrentUser(newUser)),
          err => dispatch(receiveErrors(err.responseJSON)))
);

export const signIn = user => dispatch => (
  APIUtil.signIn(user)
    .then(signedInUser => dispatch(receiveCurrentUser(signedInUser)),
          err => dispatch(receiveErrors(err.responseJSON)))
);

export const signOut = () => dispatch => (
  APIUtil.signOut()
    .then(signedOutUser => dispatch(receiveCurrentUser(null)))
);

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
