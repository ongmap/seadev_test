import React from 'react'
import logo from '../assets/logo.svg'

// This component render Introduction page
function Intro() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p><code>Quyen Tran</code></p>
        <p>Please click on links below to go to Block</p>
        <a className="app-link" href="./block-one">Go To Block One</a>
        <a className="app-link" href="./block-two">Go To Block Two</a>
      </header>
    </div>
  )
}

export default Intro
