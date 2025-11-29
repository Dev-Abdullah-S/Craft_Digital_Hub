import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'

function CustomNavbar() {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm py-2">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="logo.png"
            alt="logo"
            width="40"
            height="40"
            className="me-2"
          />
          <h5 className="mb-0 fw-bold">Craft Digital Hub</h5>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/"><i className="fas fa-home me-2"></i>Home</Nav.Link>
            <Nav.Link as={Link} to="/courses"><i className="fas fa-book-open me-2"></i>Courses</Nav.Link>
            <Nav.Link as={Link} to="/studentDashboard"><i className="fas fa-user-graduate me-2"></i>Student Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/blogs"><i className="fas fa-blog me-2"></i>Blogs</Nav.Link>
            <Nav.Link as={Link} to="/services"><i className="fas fa-cogs me-2"></i>Services</Nav.Link>
            <Nav.Link as={Link} to="/aboutUs"><i className="fas fa-info-circle me-2"></i>About Us</Nav.Link>
            <Nav.Link as={Link} to="/contactUs"><i className="fas fa-envelope me-2"></i>Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/testimonials"><i className="fas fa-comments me-2"></i>Testimonials</Nav.Link>
            <Nav.Link as={Link} to="/FAQ"><i className="fas fa-question-circle me-2"></i>FAQ</Nav.Link>
            {/* <Nav.Link as={Link} to="/Legal"><i className="fas fa-balance-scale me-2"></i>Legal</Nav.Link> */}
         </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
