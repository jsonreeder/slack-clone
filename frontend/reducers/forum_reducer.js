import merge from 'lodash/merge';

import {
  RECEIVE_ALL_FORUMS,
  RECEIVE_SINGLE_FORUM
} from '../actions/forum_actions';

const ForumReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
  case RECEIVE_ALL_FORUMS:
    return merge({}, action.forums);
  case RECEIVE_SINGLE_FORUM:
    return merge({}, state, {
      [action.forum.name]: action.forum
    });
  default:
    return state;
  }
};

export default ForumReducer;
