import Timetable from '../../libs/models/Timetable.js';

export const getTimetables = async (req, res) => {
    try {
        console.log('Fetching timetables...');
        
        // Test Timetable existence before query
        if (!Timetable) {
            console.error('Timetable model is undefined!');
            return res.status(500).json({ error: 'Internal Server Error: Model undefined' });
        }

        const timetables = await Timetable.find(); // Query the database
        console.log('Timetables retrieved:', timetables);

        res.status(200).json({ timetables });
    } catch (error) {
        console.error('Error retrieving timetables:', error);

        // Send an error response without exposing sensitive details
        res.status(500).json({ error: 'Error retrieving timetables' });
    }
};
