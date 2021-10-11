import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BlockBox} from './box/3_3/1demo'
import {StandardBox} from './box/3_4/1demo'
import {StandardBox} from './box/3_5/1demo'

function App() {

  return (
    <div className="App">
      {/* <BlockBox /> */}
      <StandardBox />
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
