import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const YourNavbarComponent = ({ scrolled, activeLink, onUpdateActiveLink }) => {
  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#reviews" className={activeLink === 'reviews' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Reviews')}>Reviews</Nav.Link>
            <Nav.Link href="#specials" className={activeLink === 'specials' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Specials')}>Specials</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#1"><img src={navIcon1} alt="" /></a>
              <a href="#2"><img src={navIcon2} alt="" /></a>
              {/* <a href="#3"><img src={navIcon3} alt="" /></a> */}
            </div>
            <button className="vvd"><span>Let’s Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default YourNavbarComponent;
