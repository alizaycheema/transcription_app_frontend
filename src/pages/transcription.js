import React, { useState } from 'react';
import MenuBar from '../components/MenuBar';
import './transcription.css';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Transcription = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [transcript, setTranscript] = useState('Generated Transcript');

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDone = () => {
    setIsEditing(false);
    // Save the edited transcript or perform any necessary logic
    console.log('Transcript saved:', transcript);
  };

  const handleSaveToFile = () => {
    const fileName = window.prompt('Enter a file name');
    if (fileName) {
      const data = new Blob([transcript], { type: 'text/plain' });
      const url = window.URL.createObjectURL(data);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${fileName}.txt`;
      link.click();
    }
  };

  const handleDelete = () => {
    if (window.confirm('Do you want to delete this file?')) {
      // Delete logic goes here
      console.log('File deleted');
    }
  };

  return (
    <div className="trans-container">
      <div className="trans-menubar">
        <MenuBar />
      </div>
      <div className='trans-page'>
        <div className="audio-container">
          <audio controls>
            <source src="path_to_audio_file.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <div className="transcription-content">
          <div className="transcription-container">
            <h2>Generated Transcript</h2>
            {isEditing ? (
              <textarea
                value={transcript}
                onChange={(e) => setTranscript(e.target.value)}
              />
            ) : (
              <p>{transcript}</p>
            )}
          </div>
          <div className="transcription-options">
            {isEditing ? (
              <Button variant="contained" startIcon={<SaveIcon />} onClick={handleDone}>
                Done
              </Button>
            ) : (
              <>
                <Button variant="contained" startIcon={<EditIcon />} onClick={handleEdit}>
                  Edit Transcript
                </Button>
                <Button variant="contained" startIcon={<SaveIcon />} onClick={handleSaveToFile}>
                  Save Transcript
                </Button>
              </>
            )}
            <Button variant="contained" startIcon={<DeleteIcon />} onClick={handleDelete}>
              Delete Transcript
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transcription;
