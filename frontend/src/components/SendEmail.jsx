import React, { useState } from 'react';
import axios from 'axios';

const SendEmail = () => {
  const [emailData, setEmailData] = useState({ to: '', subject: '', text: '' });
  const [sending, setSending] = useState(false); // Add loading state

  const handleChange = (e) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };
  const backend=import.meta.env.VITE_APP_BACKEND_URL

  const token = localStorage.getItem('token');

  const handleSend = async () => {
    setSending(true); // Start loading
    try {
      console.log(emailData);
      await axios.post(`${backend}/email/send`, { emailData, token });
      alert('Email sent successfully');
      setEmailData({ to: '', subject: '', text: '' }); // Reset the form
    } catch (error) {
      alert('Failed to send email');
      if (error.response) {
        console.error('Error Response:', error.response.data);
      } else if (error.request) {
        console.error('Error Request:', error.request);
      } else {
        console.error('Error Message:', error.message);
      }
    } finally {
      setSending(false); // Stop loading
    }
  };

  return (
    <div className="p-6 max-w-full min-h-screen mx-auto bg-white rounded-lg shadow-md ">
      <h2 className="text-2xl font-semibold mb-4 text-center">Send Email</h2>
      <input
        type="email"
        name="to"
        placeholder="Recipient"
        onChange={handleChange}
        className="border rounded-md p-2 w-full mb-4 focus:outline-none focus:ring focus:border-blue-300"
        value={emailData.to}
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        onChange={handleChange}
        className="border rounded-md p-2 w-full mb-4 focus:outline-none focus:ring focus:border-blue-300"
        value={emailData.subject}
      />
      <textarea
        name="text"
        placeholder="Message"
        onChange={handleChange}
        className="border rounded-md p-2 w-full mb-4 focus:outline-none focus:ring focus:border-blue-300"
        rows="5"
        value={emailData.text}
      />
      <button
        onClick={handleSend}
        className={`bg-blue-500 hover:bg-blue-600 text-white p-2  rounded-md ${
          sending ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={sending}
      >
        {sending ? 'Sending...' : 'Send Email'}
      </button>
    </div>
  );
};

export default SendEmail;