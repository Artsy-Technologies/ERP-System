const mongoose = require("mongoose");


const studentSchema = new mongoose.Schema({

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
class_grade: {
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
parent_contact_no: {
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
   required: false,
},
confirmpassword: {
  type: String,
   required: false,
},

});

module.exports = StudentModel = mongoose.model('studentprofile', studentSchema);