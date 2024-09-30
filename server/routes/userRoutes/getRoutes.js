
import express from 'express';
import { getTimetables } from '../../controllers/userController/getController.js';
const getUserRouter = express.Router();


// Get all timetables
getUserRouter.get('/timetables', getTimetables);
getUserRouter.get('/get',(req,res) =>{
    res.json({message:"okay shi h"})
})


export default getUserRouter;