import React from "react";
import { Card, ProgressBar, Row, Col, Button } from "react-bootstrap";

function EnrolledCourses() {
  const enrolled = [
    { title: "Full Stack Web Development", progress: 70 },
    { title: "Digital Marketing Mastery", progress: 40 },
    { title: "UI/UX Design Fundamentals", progress: 85 },
  ];

  return (
    <div className="p-3">
      <h4 className="fw-bold mb-4">
        <i className="fa-solid fa-book-open-reader me-2 text-primary"></i>
        Enrolled Courses
      </h4>

      <Row>
        {enrolled.map((course, i) => (
          <Col md={6} lg={4} key={i} className="mb-4">
            <Card
              className="h-100 shadow-sm border-0"
              style={{
                borderRadius: "12px",
                background: "linear-gradient(135deg, #ffffff, #f9fbfd)",
              }}
            >
              <Card.Body>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <h5 className="fw-semibold mb-0">
                    <i className="fa-solid fa-graduation-cap me-2 text-success"></i>
                    {course.title}
                  </h5>
                  <span className="badge bg-info text-dark">
                    {course.progress}%
                  </span>
                </div>

                <ProgressBar
                  now={course.progress}
                  label={`${course.progress}%`}
                  variant={course.progress >= 70 ? "success" : "warning"}
                  className="mb-3"
                />

                <Button
                  variant="outline-primary"
                  size="sm"
                  className="w-100"
                >
                  <i className="fa-solid fa-arrow-right me-2"></i> Continue Learning
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default EnrolledCourses;
