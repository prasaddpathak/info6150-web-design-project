/*
    Author:     Web Of Lies
    Subject:    INFO6150 - Web Design and UX
    Purpose:    Javascript file for the Main App React component
*/
import React from 'react';
import './Home.scss';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/NavBar/NavBar';
import CardContainer from '../../Components/MusicContainer/CardContainer/CardContainer'; 
import InternetRadio from '../../Components/InternetRadio/InternetRadio';
import MusicPlaying from '../../Components/MusicPlaying/MusicPlaying';
import EventPage from '../EventsPage/EventsPage';


class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
     
      <div className={"home-container"}> 
        <Header></Header>
        <section className={"home-music-container"}>
          <div className="sidebar-home">
              <NavBar/>
          </div>
          <div className="main-home">
              <CardContainer />
              {/* <InternetRadio /> */}
              {/* <MusicPlaying /> */}
              {/* <EventPage/> */}
          </div>
        </section>
      </div>
      
    );
  }
}

export default Home;