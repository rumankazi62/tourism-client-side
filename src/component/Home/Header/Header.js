import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <div>
<Navbar bg="dark" variant="dark" expand="lg" className="mb-1 p-3">
  <Container >
    <Navbar.Brand href="#">
    <b className="text-success w-50">Travelling <span className="text-danger">In</span> Bangladesh</b>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">My Orders</Nav.Link>
        <Nav.Link href="#action2"> Manage All Orders</Nav.Link>
        <Nav.Link href="#action2"> Add A New Service</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
        <Nav.Link href="#action2">Login</Nav.Link>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
};

export default Header;