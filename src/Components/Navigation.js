import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom"


class Navigation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navExpanded: false
    };
  }

  setNavExpanded = (expanded) => {
    this.setState({ navExpanded: expanded });
  }

  closeNav = () => {
    this.setState({ navExpanded: false });
  }


  render() {
    return (
      <Navbar onToggle={this.setNavExpanded} expanded={this.state.navExpanded} variant="dark" expand="lg">

        <Navbar.Toggle className="ml-auto" aria-controls="main-navbar-nav" />

        <Navbar.Collapse>
          <Nav id="main-navbar-nav">

            <Nav.Item className="pl-2 pr-2">
              <NavLink className="nav-link" to="/" onClick={this.closeNav}>HOME</NavLink>
            </Nav.Item>

            <Nav.Item className="pl-2 pr-2">
              <NavLink className="nav-link" to="/Work" onClick={this.closeNav}>WORK</NavLink>
            </Nav.Item>

            <Nav.Item className="pl-2 pr-2">
              <NavLink className="nav-link" to="/Projects" onClick={this.closeNav}>PROJECTS</NavLink>
            </Nav.Item>
          </Nav>

          <Nav className="ml-auto">
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
