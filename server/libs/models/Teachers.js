// models/teacherModel.js
import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
  nationality: { type: String, required: true },
  classAllotted: { type: String, required: true },
  subject: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  photo: { type: String },  // URL or base64 encoded image
  ugCourse: { type: String, required: true },
  ugMajor: { type: String, required: true },
  ugScore: { type: String, required: true },
  ugYear: { type: Number, required: true },
  ugUniversity: { type: String, required: true },
  pgCourse: { type: String, required: true },
  pgMajor: { type: String, required: true },
  pgScore: { type: String, required: true },
  pgYear: { type: Number, required: true },
  pgUniversity: { type: String, required: true }
});

const Teacher = mongoose.model("Teacher", teacherSchema);

export default Teacher;
