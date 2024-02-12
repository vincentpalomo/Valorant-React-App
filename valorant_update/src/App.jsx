import { Agents, Main, Navigation } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

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
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
