import React from 'react';
import logo from '../assets/logo.svg';

function Intro() {
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        <code>Quyen Tran</code>
      </p>
      <p>Please click on links below to go to Block</p>
      <a
          className="App-link"
          href="./block-one"
        >
          Go To Block One
        </a>
        <a
          className="App-link"
          href="./block-two"
        >
          Go To Block Two
        </a>
      </header>
    </div>
  );
}

export default Intro;
