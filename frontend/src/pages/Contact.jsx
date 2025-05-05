import React, { useState } from 'react';
import './contact.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const API = import.meta.env.VITE_API_URL;

const defaultContactData = {

  username: '',
  email: '',
  message: '',

}

const Contact = () => {
  const [contact, setContact] = useState(defaultContactData);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(contact);
    axios.post('https://dilipsingh-dev.onrender.com/api/form/contact', contact).then((respons) => {
      // console.log(`data will be save `,respons.data);
      setContact(defaultContactData);
      // alert('Form submitted!');
      toast.success('Message sent successfully!');
    }).catch((err) => {
      console.log("err");
      toast.error('Something went wrong. Please try again.');
    })  
  };

  return (
    <section className="contact-section">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="contact-container">
        <div className="contact-header">
          <h1>Contact Me</h1>
          <p>Have a question or want to work together? Reach out!</p>
        </div>

        <div className="contact-grid">
          <div className="contact-image">
            <img src="/images/5118756.jpg" alt="Contact Support" />
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Name</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={contact.username}
                  onChange={handleInput}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={contact.email}
                  onChange={handleInput}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  value={contact.message}
                  onChange={handleInput}
                  required
                  rows="6"
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <section className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31104.149904408867!2d77.51209985497364!3d12.970652707757539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3dd95efc3ae7%3A0xc90db791aedd9aad!2sVijayanagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1746191473877!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

    </section>
  );
};

export default Contact;
