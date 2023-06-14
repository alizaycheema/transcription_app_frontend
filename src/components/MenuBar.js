import React from 'react';
import './MenuBar.css'

import { Link } from 'react-router-dom';

const MenuBar = () => {
  return (
    <div className="menu-bar">
      <ul className="menu">
        <li>
          <Link to="/myfiles">MyFiles</Link>
        </li>
        <li>
          <Link to="/upload">Upload</Link>
        </li>
        <li>
          <Link to="/transcription">Transcription</Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuBar;