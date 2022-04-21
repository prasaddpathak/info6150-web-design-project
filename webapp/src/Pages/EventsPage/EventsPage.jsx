import React from "react";
import Header from "../../Components/Header/Header";
import Navbar from "..//..//Components/NavBar/NavBar"
import {Carousel } from 'react-bootstrap';
import firstSlide from '..//..//Assets/Img/FirstSlide.jpg';
import secondSlide from '..//..//Assets/Img/SecondSlide.jpg';
import thirdSlide from '..//..//Assets/Img/ThirdSlide.jpg';
import './EventPage.scss'
class EventPage extends React.Component{

    constructor(props){
        super(props);
    }

    render()
    {

        return(
            <div className="main-container">
                <Header></Header>
                <div className="content">
                   <Navbar/>
                <div className="main-event">
                <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 Slide"
      src={firstSlide}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 Slide"
      src={secondSlide}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 Slide" src={thirdSlide} height="30px"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
            </div>

             </div>
        );
    }
}

export default EventPage;