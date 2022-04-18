/*
    Author:     Prasad A. Pathak
    NEU ID:     002925486
    Email:      pathak.pra@northeastern.edu
    Subject:    INFO6150 - Web Design and UX
    Purpose:    Javascript file for the Main App React component
*/
import React from 'react';
import './Home.scss';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/NavBar/NavBar';

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
              {/* {
                  Page
              } */}
          </div>
        </section>
      </div>
    );
  }
}

export default Home;