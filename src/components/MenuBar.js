import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Button, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './MenuBar.css';

const MenuBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Perform logout logic here
    // Navigate to the sign-in page
    navigate('/login');
  };

  return (
    <AppBar position="static" className="menu-bar" style={{ backgroundColor: '#173249' }}>
      <Toolbar>
        <Button
          className="menu-icon"
          aria-controls="submenu"
          aria-haspopup="true"
          onClick={handleMenuOpen}
        >
          <MenuIcon />
        </Button>
        <Menu
          id="submenu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          className="submenu"
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
        <ul className="menu">
          <li>
            <Button component={Link} to="/myfiles" color="inherit">
              My Transcriptions
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
