import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, TextField, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './login2.css';
import mainImage from '../assets/images/main.jpg';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff', // Set primary color to white
    },
  },
});

const Login = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform your login logic here, e.g., validate user credentials

    // Simulating a successful login
    setIsLoggedIn(true);

    // Store the login status in session storage
    sessionStorage.setItem('isLoggedIn', 'true');

    // Navigate to the desired page after successful login
    navigate('/myfiles');
  };

  const handleLogout = () => {
    // Clear the login status from session storage
    sessionStorage.removeItem('isLoggedIn');

    // Update the login state
    setIsLoggedIn(false);

    // Navigate to the login page after logout
    navigate('/login');
  };

  // Check if the user is already logged in
  React.useEffect(() => {
    const storedIsLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (storedIsLoggedIn === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="login-container">
        <div className="image-container">
          <img src={mainImage} alt="login page" />
        </div>
        <div className="form1-container">
          {isLoggedIn ? (
            <>
              <Typography variant="h2" component="h2">
                You are logged out!
              </Typography>
              <Button variant="contained" onClick={handleLogout}>
                Login Again
              </Button>
            </>
          ) : (
            <>
              <Typography variant="h2" component="h2">
                Sign In
              </Typography>
              <form>
                <div className="form-group">
                  <TextField
                    type="email"
                    id="email"
                    name="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      style: { color: '#fff' }, // Set input text color to white
                    }}
                    InputLabelProps={{
                      style: { color: '#fff' }, // Set input label color to white
                    }}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    type="password"
                    id="password"
                    name="password"
                    label="Password"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      style: { color: '#fff' }, // Set input text color to white
                    }}
                    InputLabelProps={{
                      style: { color: '#fff' }, // Set input label color to white
                    }}
                  />
                </div>
                <Button variant="contained" onClick={handleLogin} color="primary">
                  Login
                </Button>
                <div className="sign-up">
                  Do not have an account? <Link to="/signup">Sign Up</Link>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Login;