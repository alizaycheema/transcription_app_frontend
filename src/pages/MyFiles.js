import React from 'react';
import './MyFiles.css';
import MenuBar from '../components/MenuBar';



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
      <table>
        <thead>
          <tr>
            <th>File</th>
            <th>Transcript</th>
           
          </tr>
        </thead>
        <tbody>
          {transcripts.map((transcript) => (
            <tr key={transcript.id}>
              <td>{transcript.file}</td>
              <td>{transcript.transcript}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default MyFiles;
