import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import { getAdminTemplate, getUserTemplate } from './emailTemplates.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Email Configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Verify connection configuration
transporter.verify(function (error, success) {
    if (error) {
        console.log('Server is ready to take our messages but email configuration might be missing or incorrect.');
        console.log('Error:', error.message);
    } else {
        console.log('Server is ready to take our messages');
    }
});

app.post('/api/consultation', async (req, res) => {
    const { name, email, phone, gameInterest, message, organization, serviceType, preferredDate } = req.body;

    if (!email || !name) {
        return res.status(400).json({ success: false, message: 'Name and Email are required.' });
    }

    const submissionData = {
        Name: name,
        Email: email,
        Phone: phone || 'Not provided',
        'Game Interest': gameInterest || 'General',
        'Service Type': serviceType || 'Not specified',
        'Organization': organization || 'N/A',
        'Preferred Date': preferredDate || 'N/A',
        Message: message || 'No message provided'
    };

    try {
        // 1. Prepare Admin Email
        const adminMailOptions = {
            from: `"${name}" <${process.env.EMAIL_USER}>`,
            to: 'barathwaajvs123@gmail.com', // Admin Email
            subject: `New Registration: ${name}`,
            html: getAdminTemplate(submissionData),
            replyTo: email
        };

        // 2. Prepare User Auto-Reply Email
        const userMailOptions = {
            from: `"Autobotz Esports" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: 'Congratulations! Welcome to Autobotz Esports',
            html: getUserTemplate(name)
        };

        // 3. Send Emails in Parallel
        const sendAdmin = transporter.sendMail(adminMailOptions);
        const sendUser = transporter.sendMail(userMailOptions);

        await Promise.all([sendAdmin, sendUser]);

        console.log(`Emails sent successfully for ${email}`);
        res.status(200).json({ success: true, message: 'Registration successful! Check your email.' });

    } catch (error) {
        console.error('Email processing error:', error);
        res.status(500).json({ success: false, message: 'Failed to process registration.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
