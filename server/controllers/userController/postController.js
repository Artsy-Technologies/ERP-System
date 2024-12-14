export const createTimetable = async (req, res) => {
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
