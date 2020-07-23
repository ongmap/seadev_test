import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import '../styles/App.scss';

import Intro from './Intro'
import BlockOne from './blockOne/BlockOne'
import BlockTwo from './blockTwo/BlockTwo'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Intro />
        </Route>
        <Route path="/block-one">
          <BlockOne />
        </Route>
        <Route path="/block-two">
          <BlockTwo />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
