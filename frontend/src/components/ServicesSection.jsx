import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Components.css";
import c1 from '../assets/c1.jpg'
import graphicDesi2 from '../assets/graphicDesi2.jpg'
import digitalMarket from '../assets/digitalMarket.jpg'
import appDevelopment from '../assets/appDevelopment.jpg'
import uixDesign from '../assets/uixDesign.jpg'
import s6 from '../assets/s6.jpg'

function ServicesSection() {
  const services = [
    {
      icon: "fa-solid fa-code",
      title: "Web Development",
      desc: "Build responsive and scalable websites using modern technologies.",
      bg: c1,
    },
    {
      icon: "fa-solid fa-pen-nib",
      title: "Graphic Design",
      desc: "Create stunning visuals, brand identities, and digital art.",
      bg: graphicDesi2,
    },
    {
      icon: "fa-solid fa-bullhorn",
      title: "Digital Marketing",
      desc: "Boost your brand visibility with effective marketing strategies.",
      bg: digitalMarket,
    },
    {
      icon: "fa-solid fa-mobile-screen-button",
      title: "App Development",
      desc: "Build high-performance mobile apps with intuitive design.",
       bg: appDevelopment,
    },
    {
      icon: "fa-solid fa-palette",
      title: "UI/UX Design",
      desc: "Design engaging and user-friendly digital experiences.",
       bg: uixDesign,
    },
    {
      icon: "fa-solid fa-chalkboard-user",
      title: "Skill Training",
      desc: "Learn hands-on digital skills from professionals.",
       bg: s6,
    },
  ];

  return (
    <Container fluid className="py-5 text-center services-section">
      <h2 className="fw-bold display-6 mb-4 text-dark">Our Digital Services</h2>
      <p className="mb-5 text-secondary">
        We provide complete digital solutions to help you grow your skills and
        your business.
      </p>

      <Row className="justify-content-center g-4 px-3">
        {services.map((service, index) => (
          <Col key={index} md={4} sm={6} xs={12}>
            <Card
              className="h-100 border-0 shadow-lg rounded-4 p-4 service-card position-relative overflow-hidden"
              style={{
                backgroundImage: `url(${service.bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "#fff",
                transition: "transform 0.4s ease, box-shadow 0.4s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
              }}
            >
              {/* Overlay */}
              <div
                className="overlay position-absolute w-100 h-100"
                style={{
                  top: 0,
                  left: 0,
                  background: "rgba(0,0,0,0.55)",
                  borderRadius: "1rem",
                  zIndex: 0,
                  transition: "background 0.3s ease",
                }}
              ></div>

              <div className="position-relative" style={{ zIndex: 1 }}>
                <div
                  className="icon-wrapper mx-auto mb-3 d-flex justify-content-center align-items-center"
                  style={{
                    width: "70px",
                    height: "70px",
                    backgroundColor: "rgba(255,255,255,0.9)",
                    borderRadius: "50%",
                  }}
                >
                  <i
                    className={service.icon}
                    style={{
                      fontSize: "2rem",
                      color: "#30B4E2",
                    }}
                  ></i>
                </div>
                <Card.Title className="fw-bold text-white">
                  {service.title}
                </Card.Title>
                <Card.Text className="text-light">{service.desc}</Card.Text>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ServicesSection;
