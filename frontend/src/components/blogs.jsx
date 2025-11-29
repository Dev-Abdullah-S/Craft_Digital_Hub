import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Components.css"; 
import { useNavigate } from "react-router-dom";
function BlogHighlights() {

  const navigate = useNavigate();

  const blogs = [
    {
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
      title: "Top 10 Web Development Trends in 2025",
      desc: "Discover the latest frameworks, tools, and design principles shaping modern web development.",
      icon: "fa-solid fa-calendar-days",
      date: "October 22, 2025",
    },
    {
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
      title: "How AI is Transforming Digital Marketing",
      desc: "Explore how artificial intelligence is reshaping advertising and user engagement.",
      icon: "fa-solid fa-calendar-days",
      date: "October 15, 2025",
    },
    {
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
      title: "Mastering UI/UX Design for Better Conversions",
      desc: "Learn how user experience and interface design can dramatically increase your conversion rate.",
      icon: "fa-solid fa-calendar-days",
      date: "October 10, 2025",
    },
  ];

  return (
    <Container
  fluid
  className="py-5 text-center"
  style={{
    background: "linear-gradient(to right, #ffffff, #30B4E2)",
  }}
>
  <h2 className="fw-bold display-6 mb-3 text-dark">Blog Highlights</h2>
  <p className="mb-4 text-secondary px-3">
    Stay updated with the latest trends, tips, and insights from the digital world.
  </p>

  <Row className="justify-content-center g-4 px-3">
    {blogs.map((blog, index) => (
      <Col
        key={index}
        lg={4}
        md={6}
        sm={10}
        xs={12}
        className="mx-auto"
        style={{ maxWidth: "400px" }}
      >
        <Card
          className="h-100 border-0 shadow-lg rounded-4 overflow-hidden"
          style={{
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
          }}
        >
          <Card.Img
            variant="top"
            src={blog.image}
            alt={blog.title}
            style={{
              height: "220px",
              objectFit: "cover",
              width: "100%",
            }}
          />
          <Card.Body className="px-4 py-3">
            <div className="d-flex align-items-center mb-2 text-secondary justify-content-center justify-content-md-start">
              <i className={`${blog.icon} me-2`} style={{ color: "#30B4E2" }}></i>
              <small>{blog.date}</small>
            </div>

            <Card.Title className="fw-bold text-dark fs-5 mb-2">
              {blog.title}
            </Card.Title>
            <Card.Text
              className="text-secondary mb-3"
              style={{
                fontSize: "0.95rem",
                lineHeight: "1.5",
              }}
            >
              {blog.desc}
            </Card.Text>
            <Button
              variant="outline-primary"
              className="rounded-pill px-4 py-2"
              style={{
                borderColor: "#30B4E2",
                color: "#30B4E2",
                fontWeight: "500",
                fontSize: "0.9rem",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#30B4E2";
                e.target.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#30B4E2";
              }}
              onClick={() => navigate('/blogs')}
            >
              Read More
            </Button>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</Container>

  );
}

export default BlogHighlights;
