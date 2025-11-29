import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Testimonials() {
  const testimonials = [
    {
      name: "Ayesha Khan",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      feedback:
        "Craft Digital Hub has transformed my learning experience! The instructors are amazing and the lessons are so easy to follow.",
      rating: 5,
      role: "Student - Web Development",
      gradient: "linear-gradient(135deg, #00b09b, #96c93d)",
    },
    {
      name: "Ali Raza",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
      feedback:
        "Thanks to their SEO and marketing services, my business now ranks on the first page of Google. Truly professional team!",
      rating: 4,
      role: "Client - SEO Optimization",
      gradient: "linear-gradient(135deg, #2193b0, #6dd5ed)",
    },
    {
      name: "Fatima Noor",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      feedback:
        "The social media course helped me grow my freelancing career. The dashboard makes it easy to track my progress.",
      rating: 5,
      role: "Student - Digital Marketing",
      gradient: "linear-gradient(135deg, #fc5c7d, #6a82fb)",
    },
  ];

  return (
    <Container className="py-5 text-center">
      <h2 className="fw-bold display-6 mb-4">⭐ Testimonials & Reviews</h2>
      <p className="text-muted mb-5">
        Hear from our happy students and clients who achieved success with Craft Digital Hub.
      </p>

      <Row>
        {testimonials.map((t, i) => (
          <Col md={4} key={i} className="mb-4">
            <Card
              className="border-0 text-white shadow-lg h-100"
              style={{
                background: t.gradient,
                borderRadius: "20px",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-8px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <Card.Body className="d-flex flex-column align-items-center p-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="rounded-circle mb-3"
                  style={{ width: "90px", height: "90px", objectFit: "cover", border: "3px solid white" }}
                />
                <Card.Title className="fw-bold">{t.name}</Card.Title>
                <small className="mb-2">{t.role}</small>
                <div className="mb-3">
                  {[...Array(t.rating)].map((_, index) => (
                    <i key={index} className="fa-solid fa-star text-warning me-1"></i>
                  ))}
                  {[...Array(5 - t.rating)].map((_, index) => (
                    <i key={index} className="fa-regular fa-star text-light me-1"></i>
                  ))}
                </div>
                <Card.Text className="fst-italic">{`"${t.feedback}"`}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Testimonials;
