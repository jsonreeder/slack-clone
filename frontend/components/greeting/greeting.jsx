import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav>
    <Link to="/signIn">Sign in</Link>
    <Link to="/join">Join</Link>
  </nav>
);

const personalGreeting = (currentUser, signOut) => (
  <hgroup>
    <h2>Hi, {currentUser.username}</h2>
    <button onClick={signOut}>Sign out</button>
  </hgroup>
);

const Greeting = ({ currentUser, signOut }) => (
  currentUser ? personalGreeting(currentUser, signOut) : sessionLinks()
);

export default Greeting;
