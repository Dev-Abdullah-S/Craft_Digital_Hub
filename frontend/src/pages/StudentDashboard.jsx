import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Container, Nav, Button, Row, Col, Card } from "react-bootstrap";

function StudentDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #30B4E2, #ffffff)",
        padding: "40px 0",
      }}
    >
      <Container>
        {/* Header */}
        <Card
          className="shadow-lg border-0 mb-4"
          style={{
            borderRadius: "15px",
            backgroundColor: "#fff",
          }}
        >
          <Card.Body className="d-flex justify-content-between align-items-center flex-wrap p-4">
            <div className="d-flex align-items-center">
              <i
                className="fa-solid fa-graduation-cap fa-2x me-3 text-primary"
                style={{ color: "#007bff" }}
              ></i>
              <h2 className="fw-bold mb-0 text-dark">Student Dashboard</h2>
            </div>

            <Button
              variant="danger"
              className="fw-semibold mt-3 mt-md-0"
              onClick={handleLogout}
            >
              <i className="fa-solid fa-right-from-bracket me-2"></i>
              Logout
            </Button>
          </Card.Body>
        </Card>

        {/* Navigation Tabs */}
        <Card
          className="shadow-sm border-0 mb-4"
          style={{ borderRadius: "10px", backgroundColor: "#fff" }}
        >
          <Card.Body>
            <Nav
              variant="tabs"
              defaultActiveKey="/StudentDashboard/profile"
              className="justify-content-center fw-semibold"
            >
              <Nav.Item>
                <Nav.Link as={Link} to="/StudentDashboard/profile">
                  <i className="fa-solid fa-user me-2 text-primary"></i>
                  Profile
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/StudentDashboard/courses">
                  <i className="fa-solid fa-book me-2 text-success"></i>
                  Enrolled Courses
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/StudentDashboard/certificates">
                  <i className="fa-solid fa-certificate me-2 text-warning"></i>
                  Certificates
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Body>
        </Card>

        {/* Page Content */}
        <Card
          className="shadow border-0"
          style={{
            borderRadius: "10px",
            backgroundColor: "#fff",
            padding: "20px",
          }}
        >
          <Outlet />
        </Card>
      </Container>
    </div>
  );
}

export default StudentDashboard;
