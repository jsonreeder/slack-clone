import React from 'react';

import GreetingContainer from './greeting/greeting_container';
import SplashContainer from './splash/splash_container';

const App = ({ children }) => (
  <section className='app-container'>
    <SplashContainer />
  </section>
);

export default App;
