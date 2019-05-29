import React from 'react';
import logo from './logo.svg';
import './App.css';

const sayHello = 'Hello World!';
const flag = true;

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
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p style={{color: "magenta", fontSize: 20 + 15, margin: "10px"}}>
          This is a {3} paragraph
        </p>
        <p>Значения undefined {undefined}, null {null}, false {false} и true {true} не выводятся в разметку</p>
        <p style={{margin: "10px"}}>
          {sayHello}
        </p>
        <a href="#">{flag && "Show flag"}</a>
        <p>
          {flag ? "Flag is true" : "Flag is false"}
        </p>
      </header>
    </div>
  );
}

export default App;
