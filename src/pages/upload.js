import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuBar from '../components/MenuBar';
import './upload.css';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import TranscribeIcon from '@mui/icons-material/PlayArrow';

const Upload = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

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
    navigate('/transcription');
  };

  return (
    <div className="up-container">
      <div className='up-menubar'>
        <MenuBar />
      </div>

      <div className='up-page'>
        <div className="upload-heading">
          <h2>Online Transcript Generator</h2>
          <h3>Get Transcripts for Free</h3>
        </div>
        <div className="upload-options">
          <div className="upload-option">
            <CloudUploadIcon className="upload-icon" />
            <button onClick={handleUploadButtonClick}>Upload File</button>
            <input
              type="file"
              accept=".mp3,.wav" // Specify the file types you want to allow
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileInputChange}
            />
          </div>
        </div>
        <div className="transcribe-button">
          <button className="transcribe-button" onClick={handleTranscribeButtonClick}>
            <span>Transcribe</span>
            <TranscribeIcon className="transcribe-icon" />
          </button>
        </div>
        <div className="upload-guide">
          <p>How to Upload a File:</p>
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
