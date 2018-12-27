import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
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
              WORK EXPERIENCE
            </NavItem>

            <NavDropdown eventKey={3} title="ACADEMIC EXPERIENCE" id="basic-nav-dropdown">

              <MenuItem componentClass={NavLink} href="/CMSC433" to="/CMSC433"  eventKey={3.1} className ="dropdownLi">
                Programming Language Technologies and Paradigms
              </MenuItem>

              <MenuItem divider />

              <MenuItem componentClass={NavLink} href="/CMSC420" to="/CMSC420"  eventKey={3.2} className ="dropdownLi">
                Data Structures                
              </MenuItem>

              <MenuItem divider />

              <MenuItem componentClass={NavLink} href="/CMSC320" to="/CMSC320" eventKey={3.3} className ="dropdownLi">
                Introduction to Data Science
              </MenuItem>

              <MenuItem divider />

              <MenuItem componentClass={NavLink} href="/CMSC330" to="/CMSC330" eventKey={3.4} className ="dropdownLi">
                Organization of Programming Languages
              </MenuItem>
            </NavDropdown>

            <NavItem componentClass={NavLink} href="/Projects" to="/Projects" eventKey={4}>
              PERSONAL PROJECTS
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
