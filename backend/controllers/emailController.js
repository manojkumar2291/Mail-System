const nodemailer = require('nodemailer');
const db = require('../config/db');
const jwt=require('jsonwebtoken');
exports.sendEmail = async (req, res) => {
  const { to, subject, text } = req.body.emailData;

  const token=req.body.token;
      
      function getUserID() {
  
           // Assuming token is stored in local storage
        
          if (token) {
        
            const decoded = jwt.decode(token); 
        
            return decoded.id; // Access the 'sub' claim (user ID) [1, 2, 3]
        
          } 
        
          return null;
        
        }
        const user_id=getUserID()


  const [smtp] = await db.execute('SELECT * FROM smtp_config ORDER BY id DESC LIMIT 1');
  if (!smtp.length) return res.status(400).json({ message: 'No SMTP Config found' });
  let transporter = nodemailer.createTransport({
    host: smtp[0].host,
    port: smtp[0].port,
    secure: true, 
    auth: { user: smtp[0].user, pass: smtp[0].pass }
  });
  try {
    let info = await transporter.sendMail({ from: smtp[0].user, to, subject, text });
    await db.execute('INSERT INTO sent_emails (user_id,to_email, subject, message) VALUES (?,?, ?, ?)', [ user_id,to, subject, text]);
    res.status(200).json({ message: 'Email sent', info });
  } catch (error) {
    res.status(500).json({ message: 'Error sending email', error });
  }
};
exports.getSentEmails = async (req, res) => {
  const userId = req.user.id; // Ensure you have middleware that sets req.user
  try {
    const [rows] = await db.execute('SELECT * FROM sent_emails WHERE user_id = ?', [userId]);
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching sent emails:', error);
    res.status(500).json({ message: 'Error fetching sent emails', error });
  }
};