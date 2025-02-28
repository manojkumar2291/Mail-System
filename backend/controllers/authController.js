const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');
exports.register = async (req, res) => {
    console.log('hiiiii')
    try {
      const { email, password } = req.body;
      if (!email || !password) return res.status(400).json({ message: "All fields are required" });
  
      const hashedPassword = await bcrypt.hash(password, 10);
      await db.execute('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword]);
  
      res.status(201).json({ message: "User registered" });
    } catch (error) {
      console.error("Registration Error:", error); // Log error
      res.status(500).json({ message: "Error registering user", error });
    }
  };
exports.login = async (req, res) => {
  const { email, password } = req.body;
  const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
  console.log(rows,email)
  if (rows.length === 0) return res.status(401).json({ message: 'Invalid credentials' });
  const isMatch = await bcrypt.compare(password, rows[0].password);
  if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });
  
  const token = jwt.sign({ id: rows[0].id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
};