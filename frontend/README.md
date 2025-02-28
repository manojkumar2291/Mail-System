# Mail System JS

Mail System JS is a full-stack application designed to facilitate user registration, authentication, SMTP configuration, and email sending capabilities. The backend is built with Node.js, Express, and MySQL, while the frontend utilizes React.js.

## Features

- **User Authentication**: Secure user registration and login functionality using JWT tokens.
- **SMTP Configuration**: Users can set up and manage their SMTP settings.
- **Email Sending**: Compose and send emails through the configured SMTP server.
- **Responsive UI**: Frontend designed with Tailwind CSS for a modern and responsive user experience.

## Prerequisites

- Node.js (v14 or higher)
- MySQL
- npm or yarn

## Installation

### Backend Setup

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/mailsystemjs.git
   cd mailsystemjs/backend
   ```


2. **Install Dependencies**:

   ```bash
   npm install
   ```


3. **Configure Environment Variables**:

   Create a `.env` file in the `backend` directory with the following content:

   ```
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASS=your_database_password
   DB_NAME=your_database_name
   JWT_SECRET=your_jwt_secret
   ```


4. **Initialize the Database**:

   Ensure your MySQL server is running and execute the following SQL script to create the necessary tables:

   ```sql
   CREATE TABLE users (
     id INT AUTO_INCREMENT PRIMARY KEY,
     email VARCHAR(255) NOT NULL UNIQUE,
     password VARCHAR(255) NOT NULL
   );

   CREATE TABLE smtp_config (
     id INT AUTO_INCREMENT PRIMARY KEY,
     host VARCHAR(255) NOT NULL,
     port INT NOT NULL,
     user VARCHAR(255) NOT NULL,
     pass VARCHAR(255) NOT NULL
   );

   CREATE TABLE sent_emails (
     id INT AUTO_INCREMENT PRIMARY KEY,
     to_email VARCHAR(255) NOT NULL,
     subject VARCHAR(255) NOT NULL,
     message TEXT NOT NULL,
     sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```


5. **Start the Backend Server**:

   ```bash
   npm start
   ```


   The backend server will run on `http://localhost:5000/`.

### Frontend Setup

1. **Navigate to the Frontend Directory**:

   ```bash
   cd ../frontend
   ```


2. **Install Dependencies**:

   ```bash
   npm install
   ```


3. **Configure Environment Variables**:

   Create a `.env` file in the `frontend` directory with the following content:

   ```
   REACT_APP_API_URL=http://localhost:5000/api
   ```


4. **Start the Frontend Application**:

   ```bash
   npm start
   ```


   The frontend application will run on `http://localhost:3000/`.

## Usage

1. **Register a New User**:

   Navigate to `http://localhost:3000/register` and create a new account.

2. **Login**:

   After registration, log in at `http://localhost:3000/login` to obtain an authentication token.

3. **Configure SMTP Settings**:

   Once logged in, navigate to the SMTP configuration page to set up your email server settings.

4. **Send Emails**:

   With SMTP configured, you can compose and send emails through the application.

## Project Structure


```
mailsystemjs/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── smtpController.js
│   │   └── emailController.js
│   ├── routes/
│   │   └── index.js
│   ├── .env
│   ├── package.json
│   └── server.js
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Login.js
    │   │   ├── Register.js
    │   │   ├── SMTPConfig.js
    │   │   └── SendEmail.js
    │   ├── App.js
    │   └── index.js
    ├── .env
    └── package.json
```


## Dependencies

### Backend

- express
- mysql2
- dotenv
- nodemailer
- jsonwebtoken
- bcryptjs
- cors

### Frontend

- react
- react-router-dom
- axios
- tailwindcss

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.

## Acknowledgements

Special thanks to the open-source community for the tools and resources that made this project possible.

---

For a visual walkthrough of building a full-stack application with React, Node.js, and MySQL, you might find the following tutorial helpful:

videoBuild this Full-Stack React, Node.js, AWS RDS, SQL Projectturn0search3 