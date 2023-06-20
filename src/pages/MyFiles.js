import React, { useState, useEffect } from 'react';
import './MyFiles.css';
import MenuBar from '../components/MenuBar';
import { List, ListItem, ListItemText, ListItemIcon, Paper, Divider, Typography } from '@mui/material';
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
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="files-container">
        <div className="files-menubar">
          <MenuBar />
        </div>
        <div className="files">
          <h2>My Transcriptions</h2>
          <Paper className="transcript-list-container">
            {transcriptions.length > 0 ? (
              <List>
                {transcriptions.map((transcription, index) => (
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
            ) : (
              <Typography variant="body1" align="center" color="textSecondary">
                You don't have any transcriptions.
              </Typography>
            )}
          </Paper>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default MyFiles;
