// controllers/driverController.js
const Driver = require('../models/Driver');

// Get all drivers
const getAllDrivers = async (req, res) => {
  try {
    const drivers = await Driver.find();
    res.json(drivers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new driver
const addDriver = async (req, res) => {
  const { name, licenseNumber, phoneNumber } = req.body;

  const driver = new Driver({
    name,
    licenseNumber,
    phoneNumber,
  });

  try {
    const newDriver = await driver.save();
    res.status(201).json(newDriver);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getAllDrivers,
  addDriver,
};
