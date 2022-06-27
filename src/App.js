import logo from './logo.svg';
import './App.css';
import Masterpage from './layout/Masterpage'
function App() {
  return (
    <div className="App">      
    <Masterpage/>
      <header className="App-header">                
        <p>
          Hello <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
