const mongoose = require('mongoose');
const timetableSchema = new mongoose.Schema({
    rows: {
        type: Number,
        required: true
    },
    columns: {
        type: Number,
        required: true
    },
    timetable: {
        type: Map,
        of: Map,
        default: {}
    }
});
module.exports = mongoose.model('Timetable', timetableSchema);