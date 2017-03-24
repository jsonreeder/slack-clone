import React from 'react';
import { Link } from 'react-router';

const splashPage = () => {
  $('html,body').css('overflow','auto');
  return(
    <div>
      <header className='header splash-header'>
        <a href="/">
          <ul className='brand'>
            <li><img
                  src="/assets/color-logo.svg"
                  id="logo"
                  alt="quadrithorp"
                /></li>
            <li>thorp</li>
          </ul>
        </a>
        <ul className='nav'>
          <li>
            <Link to="/signin" className="link-button">Sign in</Link>
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
          <nav className='splash-links'>
            <Link to="/try" className="splash-button green">Try</Link>
            <Link to="/join" className="splash-button gray">Join</Link>
          </nav>
        </div>
      </section>
    </div>
  );
};

const welcome = (currentUser, signOut) => (
  <div>
    <header className='header splash-header'>
      <ul className='brand'>
        <li><img
              src="/assets/color-logo.svg"
              id="logo"
              alt="quadrithorp"
            /></li>
        <li>thorp</li>
      </ul>
      <ul className='nav'>
        <li>
          <button onClick={signOut}>Sign out</button>
        </li>
      </ul>
    </header>
    <div className="splash">
      <div className='splash-content'>
        <h1>Hi, {currentUser.username}</h1>
      </div>
    </div>
  </div>
);

const Splash = ({ currentUser, signOut }) => (
  currentUser ? welcome(currentUser, signOut) : splashPage()
);

export default Splash;
