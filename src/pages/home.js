import React from 'react'
import mainImage from '../assets/images/main.jpg';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import './home.css'

const Home = () => {
    const navigate = useNavigate();
  
    const handleGetStarted = () => {
      navigate('/login');
    };
  
  
  return (
    <div>
    <Button variant="contained">Hello World</Button>
    <div className="content">
    <div className="description">
      <p>
        Welcome to our transcription website, where transforming audio into text has never been easier!
      </p>
      <button onClick={handleGetStarted}>Get Started</button>
    </div>
    <div className="image">
      <img src={mainImage} alt="Landing page" />
    </div>
  </div>
    </div>
  )
}

export default Home
