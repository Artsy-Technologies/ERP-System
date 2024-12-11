// controllers/driverController.js
import Driver from '../../libs/models/Transport/Driver.js';

// Get all drivers
export const getAllDrivers = async (req, res) => {
  try {
    const drivers = await Driver.find();
    res.json(drivers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new driver
export const addDriver = async (req, res) => {
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
