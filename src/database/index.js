const mongoose = require('mongoose');
const connectDB = require('../config/dbConfig');

connectDB();

mongoose.connection.on('connected', () => {
  console.log('Database connected.');
});

mongoose.connection.on('error', (err) => {
  console.error(`Database connection error: ${err.message}`);
});

module.exports = mongoose;
