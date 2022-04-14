import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import configDaga from "../config.json";
import "../css/NavBar.css";
import { Container, Row } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavBar = () => {
  const handleSelected = (e)=> {
    console.log(e.target)
  }
  return (
    <Navbar id='navbar' expand="xl" fixed='top'  >
      <Container className="container-fluid">
        <Row>
          <Navbar.Brand id='navbarBrand' href="#home">{configDaga.NAME}</Navbar.Brand>
        </Row>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Row>
          <Navbar.Collapse >
            <Nav fill className="justify-content-end" variant="tabs">
              <Nav.Item className="navbarItem"> <Nav.Link className="navbarLink" onSelect={handleSelected}href="#about">About Me</Nav.Link> </Nav.Item>
              <Nav.Item className="navbarItem"> <Nav.Link className="navbarLink" onSelect={handleSelected}href="#experiences">Experiences</Nav.Link> </Nav.Item>
              <Nav.Item className="navbarItem"> <Nav.Link className="navbarLink" onSelect={handleSelected}href="#projects">Projects</Nav.Link> </Nav.Item>
              <Nav.Item className="navbarItem"> <Nav.Link className="navbarLink" onSelect={handleSelected}href="#publications">Publications</Nav.Link> </Nav.Item>
              <Nav.Item className="navbarItem"> <Nav.Link className="navbarLink" onSelect={handleSelected}href="#honors">Honors & Awards</Nav.Link> </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Row>
      </Container>
    </Navbar>
  );
};

export default NavBar;
