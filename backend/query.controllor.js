import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});


const SendQuery = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

   
    await transporter.sendMail({
      from: `"New Query" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: "New Query Received",
      html: `
        <h3>New Query Details:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

  
    await transporter.sendMail({
      from: `"Craft Digital Hub" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We Received Your Query",
      html: `
        <h2>Thank You, ${name}!</h2>
        <p>Your query has been received successfully.</p>
        <p>Our team will contact you as soon as possible.</p>
        <br>
        <p>Regards,</p>
        <strong>Craft Digital Hub</strong>
      `
    });

    res.status(200).json({ message: "Query sent successfully!" });

  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({ message: "Failed to send query", error: error.message });
  }
};



const courseEnrolment = async (req, res) => {
  try {
    const { name, email, course, phone, message } = req.body;

    if (!name || !email || !course || !phone) {
      return res.status(400).json({ message: "All fields are required" });
    }

    await transporter.sendMail({
      from: `"Course Enrollment" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Course Enrollment Request",
      html: `
        <h2>New Course Enrollment</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Course Selected:</strong> ${course}</p>
        <p><strong>Additional Message:</strong> ${message || 'N/A'}</p>
      `
    });

    await transporter.sendMail({
      from: `"Craft Digital Hub" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your Course Enrollment Request is Received",
      html: `
        <h2>Thank You for Your Enrollment!</h2>
        <p>Hi <strong>${name}</strong>,</p>
        <p>Your enrollment request for <strong>${course}</strong> has been received.</p>
        <p>Our team will contact you as soon as possible.</p>
        <br>
        <p>Regards,</p>
        <strong>Craft Digital Hub</strong>
      `
    });

    res.status(200).json({
      message: "Course enrollment sent & auto-reply delivered successfully!"
    });

  } catch (error) {
    console.error("Enrollment Error:", error);
    res.status(500).json({
      message: "Failed to send enrollment request",
      error: error.message
    });
  }
};

export default { SendQuery, courseEnrolment };
