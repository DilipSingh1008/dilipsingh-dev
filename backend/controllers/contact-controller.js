const nodemailer = require("nodemailer");
const Contact = require('../model/contact-model')


const contactForm = async (req, res) => {
    try {
        const resposne = req.body
         await Contact.create(resposne)

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,  
                pass: process.env.GMAIL_PASS,  
            },
        });


        const mailOptions = {
            from: resposne.email, 
            to: process.env.GMAIL_USER, 
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

        return res.status(400).json({ message: "message not deliverd" })
    }
}

module.exports = contactForm