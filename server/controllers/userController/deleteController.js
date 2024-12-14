import Timetable from '../../libs/models/Timetable.js';

// Delete all timetables
export const deleteTimetables = async (req, res) => {
    try {
        // Test Timetable existence before query
        if (!Timetable) {
            console.error('Timetable model is undefined!');
            return res.status(500).json({ error: 'Internal Server Error: Model undefined' });
        }

        // Delete all timetables from the database
        const result = await Timetable.deleteMany();

        // If no documents were deleted, handle it
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'No timetables found to delete.' });
        }

        console.log('All timetables deleted successfully!');
        res.status(200).json({ message: 'All timetables deleted successfully!' });
    } catch (error) {
        console.error('Error deleting timetables:', error);
        res.status(500).json({ error: 'Error deleting timetables' });
    }
};
