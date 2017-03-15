import React from 'react';

import GreetingContainer from './greeting/greeting_container';
import Splash from './splash/splash';

const App = ({ children }) => (
  <section className='app-container'>
    <Splash />
  </section>
);

export default App;
