import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import c1 from "../assets/c1.jpg";
import graphicDesi from "../assets/graphicDesi.jpg";
import marketing from "../assets/marketing.jpg";
import "./Components.css"; 
import { useNavigate } from "react-router-dom";

function FeaturedCourses() {
  const navigate = useNavigate();
  const courses = [
    {
      img: c1,
      title: "Web Development Bootcamp",
      text: "Master HTML, CSS, JavaScript, and React to build modern web apps.",
    },
    {
      img: graphicDesi,
      title: "Graphic Design Masterclass",
      text: "Learn Adobe Photoshop, Illustrator, and real-world design principles.",
    },
    {
      img: marketing,
      title: "Digital Marketing Strategy",
      text: "Understand SEO, social media, and marketing automation to grow businesses.",
    },
  ];

  return (
    <Container
      fluid
      className="py-5 text-center text-white featured-courses-section"
    >
      <h2 className="fw-bold mb-5 display-6">Featured Courses</h2>

      <Row className="justify-content-center g-4 px-3">
        {courses.map((course, index) => (
          <Col key={index} md={4} sm={6} xs={12}>
            <Card className="course-card h-100 shadow-lg border-0 rounded-4">
              <Card.Img
                variant="top"
                src={course.img}
                alt={course.title}
                className="course-img"
              />
              <Card.Body className="text-dark d-flex flex-column justify-content-between">
                <div>
                  <Card.Title className="fw-bold mb-2">
                    {course.title}
                  </Card.Title>
                  <Card.Text>{course.text}</Card.Text>
                </div>
                <Button
                  variant="primary"
                  className="enroll-btn mt-3"
                  size="lg"
                  onClick={() => navigate('/courses')}
                >
                  Enroll Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default FeaturedCourses;
