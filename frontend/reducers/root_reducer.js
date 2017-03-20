import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ForumReducer from './forum_reducer';
import UserReducer from './user_reducer';
import MessageReducer from './messages_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  forum: ForumReducer,
  users: UserReducer,
  messages: MessageReducer
});

export default RootReducer;
