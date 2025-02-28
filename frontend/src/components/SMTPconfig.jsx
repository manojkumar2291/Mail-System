import React, { useState } from 'react';
import axios from 'axios';


const SMTPConfig = () => {

  const [config, setConfig] = useState({
    host: '',
    port: '',
    user: '',
    pass: ''
  });
  const backend=import.meta.env.VITE_APP_BACKEND_URL
  const handleChange = (e) => {
    setConfig({
      ...config,
      [e.target.name]: e.target.value
    });
  };
 const token=localStorage.getItem('token')
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${backend}/smtp`, {config,token});
      alert(response.data.message);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      alert('Failed to save SMTP configuration.');
    }
  };
  const smtpSettings = {
    'smtp.gmail.com': 465,
    'smtp.mail.yahoo.com': 465,
    'smtp.office365.com': 587,
    // Add more hosts and their ports as needed
  };
  const handleHostChange = (e) => {
    const selectedHost = e.target.value;
    setConfig((prevConfig) => ({
      ...prevConfig,
      host: selectedHost,
      port: smtpSettings[selectedHost] || '',
    }));
  };

  return (
    <div className='my-20 '>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md border-b-cyan-300">
    <div className="mb-4">
      <label htmlFor="host" className="flex font-medium text-gray-700 text-xl justify-center">
        SMTP Host
      </label>
      <select
        id="host"
        name="host"
        value={config.host}
        onChange={handleHostChange}
        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        required
      >
        <option value="" disabled>Select SMTP Host</option>
        {Object.keys(smtpSettings).map((host) => (
          <option key={host} value={host}>
            {host}
          </option>
        ))}
      </select>
    </div>

    <div className="mb-4">
      <label htmlFor="port" className="block text-sm font-medium text-gray-700">
        Port
      </label>
      <input
        type="number"
        id="port"
        name="port"
        value={config.port}
        onChange={handleChange}
        className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        readOnly
      />
    </div>

    <div className="mb-4">
      <label htmlFor="user" className="block text-sm font-medium text-gray-700">
        User
      </label>
      <input
        type="text"
        id="user"
        name="user"
        value={config.user}
        onChange={handleChange}
        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        required
      />
    </div>

    <div className="mb-4">
      <label htmlFor="pass" className="block text-sm font-medium text-gray-700">
        Password
      </label>
      <input
        type="password"
        id="pass"
        name="pass"
        value={config.pass}
        onChange={handleChange}
        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        required
      />
    </div>

    <button
      type="submit"
      className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      Save SMTP Config
    </button>
  </form>
    </div>
  );
};

export default SMTPConfig;
