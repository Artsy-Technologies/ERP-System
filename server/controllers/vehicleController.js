// controllers/vehicleController.js
const Vehicle = require('../models/Vehicle');
const Driver = require('../models/Driver');

// Get all vehicles
const getAllVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find().populate('driver'); // Populate driver details
    res.json(vehicles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new vehicle
const addVehicle = async (req, res) => {
  const { model, numberPlate, driverId } = req.body;

  const vehicle = new Vehicle({
    model,
    numberPlate,
    driver: driverId,
    status: 'Available',
    statistics: {
      averageKm: 0,
      distanceTravelled: 0,
      averageFuelConsumption: 0,
      fuelLeft: 0,
    },
  });

  try {
    const newVehicle = await vehicle.save();
    res.status(201).json(newVehicle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Assign a driver to a vehicle
const assignDriver = async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.vehicleId);
    const driver = await Driver.findById(req.params.driverId);

    if (!vehicle || !driver) {
      return res.status(404).json({ message: 'Vehicle or Driver not found' });
    }

    vehicle.driver = driver._id;
    driver.assignedVehicle = vehicle._id;

    await vehicle.save();
    await driver.save();

    res.json({ vehicle, driver });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllVehicles,
  addVehicle,
  assignDriver,
};
