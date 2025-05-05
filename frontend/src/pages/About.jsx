import React from 'react'
import './about.css'
const About = () => {
  return (
    <>
      <section className="about-section">
        <div className="mainSection">
          <h1>About Me</h1>
          <div className="mini">
            <div className="Imgdiv">
              <img src="./images/5118756.jpg" alt="Dilip - Full Stack Developer" />
            </div>
            <div className="details">
              <span>Hello, I'm <strong>Dilip Singh</strong> 👋</span>
              <p>
                I’m a passionate <strong>Full Stack Developer</strong> with a strong foundation in modern web technologies.
                I build dynamic, responsive, and user-friendly applications using technologies like React, Node.js, Express,
                and MongoDB. With a focus on clean code and performance, I aim to create solutions that are not just functional
                but also scalable and elegant.
              </p>
              <p>
                Whether it's front-end interfaces or back-end APIs, I love solving problems and continuously learning.
                Let’s build something amazing together!
              </p>
            </div>
          </div>
          <div className="mainSection">
  <h2>Skills</h2>
  <div className="skills-list">
    <ul>
      <li><strong>Frontend:</strong> React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap, jQuery, Axios, Fetch API</li>
      <li><strong>Backend:</strong> Node.js, Express.js, RESTful APIs, CRUD Operations, JWT Authentication, Middleware</li>
      <li><strong>API Integration:</strong> Consuming REST APIs, Creating RESTful APIs with Express.js, Postman for API testing</li>
      <li><strong>Database:</strong> MongoDB (with Mongoose), MySQL</li>
      <li><strong>Version Control:</strong> Git, GitHub</li>
      <li><strong>Tools & Platforms:</strong> VS Code, Postman, Netlify, Vercel, Render, npm, yarn</li>
      <li><strong>Other Skills:</strong> MVC Architecture, Responsive Design, Error Handling, Deployment, Debugging</li>
    </ul>
  </div>
</div>



        </div>
      </section>


    </>
  )
}

export default About
