import React, { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import "./NavigationBar.css";

import sportsleague_logo from "../../assets/sportsleague_logo.png";

export default function NavigationBar() {
  const [colorChange, setColorChange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 90) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <Navbar
      bg={colorChange ? "dark" : "transparent"}
      variant="dark"
      fixed="top"
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
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
          <Nav.Link as={Link} to="/">
            HOME
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            ABOUT
          </Nav.Link>
          <Nav.Link as={Link} to="/team">
            TEAM
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            CONTACT
          </Nav.Link>
        </Nav>

        <Button variant="warning" size="lg">
          <strong>SIGN UP</strong>
        </Button>
      </Container>
    </Navbar>
  );
}
