import React from 'react';
import image1 from './image/img1.jpg';
import image2 from './image/img2.jpg';
import image3 from './image/img3.jpg';
import image4 from './image/img4.jpg';
import image5 from './image/img5.jpg';
import { Col, Container, Row } from 'react-bootstrap';
import './Featured.css'

const Featured = () => {
  return (
    <div className="mt-3">
      <h1 className="py-5">FEATURED <span className="text-success">BLOG</span></h1>
<Container>
  <Row>
    <Col>
    <img src={image1} alt="" />
    <h3>Debotakhum</h3>
    </Col>
    <Col>
    <img src={image2} alt="" />
    <h3>Nilachal</h3>
    </Col>
  </Row>
  <Row>
    <Col>
    <img src={image3} alt="" />
    <h3>Cox's Bazar</h3>
    </Col>
    <Col>
    <img src={image4} alt="" />
    <h3>Sajek Road</h3>
    </Col>
    <Col>
    <img src={image5} alt="" />
    <h3>Teknaf</h3>
    </Col>
  </Row>
</Container>
    </div>
  );
};

export default Featured;