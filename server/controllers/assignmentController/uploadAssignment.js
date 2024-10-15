import cloudinaryUpload from "../../libs/cloudinary/cloudinaryUpload.js";
import Assignment from "../../libs/models/assignment/assignmentSchema.js";
import dotenv from 'dotenv';

dotenv.config();

const uploadAssignment = async (req, res) => {
    let fileUpload;

  const cloudinaryAssignmentFolder = process.env.CLOUDINARY_ASSIGNMENT_FOLDER;
  const details = await JSON.parse(req.body.details);

  try {
    fileUpload = await cloudinaryUpload(req, cloudinaryAssignmentFolder);

    let assignment = new Assignment({
      title: details.title,
      subject: details.subject,
      file_type: `${fileUpload.resource_type}/${fileUpload.format}`,
      file_url: fileUpload.secure_url,
      cloudinary_file_id: fileUpload.public_id,
      submission_date: details.submissionDate,
    });

    await assignment.save();
    // console.log("> db save assignment: ", assignment);
    res.status(201).json(assignment);
    // console.log("> fileupload: ", fileUpload);
    // console.log("> request body: ", JSON.parse(details));
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Upload failed" });

    //
  }
};

export default uploadAssignment;