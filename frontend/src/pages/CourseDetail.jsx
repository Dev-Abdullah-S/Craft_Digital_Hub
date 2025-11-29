import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  ListGroup,
  Form,
  Card,
  Spinner
} from "react-bootstrap";

import coding from '../assets/coding.jpg';
import marketing from '../assets/marketing.jpg';
import graphicDesi2 from '../assets/graphicDesi2.jpg';
import seo from '../assets/seo.jpg';
import app from '../assets/app.jpg';
import wordpress from '../assets/wordpress.jpg';

function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // ✅ loader state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // start loader

    try {
      const response = await fetch("http://localhost:3000/api/query/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Query Failed!");
        setLoading(false);
        return;
      }

      alert("Query Submitted Successfully!");
      // Clear form
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting query:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false); // stop loader
    }
  };

  // ✅ Course data
  const courseData = {
    1: { title: "Full Stack Web Development", syllabus: ["HTML, CSS & JavaScript Fundamentals","Responsive Design & Tailwind CSS","Frontend Development with React.js","Backend with Node.js & Express.js","MongoDB Database & REST APIs","Version Control with Git & GitHub","Deployment on Vercel / Render"], duration: "3 Months", timing: "Mon - Fri | 7:00 PM - 9:00 PM", price: "PKR 9,999", image: coding },
    2: { title: "Digital Marketing Mastery", syllabus: ["Fundamentals of Digital Marketing","Search Engine Optimization (SEO)","Google Ads & Social Media Campaigns","Content Marketing & Copywriting","Email Marketing Strategies","Analytics, Tracking & Optimization"], duration: "2 Months", timing: "Tue, Thu & Sat | 6:00 PM - 8:00 PM", price: "PKR 7,499", image: marketing },
    3: { title: "Graphic Design Essentials", syllabus: ["Introduction to Graphic Design","Color Theory & Typography","Designing with Adobe Photoshop","Vector Graphics in Adobe Illustrator","Branding & Logo Design","Social Media Post Design with Canva","Portfolio Creation"], duration: "2 Months", timing: "Mon, Wed & Fri | 5:00 PM - 7:00 PM", price: "PKR 5,999", image: graphicDesi2 },
    4: { title: "SEO & Content Strategy", syllabus: ["Introduction to Search Engine Optimization","Keyword Research & On-page SEO","Off-page SEO & Link Building","Technical SEO & Site Audits","Content Strategy for SEO Growth","SEO Tools (Ahrefs, SEMrush, Google Analytics)"], duration: "1.5 Months", timing: "Tue, Thu & Sat | 8:00 PM - 9:30 PM", price: "PKR 6,499", image: seo },
    5: { title: "Mobile App Development", syllabus: ["Introduction to Mobile App Development","Frontend with React Native / Flutter","APIs & Backend Integration","Authentication & State Management","Push Notifications & Permissions","Publishing to Play Store"], duration: "3 Months", timing: "Mon - Fri | 8:00 PM - 10:00 PM", price: "PKR 10,999", image: app },
    6: { title: "WordPress Development", syllabus: ["WordPress Installation & Setup","Themes & Plugins Customization","Building Dynamic Pages","E-commerce with WooCommerce","SEO for WordPress","Speed Optimization & Security","Website Deployment"], duration: "1.5 Months", timing: "Tue, Thu & Sat | 7:00 PM - 9:00 PM", price: "PKR 6,999", image: wordpress },
  };

  const course = courseData[id];
  if (!course) return <h2 className="text-center my-5">Course not found!</h2>;

  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col md={6} className="mb-4">
          <img src={course.image} alt={course.title} className="img-fluid rounded shadow-sm" />
        </Col>
        <Col md={6}>
          <h2 className="fw-bold mb-3">{course.title}</h2>
          <p><strong>Duration:</strong> {course.duration}</p>
          <p><strong>Price:</strong> {course.price}</p>
          <p><strong>Timing:</strong> {course.timing}</p>

          <h5 className="mt-4">Syllabus:</h5>
          <ListGroup variant="flush" className="mb-4">
            {course.syllabus.map((item, index) => (
              <ListGroup.Item key={index}>{item}</ListGroup.Item>
            ))}
          </ListGroup>

          <Button variant="primary" size="lg" onClick={() => navigate(`/enroll/${id}`)}>
            Enroll Now
          </Button>
        </Col>
      </Row>

      {/* Post Query Section */}
      <Row className="mt-5">
        <Col md={{ span: 8, offset: 2 }}>
          <Card className="p-4 shadow-sm">
            <h3 className="fw-bold mb-4 text-center">Post Your Query</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Your Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Write your query here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </Form.Group>

              <div className="text-center">
                <Button variant="success" type="submit" size="lg" disabled={loading}>
                  {loading ? (
                    <>
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        className="me-2"
                      />
                      Sending...
                    </>
                  ) : (
                    "Submit Query"
                  )}
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CourseDetail;
