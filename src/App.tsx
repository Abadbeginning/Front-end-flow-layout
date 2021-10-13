import React from 'react';
import logo from './logo.svg';
import './App.css';
// import {BlockBox} from './box/3_3/1demo'
// import {StandardBox} from './box/3_4/1demo'
import {StrangeBox} from './box/3_5/1demo'
import {FloatBox} from './box/3_6/1demo'
import {FloatBox1} from './box/3_6/2demo'
import {FloatBox2} from './box/3_7/1demo'
import {FloatBox3} from './box/3_7/2demo'
import {Position} from './box/3_8/1demo'

function App() {

  return (
    <div className="App">
      {/* <BlockBox /> */}
      {/* <StandardBox /> */}
      {/* <StrangeBox /> */}
      {/* <FloatBox /> */}
      {/* <FloatBox1 /> */}
      {/* <FloatBox2 /> */}
      {/* <FloatBox3 /> */}
      <Position />
      
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
