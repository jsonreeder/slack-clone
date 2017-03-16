import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import SessionFormContainer from './session/session_form_container';
import MessagesContainer from './messages/messages_container';
import SplashContainer from './splash/splash_container';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/signin');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/messages');
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute
            component={ SplashContainer }
            onEnter={ _redirectIfLoggedIn }
          />
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
          <Route
            path="/messages"
            component={ MessagesContainer }
            onEnter={ _ensureLoggedIn }
          />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
