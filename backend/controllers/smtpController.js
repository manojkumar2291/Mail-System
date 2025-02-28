const db = require('../config/db');
const jwt = require('jsonwebtoken');
 exports.saveSMTPConfig = async (req, res) => {
    console.log('hhh')
    const { host, port, user, pass } = req.body.config;
  
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
      

console.log(user_id,host, port, user, pass)
    try {
      await db.execute(
        'INSERT INTO smtp_config (user_id,host, port, user, pass) VALUES (?,?, ?, ?, ?)',
        [user_id,host, port, user, pass]
      );
      res.status(200).json({ message: 'SMTP Config saved' });
    } catch (error) {
      console.error('Error saving SMTP Config:', error);
      res.status(500).json({ message: 'Error saving SMTP Config', error });
    }
  };
  exports.getSMTPConfig = async (req, res) => {
    const [rows] = await db.execute('SELECT * FROM smtp_config ORDER BY id DESC LIMIT 1');
    res.json(rows[0]);
  };
  