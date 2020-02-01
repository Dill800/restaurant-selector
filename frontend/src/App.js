import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './main.js'


function getLat() {

  navigator.geolocation.getCurrentPosition(position => {
    console.log(position.coords.latitude);
    return position.coords.latitude;
  },
  err => {
    console.log('error' + err);
  });

}

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
        <Main/>
        <p>{getLat()} + "dsfd"</p>

      </header>
    </div>
  );
}

export default App;
