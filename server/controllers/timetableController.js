// controllers/timetableController.js
const Timetable = require('../models/Timetable');

// Create a new timetable
exports.createTimetable = async (req, res) => {
    console.log('POST /api/timetables hit');
    console.log('Request body:', req.body); 
    try {
        const { rows, columns, timetable } = req.body;
        const newTimetable = new Timetable({ rows, columns, timetable });
        await newTimetable.save();
        res.status(201).json({ message: 'Timetable saved successfully!' });
    } catch (error) {
        console.error('Error saving timetable:', error); 
        res.status(500).json({ error: 'Error saving timetable' });
    }
};

// Get all timetables
exports.getTimetables = async (req, res) => {
    try {
        const timetables = await Timetable.find();
        res.status(200).json({ timetables });
    } catch (error) {
        console.error('Error retrieving timetables:', error);
        res.status(500).json({ error: 'Error retrieving timetables' });
    }
};

// Delete all timetables
exports.deleteTimetables = async (req, res) => {
    try {
        await Timetable.deleteMany();
        res.status(200).json({ message: 'All timetables deleted successfully!' });
    } catch (error) {
        console.error('Error deleting timetables:', error);
        res.status(500).json({ error: 'Error deleting timetables' });
    }
};
