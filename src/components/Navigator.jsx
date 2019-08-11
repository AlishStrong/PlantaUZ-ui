import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
class Navigator extends Component {
  state = {};
  render() {
    return (
      <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Brand href="#home">PlantaUz</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#login">Login</Nav.Link>
          <Nav.Link href="#plants">Plants</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar>
    );
  }
}

export default Navigator;
