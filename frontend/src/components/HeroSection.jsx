import React from "react";
import { Container, Button } from "react-bootstrap";
import bgVideo from "../assets/bgVideo.mp4"; 
import "./Components.css"; 
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();
  return (
    <div
      className="position-relative text-center text-white hero-section"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="position-absolute w-100 h-100"
        style={{
          objectFit: "cover",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div
        className="position-absolute w-100 h-100"
        style={{
          top: 0,
          left: 0,
          background: "rgba(0, 0, 0, 0.5)",
          zIndex: 0,
        }}
      ></div>

      {/* Content */}
      <Container
        fluid
        className="d-flex flex-column justify-content-center align-items-center h-100"
        style={{ zIndex: 1, position: "relative" }}
      >
        <h2 className="fw-bold display-4 hero-title">
          Learn. Create. Grow.
        </h2>

        <p className="lead mt-3 mb-4 w-75 hero-subtitle">
          Join <strong>Craft Digital Hub</strong> to master real-world digital
          skills and launch your creative journey.
        </p>

        <Button
          style={{
            backgroundColor: "#30B4E2",
            border: "none",
            borderRadius: "20px",
            padding: "10px 25px",
            fontWeight: "600",
          }}
          size="lg"
          onClick={() => navigate('/courses')}
        >
          Get Started
        </Button>
      </Container>
    </div>
  );
}

export default HeroSection;
