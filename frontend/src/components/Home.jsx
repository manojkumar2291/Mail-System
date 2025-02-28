import React from 'react';
import {  useNavigate } from 'react-router-dom';

function Home() {
  const navigate=useNavigate()
  const handlenavigate=()=>{
    navigate('/smtp')
  }
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center ">
      <div className="bg-white p-8 rounded-lg shadow-md  w-full h-full">
        <h1 className="text-3xl font-semibold mb-6 text-center text-indigo-700">
          Mail Sending System
        </h1>

        <p className="text-gray-700 mb-4 text-center">
          Effortlessly send emails with our user-friendly application. Configure your SMTP details,
          or use popular mail providers. Manage your sent emails and enjoy a seamless email experience.
        </p>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Key Features</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>SMTP Configuration: Easily set up your mail server.</li>
            <li>Multiple Provider Support: Integrate with popular mail services.</li>
            <li>User Authentication: Securely access your email account.</li>
            <li>Send Emails: Compose and send emails directly from the application.</li>
            <li>Sent Folder: View and manage your sent emails.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Technologies Used</h2>
          <p className="text-gray-600">
            React.js, Tailwind CSS, and other web development technologies.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">What You Will Learn</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>SMTP Configuration</li>
            <li>CRUD Operations</li>
            <li>User Authentication</li>
          </ul>
        </div>

        <div className="text-center">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded" onClick={handlenavigate}>
            Get Started
          </button >
        </div>
      </div>
    </div>
  );
}

export default Home;