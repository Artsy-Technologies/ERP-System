// routes/timetableRoutes.js
const express = require('express');
const router = express.Router();
const timetableController = require('./controllers/timetableController');

// Create a new timetable
router.post('/timetables', timetableController.createTimetable);

// Get all timetables
router.get('/timetables', timetableController.getTimetables);

// Delete all timetables
router.delete('/timetables', timetableController.deleteTimetables);

module.exports = router;
