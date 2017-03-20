import merge from 'lodash/merge';

import { RECEIVE_SINGLE_MESSAGE } from '../actions/message_actions';

const MessageReducer = (state = {}, action) => {
  const newState = merge({}, state);

  switch(action.type) {
  case RECEIVE_SINGLE_MESSAGE:
    newState.lastMessage = action.message;
    return newState;
  default:
    return newState;
  }
};

export default MessageReducer;
