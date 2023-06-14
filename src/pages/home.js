import React from 'react'
import mainImage from '../assets/images/main.jpg';
import { useNavigate } from 'react-router-dom';
import './home.css'

const Home = () => {
    const navigate = useNavigate();
  
    const handleGetStarted = () => {
      navigate('/login');
    };
  
  
  return (
    <div>
    <div className="content">
    <div className="description">
      <p>
        Welcome to our transcription website, where transforming audio into text has never been easier!
      </p>
      <button onClick={handleGetStarted} className='get-started'>Get Started</button>
    </div>
    <div className="image">
      <img src={mainImage} alt="Landing page" />
    </div>
  </div>
    </div>
  )
}

export default Home
