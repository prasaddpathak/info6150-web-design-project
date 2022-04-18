/*
    Author:     Prasad A. Pathak
    NEU ID:     002925486
    Email:      pathak.pra@northeastern.edu
    Subject:    INFO6150 - Web Design and UX
    Purpose:    Javascript file for the Main App React component
*/
import React from 'react';
import './App.css';
import Header from './Components/Header/Header';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Header></Header>
    );
  }
}

export default App;