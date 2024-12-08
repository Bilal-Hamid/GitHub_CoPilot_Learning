// Create web server
// Create a web server with Node.js and Express.js
// The web server will respond to HTTP requests with a JSON object containing comments.

// Import the express module
const express = require('express');

// Create an Express.js web server
const app = express();

// Define the port number
const port = 3000;

// Define the comments array
const comments = [
  { username: 'alice', comment: 'I love your website!' },
  { username: 'bob', comment: 'Good job.' },
  { username: 'charlie', comment: 'Can I get a copy of your book?' }
];

// Define the route for comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Run the server with the command:
// node comments.js
// View the comments by visiting http://localhost:3000/comments in your web browser.