import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import coding from '../assets/coding.jpg';
import marketing from '../assets/marketing.jpg';
import graphicDesi2 from '../assets/graphicDesi2.jpg'
import seo from '../assets/seo.jpg'
import app from '../assets/app.jpg'
import wordpress from '../assets/wordpress.jpg'

function CoursesPage() {
  const [category, setCategory] = useState("All");

 const courses = [
  {
    id: 1,
    title: "Full Stack Web Development",
    category: "Web Development",
    image:
      coding,
    description:
      "Learn to build powerful full-stack apps using React, Node.js, Express, and MongoDB.",
    level: "Intermediate",
    price: "PKR 9,999",
    caption: "Become a modern web developer — from frontend to backend.",
  },
  {
    id: 2,
    title: "Digital Marketing Mastery",
    category: "Marketing",
    image:
      marketing,
    description:
      "Master SEO, content marketing, social media strategy, and paid campaigns.",
    level: "Beginner",
    price: "PKR 7,499",
    caption: "Grow your brand with effective digital marketing skills.",
  },
  {
    id: 3,
    title: "Graphic Design Essentials",
    category: "Design",
    image:graphicDesi2
      ,
    description:
      "Learn Photoshop, Illustrator, and Canva to design stunning visuals and logos.",
    level: "Beginner",
    price: "PKR 5,999",
    caption: "Turn your creativity into professional designs.",
  },
  {
    id: 4,
    title: "Search Engine Optimization (SEO)",
    category: "Marketing",
    image:
     seo,
    description:
      "Understand SEO techniques to rank websites higher on Google and increase traffic.",
    level: "Intermediate",
    price: "PKR 6,999",
    caption: "Rank higher. Drive traffic. Grow your business.",
  },
  {
    id: 5,
    title: "Mobile App Development",
    category: "App Development",
    image:
      app,
    description:
      "Build Android and iOS apps using React Native and modern development tools.",
    level: "Intermediate",
    price: "PKR 8,499",
    caption: "Create apps that people love to use every day.",
  },
  {
    id: 6,
    title: "WordPress Development",
    category: "Web Development",
    image:
      wordpress,
    description:
      "Learn to build, customize, and manage websites using WordPress CMS.",
    level: "Beginner",
    price: "PKR 5,499",
    caption: "Create stunning, functional websites without coding.",
  },
];


  const filteredCourses =
    category === "All"
      ? courses
      : courses.filter((course) => course.category === category);

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", padding: "60px 0" }}>
      <Container>
        <h2 className="fw-bold text-center mb-5">Explore Our Courses</h2>

        {/* Filters */}
        <Row className="justify-content-center mb-4">
          <Col md={4}>
            <Form.Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="shadow-sm"
            >
              <option value="All">All Categories</option>
              <option value="Web Development">Web Development</option>
              <option value="Marketing">Marketing</option>
              <option value="Design">Design</option>
            </Form.Select>
          </Col>
        </Row>

        {/* Course Cards */}
        <Row className="g-4">
          {filteredCourses.map((course) => (
            <Col md={4} sm={6} key={course.id}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Img
                  variant="top"
                  src={course.image}
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <Card.Body>
                  <h5 className="fw-bold">{course.title}</h5>
                  <p className="text-muted small mb-2">{course.level}</p>
                  <p>{course.description}</p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="fw-semibold text-primary">{course.price}</span>
                    <Link to={`/courses/${course.id}`} className="btn btn-primary btn-sm">
                      View Details
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default CoursesPage;
