import React from 'react';
import Header from "../../Components/Header/Header";
import Navbar from "..//..//Components/NavBar/NavBar"
import {Carousel,Container,Row,Col,Image} from 'react-bootstrap';
import firstSlide from '..//..//Assets/Img/FirstSlide.jpg';
import secondSlide from '..//..//Assets/Img/SecondSlide.jpg';
import thirdSlide from '..//..//Assets/Img/ThirdSlide.jpg';
import './EventPage.scss';
import fourthSlide from '..//..//Assets/Img/FourthEvent.jpg';
import openmic from '..//..//Assets/Img/EventWorkshop.jpg';
import beach from '..//..//Assets/Img/Beach.jpg';

class EventPage extends React.Component{

    constructor(props){
        super(props);
    }

    render()
    {

        return(
          <React.Fragment>
                <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100 Slide"
                    src={firstSlide}
                    alt="First slide"
                  />
                  <Carousel.Caption className="carousel-heading">
                    <h3>Join the Singer's group</h3>
                    <p>Here is a full experience to sing together at STARBUCKS Boylston!</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 Slide"
                    src={secondSlide}
                    alt="Second slide"
                  />

                  <Carousel.Caption className="carousel-heading">
                    <h3>Want to attend Rock Concert?</h3>
                    <p>Dont worry, we are here to provide tickets for your entertainment.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 Slide" src={thirdSlide} id="thirdSlide"
                    alt="Third slide"
                  />

                  <Carousel.Caption className="carousel-heading">
                    <h3>Want to get high and celebrate Bob Marley's Birthday?</h3>
                    <p>Here is a full time experience to get high and vibe to Bob Marley's Night!!</p>
                  </Carousel.Caption>
                </Carousel.Item>
              
                </Carousel>
             
             <Container>
                <Row>
                    <Col xs={6} md={4} className="event-col">
                       <img src={firstSlide} alt="" width={300} height={220} className="image-grid"/>
                       <br/>
                        <h4 >Group Event</h4>
                      <br/>
                    
                    </Col>
                    <Col xs={6} md={4} className="event-col">
                    <img src={secondSlide} alt="" width={300} height={220} className="image-grid"/>
                       <br/>
                        <h4 >Rock Concert</h4>
                    </Col>
                    <Col xs={6} md={4} className="event-col">
                    <img src={thirdSlide} alt="" width={300} height={220} className="image-grid"/>
                       <br/>
                        <h4 >Bob Marley Night</h4>
                    </Col>
                  </Row>
           </Container>

           <Container>
                <Row>
                    <Col xs={6} md={4} className="event-col">
                       <img src={fourthSlide} alt="" width={300} height={220} className="image-grid"/>
                       <br/>
                        <h4 >Open mic</h4>
                      <br/>
                    
                    </Col>
                    <Col xs={6} md={4} className="event-col">
                    <img src={openmic} alt="" width={300} height={220} className="image-grid"/>
                       <br/>
                        <h4 >Music Workshop</h4>
                    </Col>
                    <Col xs={6} md={4} className="event-col">
                    <img src={beach} alt="" width={300} height={220} className="image-grid"/>
                       <br/>
                        <h4 >Beach Show</h4>
                    </Col>
                  </Row>
           </Container>

           </React.Fragment>
            

      );
    }
}

export default EventPage;