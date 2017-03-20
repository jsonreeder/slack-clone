import merge from 'lodash/merge';

import {
  RECEIVE_ALL_FORUMS,
  RECEIVE_SINGLE_FORUM
} from '../actions/forum_actions';

const ForumReducer = (state = {}, action) => {
  const newState = merge({}, state);

  switch (action.type) {
  case RECEIVE_ALL_FORUMS:
    return merge({}, {
      forums: Object.values(action.forums)
    });
  case RECEIVE_SINGLE_FORUM:
    newState.currentForum = action.forum;
    return newState;
  default:
    return newState;
  }
};

export default ForumReducer;
