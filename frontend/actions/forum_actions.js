import * as ForumAPIUtil from '../UTIL/forum_api_util';

export const RECEIVE_ALL_FORUMS = 'RECEIVE_ALL_FORUMS';
export const RECEIVE_SINGLE_FORUM = 'RECEIVE_SINGLE_FORUM';

export const requestAllForums = () => dispatch => (
  ForumAPIUtil.fetchAllForums()
    .then(fetchedForums => dispatch(receiveAllForums(fetchedForums)))
);

export const requestSingleForum = name => dispatch => (
  ForumAPIUtil.fetchSingleForum(name)
    .then(fetchedForum => dispatch(receiveSingleForum(fetchedForum)))
);

const receiveAllForums = forums => ({
  type: RECEIVE_ALL_FORUMS,
  forums
});

const receiveSingleForum = forum => ({
  type: RECEIVE_SINGLE_FORUM,
  forum
});
