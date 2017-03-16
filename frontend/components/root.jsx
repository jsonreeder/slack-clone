import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import SessionFormContainer from './session/session_form_container';

const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App } />
        <Route
          path="/try"
          component={ SessionFormContainer }
          onEnter={ _redirectIfLoggedIn }
        />
        <Route
          path="/join"
          component={ SessionFormContainer }
          onEnter={ _redirectIfLoggedIn }
        />
        <Route
          path="/signin"
          component={ SessionFormContainer }
          onEnter={ _redirectIfLoggedIn }
        />
      </Router>
    </Provider>
  );
};

export default Root;
