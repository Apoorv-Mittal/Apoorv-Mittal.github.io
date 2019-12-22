import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom"


class Navigation extends Component {

  render() {
    return (
      <Navbar variant="dark" >

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav>

            <Nav.Item className="pl-2 pr-2">  
            <NavLink className="nav-link" to="/">HOME</NavLink>
            </Nav.Item>

            <Nav.Item className="pl-2 pr-2">
            <NavLink className="nav-link" to="/Work">WORK</NavLink>
            </Nav.Item>

            <Nav.Item className="pl-2 pr-2">
            <NavLink className="nav-link" to="/Projects">PROJECTS</NavLink>
            </Nav.Item>
          </Nav>

          <Nav>
            <Nav.Item className="pl-2 pr-2">
            <a className="nav-link" href="mailto:apoorv@terpmail.umd.edu">CONTACT ME</a>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
