export const getTimetables = async (req, res) => {
    try {
        const timetables = await Timetable.find();
        res.status(200).json({ timetables });
    } catch (error) {
        console.error('Error retrieving timetables:', error);
        res.status(500).json({ error: 'Error retrieving timetables' });
    }
};  