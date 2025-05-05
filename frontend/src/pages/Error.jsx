import React from 'react'
import { Link } from 'react-router-dom'
import './Error.css' // Optional: For external styling

const Error = () => {
  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-code">404</h1>
        <p className="error-message">Oops! Page not found</p>
        <p className="error-description">
          The page you are looking for might have been removed or is temporarily unavailable.
        </p>
        <div className="button-group">
          <Link to="/" className="home-button">Go to Home</Link>
          <Link to="/contact" className="home-button secondary">Report Problem</Link>
        </div>
      </div>
    </div>
  )
}

export default Error
