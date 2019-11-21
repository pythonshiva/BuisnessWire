import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" style={{ fontSize: 20, height: 84 }}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link" className="text-primary" id="paddingClass">
            Sign In
          </Nav.Link>
          <Nav.Link href="Help">Help</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
