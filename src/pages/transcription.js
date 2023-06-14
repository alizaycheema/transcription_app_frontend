import React from 'react';
import MenuBar from '../components/MenuBar';
import './transcription.css';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Transcription = () => {
  return (
    <div className="container">
      <MenuBar />
      <div className="audio-container">
        <audio controls>
          <source src="path_to_audio_file.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
      <div className="transcription-content">
        <div className="transcription-container">
          <h2>Generated Transcript</h2>
          <p>
            fjhejnvdsvngbj
            gvjknbkjrbw
            fcjergbuerbn  djvbewiugbvwiuevbouebvol
            vjbvwubnjdfv jergernvwogirhierhgiurjngkjtkhrgiurhkuthn djgurihiubnvfv fnvb cbncnjb[
              cnkjvfbn kvcsaijrenjvncfoewjriethjujnkmdfjghb b
              jvbfhnjcmkfdjn mdjerhgbvfnd csjfhbv cnjdhfbvn cjdfhbvdjf
              fnbdnmfnbhdcn vbjcv bfjdsxnc vbfhjdsn
            ]
          </p>
        </div>
        <div className="transcription-options">
          <Button variant="contained" startIcon={<SaveIcon />}>
            Save Transcript
          </Button>
          <Button variant="contained" startIcon={<EditIcon />}>
            Edit Transcript
          </Button>
          <Button variant="contained" startIcon={<DeleteIcon />}>
            Delete Transcript
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Transcription;
