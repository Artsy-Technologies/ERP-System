import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema({
  title: {
    type: String,
  },

  subject: {
    type: String,
  },

  file_type: {
    // * secure_url
    type: String,
  },

  file_url: {
    // * secure_url
    type: String,
  },

  cloudinary_file_id: {
    //* public_id
    type: String,
  },

  assignment_date: {
    type: Date,
    default: Date.now(),
  },

  submission_date: {
    type: Date,
  },
  /* 
  * assignment for which class
  class: {
     type: mongoose.Schema.Types.ObjectId,
     ref: "Class", // This refers to the Class schema
    },
    
  * assignment posted by whom
  teacher: {
     type: mongoose.Schema.Types.ObjectId,
     ref: "Teacher", // This refers to the Teacher schema
  }, */
});

const Assignment = mongoose.model("Assignment", assignmentSchema);

export default Assignment;

/*
* In the code, secure_url and public_id are properties returned by Cloudinary after a successful file upload. Here's what they represent:

?secure_url: (file_url)
It's the direct link to the file stored on Cloudinary, which can be used to embed the image, video, or PDF in a website or application.

?public_id: (cloudinary_file_id)
It can be used to reference the file later, such as for updating or deleting it from Cloudinary. The public_id helps Cloudinary manage the file.
*/
