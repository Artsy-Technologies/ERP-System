import express from 'express';
import uploadAssignment from '../../controllers/assignmentController/uploadAssignment.js';
import submitAssignment from '../../controllers/assignmentController/submitAssignment.js';
import upload from '../../middlewares/multerCloudinaryUpload.js';

const router = express.Router();
router.post("/upload", upload.single("uploaded_File"), uploadAssignment);
router.post("/submit", upload.single("uploaded_File"), submitAssignment);

export default router;