import React from "react";
import logo from "../images/logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div>
          <h1>
            {/* Edit <code>src/App.js</code> and save to reload. */}
            HERE
          </h1>
        </div>
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
