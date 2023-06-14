import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';
import './MenuBar.css';

const MenuBar = () => {
  return (
    <AppBar position="static" className="menu-bar" style={{ backgroundColor: 'gray' }}>
    <Toolbar>
        <ul className="menu">
          <li>
            <Button component={Link} to="/myfiles" color="inherit">
              My Files
            </Button>
          </li>
          <li>
            <Button component={Link} to="/upload" color="inherit">
              Upload
            </Button>
          </li>
          <li>
            <Button component={Link} to="/transcription" color="inherit">
              Transcription
            </Button>
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default MenuBar;
