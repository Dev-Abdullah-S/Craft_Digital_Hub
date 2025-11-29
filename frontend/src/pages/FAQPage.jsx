import React, { useState } from "react";
import { Accordion } from "react-bootstrap";

function FAQPage() {
  const faqs = [
    {
      question: "How can I enroll in a course?",
      answer:
        "You can enroll by visiting the course page and clicking on the 'Enroll Now' button. Once payment is confirmed, your course will be added to your dashboard.",
    },
    {
      question: "Are the courses beginner-friendly?",
      answer:
        "Yes! Our courses are designed for all levels. Each includes step-by-step tutorials and practical exercises.",
    },
    {
      question: "Do I get a certificate after completing a course?",
      answer:
        "Yes, after completing all modules and passing the quiz, you can download your digital certificate.",
    },
    {
      question: "Can I access courses on mobile?",
      answer:
        "Absolutely! Our platform is fully responsive and works smoothly on mobile, tablet, and desktop devices.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Refunds are available within 7 days of purchase if you haven’t started the course. Contact support for help.",
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 fw-bold">❓ Frequently Asked Questions</h2>
      <p className="text-center text-muted mb-5">
        Find answers to common questions about our platform and courses.
      </p>

      <Accordion defaultActiveKey="0">
        {faqs.map((faq, index) => (
          <Accordion.Item eventKey={index.toString()} key={index} className="mb-3">
            <Accordion.Header>{faq.question}</Accordion.Header>
            <Accordion.Body>{faq.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

export default FAQPage;
