// routes/vehicleRoutes.js
const express = require('express');
const router = express.Router();
const vehicleController = require('../../controllers/transportController/vehicleController');

// Get all vehicles
router.get('/', vehicleController.getAllVehicles);

// Add a new vehicle
router.post('/', vehicleController.addVehicle);

// Assign a driver to a vehicle
router.put('/:vehicleId/assign-driver/:driverId', vehicleController.assignDriver);

module.exports = router;
