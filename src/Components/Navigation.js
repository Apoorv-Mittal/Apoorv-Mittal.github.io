import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from "react-router-dom"


class Navigation extends Component {

  render() {
    return (

      <Navbar inverse fluid style={{top: '0px', position: 'relative', backgroundColor: 'transparent', border: 'none', width: '100%'}}>
        <Navbar.Header>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} >  
              <Link to={`/`} className='NavLinks'>
              HOME
              </Link>        
            </NavItem>
            <NavItem eventKey={3}>
              <Link to={`/Work`} className='NavLinks'>
              WORK EXPERIENCE
              </Link>
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
            <NavItem eventKey={5}>
              <Link to={`/Projects`} className='NavLinks'>
              PERSONAL PROJECTS
              </Link>
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
