import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

export const requestAllUsers = () => dispatch => (
  UserAPIUtil.fetchAllUsers()
    .then(fetchedUsers => dispatch(receiveAllUsers(fetchedUsers)))
);

const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
});
