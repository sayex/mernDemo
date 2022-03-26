import logo from './logo.svg';
import './App.css';

function App() {

  const apifun = async () => {
    const response = await fetch("/api/user")
    const data = await response.json()
    console.log(data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={apifun}></button>
      </header>
    </div>
  );
}

export default App;
