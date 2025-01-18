import express from 'express';
import uploadAssignment from '../../controllers/assignmentController/uploadAssignment.js';
import submitAssignment from '../../controllers/assignmentController/submitAssignment.js';
import upload from '../../middlewares/multerCloudinaryUpload.js';
import submitAssignment from '../../controllers/assignmentController/submitAssignment.js';
import Assignment from '../../libs/models/assignment/assignmentSchema.js';

const router = express.Router();
router.post("/upload", upload.single("uploaded_File"), uploadAssignment);
router.post("/submit", upload.single("uploaded_File"), submitAssignment);

router.get("/getassignment", async (req, res) => {
    try {

        const allAssignment = await Assignment.find(); // Save the feedback document
        console.log(allAssignment);
        res.status(201).json(allAssignment); // Return the saved document
    } catch (error) {
        res.status(500).send("Error all assignments: " + error.message);
    }
})
router.get("/getassignment", async (req, res) => {
    try {

        const allSubmission = await submitAssignment.find(); // Save the feedback document
        console.log(allSubmission);
        res.status(201).json(allSubmission); // Return the saved document
    } catch (error) {
        res.status(500).send("Error all submissoins: " + error.message);
    }
})

export default router;