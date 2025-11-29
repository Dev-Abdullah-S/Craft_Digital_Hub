import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";

function Certificates() {
  const certificates = []; // Example: [{ title: "Full Stack Web Dev", date: "Oct 2025" }]

  return (
    <div className="p-3">
      <h4 className="fw-bold mb-4">
        <i className="fa-solid fa-trophy text-warning me-2"></i>
        Certificates
      </h4>

      {certificates.length === 0 ? (
        <Card
          className="text-center p-5 shadow-sm border-0"
          style={{
            borderRadius: "12px",
            background: "linear-gradient(135deg, #ffffff, #f8f9fa)",
          }}
        >
          <i
            className="fa-solid fa-medal mb-3 text-secondary"
            style={{ fontSize: "50px" }}
          ></i>
          <h5 className="fw-semibold mb-2">No Certificates Yet</h5>
          <p className="text-muted mb-4">
            Complete a course to earn your first certificate of achievement!
          </p>
          <Button variant="primary">
            <i className="fa-solid fa-book-open me-2"></i> Explore Courses
          </Button>
        </Card>
      ) : (
        <Row>
          {certificates.map((cert, i) => (
            <Col md={6} lg={4} key={i} className="mb-4">
              <Card
                className="shadow-sm border-0"
                style={{
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #ffffff, #f9fbfd)",
                }}
              >
                <Card.Body className="text-center">
                  <i
                    className="fa-solid fa-certificate text-success mb-3"
                    style={{ fontSize: "40px" }}
                  ></i>
                  <h5 className="fw-semibold">{cert.title}</h5>
                  <p className="text-muted mb-2">Issued on: {cert.date}</p>
                  <Button variant="outline-success" size="sm">
                    <i className="fa-solid fa-download me-2"></i> Download
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default Certificates;
