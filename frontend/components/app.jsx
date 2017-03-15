import React from 'react';

import GreetingContainer from './greeting/greeting_container';
import SplashHeader from './splash/slash_header';
import SplashContent from './splash/splash_content';

const App = ({ children }) => (
  <section className='app-container'>
    <SplashHeader />
    <GreetingContainer />
    { children }
    <SplashContent />
  </section>
);

export default App;
