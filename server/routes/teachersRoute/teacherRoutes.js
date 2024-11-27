import express from 'express';
import { createTeacher, getTeachers, getTeacherById, upload } from '../../controllers/teacherController/teacherController.js'; // Adjust the path as needed

const router = express.Router();

router.get('/', getTeachers); 

router.get('/:id', getTeacherById); 

router.post('/', upload.single('photo'), createTeacher); 

export default router;
