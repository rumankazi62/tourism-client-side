import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import image from '../../../images/travel.png'

const Footer = () => {
  return (
    <div>
      <hr />
      <Container className="my-5">
  <Row>
    <Col>
    <div>
    <h3>ABOUT THE <img style={{width:"40px", height:"40px"}} src={image} alt="" /></h3>
    <p>Traveling in Bangladesh will help you to travel around the country.Enjoy the place of your choice with a worry-free and experienced guide.</p>
    </div>
    </Col>

    <Col>
    <h3>RECENT NEWS</h3>
    <p><i>Nov 26, 2020</i> Trip to Debotakhum, St. Martin's Island.</p>
    <p><i>Oct 2, 2021</i> On the Shores of a Vanishing hill in Bangladesh</p>
    <p><i>Jul 12, 2021</i> Visiting Srimongol</p>
    </Col>
    
    <Col>
    <div>
      <h3>Socials</h3>
    </div>
    <div>
    <i className="fab fa-facebook fs-5 me-3"></i>
    <i className="fab fa-instagram fs-5 me-3"></i>
    <i className="fab fa-youtube fs-5 me-3"></i>
    <i className="fab fa-twitter fs-5"></i>
    </div>
    </Col>
  </Row>
</Container>
    <div className="bg-success p-3 text-white">
    © 2021 Travelling In Bangladesh, All Rights Reserved
    </div>
    </div>
  );
};

export default Footer;