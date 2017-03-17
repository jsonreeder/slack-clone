import merge from 'lodash/merge';

import { RECEIVE_ALL_USERS } from '../actions/user_actions';

const UserReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
  case RECEIVE_ALL_USERS:
    return merge({}, {
      allUsers: Object.values(action.users)
    });
  default:
    return state;
  }
};

export default UserReducer;
