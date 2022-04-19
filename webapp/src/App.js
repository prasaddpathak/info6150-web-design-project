/*
    Author:     Prasad A. Pathak
    NEU ID:     002925486
    Email:      pathak.pra@northeastern.edu
    Subject:    INFO6150 - Web Design and UX
    Purpose:    Javascript file for the Main App React component
*/
import React from 'react';
import './App.scss';
import Homepage from './Components/homepage/homepage';
import Login from './Components/login/login';
import Signin from './Components/signin/signin'



import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <>
        <Router>
          <Switch>
          <Route exact path="/"> <Homepage/></Route>
              <Route path="/login"> <Login/> </Route>
              <Route path="/signin"> <Signin/> </Route>
          </Switch>
      </Router>
      </>
    );
  }
}

export default App;