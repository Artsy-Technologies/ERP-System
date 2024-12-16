import mongoose from "mongoose";


const TeacherSchema = new mongoose.Schema({

first_name: {
  type: String,
   required: true,
},
middle_name: {
  type: String,
   required: false,
},
last_name: {
  type: String,
   required: true,
},

email: {
  type: String,
   required: true,
},

dob: {
  type: Date,
   required: true,
},
subject_expertise: {
  type: String,
   required: true,
},

address: {
  type: String,
   required: true,
},
pincode: {
  type: Number,
   required: true,
},
contact_no: {
  type: Number,
   required: true,
},
managed_classes: {
  type: Number,
   required: true,
},
city: {
  type: String,
   required: true,
},
state: {
  type: String,
   required: true,
},
newpassword: {
  type: String,
   required: true,
},
confirmpassword: {
  type: String,
   required: true,
},

});

const TeacherModel = mongoose.model('teachers', TeacherSchema);
export default TeacherModel