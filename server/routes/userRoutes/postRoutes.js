// Create a new timetable

import express from 'express';
import { createTimetable } from '../../controllers/userController/postController.js';
const postUserRouter = express.Router();


postUserRouter.post('/timetables', createTimetable);



export default postUserRouter;