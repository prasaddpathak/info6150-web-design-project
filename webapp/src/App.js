/*
    Author:     Prasad A. Pathak
    NEU ID:     002925486
    Email:      pathak.pra@northeastern.edu
    Subject:    INFO6150 - Web Design and UX
    Purpose:    Javascript file for the Main App React component
*/
import React from 'react';
import './App.scss';
import Home from './Pages/Home/Home';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <>
        <Router>
          <Switch>
              {/* <Route path="/" exact component={Login}/> */}
              <Route path="/home" component={Home}/>
          </Switch>
      </Router>
      </>
    );
  }
}

export default App;