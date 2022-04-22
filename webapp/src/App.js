/*
    Author:     Prasad A. Pathak
    NEU ID:     002925486
    Email:      pathak.pra@northeastern.edu
    Subject:    INFO6150 - Web Design and UX
    Purpose:    Javascript file for the Main App React component
*/
import React from 'react';
import './App.scss';
import Homepage from './Pages/HomePage/HomePage';
import Login from './Components/login/login.jsx';
import Signup from './Components/Signup/Signup.jsx'
import Home from './Pages/Home/Home.jsx';
import Event from './Pages/EventsPage/EventsPage.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeContext, themes } from './Utils/js/theme.js';
import InternetRadio from './Components/InternetRadio/InternetRadio';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return ( <
            ThemeContext.Provider value = { themes.light } >
            <
            Router >
            <
            Switch >

            <
            Route exact path = "/" > < Homepage / > < /Route> <
            Route path = "/login" > < Login / > < /Route> <
            Route path = "/signup" > < Signup / > < /Route> <
            Route exact path = "/home" > < Home / > < /Route> <
            Route path = "/event" > < Event / > < /Route> < /
            Switch >
            <
            Route exact path = "/home/radio" > < InternetRadio / > < /Route>< /
            Router > < /
            ThemeContext.Provider >
        );
    }
}

export default App;