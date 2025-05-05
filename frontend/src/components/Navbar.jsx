import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import dilip from '../assets/dilip.jpeg'
const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='left'>
       <img src={dilip} alt="" /> 
              </div>
          <div className="right">
                <Link to={"/"} >HOME</Link>
                <Link to={"/about"} >About</Link>
                <Link to={"/contact"}>Contact</Link>
                <Link to={"/projects"}>Project</Link>
                {/* <Link to={"/register"}>Register</Link> */}
                

          </div>
    </nav>
  )
}

export default Navbar
