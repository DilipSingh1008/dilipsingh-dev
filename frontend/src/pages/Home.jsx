import React from 'react'
import './Home.css'
import { TypeAnimation } from 'react-type-animation';
import dilip from '../assets/Dilipmain.jpg'
import { Link } from 'react-router-dom';
import About from './About';
import Projects from './Projects';
import Contact from './Contact'
const Home = () => {
  return (
    <>
      <main >
        <section className="home-section">
          <div className="home-content">
            {/* Left Side - Text Content */}
            <div className="home-text">
              <TypeAnimation
                sequence={[
                  'I am Dilip Singh',
                  1500,
                  'A Full Stack Developer',
                  1500,
                  'Building the Web, One App at a Time',
                  1500,
                ]}
                speed={50}
                style={{ fontSize: '2em' }}
                repeat={Infinity}
              />
              <p className="home-description">
              Passionate Full Stack Developer with experience in building robust and scalable web applications. 
              Expertise in both frontend and backend technologies, with a focus on delivering seamless user experiences.              </p>
              <div className="btn-group">
                <Link to="/contact"><button className="home-btn">Contact Now</button></Link>
                <Link href="#"><button className="home-btn secondary">Learn More</button></Link>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="home-image">
              <img src={dilip} alt="Dilip Singh" className="profile-img" />
            </div>
          </div>
        </section>
              {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      </main>
    </>
  )
}

export default Home
