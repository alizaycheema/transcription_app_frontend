import React from 'react';
import './App.css';
import NavBar from './components/navBar';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import MyFiles from './pages/MyFiles';
import Upload from './pages/upload';
import Transcription from './pages/transcription';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="container">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />}/>
          <Route path="/myfiles" element={<MyFiles />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/transcription" element={<Transcription />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
