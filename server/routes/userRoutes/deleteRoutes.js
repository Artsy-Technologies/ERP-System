
import express from 'express';
import { deleteTimetables } from '../../controllers/userController/deleteController.js';
const deleteUserRouter = express.Router();


deleteUserRouter.delete('/timetables', deleteTimetables);


export default deleteUserRouter;