import React from 'react';
import logo from './logo.svg';
import borg from './borg.png';
import './App.css';
import Main from './main.js'

const fontSize2 = {
  fontSize: '32px'
};


function getLat() {

  navigator.geolocation.getCurrentPosition(position => {
    console.log(position.coords.latitude);
    return position.coords.latitude;
  },
  err => {
    console.err('error' + err);
  });

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p style = {fontSize2}>SwampHacks Restaurant Finder</p>
        <img src={borg} className="App-logo" alt="logo" />
        <p>
          Created by: Ryan Ahmed, Brock Major, Dillon McGovern, Gary Wu, Daniel Shin, Rohan Samanta
        </p>
        <a
          className="App-link"
          href="https://dillonmcgovern.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Us
        </a>
        <Main/>
        <p>{getLat()} + "dsfd"</p>

      </header>
    </div>
  );
}

export default App;
