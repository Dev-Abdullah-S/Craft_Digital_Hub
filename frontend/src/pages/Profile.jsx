import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";

function Profile() {
 const storedUser = localStorage.getItem("user");

let user = null;
try {
  user = storedUser ? JSON.parse(storedUser) : null;
} catch (error) {
  console.error("Invalid JSON in localStorage:", error);
  user = null;
}



  return (
    <div className="p-3">
      <Card
        className="shadow-sm border-0"
        style={{
          borderRadius: "12px",
          background: "linear-gradient(135deg, #ffffff, #f8f9fa)",
        }}
      >
        <Card.Body>
          <Row className="align-items-center">
            {/* Profile Avatar */}
            <Col md={3} className="text-center mb-3 mb-md-0">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center mx-auto"
                style={{
                  width: "100px",
                  height: "100px",
                 background: "linear-gradient(135deg, #30B4E2, #ffffff)",
                  color: "white",
                  fontSize: "40px",
                  fontWeight: "bold",
                }}
              >
                {user?.name ? user.name.charAt(0).toUpperCase() : "?"}
              </div>
            </Col>

            {/* Profile Info */}
            <Col md={9}>
              <h4 className="fw-bold mb-3">
                <i className="fa-solid fa-user me-2 text-primary"></i>
                Profile Information
              </h4>
              <p className="mb-2">
                <i className="fa-solid fa-user-tag me-2 text-secondary"></i>
                <strong>Name:</strong> {user?.name}
              </p>
              <p className="mb-2">
                <i className="fa-solid fa-envelope me-2 text-secondary"></i>
                <strong>Email:</strong> {user?.email}
              </p>

              <Button variant="outline-primary" className="mt-3">
                <i className="fa-solid fa-pen-to-square me-2"></i>Edit Profile
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Profile;
