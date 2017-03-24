import * as SessionAPIUtil from '../util/session_api_util';
import * as ForumAPIUtil from '../util/forum_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_NEW_DIRECT_MESSAGE = 'RECEIVE_NEW_DIRECT_MESSAGE';

export const join = user => dispatch => (
  SessionAPIUtil.join(user)
    .then(newUser => dispatch(receiveCurrentUser(newUser)),
          err => dispatch(receiveErrors(err.responseJSON)))
);

export const signIn = user => dispatch => (
  SessionAPIUtil.signIn(user)
    .then(signedInUser => dispatch(receiveCurrentUser(signedInUser)),
          err => dispatch(receiveErrors(err.responseJSON)))
);

export const signOut = () => dispatch => (
  SessionAPIUtil.signOut()
    .then(signedOutUser => dispatch(receiveCurrentUser(null)))
);

export const createMembership = forumName => dispatch => (
  SessionAPIUtil.createMembership(forumName)
    .then(updatedCurrentUser => (
      dispatch(receiveCurrentUser(updatedCurrentUser))
    ))
);

export const addDirectMessage = (currentUser, otherUsers) => dispatch => (
  ForumAPIUtil.createForum(currentUser, otherUsers)
    .then(createdForum => {
      dispatch(receiveNewDirectMessage(createdForum));
      hashHistory.push(`/messages/${createdForum.name}`);
    })
);

const receiveNewDirectMessage = directMessage => ({
  type: RECEIVE_NEW_DIRECT_MESSAGE,
  directMessage
});

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
