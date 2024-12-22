import express from 'express';
import { createTeacher, getTeachers, getTeacherById, upload, teacherUpdateDetail } from '../../controllers/teacherController/teacherController.js'; // Adjust the path as needed

const router = express.Router();

router.get('/', getTeachers); 

router.get('/:id', getTeacherById); 
router.put('/:id', teacherUpdateDetail);

router.post('/', upload.single('photo'), createTeacher); 

export default router;
