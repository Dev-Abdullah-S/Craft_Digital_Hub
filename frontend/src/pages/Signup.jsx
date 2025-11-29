import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Container, Row, Card, Form, Button, InputGroup, Spinner } from "react-bootstrap";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // ✅ loader state
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true); // start loader

    try {
      const response = await fetch("http://localhost:3000/api/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Signup failed!");
        setLoading(false);
        return;
      }

      alert("Signup successful!");
      navigate("/login");
    } catch (error) {
      console.error("Signup error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false); // stop loader
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #30B4E2, #ffffff)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Card
            className="p-4 shadow-lg border-0"
            style={{
              maxWidth: "400px",
              width: "100%",
              borderRadius: "20px",
              backdropFilter: "blur(12px)",
              background: "rgba(255, 255, 255, 0.85)",
            }}
          >
            <div className="text-center mb-4">
              <img
                src="/logo.png"
                alt="Craft Digital Hub Logo"
                style={{ width: "70px", height: "70px" }}
              />
              <h3 className="fw-bold mt-3" style={{ color: "#1e3d59" }}>
                Create an Account
              </h3>
              <p className="text-muted small">Join and start your learning journey</p>
            </div>

            <Form onSubmit={handleSignup}>
              {/* Name */}
              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">Full Name</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <i style={{ color: "#0077b6" }} className="fa-solid fa-user"></i>
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </InputGroup>
              </Form.Group>

              {/* Email */}
              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">Email</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <i style={{ color: "#0077b6" }} className="fa-solid fa-envelope"></i>
                  </InputGroup.Text>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </InputGroup>
              </Form.Group>

              {/* Password */}
              <Form.Group className="mb-4">
                <Form.Label className="fw-semibold">Password</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <i style={{ color: "#0077b6" }} className="fa-solid fa-lock"></i>
                  </InputGroup.Text>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </InputGroup>
              </Form.Group>

              {/* Submit */}
              <Button
                type="submit"
                className="w-100 py-2 fw-semibold"
                style={{
                  background: "linear-gradient(90deg, #30B4E2, #0077b6)",
                  border: "none",
                  borderRadius: "8px",
                }}
                disabled={loading}
              >
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
                    Signing Up...
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-user-plus me-2"></i> Sign Up
                  </>
                )}
              </Button>

              <p className="text-center mt-3 mb-0 text-muted">
                Already have an account?{" "}
                <Link to="/login" style={{ color: "#0077b6", fontWeight: "600" }}>
                  Login
                </Link>
              </p>
            </Form>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default Signup;
