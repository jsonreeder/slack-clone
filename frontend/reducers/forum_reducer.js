import merge from 'lodash/merge';

import {
  RECEIVE_ALL_FORUMS,
  RECEIVE_SINGLE_FORUM
} from '../actions/forum_actions';

const ForumReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
  case RECEIVE_ALL_FORUMS:
    return merge({}, {
      forums: Object.values(action.forums)
    });
  case RECEIVE_SINGLE_FORUM:
    let newState = merge({}, state, {
      currentForum: action.forum
    });
    newState.currentForum.members = action.forum.members;
    return newState;
  default:
    return state;
  }
};

export default ForumReducer;
