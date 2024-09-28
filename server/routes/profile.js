const express = require('express');
const User = require('../models/User');
const router = express.Router();

// POST route to save profile data
router.post('/faculty', async (req, res) => {
  const {
    firstName,
    middleName,
    lastName,
    email,
    dob,
    subjectOfExpertise,
    address,
    pincode,
    contactNumber,
    managedClasses,
    city,
    state,
    newPassword,
    confirmPassword,
  } = req.body;

  try {
    const user = new User({
      firstName,
      middleName,
      lastName,
      email,
      dob,
      subjectOfExpertise,
      address,
      pincode,
      contactNumber,
      managedClasses,
      city,
      state,
      newPassword,
      confirmPassword,
    });

    await user.save();
    res.status(201).json({ message: 'Profile saved successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save profile' });
  }
});

module.exports = router;
