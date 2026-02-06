const mongoose = require('mongoose');
const nodemailer = require('nodemailer');

// MongoDB Contact Schema
const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

let Contact;
try {
    Contact = mongoose.model('Contact');
} catch {
    Contact = mongoose.model('Contact', contactSchema);
}

// MongoDB Connection
let cachedConnection = null;
async function connectDB() {
    if (cachedConnection) return cachedConnection;

    cachedConnection = await mongoose.connect(process.env.MONGO_URI);
    return cachedConnection;
}

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

export default async function handler(req, res) {
    // CORS Headers
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    // Handle preflight OPTIONS request
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method not allowed' });
    }

    try {
        await connectDB();

        const { name, email, message } = req.body;

        // Validate input
        if (!name || !email || !message) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }

        // Save to Database
        const newContact = new Contact({ name, email, message });
        await newContact.save();

        // Send Email Notification
        const mailOptions = {
            from: `"yscode Contact Form" <${process.env.MAIL_USER}>`,
            to: process.env.MAIL_USER,
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4; border-radius: 10px;">
                    <h2 style="color: #4f46e5; border-bottom: 2px solid #4f46e5; padding-bottom: 10px;">New Contact Submission</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                    <p><strong>Message:</strong></p>
                    <div style="background-color: #fff; padding: 15px; border-radius: 5px; border-left: 4px solid #4f46e5;">
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
}
