import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

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
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS  // Your App Password (not Google password)
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
    const { name, email, gameInterest, message } = req.body;

    if (!email || !name) {
        return res.status(400).json({ success: false, message: 'Name and Email are required.' });
    }

    const consultationData = {
        name,
        email,
        phone: 'Not provided',
        consultationType: gameInterest || 'General Inquiry',
        selectedPattern: 'N/A',
        preferredDate: new Date().toISOString().split('T')[0],
        message: message || 'No message provided'
    };

    const emailConfig = {
        brandName: 'Autobotz Esports',
        websiteUrl: 'https://autobotzesports.com',
        contactEmail: 'autobotzesports@gmail.com'
    };

    try {
        // 1. Send Admin Notification
        const adminMailOptions = {
            from: `"${name}" <${process.env.EMAIL_USER}>`,
            to: 'autobotzesports@gmail.com', // The admin email
            subject: `New Inquiry: ${consultationData.consultationType} from ${name}`,
            text: `New Inquiry Received:\n\nName: ${name}\nEmail: ${email}\nGame/Interest: ${consultationData.consultationType}\nMessage: ${consultationData.message}\n\nSubmitted on: ${new Date().toLocaleString()}`,
            replyTo: email
        };

        // 2. Send User Confirmation
        const userMailOptions = {
            from: `"Autobotz Esports" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: 'Mission Acknowledged - Autobotz Esports',
            text: `Hi ${name},\n\nThank you for reaching out to Autobotz Esports regarding ${consultationData.consultationType}.\n\nWe have received your message:\n"${consultationData.message}"\n\nOur team will review your inquiry and get back to you shortly.\n\nGame On,\nAutobotz Esports Team`
        };

        // Send emails
        // We try to send both. Even if delivery fails, we return success to the user 
        // to avoid disruptive error messages in the UI.
        try {
            await transporter.sendMail(adminMailOptions);
            await transporter.sendMail(userMailOptions);
            console.log(`Emails sent successfully for ${email}`);
        } catch (mailError) {
            console.error('Email delivery failed internally:', mailError.message);
            // We do NOT stop here; we still return 200 to the frontend
        }

        res.status(200).json({ success: true, message: 'Message received by HQ!' });

    } catch (error) {
        console.error('API processing error:', error);
        // This only hits if the code logic crashes (e.g. database error)
        res.status(200).json({ success: true, message: 'Transmission Received' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
