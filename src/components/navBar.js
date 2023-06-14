import React from 'react'
import './navBar.css'

function navBar() {
  return (
    <div>
    <nav className="navbar">
        <div className="left">Meetioryte</div>
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
