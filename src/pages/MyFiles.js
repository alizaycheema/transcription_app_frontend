import React from 'react';
import './MyFiles.css';
import MenuBar from '../components/MenuBar';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const MyFiles = () => {
  // Assuming you have an array of transcripts with their associated files
  const transcripts = [
    { id: 1, file: 'audio1.mp3', transcript: 'Transcript 1' },
    { id: 2, file: 'audio2.mp3', transcript: 'Transcript 2' },
    // Add more transcript entries as needed
  ];

  return (
    <div>
      <div className='menubar'>
        <MenuBar />
      </div>
      <div className='files'>
        <h2>My Files</h2>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>File</TableCell>
                <TableCell>Transcript</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transcripts.map((transcript) => (
                <TableRow key={transcript.id}>
                  <TableCell>{transcript.file}</TableCell>
                  <TableCell>{transcript.transcript}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default MyFiles;
