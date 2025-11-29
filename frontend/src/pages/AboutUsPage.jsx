import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function AboutUsPage() {
  const team = [
    {
      name: "Ali Khan",
      role: "Founder & CEO",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Sara Ahmed",
      role: "Marketing Head",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Usman Tariq",
      role: "Lead Developer",
      img: "https://randomuser.me/api/portraits/men/67.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
  ];

  return (
    <Container className="py-5">
      {/* Who We Are */}
      <section className="text-center mb-5">
        <h2 className="fw-bold display-6 mb-3">👋 Who We Are</h2>
        <p className="text-muted mx-auto" style={{ maxWidth: "800px" }}>
          We are a passionate team of digital creators, developers, and marketers dedicated to helping businesses grow online. 
          Our mission is to deliver top-quality digital solutions that drive success and build lasting brand value.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="mb-5">
        <Row className="text-center">
          <Col md={6}>
            <Card className="p-4 shadow-sm border-0 h-100">
              <i className="fa-solid fa-bullseye fa-3x text-primary mb-3"></i>
              <h4 className="fw-bold">Our Mission</h4>
              <p className="text-muted">
                To empower businesses with innovative and affordable digital tools that help them reach their audience effectively.
              </p>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="p-4 shadow-sm border-0 h-100">
              <i className="fa-solid fa-eye fa-3x text-success mb-3"></i>
              <h4 className="fw-bold">Our Vision</h4>
              <p className="text-muted">
                To become a trusted global digital partner known for creativity, quality, and impact in every project we deliver.
              </p>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Team Members */}
      <section className="text-center mb-5">
        <h2 className="fw-bold display-6 mb-4">👨‍💻 Our Team</h2>
        <Row>
          {team.map((member, i) => (
            <Col md={4} key={i} className="mb-4">
              <Card className="border-0 shadow-lg p-3 h-100">
                <Image
                  src={member.img}
                  roundedCircle
                  alt={member.name}
                  className="mx-auto mb-3"
                  style={{ width: "120px", height: "120px", objectFit: "cover" }}
                />
                <h5 className="fw-bold">{member.name}</h5>
                <p className="text-muted">{member.role}</p>
                <div>
                  <a href={member.social.facebook} className="text-primary mx-2">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href={member.social.twitter} className="text-info mx-2">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href={member.social.linkedin} className="text-primary mx-2">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Achievements */}
      <section className="text-center">
        <h2 className="fw-bold display-6 mb-4">🏅 Our Achievements</h2>
        <Row>
          <Col md={3} sm={6} className="mb-3">
            <Card className="p-4 border-0 shadow-sm">
              <i className="fa-solid fa-trophy fa-2x text-warning mb-2"></i>
              <h5 className="fw-bold">50+ Projects</h5>
              <p className="text-muted mb-0">Successfully Delivered</p>
            </Card>
          </Col>
          <Col md={3} sm={6} className="mb-3">
            <Card className="p-4 border-0 shadow-sm">
              <i className="fa-solid fa-users fa-2x text-info mb-2"></i>
              <h5 className="fw-bold">200+ Clients</h5>
              <p className="text-muted mb-0">Worldwide</p>
            </Card>
          </Col>
          <Col md={3} sm={6} className="mb-3">
            <Card className="p-4 border-0 shadow-sm">
              <i className="fa-solid fa-star fa-2x text-warning mb-2"></i>
              <h5 className="fw-bold">4.9/5 Rating</h5>
              <p className="text-muted mb-0">Client Satisfaction</p>
            </Card>
          </Col>
          <Col md={3} sm={6} className="mb-3">
            <Card className="p-4 border-0 shadow-sm">
              <i className="fa-solid fa-briefcase fa-2x text-success mb-2"></i>
              <h5 className="fw-bold">10+ Years</h5>
              <p className="text-muted mb-0">Experience</p>
            </Card>
          </Col>
        </Row>
      </section>
    </Container>
  );
}

export default AboutUsPage;
