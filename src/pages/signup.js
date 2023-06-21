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
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      const { firstname, lastname, email, password } = formData;
      const requestData = {
        firstname,
        lastname,
        email,
        password,
      };

      const response = await fetch('https://meetoryte-trancription.onrender.com/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        setIsRegistered(true);
        navigate('/login');
      } else {
        console.error('Signup failed.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
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
                    id="firstname"
                    name="firstname"
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    value={formData.firstname}
                    onChange={handleInputChange}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    type="text"
                    id="lastname"
                    name="lastname"
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    value={formData.lastname}
                    onChange={handleInputChange}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                    InputLabelProps={{
                      style: { color: '#fff' },
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
                    value={formData.email}
                    onChange={handleInputChange}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                    InputLabelProps={{
                      style: { color: '#fff' },
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
                    value={formData.password}
                    onChange={handleInputChange}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </div>
                <Button variant="contained" onClick={handleSignup} color="primary">
                  Sign Up
                </Button>
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
