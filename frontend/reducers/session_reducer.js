import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SINGLE_FORUM,
  RECEIVE_ERRORS,
  ADD_DIRECT_MESSAGE
} from '../actions/session_actions';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
  case RECEIVE_CURRENT_USER:
    const currentUser = action.currentUser;
    return merge({}, _nullUser, {currentUser});
  case RECEIVE_ERRORS:
    const errors = action.errors;
    return merge({}, _nullUser, {errors});
  case RECEIVE_SINGLE_FORUM:
    let newState = merge({}, state);
    let directMessages = merge([], state.currentUser.directMessages);
    // console.log(newState);
    // console.log(directMessages);
    directMessages.push(action.forum);


    // let newestUser = merge({}, state.currentUser);

    // console.log(newestUser);
    // console.log(action);
    // newestUser.directMessages.push(action.forum);
    // console.log(newestUser);
    newState.currentUser.directMessages = directMessages;
    return newState;
  default:
    return state;
  }
};

export default SessionReducer;
