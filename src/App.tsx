import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppHeader from './components/layout/Header/AppHeader';
import Offer from './components/layout/Offer/Offer';
import Plan from './sections/Plan';
import Skills from './sections/Skills';
import Portfolio from './sections/Portfolio';
import About from './sections/About';
import AppFooter from './components/layout/Footer/AppFooter';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <AppHeader />
        <Offer />
        <Skills />
        <Portfolio />
        <Plan />
        <About />
        <AppFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
