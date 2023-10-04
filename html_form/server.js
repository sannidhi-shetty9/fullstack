const express = require('express');
const bodyParser = require('body-parser'); // Import the 'body-parser' middleware

const app = express();
const port = 3001; // You can change the port number if needed

// corsMiddleware.js
function corsMiddleware(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Replace with the allowed origin(s)
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  next();
}

// Use the custom CORS middleware
app.use(corsMiddleware);

// Middleware to parse the form data
// app.use(express.urlencoded({ extended: false }));

// middleware to parse JSON data
app.use(bodyParser.json());

// Route for handling the form submission
app.post('/submit-form', (req, res) => {
  // Access form data submitted by the user
  console.log('body: ', req.body)
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  // Do whatever you want with the form data
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  // Send a response back to the user
  // res.send('Form submitted successfully');
  res.send({message:'Form submitted successfully'});

});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
