import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import SplashContainer from './splash/splash_container';
import SessionFormContainer from './session/session_form_container';
import MessagesContainer from './messages/messages_container';
import ForumDetailsContainer from './forum-details/forum_details_container';
import ChannelsIndexContainer from './channels/channels_index_container';

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
      replace('/messages/general/details');
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
            path="/messages/:forumName"
            component={ MessagesContainer }
            onEnter={ _ensureLoggedIn }
          >
            <Route
              path="/messages/:forumName/details"
              component={ ForumDetailsContainer }
              onEnter={ _ensureLoggedIn }
            />
          </Route>
          <Route
            path="/browse"
            component={ ChannelsIndexContainer }
            onEnter={ _ensureLoggedIn }
          />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
