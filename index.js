const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const app = express();

const port = process.env.PORT || 4000;

// Serve static files from Parenting-Coach/public
app.use(express.static(path.join(__dirname, 'Parenting-Coach', 'public')));

app.use(express.json());

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }
    try {
        // Configure your email transport (update with your credentials)
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'YOUR_EMAIL@gmail.com',
                pass: 'YOUR_APP_PASSWORD'
            }
        });
        await transporter.sendMail({
            from: email,
            to: 'TARGET_EMAIL@gmail.com', // Change to your target email
            subject: `Contact Form Submission from ${name}`,
            text: message
        });
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: 'Failed to send email.' });
    }
});

app.listen(port, function() {
    console.log('Server started at http://localhost:%s', port);
});
