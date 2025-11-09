const nodemailer = require("nodemailer");
const Contact = require('../model/contact-model')


const contactForm = async (req, res) => {
     try{
          const resposne = req.body
        
          await Contact.create(resposne);

          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,  // e.g. "yourmail@gmail.com"
                pass: process.env.GMAIL_PASS,  // App password
            },
        });
        // console.log(transporter)
        

        // 3️⃣ Define mail content
        const mailOptions = {
            from: process.env.GMAIL_USER,     // Use your Gmail as sender
      to: process.env.GMAIL_USER, 
            subject: `New Contact Form Submission from ${resposne.username}`,
            text: `
Name: ${resposne.username}
Email: ${resposne.email}
Message: ${resposne.message}
      `,
            replyTo: resposne.email,          // User can reply

        };

        // 4️⃣ Send email
        await transporter.sendMail(mailOptions);

        return res.status(200).json({ message: "Message sent & email delivered" });

    } catch(error){
         
console.error("❌ Error while saving contact:", error);
  return res.status(400).json({ 
    message: "message not deliverd", 
    error: error.message 
  });    }

}
module.exports = contactForm