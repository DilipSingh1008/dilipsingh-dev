const nodemailer = require("nodemailer");
const Contact = require('../model/contact-model')


const contactForm = async (req, res) => {
    try {
        const resposne = req.body
        await Contact.create(resposne)

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,          // or 587 for TLS
            secure: false,
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        await transporter.verify();
        console.log("SMTP server is ready to take messages");


        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: process.env.GMAIL_USER,
            replyTo: resposne.email,
            subject: `New Contact Form Submission from ${resposne.username}`,
            text: `
            Name: ${resposne.username}
            Email: ${resposne.email}
            Message: ${resposne.message}
               `,
        };

        await transporter.sendMail(mailOptions);

        return res.status(200).json({ message: "Message sent & email delivered" });
        // return res.status(200).json({ message: "message send succesfully " })

    } catch (error) {
        console.error("Error sending email:", error);
        return res.status(400).json({ message: "Message not delivered", error: error.message });
    }

}

module.exports = contactForm