import nodemailer from "nodemailer";
const Contact = require('../model/contact-model')


const contactForm = async (req, res) => {
    try {
        const resposne = req.body
         await Contact.create(resposne)

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,  // e.g. "yourmail@gmail.com"
                pass: process.env.GMAIL_PASS,  // App password
            },
        });


        // 3️⃣ Define mail content
        const mailOptions = {
            from: resposne.email, // user who filled the form
            to: process.env.GMAIL_USER, // your own email
            subject: `New Contact Form Submission from ${resposne.username}`,
            text: `
            Name: ${resposne.username}
            Email: ${resposne.email}
            Message: ${resposne.message}
               `,
            };

        // 4️⃣ Send email
        await transporter.sendMail(mailOptions);

        return res.status(200).json({ message: "Message sent & email delivered" });
        // return res.status(200).json({ message: "message send succesfully " })

    } catch (error) {

        return res.status(400).json({ message: "message not deliverd" })
    }
}

module.exports = contactForm