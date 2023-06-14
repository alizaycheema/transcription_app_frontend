import React from 'react'
import './navBar.css'
import { Link } from 'react-router-dom';

const navBar = () => {
  return (
    <div>
    <nav className="navbar">
    <Link to="/home" className="navbar-logo">
    <div className="left">Meetioryte</div>
    </Link>
        
        <div className="right">
          <ul>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
      
    </div>
  )
}

export default navBar
