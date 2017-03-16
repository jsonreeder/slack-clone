import React from 'react';
import { Link } from 'react-router';

const splashPage = () => (
  <div>
    <header className='header splash-header'>
      <ul className='brand'>
        <li>[logo]</li>
        <li>slack</li>
      </ul>
      <ul className='nav'>
        <li>
          <Link to="/signin">Sign in</Link>
        </li>
      </ul>
    </header>

    <section className='splash'>
      <div className='splash-content'>
        <h1>
          Now you're<br />talking<strong>*</strong>
        </h1>
        <p>
          A chat app, inspired by Slack
        </p>
          <Link to="/join">Join</Link>
      </div>
    </section>
  </div>
);

const welcome = (currentUser, signOut) => (
  <hgroup>
    <h2>Hi, {currentUser.username}</h2>
    <button onClick={signOut}>Sign out</button>
  </hgroup>
);

const Splash = ({ currentUser, signOut }) => (
  currentUser ? welcome(currentUser, signOut) : splashPage()
);

export default Splash;
