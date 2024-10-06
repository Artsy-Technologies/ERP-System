import mongoose from 'mongoose';

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

const Timetable = mongoose.model('Timetable', timetableSchema);

export default Timetable;
