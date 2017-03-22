import * as ForumAPIUtil from '../util/forum_api_util';

export const RECEIVE_ALL_FORUMS = 'RECEIVE_ALL_FORUMS';
export const RECEIVE_SINGLE_FORUM = 'RECEIVE_SINGLE_FORUM';
export const RECEIVE_SINGLE_MESSAGE = 'RECEIVE_SINGLE_MESSAGE';

export const requestAllForums = () => dispatch => (
  ForumAPIUtil.fetchAllForums()
    .then(fetchedForums => dispatch(receiveAllForums(fetchedForums)))
);

export const requestSingleForum = name => dispatch => (
  ForumAPIUtil.fetchSingleForum(name)
    .then(fetchedForum => dispatch(receiveSingleForum(fetchedForum)))
);

export const createForum = (currentUser, otherUsers) => dispatch => (
  ForumAPIUtil.createForum(currentUser, otherUsers)
    .then(createdForum => dispatch(receiveSingleForum(createdForum)))
);

export const createMessage = message => dispatch => (
  ForumAPIUtil.createMessage(message)
    .then(createdMessage => dispatch(receiveSingleMessage(createdMessage)))
);

const receiveAllForums = forums => ({
  type: RECEIVE_ALL_FORUMS,
  forums
});

const receiveSingleForum = forum => ({
  type: RECEIVE_SINGLE_FORUM,
  forum
});

export const receiveSingleMessage = message => ({
  type: RECEIVE_SINGLE_MESSAGE,
  message
});
