import React, { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import "./NavigationBar.css";

import sportsleague_logo from "../../assets/sportsleague_logo.png";

export default function NavigationBar() {
  const [darkColor, setDarkColor] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 90) {
      setDarkColor(true);
    } else {
      setDarkColor(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <Navbar
      collapseOnSelect
      bg={darkColor || expanded ? "dark" : "transparent"}
      expand="md"
      variant="dark"
      fixed="top"
      onToggle={(expanded) => setExpanded(expanded)}
    >
      <Container
        fluid
        style={{
          backgroundColor: expanded ? "rgb(33, 37, 41)" : "transparent",
          width: "100%",
        }}
      >
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

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ms-auto">
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

          <Nav className="justify-content-end">
            <Button variant="warning" size="lg">
              <strong>SIGN UP</strong>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
