import React from 'react';
import logo from './logo.svg';
import borg from './borg.png';
import './App.css';
import Main from './main.js'

const fontSize2 = {
  fontSize: '64px',
  color: '#0099cc',
  backgroundColor: 'lightblue'
};

const babyBloo = {
 
  backgroundColor: 'lightblue'
};

const createdBy = {
  fontSize: '15px',
  color: '#0099cc'
};

const contactUs = {
  color: '#007399'
}


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
      <header className="App-header" style= {babyBloo}>
  
        <p style = {fontSize2}>SwampHacks Restaurant Finder</p>
        <img src={borg} className="App-logo" alt="logo" />
        <p style = {createdBy}>
          <div >
            <p></p>
          </div>
          Created by: Ryan Ahmed, Brock Major, Dillon McGovern, Gary Wu, Daniel Shin, Rohan Samanta, David Wang
        </p>
        <a
          className="App-link"
          href="https://dillonmcgovern.com/"
          target="_blank"
          rel="noopener noreferrer"
          style = {contactUs}
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
