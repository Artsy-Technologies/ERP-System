// Delete all timetables
export const deleteTimetables = async (req, res) => {
    try {
        await Timetable.deleteMany();
        res.status(200).json({ message: 'All timetables deleted successfully!' });
    } catch (error) {
        console.error('Error deleting timetables:', error);
        res.status(500).json({ error: 'Error deleting timetables' });
    }
};