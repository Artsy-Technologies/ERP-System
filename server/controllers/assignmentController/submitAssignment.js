import cloudinaryUpload from "../../libs/cloudinary/cloudinaryUpload.js";
import Submission from "../../libs/models/assignment/submissionSchema.js";
import dotenv from 'dotenv';

dotenv.config();

const submitAssignment = async (req, res) => {
  let fileUpload;

  const cloudinarySubmissionFolder = process.env.CLOUDINARY_SUBMISSION_FOLDER;
  const details = await JSON.parse(req.body.details);

  try {
    fileUpload = await cloudinaryUpload(req, cloudinarySubmissionFolder);

    let submission = new Submission({
      assignment: details.assignment,
      file_type: `${fileUpload.resource_type}/${fileUpload.format}`,
      file_url: fileUpload.secure_url,
      cloudinary_file_id: fileUpload.public_id,
    });

    await assignment.save();
    res.status(201).json(assignment);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Upload failed" });

    //
  }
};

export default submitAssignment;