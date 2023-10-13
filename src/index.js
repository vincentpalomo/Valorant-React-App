import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navigation, Hero, Footer, Agents, Weapons, Maps, HeroUpdate, WeaponsUpdate } from './components';
import style from './global.css';

const App = () => {
  return (
    <Router>
      <div
        className='flex flex-col justify-between h-screen'
        style={{
          background: `url()`,
        }}
      >
        <header>
          <Navigation />
        </header>
        <section className='flex-grow my-auto overflow-y-auto h-fit'>
          <Switch>
            <Route exact path={'/'}>
              <Hero />
            </Route>
            <Route path={'/agents'}>
              <Agents />
            </Route>
            <Route path={'/weapons'}>
              <Weapons />
            </Route>
            <Route path={'/maps'}>
              <Maps />
            </Route>
            <Route path={'/test'}>
              <WeaponsUpdate />
            </Route>
          </Switch>
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App tab='home' />);
