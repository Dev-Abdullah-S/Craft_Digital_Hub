import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Spinner } from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";

function ContactUsPage() {
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
        setLoading(false); // stop loader on error
        return;
      }

      alert("Query Submitted Successfully!");
      // Clear form
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("error in posting query:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false); // stop loader
    }
  };

  return (
    <Container className="py-5">
      <h2 className="fw-bold text-center display-6 mb-4">📞 Contact Us</h2>
      <p className="text-center text-muted mb-5">
        We’d love to hear from you! Whether you have a question, feedback, or want to collaborate — get in touch with us.
      </p>

      <Row className="g-4">
        {/* Contact Form */}
        <Col md={6}>
          <Card className="p-4 border-0 shadow-sm">
            <h4 className="fw-bold mb-4">Send a Message</h4>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Write your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 fw-bold" disabled={loading}>
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
                  <>
                    <i className="fa-solid fa-paper-plane me-2"></i> Send Message
                  </>
                )}
              </Button>
            </Form>
          </Card>
        </Col>

        {/* Contact Info + Map */}
        <Col md={6}>
          <Card className="p-4 border-0 shadow-sm h-100">
            <h4 className="fw-bold mb-4">Get in Touch</h4>

            <div className="mb-3 d-flex align-items-center">
              <i className="fa-solid fa-envelope text-primary fs-4 me-3"></i>
              <div>
                <strong>Email:</strong>
                <p className="mb-0">support@craftdigitalhub.com</p>
              </div>
            </div>

            <div className="mb-3 d-flex align-items-center">
              <i className="fa-brands fa-whatsapp text-success fs-4 me-3"></i>
              <div>
                <strong>WhatsApp:</strong>
                <p className="mb-0">+92 300 1234567</p>
              </div>
            </div>

            <div className="mb-3 d-flex align-items-center">
              <i className="fa-solid fa-clock text-warning fs-4 me-3"></i>
              <div>
                <strong>Working Hours:</strong>
                <p className="mb-0">Mon - Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </div>

            <div className="ratio ratio-16x9 rounded overflow-hidden">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.99422242358!2d67.00113877407162!3d24.796934947505663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33db2e37a4563%3A0x5e4f478d3b9c45d9!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1698740018021!5m2!1sen!2s"
                allowFullScreen
                loading="lazy"
                style={{ border: 0 }}
              ></iframe>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactUsPage;
