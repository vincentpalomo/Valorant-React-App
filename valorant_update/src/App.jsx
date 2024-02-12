import { Agents, Main, Maps, Navigation } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Weapons from './components/Weapons';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="fixed z-50">
          <Navigation />
        </header>
        <section>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/agents" element={<Agents />} />
            <Route path="/weapons" element={<Weapons />} />
            <Route path="/maps" element={<Maps />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
