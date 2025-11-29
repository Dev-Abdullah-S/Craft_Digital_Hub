import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import { Container, Button } from "react-bootstrap";
import c1 from '../assets/c1.jpg'
import graphic from "../assets/graphic.jpg";
import marketing from "../assets/marketing.jpg";
import app from "../assets/app.jpg";
import uiux from "../assets/uiux.jpg";
import skills from "../assets/skills.jpg";
import { useNavigate } from 'react-router-dom';
import "./Components.css"; 

function CarouselCom() {

  const navigate = useNavigate();

  const slides = [
    {
      img: c1,
      title: "Web Development",
    },
    {
      img: graphic,
      title: "Graphic Designing",
    },
    {
      img: marketing,
      title: "Digital Marketing",
    },
    {
      img: app,
      title: "App Development",
    },
    {
      img: uiux,
      title: "UI-UX Designing",
    },
    {
      img: skills,
      title: "More Digital Skills",
    },
  ];

  return (
    <>
      <Container fluid className="p-0">
        <Carousel fade interval={3000}>
          {slides.map((slide, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100 carousel-img"
                src={slide.img}
                alt={`Slide ${index + 1}`}
              />
              <Carousel.Caption className="carousel-caption-custom">
                <h3>{slide.title}</h3>
                <Button onClick={()=> navigate('/courses')} variant="warning" size="lg" className="fw-bold mt-2">
                  Enroll Now
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </>
  );
}

export default CarouselCom;
