import React from 'react';

import GreetingContainer from './greeting/greeting_container';
import SplashHeader from './splash/slash_header';

const App = ({ children }) => (
  <section className='app-container'>
    <SplashHeader />
    <GreetingContainer />
    { children }

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
  </section>
);

export default App;
