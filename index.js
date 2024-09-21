require('dotenv').config();
const express = require('express');
const colors = require('colors');

const app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/twitter', (req, res) => {
  res.send('twitter');
});

app.get('/login', (req, res) => {
  res.send('<h1>Please</h1>');
});

// Define the port variable
const port = process.env.PORT || 3000; // Default to 3000 if process.env.PORT is not set

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`.blue);
});
