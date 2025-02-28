import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const SentEmails = () => {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const backend=import.meta.env.VITE_APP_BACKEND_URL
  useEffect(() => {
    const fetchSentEmails = async () => {
      try {
        const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
        const response = await axios.get(`${backend}/sent-emails`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setEmails(response.data);
      } catch (err) {
        console.log(err)
        setError('Failed to fetch sent emails.');
      } finally {
        setLoading(false);
      }
    };

    fetchSentEmails();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1 className='text-5xl my-5 flex justify-center'>Sent Emails</h1>
      {emails.length === 0 ? (
        <p>No sent emails found.</p>
      ) : (
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
           <TableCell align='left'>S.no</TableCell>
            <TableCell align="left">TO</TableCell>
            <TableCell align="left">Subject</TableCell>
            <TableCell align="left">Message</TableCell>
            <TableCell align="left">SentAt</TableCell>
          </TableRow>
        </TableHead>
        
       
           
              
           <TableBody>
             {emails.map((email) => (
               <TableRow
                 key={email.id}
                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
               >
                 <TableCell component="th" scope="row">
                   {email.id}
                 </TableCell>
                 <TableCell align="left">{email.to_email}</TableCell>
                 <TableCell align="left">{email.subject}</TableCell>
                 <TableCell align="left">{email.message}</TableCell>
                 <TableCell align="left">{email.sent_at}</TableCell>
               </TableRow>
             ))}
           </TableBody>
      </Table>
    </TableContainer>
             
              
           
      )}
    </div>
  );
};

export default SentEmails;
