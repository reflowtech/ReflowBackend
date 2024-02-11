const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config()

const app = express();

// Define a route
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World' });
});


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT || 8000,() => {
        console.log(`SERVER Running On Address : http://localhost:${process.env.PORT || 8000}`);
      });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
