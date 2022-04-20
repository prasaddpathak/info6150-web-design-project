/*
    Author:     Prasad A. Pathak
    NEU ID:     002925486
    Email:      pathak.pra@northeastern.edu
    Subject:    INFO6150 - Web Design and UX
    Purpose:    Javascript file for the Main App React component
*/
import React from 'react';
import './App.scss';
import Homepage from './Components/Homepage/Homepage';
import Login from './Components/Login/Login.jsx';
import Signup from './Components/Signup/Signup'
import Home from './Pages/Home/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <>
      <Router>
        <Switch>
          <Route exact path="/"> <Homepage/></Route>
          <Route path="/login"> <Login/> </Route>
          <Route path="/signup"> <Signup/> </Route>
          <Route exact path="/home"> <Home/></Route>
        </Switch>
      </Router>
    </>
    );
  }
}

export default App;