import React from 'react';
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
  // Assuming you have an array of transcripts with their associated files
  const transcripts = [
    { id: 1, file: 'Transcript 1' },
    { id: 2, file: 'Transcript 2' },
    // Add more transcript entries as needed
  ];

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
              {transcripts.map((transcript, index) => (
                <React.Fragment key={transcript.id}>
                  <ListItem>
                    <ListItemIcon>
                      <DescriptionIcon />
                    </ListItemIcon>
                    <ListItemText primary={transcript.file} />
                    <Button
                      component={Link}
                      to={`/transcription/${transcript.id}`} // Update with your route
                      variant="contained"
                    >
                      View
                    </Button>
                  </ListItem>
                  {index !== transcripts.length - 1 && <Divider />} {/* Add a divider for all items except the last one */}
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
