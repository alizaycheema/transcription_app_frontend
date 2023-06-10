import React from 'react';
import './login.css';
import mainImage from '../assets/images/main.jpg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/myfiles');
  };


  return (
    <div className="container">
      <div className="image-container">
      <img src={mainImage} alt="login page" />      </div>
      <div className="form-container">
        <h2>Sign In</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <button onClick={handleLogin}>Login</button>
          <div className="sign-up">
          Do not have an account? <Link to="/Signup">Sign Up</Link>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Login;
