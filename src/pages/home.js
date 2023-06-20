import React from 'react';
import mainImage from '../assets/images/main.jpg';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import './home.css';

const StyledButton = styled(Button)`
  && {
    margin-left: 40%;
    align-self: center;
    font-size: 16px;
    font-weight: bold;
    color: white;
    background-color: #274967;
    border-radius: 5px;
    padding: 10px 20px;
  }
`;

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
          Welcome to our transcription website. Easily upload your audio files and receive accurate transcripts in no time. 
          Streamline your transcription process with our user-friendly platform.
          </p>
          <StyledButton onClick={handleGetStarted}>Get Started</StyledButton>
        </div>
        <div className="image">
          <img src={mainImage} alt="Landing page" />
        </div>
      </div>
    </div>
  );
};

export default Home;
