const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Routes
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/inquiries', require('./routes/inquiryRoutes'));

// DB Connection
mongoose.connect('mongodb://localhost:27017/gheeDB')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Start server
app.listen(8080, () => {
  console.log('Server running on http://localhost:8080');
});
