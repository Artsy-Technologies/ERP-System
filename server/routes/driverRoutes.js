// routes/driverRoutes.js
const express = require('express');
const router = express.Router();
const driverController = require('../controllers/driverController');

// Get all drivers
router.get('/', driverController.getAllDrivers);

// Add a new driver
router.post('/', driverController.addDriver);

module.exports = router;
