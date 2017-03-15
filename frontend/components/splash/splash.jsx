import React from 'react';

const Splash = () => (
  <div>
    <header className='splash-header'>
      <ul className='brand'>
        <li>[logo]</li>
        <li>slack</li>
      </ul>
      <ul className='nav'>
        <li>Product</li>
        <li>Sign in</li>
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
      </div>
    </section>
  </div>
);

export default Splash;
