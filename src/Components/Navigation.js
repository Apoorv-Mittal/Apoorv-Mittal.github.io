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
            <NavItem eventKey={1}>  
              <Link to={`/`} className='NavLinks'>
              HOME
              </Link>        
            </NavItem>
            <NavItem eventKey={3}>
              <Link to={`/Work`} className='NavLinks'>
              WORK EXPERIENCE
              </Link>
            </NavItem>
            <NavDropdown eventKey={4} title="ACADEMIC EXPERIENCE" id="basic-nav-dropdown">
              <MenuItem eventKey={4.1}>
                <Link to={`/CMSC433`} className='NavLinks' style={{color: 'black'}}>
                  Programming Language Technologies and Paradigms
                </Link>
              </MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={4.2}>
                <Link to={`/CMSC420`} className='NavLinks' style={{color: 'black'}}>
                  Data Structures
                </Link>
              </MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={4.3}>
                <Link to={`/CMSC320`} className='NavLinks' style={{color: 'black'}}>
                  Introduction to Data Science
                </Link>
              </MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={4.4} href="/CMSC330">
                <Link to={`/CMSC330`} className='NavLinks' style={{color: 'black'}}>
                  Organization of Programming Languages
                </Link>
              </MenuItem>
            </NavDropdown>
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
