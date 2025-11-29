import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Card, Form, Button, Spinner } from "react-bootstrap";
import { courseData } from "../data/courseData"; // Adjust path to your courseData file

function CourseEnrollment() {
  const { id } = useParams();
  const course = courseData[id]; // Get the selected course 

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // ✅ loader state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // start loader

    try {
      const response = await fetch("http://localhost:3000/api/query/enroll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          course: course ? course.title : "",
          phone,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Enrollment Failed!");
        setLoading(false);
        return;
      }

      alert("Enrollment Submitted Successfully!");

      // Clear form
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      console.error("Error in posting enrollment:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false); // stop loader
    }
  };

  return (
    <Container className="py-5">
      <Card className="p-4 shadow-sm">
        <h2 className="text-center mb-4">Course Enrollment Form</h2>

        {course ? (
          <>
            <p className="text-center text-muted mb-4">
              You’re enrolling in <strong>{course.title}</strong>
            </p>
            <div className="text-center mb-4">
              <img
                src={course.image}
                alt={course.title}
                className="img-fluid rounded"
                style={{ maxHeight: "200px", objectFit: "cover" }}
              />
            </div>
          </>
        ) : (
          <p className="text-center text-danger">Invalid course ID</p>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="03xx-xxxxxxx"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Message (Optional)</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Write a message or question for us..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Form.Group>

          <div className="text-center d-flex flex-column gap-3">
            <Button type="submit" variant="primary" size="lg" disabled={loading}>
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
                  Submitting...
                </>
              ) : (
                "Confirm Enrollment"
              )}
            </Button>

            <Button
              variant="success"
              size="lg"
              href={`https://wa.me/923001234567?text=Hello! I'm interested in enrolling in the ${course?.title} course.`}
              target="_blank"
            >
              💬 Let’s Chat on WhatsApp
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
}

export default CourseEnrollment;
