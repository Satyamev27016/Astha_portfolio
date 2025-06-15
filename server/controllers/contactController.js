const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");
require("dotenv").config();

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Handle form submission
exports.submitContact = async (req, res) => {
    try {
        const { fullName, address, email, phone, message } = req.body;
        
        // Validate required fields
        if (!fullName || !address || !email || !phone || !message) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        //  Save to DB
        // const newContact = new Contact({ fullName, address, email, phone, message });
        // await newContact.save();

        
        // Send Email


        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "baghelasthasingh4@gmail.com",  // Your email where you receive notifications
            subject: "New Contact Form Submission",
            text: `
            You received a new contact form submission:

            📌 Name: ${fullName}
            📌 Address: ${address}
            📌 Email: ${email}
            📌 Phone: ${phone}
            📌 Message: ${message}

            📅 Date: ${new Date().toLocaleString()}
            `
        };

        // Send Email
        await transporter.sendMail(mailOptions);
        

        res.status(200).json({ success: true, message: "Message sent successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Server error" });
    }
};
