import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import SplashContainer from './splash/splash_container';
import SessionFormContainer from './session/session_form_container';
import MessagesContainer from './messages/messages_container';
import ForumDetailsContainer from './forum-details/forum_details_container';
import ChannelsIndexContainer from './channels/channels_index_container';
import DirectMessageFormContainer from './direct-message-form/direct_message_form_container';

import { receiveSingleMessage } from '../actions/forum_actions';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
  }

  _ensureLoggedIn(nextState, replace) {
    this.setSocket(`channel_${nextState.params.forumName}`);
    const currentUser = this.props.store.getState().session.currentUser;
    if (!currentUser) {
      replace('/try');
    }
  }

  _redirectIfLoggedIn(nextState, replace) {
    const currentUser = this.props.store.getState().session.currentUser;
    if (currentUser) {
      replace('/messages/general/details');
    }
  }

    setSocket(channelName) {
      if (window.App.channel) {
        this.removeSocket();
      }
      this.addSocket(channelName);
    }

    removeSocket() {
      window.App.cable.subscriptions.remove(window.App.channel);
    }

    addSocket(channelName) {
      window.App.channel = window.App.cable.subscriptions.create({
        channel: 'RoomChannel',
        channel_name: channelName
      }, {
        connected: () => {},
        disconnected: () => {},
        received: (data) => {
          this.props.store.dispatch(receiveSingleMessage(data.message));
        }
      });
    }

  render() {
    return (
      <Provider store={ this.props.store }>
        <Router history={ hashHistory }>
          <Route path="/" component={ App }>
            <IndexRoute
              component={ SplashContainer }
              onEnter={ this._redirectIfLoggedIn }
            />
            <Route
              path="/try"
              component={ SessionFormContainer }
              onEnter={ this._redirectIfLoggedIn }
            />
            <Route
              path="/join"
              component={ SessionFormContainer }
              onEnter={ this._redirectIfLoggedIn }
            />
            <Route
              path="/signin"
              component={ SessionFormContainer }
              onEnter={ this._redirectIfLoggedIn }
            />
            <Route
              path="/messages/:forumName"
              component={ MessagesContainer }
              onEnter={ this._ensureLoggedIn }
            >
              <Route
                path="/messages/:forumName/details"
                component={ ForumDetailsContainer }
              />
            </Route>
            <Route
              path="/browse"
              component={ ChannelsIndexContainer }
              onEnter={ this._ensureLoggedIn }
            />
            <Route
              path="/direct_message"
              component={ DirectMessageFormContainer }
              onEnter={ this._ensureLoggedIn }
            />
          </Route>
        </Router>
      </Provider>
    );
  }
};

export default Root;
