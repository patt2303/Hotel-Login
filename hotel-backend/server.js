const express = require('express');
const nodemailer = require('nodemailer');
const twilio = require('twilio');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();  // To use environment variables

const app = express();
const port = process.env.PORT || 3001;  // Ensure the server runs on port 3001

// Enable CORS with frontend origin, replace with your actual frontend URL
const corsOptions = {
  origin: 'https://hotel-login-11ui3p10z-patt2303s-projects.vercel.app',  // Replace with your frontend domain
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
  credentials: true,  // Allow cookies if needed, modify this according to your needs
};

// Apply CORS to all routes
app.use(cors(corsOptions));

// Handle preflight OPTIONS requests (Important for CORS)
app.options('*', cors(corsOptions));  // Allow preflight requests for all routes

// Parse incoming JSON requests
app.use(bodyParser.json()); 

// Ensure all required environment variables are present
const requiredEnvVars = ['EMAIL_USER', 'EMAIL_PASS', 'HOTEL_EMAIL', 'TWILIO_SID', 'TWILIO_AUTH_TOKEN', 'TWILIO_PHONE', 'HOTEL_PHONE'];
requiredEnvVars.forEach((envVar) => {
  if (!process.env[envVar]) {
    console.error(`Environment variable ${envVar} is missing!`);
    process.exit(1);  // Exit the application if any required variable is missing
  }
});

// Set up Nodemailer for email sending using environment variables
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,  // Email address (make sure to have it in .env)
    pass: process.env.EMAIL_PASS,  // Email password (make sure to have it in .env)
  },
});

// Set up Twilio for SMS sending using environment variables
const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);  // Twilio credentials from .env

// POST endpoint to handle table reservations
app.post('/api/book-table', async (req, res) => {
  console.log("Received reservation data:", req.body);  // Log incoming reservation data

  const { name, email, date, time, guests } = req.body;

  // Check if all required data is available
  if (!name || !email || !date || !time || !guests) {
    console.error('Missing reservation data');
    return res.status(400).send('All fields are required.');
  }

  // Create the email content to send to the hotel
  const mailOptions = {
    from: process.env.EMAIL_USER,  // Use environment variable for the "from" address
    to: process.env.HOTEL_EMAIL,   // Hotel's email (from .env file)
    subject: 'New Table Reservation',
    text: `You have a new table reservation:\n
    - Name: ${name}\n
    - Email: ${email}\n
    - Date: ${date}\n
    - Time: ${time}\n
    - Guests: ${guests}`,
  };

  try {
    // 1. Send an email to the hotel
    const emailInfo = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + emailInfo.response);

    // 2. Send an SMS to the hotel
    const smsMessage = await client.messages.create({
      body: `New Table Reservation: Name: ${name}, Date: ${date}, Time: ${time}, Guests: ${guests}`,
      from: process.env.TWILIO_PHONE,  // Twilio phone number (from .env file)
      to: process.env.HOTEL_PHONE,    // Hotel phone number (from .env file)
    });
    console.log('SMS sent: ' + smsMessage.sid);

    // Send a successful response to the client
    res.status(200).send('Reservation successful');
  } catch (error) {
    // Log more specific errors
    if (error.response) {
      // If error is related to Twilio or Nodemailer
      console.error('Error response:', error.response);
    } else {
      console.error('Error occurred:', error);
    }

    res.status(500).send('Error occurred while processing reservation: ' + error.message);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
