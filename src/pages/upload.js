import React, { useState } from 'react';
import MenuBar from '../components/MenuBar';
import './upload.css';
import LinkIcon from '../assets/images/ln.png';
import RecordingIcon from '../assets/images/rc.png';
import UploadIcon from '../assets/images/up.png';

const Upload = () => {
  const [transcriptGenerated, setTranscriptGenerated] = useState(false);

  const handleGenerateTranscript = () => {
    // Logic to generate transcript goes here
    setTranscriptGenerated(true);
  };

  return (
    <div className="container">
      <MenuBar />
      <div className="upload-options">
        <div className="upload-option">
          <img src={UploadIcon} alt="Upload File" />
          <button>Upload File</button>
        </div>
        <div className="upload-option">
          <img src={RecordingIcon} alt="Record Now" />
          <button>Record Now</button>
        </div>
        <div className="upload-option">
          <img src={LinkIcon} alt="Upload with Link" />
          <button>Upload with Link</button>
        </div>
      </div>
      <div className="generate-transcript">
        <button onClick={handleGenerateTranscript}>Generate Transcript</button>
      </div>
      {transcriptGenerated && <p>Transcript Generated!</p>}
    </div>
  );
};

export default Upload;
