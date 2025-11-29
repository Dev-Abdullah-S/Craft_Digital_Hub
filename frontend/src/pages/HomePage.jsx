import React from "react";

import { Container , Button , Card , Row , Col } from "react-bootstrap";
import CarouselCom from "../components/Carousel";
import HeroSection from "../components/HeroSection";
import course1 from "../assets/course1.jpg";
import course2 from "../assets/course2.jpg";
import course3 from "../assets/course3.jpg";
import FeaturedCourses from "../components/FeaturedCourses";
import ServicesSection from "../components/ServicesSection";
import BlogHighlights from "../components/blogs";
import { useNavigate } from "react-router-dom";

function HomePage() {

 
 const courses = [
    {
      img: course1,
      title: "Full Stack Web Development",
      text: "Learn HTML, CSS, JavaScript, React, Node.js, and MongoDB — all in one complete course.",
    },
    {
      img: course2,
      title: "Graphic Design Masterclass",
      text: "Master Adobe Photoshop, Illustrator, and design principles for modern creative work.",
    },
    {
      img: course3,
      title: "Digital Marketing & SEO",
      text: "Grow your business online with SEO, Google Ads, and social media marketing techniques.",
    },
  ];
 const services = [
    {
      icon: "fa-solid fa-laptop-code",
      title: "Web Development",
      desc: "We build modern, responsive websites and web apps that deliver seamless user experiences.",
    },
    {
      icon: "fa-solid fa-paintbrush",
      title: "Graphic Design",
      desc: "Creative and visually stunning designs for brands, businesses, and digital platforms.",
    },
    {
      icon: "fa-solid fa-bullhorn",
      title: "Social Media Marketing",
      desc: "Boost your brand visibility with effective social media campaigns and content strategy.",
    },
    {
      icon: "fa-solid fa-magnifying-glass-chart",
      title: "SEO Optimization",
      desc: "Improve your website ranking and attract more visitors through proven SEO techniques.",
    },
    {
      icon: "fa-solid fa-video",
      title: "Video Editing",
      desc: "Professional video editing and motion graphics for YouTube, ads, and social media content.",
    },
    {
      icon: "fa-solid fa-chart-line",
      title: "Digital Marketing",
      desc: "Full-scale marketing strategies to grow your business online and drive engagement.",
    },
  ];
 const blogs = [
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    title: "Top 10 Web Development Trends in 2025",
    desc: "Explore the latest web development technologies shaping the future of digital experiences.",
    date: "Oct 20, 2025",
    icon: "fa-solid fa-laptop-code",
  },
  {
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    title: "Boost Your Brand with Smart Digital Marketing",
    desc: "Learn how to use SEO, social media, and data analytics to grow your online presence.",
    date: "Oct 12, 2025",
    icon: "fa-solid fa-bullhorn",
  },
  {
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    title: "UI/UX Design Principles You Should Know",
    desc: "A quick guide to creating engaging and user-friendly designs that leave an impact.",
    date: "Sep 28, 2025",
    icon: "fa-solid fa-paintbrush",
  },
];
 const testimonials = [
    {
      name: "Sarah Khan",
      role: "Web Design Student",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
      text: "Craft Digital Hub transformed my design skills! The mentors are professional, and the projects feel real-world ready.",
    },
    {
      name: "Ali Raza",
      role: "Full Stack Developer",
      image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=400&q=80",
      text: "The best online learning experience I’ve had. Their React and Node.js courses helped me land a remote job.",
    },
    {
      name: "Ayesha Malik",
      role: "Freelancer",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
      text: "I loved how interactive and practical every lesson was. The community support is just amazing!",
    },
  ];

  const navigate = useNavigate();

  return (
    <>
      <CarouselCom />
    <div style={{
        background: "linear-gradient(to left, #30B4E2, #ffffff)",
        height : '50px'
      }}></div>
      <HeroSection />
     <FeaturedCourses/>
     <ServicesSection/>
    <BlogHighlights/>
     <div
      style={{
        padding: "80px 0",
      }}
    >
      <Container>
        <h2 className="text-center fw-bold mb-5 text-dark">
          <i className="fa-solid fa-comments text-primary me-2"></i>
          What Our Students Say
        </h2>

        <Row className="g-4 justify-content-center">
          {testimonials.map((item, index) => (
            <Col key={index} md={4} sm={6} xs={12}>
              <Card
                className="shadow-lg border-0 h-100 text-center p-4 "
                style={{ borderRadius: "20px", backgroundColor: "#fff" }}
              >
                <Card.Img
                  variant="top"
                  src={item.image}
                  className="rounded-circle mx-auto"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    marginTop: "-60px",
                    border: "4px solid #30B4E2",
                  }}
                />
                <Card.Body>
                  <Card.Text className="text-muted fst-italic mb-3">
                    “{item.text}”
                  </Card.Text>
                  <h5 className="fw-bold">{item.name}</h5>
                  <p className="text-primary mb-0">{item.role}</p>
                  <div className="mt-3">
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-regular fa-star text-warning"></i>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
    <div
  style={{
    background: "linear-gradient(135deg, #30B4E2 0%, #ffffff 100%)",
    padding: "100px 20px",
  }}
  className="text-center mb-5"
>
  <Container>
    <h2
      className="fw-bold display-6 mb-3 text-dark"
      style={{
        fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
        lineHeight: "1.3",
      }}
    >
      Ready to Start Your Digital Journey?
    </h2>

    <p
      className="lead mb-4 text-secondary"
      style={{
        fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
        maxWidth: "700px",
        margin: "0 auto",
      }}
    >
      Join <strong>Craft Digital Hub</strong> today and gain access to
      practical courses, expert mentors, and a growing creative community.
    </p>

    <Button
      variant="primary"
      size="lg"
      className="px-5 py-3 fw-semibold shadow"
      style={{
        backgroundColor: "#007bff",
        border: "none",
        borderRadius: "50px",
        transition: "all 0.3s ease",
        fontSize: "1.1rem",
      }}
      onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
      onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
      onClick={() => navigate('/courses')}
    >
      <i className="fa-solid fa-rocket me-2"></i>
      Get Started Now
    </Button>
  </Container>
</div>

    </>
  );
}

export default HomePage;
