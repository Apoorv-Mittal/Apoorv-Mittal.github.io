import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom"

const NAV_LINKS = [
  { to: '/', label: 'HOME' },
  { to: '/Work', label: 'WORK' },
  { to: '/Projects', label: 'PROJECTS' },
]

function Navigation() {
  const [navExpanded, setNavExpanded] = useState(false)

  const closeNav = () => setNavExpanded(false)

  return (
    <Navbar onToggle={setNavExpanded} expanded={navExpanded} variant="dark" expand="lg">

      <Navbar.Toggle className="ml-auto" aria-controls="main-navbar-nav" />

      <Navbar.Collapse>
        <Nav id="main-navbar-nav">
          {NAV_LINKS.map(({ to, label }) => (
            <Nav.Item key={to} className="pl-2 pr-2">
              <NavLink className="nav-link" to={to} onClick={closeNav}>{label}</NavLink>
            </Nav.Item>
          ))}
        </Nav>

        <Nav className="ml-auto">
          <Nav.Item className="pl-2 pr-2">
            <a className="nav-link" href="mailto:pingapoorv@gmail.com">CONTACT ME</a>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
