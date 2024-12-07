
import express from 'express';
import { getTimetables } from '../../controllers/userController/getController.js';
const timetables = express.Router();


// Get all timetables
timetables.get('/timetables', getTimetables);
timetables.get('/get',(req,res) =>{
    res.json({message:"okay shi h"})
})


export default timetables;
//server\libs\models\Timetable.js