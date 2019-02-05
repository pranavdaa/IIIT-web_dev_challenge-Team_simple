import React from 'react'
import { Carousel } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'
import Img from 'react-image'
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';
import image5 from './image5.jpg';
import image6 from './image6.jpg';
import image7 from './image7.jpg';
import image8 from './image8.jpg';
import image9 from './image7.jpg';
const Home = () => (
  <div>
    <Carousel>
      <Carousel.Item>
        <Img alt="image4" src={image4}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Img alt="image2" src={image2}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Img alt="image3" src={image3}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Img alt="image6" src={image6}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Img alt="image5" src={image5}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Img alt="image1" src={image1}/>
          <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <br/>
    <br/>
    <Row>
      <Col md={4}>
        <Img src={image7} alt="Image"/>
        	<p>Description</p>
      </Col>
      <Col md={4}>
        <Img src={image8} alt="Image"/>
        	<p>Description</p>
      </Col>
      <Col md={4}>
        <Img src={image9} alt="Image"/>
        	<p>Description</p>
      </Col>
    </Row>
  </div>
)

export default Home
