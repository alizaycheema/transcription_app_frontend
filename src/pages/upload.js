import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuBar from '../components/MenuBar';
import './upload.css';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import TranscribeIcon from '@mui/icons-material/PlayArrow';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Typography, CircularProgress } from '@mui/material';

const Upload = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [title, setTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Logic to handle the selected file goes here
      console.log('Selected file:', file);
    }
  };

  const handleTranscribeButtonClick = () => {
    if (!title || !fileInputRef.current || !fileInputRef.current.files[0]) {
      return;
    }

    setIsLoading(true);

    // Handle the transcription generation here
    // You can use the title and the selected file to send the request to the API
    // After the API response, navigate to the appropriate page or show an error message
    const transcription = {
      title: title,
      audioFile: fileInputRef.current.files[0],
    };
    const token = sessionStorage.getItem('token');

    // Make the API request with the transcription data
    fetch('https://meetoryte-trancription.onrender.com/api/transcription/create-trancription', {
      method: 'POST',
      headers: {
        Authorization: token,
      },
      body: createFormData(transcription),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        if (data._id) {
          // Transcription created successfully, navigate to the transcription page
          navigate(`/transcription/${data._id}`);
        } else {
          // Transcription creation failed, show error message
          console.log('Unable to generate transcription');
        }
      })
      .catch((error) => {
        setIsLoading(false);
        console.error('Error generating transcription:', error);
      });
  };

  const createFormData = (transcription) => {
    const formData = new FormData();
    formData.append('title', transcription.title);
    formData.append('audio', transcription.audioFile);
    return formData;
  };

  return (
    <div className="up-container">
      <div className="up-menubar">
        <MenuBar />
      </div>

      <div className="up-page">
        <div className="upload-heading">
          <h2>Online Transcript Generator</h2>
          <h3>Get Transcripts for Free</h3>
        </div>
        <div className="upload-options">
          <div className="upload-option">
            <CloudUploadIcon className="upload-icon" />
            <Button variant="contained" onClick={handleUploadButtonClick}>
              Upload File
            </Button>
            <input
              type="file"
              accept=".mp3,.wav" // Specify the file types you want to allow
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileInputChange}
            />
          </div>
        </div>
        <div className="title">
          <p> Enter a name for your file: </p>
          <TextField
            label="Title"
            variant="outlined"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            style={{ backgroundColor: '#ffffff', marginTop: '2px', marginBottom: '10px', borderRadius: '5px' }}
          />
        </div>
        <div className="transcribe-button">
          <Button
            variant="contained"
            onClick={handleTranscribeButtonClick}
            disabled={!title || !fileInputRef.current || !fileInputRef.current.files[0] || isLoading}
            style={{ backgroundColor: '#ffffff', color: '#173249' }}
          >
            {isLoading ? (
              <CircularProgress size={24} color="primary" />
            ) : (
              <>
                <span>Transcribe</span>
                <TranscribeIcon className="transcribe-icon" />
              </>
            )}
          </Button>
        </div>

        <div className="upload-guide">
          <Typography variant="body1">How to Upload a File:</Typography>
          <ol>
            <li>Click the "Upload File" button.</li>
            <li>Select the file you want to upload.</li>
            <li>Wait for the upload process to complete.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Upload;
