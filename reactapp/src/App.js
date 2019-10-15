import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [res,setRes] = useState();

  async function fetchUrl() {
    const response = await fetch('http://127.0.0.1:3001/');
    const json = await response.json()
    setRes(json);
  }

  const apiresponsestyle = {
    'color': 'white',
    'background-color': 'blue'
  };

  useEffect(()=>{
    fetchUrl();
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2><pre style={apiresponsestyle}>{res}</pre></h2>
        <p>
        <code> src/App.js</code> and save to reload.
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
