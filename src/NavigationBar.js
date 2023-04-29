import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import "./NavigationBar.css";

import sportsleague_logo from "./assets/sportsleague_logo.png";

class NavigationBar extends React.Component {
  render() {
    const root_path = "/website";
    return (
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container fluid>
          <Navbar.Brand href={`${root_path}`}>
            <img
              alt=""
              src={sportsleague_logo}
              width="75"
              height="75"
              className="d-inline-block align-top"
            />{" "}
            <strong>SPORTSLEAGUE</strong>
          </Navbar.Brand>

          <Nav className="justify-content-center">
            <Nav.Link href={`${root_path}`}>HOME</Nav.Link>
            <Nav.Link href={`${root_path}/about`}>ABOUT</Nav.Link>
            <Nav.Link href={`${root_path}/team`}>TEAM</Nav.Link>
            <Nav.Link href={`${root_path}/contact`}>CONTACT</Nav.Link>
          </Nav>

          <Button variant="warning" size="lg">
            <strong>SIGN UP</strong>
          </Button>
        </Container>
      </Navbar>
    );
  }
}

export default NavigationBar;
