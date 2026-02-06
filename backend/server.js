require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const Contact = require('./models/Contact');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected Successfully'))
    .catch(err => console.error('MongoDB Connection Error:', err));

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Basic Route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to yscode API' });
});

// Contact Route
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // 1. Save to Database
        const newContact = new Contact({ name, email, message });
        await newContact.save();

        // 2. Send Email Notification
        const mailOptions = {
            from: `"yscode Contact Form" <${process.env.MAIL_USER}>`,
            to: process.env.MAIL_USER,
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4; border-radius: 10px;">
                    <h2 style="color: #1a1a2e; border-bottom: 2px solid #4a69bd; padding-bottom: 10px;">New Contact Submission</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                    <p><strong>Message:</strong></p>
                    <div style="background-color: #fff; padding: 15px; border-radius: 5px; border-left: 4px solid #4a69bd;">
                        ${message.replace(/\n/g, '<br>')}
                    </div>
                    <hr style="margin-top: 20px;">
                    <p style="font-size: 12px; color: #777;">This email was sent from the yscode website contact form.</p>
                </div>
            `
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ success: true, message: 'Message received and email sent successfully!' });
    } catch (error) {
        console.error('Contact Form Error:', error);
        res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
