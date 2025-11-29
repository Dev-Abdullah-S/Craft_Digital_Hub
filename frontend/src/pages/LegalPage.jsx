import React from 'react'
import { Container } from "react-bootstrap";
function LegalPage() {
  return (
    <>
     <Container className="py-5">
      <h2 className="fw-bold mb-4">🔒 Privacy Policy</h2>
      <p>
        At Craft Digital Hub, we respect your privacy and are committed to protecting your personal information. 
        This policy explains how we collect, use, and safeguard your data.
      </p>

      <h5 className="fw-bold mt-4">Information We Collect</h5>
      <ul>
        <li>Personal information like name, email, and contact details.</li>
        <li>Usage data such as pages visited and actions on our platform.</li>
        <li>Cookies and tracking technologies for analytics and user experience.</li>
      </ul>

      <h5 className="fw-bold mt-4">How We Use Your Information</h5>
      <ul>
        <li>To provide and improve our courses and services.</li>
        <li>To communicate important updates and offers.</li>
        <li>For analytics to enhance user experience.</li>
      </ul>

      <h5 className="fw-bold mt-4">Data Security</h5>
      <p>
        We implement industry-standard security measures to protect your information. 
        However, no system is completely secure and we cannot guarantee absolute protection.
      </p>

      <h5 className="fw-bold mt-4">Your Consent</h5>
      <p>
        By using our platform, you consent to our Privacy Policy and agree to its terms.
      </p>
    </Container>
    <Container className="py-5">
      <h2 className="fw-bold mb-4">📜 Terms & Conditions</h2>
      <p>
        Welcome to Craft Digital Hub. By accessing our platform, you agree to comply with our terms and conditions outlined below.
      </p>

      <h5 className="fw-bold mt-4">Use of Services</h5>
      <ul>
        <li>All courses and materials are for personal and educational use only.</li>
        <li>Reproduction or distribution without permission is prohibited.</li>
        <li>Users are responsible for maintaining confidentiality of their account information.</li>
      </ul>

      <h5 className="fw-bold mt-4">Payments & Refunds</h5>
      <ul>
        <li>Course fees must be paid in full to access content.</li>
        <li>Refunds are provided according to our refund policy.</li>
      </ul>

      <h5 className="fw-bold mt-4">Intellectual Property</h5>
      <p>
        All content on Craft Digital Hub, including text, images, videos, and code, is protected by intellectual property laws.
      </p>

      <h5 className="fw-bold mt-4">Limitation of Liability</h5>
      <p>
        Craft Digital Hub is not liable for any direct, indirect, or consequential damages resulting from the use of our platform.
      </p>

      <h5 className="fw-bold mt-4">Changes to Terms</h5>
      <p>
        We reserve the right to update these terms at any time. Continued use of the platform constitutes acceptance of the updated terms.
      </p>
    </Container>
    </>
  )
}

export default LegalPage;