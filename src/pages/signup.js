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

const Signup = () => {
  const navigate = useNavigate();
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSignup = () => {
    // Perform your signup logic here, e.g., validate user inputs and create a new account

    // Simulating a successful signup
    setIsRegistered(true);

    // Navigate to the login page after successful signup
    navigate('/login');
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="login-container">
        <div className="image-container">
          <img src={mainImage} alt="signup page" />
        </div>
        <div className="form1-container">
          {isRegistered ? (
            <>
              <Typography variant="h2" component="h2">
                Registration successful!
              </Typography>
              <Button variant="contained" onClick={() => navigate('/login')}>
                Go to Login
              </Button>
            </>
          ) : (
            <>
              <Typography variant="h2" component="h2">
                Sign Up
              </Typography>
              <form>
                <div className="form-group">
                  <TextField
                    type="text"
                    id="name"
                    name="name"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      style:{ backgroundColor: '#ffffff', marginTop: '10px', borderRadius: '5px' },
                    }}
                    InputLabelProps={{
                      style: { color: '#09090A' },
                    }}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    type="email"
                    id="email"
                    name="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      style:{ backgroundColor: '#ffffff', marginTop: '10px', borderRadius: '5px' },
                    }}
                    InputLabelProps={{
                      style: { color: '#09090A' },
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
                      style:{ backgroundColor: '#ffffff', marginTop: '10px', borderRadius: '5px' },
                    }}
                    InputLabelProps={{
                      style: { color: '#09090A' },
                    }}
                  />
                </div>
                <div className="button-container">
                <Button variant="contained" onClick={handleSignup} color="primary" style={{ width: '150px' }}>
                  Sign Up
                </Button>
                </div>
                <div className="sign-up">
                  Already have an account? <Link to="/login">Log in</Link>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Signup;
