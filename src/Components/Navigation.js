import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { NavLink } from "react-router-dom"


class Navigation extends Component {

  render() {
    return (
      <Navbar inverse fluid style={{top: '0px', position: 'relative', backgroundColor: 'transparent', border: 'none', width: '100%'}}>

        <Navbar.Header>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav>

            <NavItem componentClass={NavLink} href="/" to="/" eventKey={1} >  
              HOME
            </NavItem>

            <NavItem componentClass={NavLink} href="/Work" to="/Work" eventKey={2}>
              WORK
            </NavItem>

            <NavItem componentClass={NavLink} href="/Projects" to="/Projects" eventKey={3}>
              PROJECTS
            </NavItem>
          </Nav>

          <Nav pullRight>
            <NavItem eventKey={1} href="mailto:apoorv@terpmail.umd.edu">
              CONTACT ME
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
