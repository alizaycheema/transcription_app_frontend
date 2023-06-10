import React from 'react';
import './signup.css';
import { Link } from 'react-router-dom';
import mainImage from '../assets/images/main.jpg';

const Signup = () => {
  return (
    <div className="container">
    <div className="image-container">
    <img src={mainImage} alt="login page" />      
    </div>
      <div className="form-container">
        <h2>Sign Up</h2>
        <form>
          <div className="name">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" />
          </div>
          <div className="name">
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country:</label>
            <select id="country" name="country">
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="UK">UK</option>
              {/* Add more country options as needed */}
            </select>
          </div>
          <button type="submit">Sign Up</button>
          <div className="sign-in">
          Already have an account? <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
