import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
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
  case ADD_DIRECT_MESSAGE:
    // console.log(state);
    // console.log("reducer firing");
    // console.log(action);
    let newUser = merge({}, action.currentUser);
    newUser.directMessages.push(action.newDirectMessage);
    console.log(newUser);
    return newUser;
  default:
    return state;
  }
};

export default SessionReducer;
