import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Container, Row, Card, Form, Button, InputGroup, Spinner } from "react-bootstrap";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // ✅ loading state
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // start loader

    try {
      const response = await fetch("http://localhost:3000/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Invalid credentials!");
        setLoading(false);
        return;
      }

      // Save user info & token to localStorage
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("isAuthenticated", "true");

      navigate("/StudentDashboard");
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false); // stop loader
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #30B4E2, #ffffff)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container>
        <Row className="d-flex justify-content-center">
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
                Student Login
              </h3>
              <p className="text-muted" style={{ fontSize: "0.9rem" }}>
                Access your dashboard and start learning
              </p>
            </div>

            <Form onSubmit={handleLogin}>
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
              <Form.Group className="mb-3">
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

              <Button
                type="submit"
                className="w-100 py-2 mt-2"
                style={{
                  background: "linear-gradient(90deg, #30B4E2, #0077b6)",
                  border: "none",
                  fontWeight: "600",
                  letterSpacing: "0.5px",
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
                    Logging In...
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-right-to-bracket me-2"></i> Login
                  </>
                )}
              </Button>

              <p className="text-center mt-4 mb-0 text-muted">
                Don’t have an account?{" "}
                <Link to="/signup" style={{ color: "#0077b6", fontWeight: "600" }}>
                  Sign up
                </Link>
              </p>
            </Form>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
