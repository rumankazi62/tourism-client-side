import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

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
        <NavLink className="navlink" to="/home">Home</NavLink>
        <NavLink className="navlink" to="/myorders">My Orders</NavLink>
        <NavLink className="navlink" to="/manageOrders"> Manage All Orders</NavLink>
        <NavLink className="navlink" to="/addService"> Add A New Service</NavLink>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
        <NavLink className="navlink" to="/login">Login</NavLink>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
};

export default Header;