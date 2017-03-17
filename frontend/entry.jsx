import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

// TODO: Remove import after development
import { requestAllForums, requestSingleForum } from './actions/forum_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  // TODO: Remove from window after development
  window.store = store;
  window.requestAllForums = requestAllForums;
  window.requestSingleForum = requestSingleForum;

  ReactDOM.render(
    <Root store={ store }/>,
    root
  );
});

export default Root;
