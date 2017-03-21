import * as MessageAPIUtil from '../util/message_api_util';

export const RECEIVE_SINGLE_MESSAGE = 'RECEIVE_SINGLE_MESSAGE';

export const createMessage = message => dispatch => (
  MessageAPIUtil.createMessage(message)
    .then(createdMessage => dispatch(receiveSingleMessage(createdMessage)))
);

const receiveSingleMessage = message => ({
  type: RECEIVE_SINGLE_MESSAGE,
  message
});
