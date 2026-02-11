const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD
  }
});

// Validation middleware
const validateContactForm = (req, res, next) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'All fields are required'
    });
  }
  
  if (name.trim().length < 2) {
    return res.status(400).json({
      success: false,
      error: 'Name must be at least 2 characters long'
    });
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      error: 'Please provide a valid email address'
    });
  }
  
  if (message.trim().length < 10) {
    return res.status(400).json({
      success: false,
      error: 'Message must be at least 10 characters long'
    });
  }
  
  next();
};

// Contact form endpoint
app.post('/api/contact', validateContactForm, async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Email to business
    const businessMailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.CONTACT_EMAIL || process.env.GMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4F46E5;">New Contact Form Submission</h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-left: 4px solid #4F46E5; border-radius: 4px;">
              <p>${message.replace(/\n/g, '<br>')}</p>
            </div>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This message was sent from the Aviothic AI contact form.
          </p>
        </div>
      `
    };
    
    // Auto-reply to user
    const autoReplyMailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Aviothic AI',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4F46E5;">Thank you for your message!</h2>
          <p>Dear ${name},</p>
          <p>Thank you for reaching out to Aviothic AI. We've received your message and our team will review it shortly.</p>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Your message:</strong></p>
            <div style="background-color: white; padding: 15px; border-left: 4px solid #4F46E5; border-radius: 4px;">
              <p>${message.replace(/\n/g, '<br>')}</p>
            </div>
          </div>
          <p>We typically respond within 24-48 hours. If your inquiry is urgent, please contact us directly.</p>
          <p>Best regards,<br>The Aviothic AI Team</p>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          <p style="color: #666; font-size: 12px;">
            This is an automated response. Please do not reply to this email.
          </p>
        </div>
      `
    };
    
    // Send emails
    await transporter.sendMail(businessMailOptions);
    await transporter.sendMail(autoReplyMailOptions);
    
    res.status(200).json({
      success: true,
      message: 'Thank you for your message! We will contact you soon.'
    });
    
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send message. Please try again later.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Contact form backend is running',
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found'
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    success: false,
    error: 'Internal server error'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Contact form backend running on port ${PORT}`);
  console.log(`📧 Email configured for: ${process.env.GMAIL_USER}`);
  console.log(`🌐 Frontend URL: ${process.env.FRONTEND_URL || 'http://localhost:5173'}`);
});