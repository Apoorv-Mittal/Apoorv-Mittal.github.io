import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


class Navigation extends Component {

  render() {
    return (

      <Navbar inverse fluid style={{top: '0px', position: 'relative', backgroundColor: 'transparent', border: 'none', width: '100%'}}>
        <Navbar.Header>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href='/'>              
              HOME
            </NavItem>
            <NavItem eventKey={3} href="/Work">
              WORK EXPERIENCE
            </NavItem>
            {/* <NavDropdown eventKey={4} title="ACADEMIC EXPERIENCE" id="basic-nav-dropdown">
              <MenuItem eventKey={4.1} href="/CMSC433">Programming Language Technologies and Paradigms</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={4.2} href="/CMSC420">Data Structures</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={4.3} href="/CMSC320">Introduction to Data Science</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={4.4} href="/CMSC330">Organization of Programming Languages</MenuItem>
            </NavDropdown> */}
            <NavItem eventKey={5} href="/Projects">
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
