import React from 'react';
import { Link } from 'react-router';

const Splash = () => (
  <div>
    <header className='splash-header'>
      <ul className='brand'>
        <li>[logo]</li>
        <li>slack</li>
      </ul>
      <ul className='nav'>
        <li>Product</li>
        <li>
          <Link to="/signIn">Sign in</Link>
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

export default Splash;
