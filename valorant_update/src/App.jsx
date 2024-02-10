import { Main, Navigation } from './components';
import './index.css';

function App() {
  return (
    <div className="App">
      <header className="fixed z-50">
        <Navigation />
      </header>
      <Main />
    </div>
  );
}

export default App;
