import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import SMTPConfig from './components/SMTPConfig';
import SendEmail from './components/SendEmail';
import Home from './components/Home';
import Navbar from './components/NavBar';
import SentEmails from './components/SentEmails';
const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/smtp" element={<SMTPConfig />} />
        <Route path="/send-email" element={<SendEmail />} />
        <Route path="/sent-emails" element={<SentEmails />} />
      </Routes>
    </Router>
  );
};
export default App;