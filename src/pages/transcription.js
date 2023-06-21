import React, { useState, useEffect } from 'react';
import MenuBar from '../components/MenuBar';
import './transcription.css';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Transcription = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState('Generated Transcript');
  const [transcript, setTranscript] = useState('');
  const [loading, setLoading] = useState(true);
  const [audioFileUrl, setAudioFileUrl] = useState('');

  useEffect(() => {
    fetchTranscription(); // Fetch the transcription on component mount
  }, []);

  const fetchTranscription = async () => {
    try {
      const url = new URL(window.location.href);
      const id = url.pathname.substring(url.pathname.lastIndexOf('/') + 1);
      const token = sessionStorage.getItem('token');
      const response = await fetch(`https://meetoryte-trancription.onrender.com/api/transcription/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setTitle(data.transcription.title);
        setTranscript(data.transcription.text);
        setAudioFileUrl(data.audioFileUrl);
        setLoading(false);
      } else {
        throw new Error('Failed to fetch transcription');
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDone = async () => {
    setIsEditing(false);
    try {
      const url = new URL(window.location.href);
      const id = url.pathname.substring(url.pathname.lastIndexOf('/') + 1);
      console.log(id)
      const response = await fetch('https://meetoryte-trancription.onrender.com/api/transcription/update-transcription', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: sessionStorage.getItem('token'),
        },
        body: JSON.stringify({ id, updatedText: transcript }),
      });
  
      if (response.ok) {
        console.log('Transcript saved:', transcript);
      } else {
        throw new Error('Failed to save transcript');
      }
    } catch (error) {
      console.log(error);
    }
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

  const handleDelete = async () => {
    if (window.confirm('Do you want to delete this file?')) {
      try {
        const url = new URL(window.location.href);
        const id = url.pathname.substring(url.pathname.lastIndexOf('/') + 1);
  
        const response = await fetch(`https://meetoryte-trancription.onrender.com/api/transcription/${id}`, {
          method: 'DELETE',
          headers: {
            Authorization: sessionStorage.getItem('token'),
          },
        });
  
        if (response.ok) {
          console.log('File deleted');
          // Route back to the current website URL with "/myfiles" appended
          const currentURL = window.location.href;
          const url = new URL(currentURL);
          const websiteURL = `${url.protocol}//${url.hostname}`;
          const myFilesURL = `${websiteURL}/myfiles`;
          window.location.href = myFilesURL;      }
           else {
          throw new Error('Failed to delete transcript');
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="trans-container">
      <div className="trans-menubar">
        <MenuBar />
      </div>
      <div className="trans-page">
        <div className="audio-container">
          <audio controls>
            <source src={audioFileUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <div className="transcription-content">
          <div className="transcription-container">
            <h2 style={{ color: '#000000', padding: '2px', marginTop: '2px' }}>{title}</h2>
            {isEditing ? (
              <textarea
                value={transcript}
                onChange={(e) => setTranscript(e.target.value)}
                style={{ height: '300px', width: '500px' }}
              />
            ) : (
              <p style={{ color: '#000000' }}>{transcript}</p>             )}
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
