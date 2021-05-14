import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.google.com/maps/dir/?api=1&origin=24.9462106,67.0066307&destination=24.9728707,67.0643315&travelmode=driving&dir_action=navigate"
          target="_blank"
          rel="noopener noreferrer"
        >
         Route 1
        </a>
      <a
        className="App-link"
        href="https://www.google.com/maps/dir/?api=1&origin=24.9939608,67.0606081&destination=24.981944,67.0598634&travelmode=driving&dir_action=navigate"
        target="_blank"
        rel="noopener noreferrer"
        >
        Route 2
      </a>
      </header>
        <button >
      </button>
    </div>
  );
}

export default App;
