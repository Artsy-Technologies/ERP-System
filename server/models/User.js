const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: String,
  middleName: String,
  lastName: String,
  email: { type: String, unique: true, required: true },
  dob: Date,
  subjectOfExpertise: String,
  address: String,
  pincode: String,
  contactNumber: String,
  managedClasses: String,
  city: String,
  state: String,
  newPassword: String,
  confirmPassword: String,
});

module.exports = mongoose.model('User', UserSchema);