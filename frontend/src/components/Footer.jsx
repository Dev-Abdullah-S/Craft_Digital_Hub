import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#30B4E2",
        color: "black",
        padding: "60px 0 20px",
      }}
    >
      <Container>
        <Row className="gy-4">
          {/* Brand / About */}
          <Col md={4}>
            <h4 className="fw-bold mb-3">Craft Digital Hub</h4>
            <p className="opacity-75">
              Empowering learners with real-world digital skills. Join us to
              learn, create, and grow in a supportive online community.
            </p>
            <div>
              <a href="#" className="text-white me-3 fs-5">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#" className="text-white me-3 fs-5">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="text-white me-3 fs-5">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="text-white fs-5">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </Col>

          {/* Quick Links */}
          <Col md={4}>
            <h5 className="fw-semibold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              {["Home", "Courses", "Blogs", "Contact", "FAQs"].map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-white text-decoration-none d-block mb-2"
                    style={{ transition: "0.3s" }}
                    onMouseEnter={(e) => (e.target.style.opacity = "0.7")}
                    onMouseLeave={(e) => (e.target.style.opacity = "1")}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          {/* Contact Info */}
          <Col md={4}>
            <h5 className="fw-semibold mb-3">Get In Touch</h5>
            <p>
              <i className="fa-solid fa-location-dot me-2"></i> Lahore, Pakistan
            </p>
            <p>
              <i className="fa-solid fa-envelope me-2"></i> info@craftdigitalhub.com
            </p>
            <p>
              <i className="fa-solid fa-phone me-2"></i> +92 300 1234567
            </p>
          </Col>
        </Row>

        <hr className="my-4 border-light opacity-50" />

        {/* Copyright */}
        <Row>
          <Col className="text-center">
            <p className="mb-0 opacity-75">
              © {new Date().getFullYear()} <strong>Craft Digital Hub</strong>. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
