import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Destination.css';
const Destination = () => {

  return (
    <div className="my-5">
      <Container>
  <Row>
    <Col>
    <i className="fas fa-taxi"></i>
    <p>1 destination</p>
    <h3>Adventure</h3>
    </Col>
    <Col>
    <i className="fas fa-route"></i>
    <p>3 destination</p>
    <h3>Beaches</h3>
    </Col>
    <Col>
    <i className="fas fa-fire"></i>
    <p>2 destination</p>
    <h3>Camping</h3>
    </Col>
    <Col>
    <i className="fas fa-campground"></i>
    <p>1 destination</p>
    <h3>Friendly</h3>
    </Col>
    <Col>
    <i className="fas fa-suitcase-rolling"></i>
    <p>9 destination</p>
    <h3>Low Budget</h3>
    </Col>
  </Row>
</Container>
    </div>
  );
};

export default Destination;