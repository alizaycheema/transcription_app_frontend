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
  const [isInvalidCredentials, setIsInvalidCredentials] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const { email, password } = formData;
      const requestData = {
        email,
        password,
      };

      const response = await fetch('https://meetoryte-trancription.onrender.com/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        const responseData = await response.json();
        sessionStorage.setItem('token', responseData.token);
        setIsLoggedIn(true);
        setIsInvalidCredentials(false);
        navigate('/myfiles');
      } else {
        setIsLoggedIn(false);
        setIsInvalidCredentials(true);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  React.useEffect(() => {
    const storedToken = sessionStorage.getItem('token');
    if (storedToken) {
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
                    value={formData.email}
                    onChange={handleInputChange}
                    InputProps={{
                      style:{ backgroundColor: '#ffffff', marginTop: '10px', borderRadius: '5px' , padding: '0px' },
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
                    value={formData.password}
                    onChange={handleInputChange}
                    InputProps={{
                      style:{ backgroundColor: '#ffffff', marginTop: '10px', borderRadius: '5px' },
                    }}
                    InputLabelProps={{
                      style: { color: '#09090A' },
                    }}
                  />
                </div>
                {isInvalidCredentials && (
                  <Typography variant="body1" component="p" style={{ color: 'red' }}>
                    Invalid email or password
                  </Typography>
                )}
                <div className="button-container">
                <Button variant="contained" onClick={handleLogin} color="primary"  style={{ width: '150px' }}>
                  Login
                </Button>
                </div>
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
