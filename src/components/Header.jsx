import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

function Header({ setView }) {
  return (
    <Navbar bg="danger" expand="lg" className="text-white">
      <Container className="text-white">
        <Navbar.Brand className="text-white" href="#">
          <img src="./img/logo.png" alt="" />Restaurant App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto text-white">
            <Nav.Link className="text-white" onClick={() => setView('menu')}>Menu</Nav.Link>
            <Nav.Link className="text-white" onClick={() => setView('customer')}>Customer</Nav.Link>
            <Nav.Link className="text-white" onClick={() => setView('order')}>Order</Nav.Link>
            <Nav.Link className="text-white" onClick={() => setView('promotion')}>Promotion</Nav.Link>
            <Nav.Link className="text-white" onClick={() => setView('contact')}>Contact</Nav.Link>
          </Nav>
          <Button variant="light" className="me-2">Cart</Button>
          <Button variant="outline-light" href="#register">Register</Button>
          <Button variant="outline-light" href="#login" className="ms-2">Login</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
