import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ForumReducer from './forum_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  forum: ForumReducer
});

export default RootReducer;
