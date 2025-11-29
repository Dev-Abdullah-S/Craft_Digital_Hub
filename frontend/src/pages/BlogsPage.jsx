import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Badge,
} from "react-bootstrap";

function Blogspage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", "Web Development", "Design", "Marketing", "AI"];

   const blogs = [
    {
      title: "Top 5 SEO Strategies for 2025",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      category: "SEO",
      date: "Oct 22, 2025",
      excerpt: "Learn the most effective SEO trends and techniques to boost your online presence...",
    },
    {
      title: "Why Digital Marketing is Crucial for Startups",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      category: "Marketing",
      date: "Oct 10, 2025",
      excerpt: "Discover why startups must prioritize digital marketing to grow faster and smarter...",
    },
    {
      title: "Mastering Social Media Branding",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      category: "Social Media",
      date: "Sept 25, 2025",
      excerpt: "Learn how to build a powerful brand image through strategic social media campaigns...",
    },
  ];

  const filteredBlogs = blogs.filter(
    (b) =>
      (category === "All" || b.category === category) &&
      b.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container className="py-5">
      {/* Header */}
      <h2 className="fw-bold text-center mb-4">
        <i className="fa-solid fa-blog text-primary me-2"></i>Our Blog Insights
      </h2>
      <p className="text-center text-muted mb-5">
        Stay updated with the latest trends, tutorials, and insights from the
        digital world.
      </p>

      {/* Search & Categories */}
      <Row className="justify-content-center mb-4">
        <Col md={6}>
          <Form.Control
            type="text"
            placeholder="🔍 Search blog posts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="shadow-sm"
          />
        </Col>
      </Row>

      <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={category === cat ? "primary" : "outline-secondary"}
            size="sm"
            onClick={() => setCategory(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Blog Cards */}
      <Row>
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <Col md={6} lg={4} key={blog.id} className="mb-4">
              <Card className="shadow-sm border-0 h-100">
                <Card.Img
                  variant="top"
                  src={blog.img}
                  alt={blog.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Badge bg="info" className="text-dark mb-2">
                    {blog.category}
                  </Badge>
                  <Card.Title>{blog.title}</Card.Title>
                  <Card.Text className="text-muted mb-3">
                    <i className="fa-solid fa-user me-1"></i> {blog.author} •{" "}
                    <i className="fa-solid fa-calendar-days ms-1 me-1"></i>
                    {blog.date}
                  </Card.Text>

                  <div className="d-flex justify-content-between align-items-center">
                    <Button variant="outline-primary" size="sm">
                      Read More <i className="fa-solid fa-arrow-right ms-1"></i>
                    </Button>

                    <div>
                      <i className="fa-brands fa-facebook text-primary me-2"></i>
                      <i className="fa-brands fa-twitter text-info me-2"></i>
                      <i className="fa-brands fa-linkedin text-primary"></i>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-center text-muted">No blogs found.</p>
        )}
      </Row>

      {/* Related Posts Section */}
      <div className="mt-5 text-center">
        <h5 className="fw-semibold mb-3">You might also like</h5>
        <p className="text-muted">
          Explore more articles on technology, marketing, and creativity.
        </p>
      </div>
    </Container>
  );
}

export default Blogspage;
