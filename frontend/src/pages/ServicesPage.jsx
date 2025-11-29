import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function ServicesPage() {
  const services = [
    {
      title: "Website Development",
      icon: "fa-solid fa-code",
      desc: "We build modern, responsive websites that help your business stand out online.",
      gradient: "linear-gradient(135deg, #00c6ff, #0072ff)",
    },
    {
      title: "SEO Optimization",
      icon: "fa-solid fa-chart-line",
      desc: "Improve your website ranking and attract organic traffic with powerful SEO techniques.",
      gradient: "linear-gradient(135deg, #11998e, #38ef7d)",
    },
    {
      title: "Paid Advertising",
      icon: "fa-solid fa-bullhorn",
      desc: "Run effective PPC campaigns on Google, Facebook, and Instagram to increase sales.",
      gradient: "linear-gradient(135deg, #ff9966, #ff5e62)",
    },
    {
      title: "Content Marketing",
      icon: "fa-solid fa-pen-nib",
      desc: "Create valuable content that engages your audience and strengthens your brand voice.",
      gradient: "linear-gradient(135deg, #f7971e, #ffd200)",
    },
    {
      title: "Social Media Management",
      icon: "fa-brands fa-facebook-f",
      desc: "Grow your brand presence and connect with customers across all major platforms.",
      gradient: "linear-gradient(135deg, #00c3ff, #ffff1c)",
    },
  ];

  return (
    <Container className="py-5 text-center">
      <h2 className="fw-bold display-6 mb-4">💼 Our Digital Services</h2>
      <p className="text-muted mb-5">
        We provide complete digital solutions to help your business grow in the modern world.
      </p>

      <Row>
        {services.map((service, i) => (
          <Col md={4} key={i} className="mb-4">
            <Card
              className="text-white shadow-lg border-0 h-100"
              style={{
                background: service.gradient,
                borderRadius: "20px",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-8px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <Card.Body className="d-flex flex-column align-items-center p-4">
                <i className={`${service.icon} fa-3x mb-3`}></i>
                <Card.Title className="fw-bold">{service.title}</Card.Title>
                <Card.Text className="mt-2">{service.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ServicesPage;
