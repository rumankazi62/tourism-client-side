import React from 'react';
import './Banner.css';
import { Carousel } from 'react-bootstrap';
import bannar1 from '../../../images/bannar.jpg';
import bannar2 from '../../../images/setmartin.jpg';
import bannar3 from '../../../images/team.jpg';
const Bannar = () => {
  return (
    <div>
      <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-75 bannarImage"
      src={bannar1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>Chimbuk Hill</h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-75 bannarImage"
      src={bannar2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>St. Martin's Island</h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-75 bannarImage"
      src={bannar3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Bandarban District</h5>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  );
};

export default Bannar;