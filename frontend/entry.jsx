import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  // TODO: Remove from window after development
  window.store = store;

  ReactDOM.render(
    <Root />,
    root
  );
});

export default Root;
