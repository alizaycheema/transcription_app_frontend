import React, { useState, useEffect } from 'react';
import './MyFiles.css';
import MenuBar from '../components/MenuBar';
import { List, ListItem, ListItemText, ListItemIcon, Paper, Divider } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DescriptionIcon from '@mui/icons-material/Description';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const theme = createTheme({
  palette: {
    background: {
      default: '#000000', // Set the background color to black
    },
  },
});

const MyFiles = () => {
  const [transcriptions, setTranscriptions] = useState([]);

  useEffect(() => {
    // Retrieve the token from session storage
    const token = sessionStorage.getItem('token');
    // Fetch the transcriptions from the API with the authorization token
    console.log(token+"fefef")
    fetch('https://meetoryte-trancription.onrender.com/api/transcription', {
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the fetched transcriptions
        setTranscriptions(data.transcriptions);
      })
      .catch((error) => {
        console.error('Error fetching transcriptions:', error);
      });
  }, [transcriptions]);


  return (
    <ThemeProvider theme={theme}>
      <div className="files-container">
        <div className="files-menubar">
          <MenuBar />
        </div>
        <div className="files">
          <h2>My Transcriptions</h2>
          <Paper className="transcript-list-container">
            <List>
              {transcriptions && transcriptions?.map((transcription, index) => (
                <React.Fragment key={transcription._id}>
                  <ListItem>
                    <ListItemIcon>
                      <DescriptionIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={transcription.title}
                      secondary={`Created: ${new Date(transcription.createdAt).toLocaleString()}`}
                    />
                    <Button
                      component={Link}
                      to={`/transcription/${transcription._id}`}
                      variant="contained"
                    >
                      View
                    </Button>
                  </ListItem>
                  {index !== transcriptions.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default MyFiles;
