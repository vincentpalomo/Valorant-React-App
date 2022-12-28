import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navigation, Hero, Footer, Agents, Weapons, Maps } from './components';
import style from './global.css';

const App = () => {
  return (
    <Router>
      <div
        className='flex flex-col justify-between h-screen'
        style={{
          background: `url(https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltaf4dae47b30c2172/5fd2d140a84f233eaf61091a/VALORANT_Logo_V.jpg)`,
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
