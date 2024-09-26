// models/Driver.js
const mongoose = require('mongoose');

const DriverSchema = new mongoose.Schema({
  name: String,
  role: String,
  address: String,
  experience: String,
  contact: String,
  email: String,
  phone: String
});

const Driver = mongoose.model('Driver', DriverSchema);

module.exports = Driver;
